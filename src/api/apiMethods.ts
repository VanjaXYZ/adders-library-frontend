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

// Create new book
export const createNewBook = async (book: any) => {
  try {
    const response = await axios.post(`${Config.baseURL}/books`, {
      title: book.title,
      description: book.description,
      author: book.author,
    });
    if (response.status === 200) return response;
  } catch (error) {
    console.error(error);
  }
};
