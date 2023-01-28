import { rest } from 'msw';

interface IFoodItem {
  title: string;
  photo?: string;
  id: number;
}

export const testFoodItems: IFoodItem[] = [
  {
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  },
  {
    id: 2,
    title: 'qui est esse',
  },
];

export const handlers = [
  // Handles a POST /login request

  // Handles a GET /food-items request
  rest.get(`https://jsonplaceholder.typicode.com/posts`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(testFoodItems));
  }),
];
