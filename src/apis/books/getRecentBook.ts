import instance from '../instance';

export const getRecentBook = async () => {
  try {
    const response = await instance.get(`/api/v1/books`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
