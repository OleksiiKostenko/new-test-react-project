import axios from "axios";
import toast from "react-hot-toast";

const BASE_URL = "https://645639fe5f9a4f23613e11e5.mockapi.io/users";

export async function getUsers(page) {
  try {
    const res = await axios({
      method: "get",
      url: BASE_URL,
      params: {
        page: page,
        limit: 3,
      },
    });
    return res.data;
  } catch (error) {
    toast.error("Server not response");
  }
}