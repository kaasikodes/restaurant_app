import axios from 'axios';

export const getProducts = async (): Promise<
  { id: string; title: string }[]
> => {
  let url = `https://jsonplaceholder.typicode.com/posts`;

  const res = await axios.get(url);
  return res.data;
};
