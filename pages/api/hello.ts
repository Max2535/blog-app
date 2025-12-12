import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message: string;
  method?: string;
  body?: any;
  query?: any;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { method } = req;

  if (method === 'GET') {
    res.status(200).json({ message: 'Hello from GET /api/hello', method, query: req.query });
    return;
  }

  if (method === 'POST') {
    res.status(200).json({ message: 'Hello from POST /api/hello', method, body: req.body });
    return;
  }

  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).json({ message: `Method ${method} Not Allowed` });
}
