import { rest } from 'msw';

interface IFoodItem {
  name: string;
  photo: string;
  id: number;
}

const foodItems: IFoodItem[] = [{ id: 1, name: 'Ogbonno', photo: 'Ogbonno' }];

export const handlers = [
  // Handles a POST /login request

  // Handles a GET /food-items request
  rest.get('/food-items', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: {
          data: foodItems,
          totalCount: 10,
        },
        message: 'Items have been retrieved successfully!',
      })
    );
  }),
];
