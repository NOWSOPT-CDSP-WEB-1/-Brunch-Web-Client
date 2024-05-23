import { dayType } from '@pages/home/_components/DayArticle';

import instance from '../instance';

export const getDayPosting = async (day: dayType) => {
  try {
    const response = await instance.get(`/api/v1/postings/serialized?day=${day}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
