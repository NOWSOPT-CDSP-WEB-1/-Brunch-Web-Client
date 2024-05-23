import { AxiosError } from 'axios';

import instance from '../instance';

export const postLikeBook = async (bookId: number) => {
  try {
    const response = await instance.post(`api/v1/books/${bookId}/likes`);
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      const response = error.response;
      return response;
    }
  }
};
