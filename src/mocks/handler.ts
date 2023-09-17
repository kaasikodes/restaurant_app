import { API_URL } from 'data/constants';
import { rest } from 'msw';
import { questions } from './data';

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
  rest.get(`${API_URL}/questions`, (req, res, ctx) => {
    const page = req.url.searchParams.get('_page'); //1
    const limit = req.url.searchParams.get('_limit'); //2
    if (page && limit) {
      return res(
        ctx.set('X-Total-Count', `${questions.length}`),
        ctx.status(200),
        ctx.json(questions.slice((+page - 1) * +limit, +page * +limit))
      );
    }
    return res(ctx.status(200), ctx.json(questions));
  }),
];
