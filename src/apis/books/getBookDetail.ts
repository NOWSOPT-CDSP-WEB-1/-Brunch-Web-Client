import instance from '../instance';

export const getBookDetail = async (bookId: number) => {
  try {
    const response = await instance.get(`/api/v1/books/${bookId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
