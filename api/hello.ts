import type { VercelRequest, VercelResponse } from '@vercel/node';

export default ({ query }: VercelRequest, res: VercelResponse) => {
  const { name = 'World' } = query;

  return res.json({
    message: `Hello ${name}!`,
  });
};
