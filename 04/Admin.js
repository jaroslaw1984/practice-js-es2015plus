import User from "./User";

export default class Admin extends User {
  constructor({ login = "", password = "" }) {
    super(login, password);
    this.login = login;
    this.password = password;
  }

  isPasswordCorrect() {
    if (this.password.length >= 10) {
      return true;
    }

    return false;
  }
}
