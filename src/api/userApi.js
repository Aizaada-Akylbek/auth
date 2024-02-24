import axios from "../axios";
class UserApi {
  createUser(data) {
    return axios.post("/users", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

export default new UserApi();
