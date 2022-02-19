import { UsersService } from "./scripts/userService";

const usersService = new UsersService();
const btn = document.getElementById("btn") as HTMLButtonElement;
const input = document.getElementById("userId") as HTMLInputElement;
const loading = document.getElementById("loading") as HTMLDivElement;

btn.addEventListener("click", async () => {
  loading.innerHTML = "loading";
  await usersService
    .getUserById(+(input as HTMLInputElement).value)
    .then((x) => console.log(x));
  loading.innerHTML = "";
});
