import axios from "axios";
import { Config } from "../../Config";

// Get books collection
export const getBooksCollection = async () => {
  try {
    const response = await axios.get(`${Config.baseURL}/books`);

    if (response.status !== 200) {
      throw new Error("Failed to fetch data...");
    }
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
