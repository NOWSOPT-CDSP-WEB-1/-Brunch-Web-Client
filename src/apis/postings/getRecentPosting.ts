import instance from '../instance';

export const getRecentPosting = async () => {
  try {
    const response = await instance.get(`/api/v1/postings`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
