// pages/api/your-api.ts
import Cors from 'cors';
import type { NextApiRequest, NextApiResponse } from 'next';
import initMiddleware from '@/lib/init-middleware';

// Initialize the cors middleware
const cors = initMiddleware(
    Cors({
        // Only allow requests from this origin
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST', 'OPTIONS'],
    })
);

// Define the handler with NextApiRequest and NextApiResponse types
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        // Run the middleware
        await cors(req, res);

        // Rest of your API logic
        res.status(200).json({ message: 'Hello from API with CORS!' });
    } catch (error) {
        res.status(500).json({ message: 'Error handling CORS request', error });
    }
}
