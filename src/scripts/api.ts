export interface User {
  id: number;
  firstname: string;
  lastname: string;
  age: number;
  isActive: boolean;
}

export const getUserById = (id: number): Promise<User> =>
  new Promise((resolve) => {
    const users = [
      {
        id: 1,
        firstname: "Giorgi",
        lastname: "Bazerashvili",
        age: 26,
        isActive: true,
      },
      {
        id: 2,
        firstname: "Kote",
        lastname: "Kirkitadze",
        age: 23,
        isActive: false,
      },
      {
        id: 3,
        firstname: "Beso",
        lastname: "Gagelidze",
        age: 27,
        isActive: true,
      },
    ];
    setTimeout(() => {
      resolve(users.find((u) => u.id == id)!);
    }, 3000);
  });
