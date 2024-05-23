import instance from '../instance';

export const getBanner = async () => {
  try {
    const response = await instance.get('/api/v1/books/banner');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
