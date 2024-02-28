"use server";

import axios from "axios";
import { Config } from "../../Config";
import { revalidatePath } from "next/cache";

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

export const addBook = async (formData: FormData) => {
  try {
    const bookTitle = formData.get("title");
    const bookAuthor = formData.get("author");
    const bookDescription = formData.get("description");
    const createBook = await axios.post(`${Config.baseURL}/books`, {
      title: bookTitle,
      author: bookAuthor,
      description: bookDescription,
    });
    revalidatePath("/");
    return createBook;
  } catch (error) {
    console.error(error);
  }
};

// Delete book

export const deleteBook = async (formData: FormData) => {
  try {
    const bookID = formData.get("id");
    const removeBook = await axios.delete(`${Config.baseURL}/books/${bookID}`);
    revalidatePath("/");
    return removeBook;
  } catch (error) {
    console.error(error);
  }
};
