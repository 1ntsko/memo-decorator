import { getUserById, User } from "./api";

const input = document.getElementById("userId") as HTMLInputElement;

function memo(min: number) {
  const cache = new Map();
  return function (
    target: Object,
    key: string | number | symbol,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      const id = args[0];
      if (cache.has(id)) {
        const user = cache.get(id);
        return new Promise((resolve) => {
          resolve(user);
        });
      }
      return originalMethod.apply(this, args).then((user: User) => {
        cache.set(id, { ...user, expired: Date.now });
        setTimeout(() => {
          cache.delete(id.value);
        }, min * 60000);
        return user;
      });
    };
  };
}

export class UsersService {
  @memo(1)
  getUserById(id: number): Promise<User> {
    return getUserById(id);
  }
}
