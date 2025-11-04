import {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) throw new Error("Missing JWT_SECRET environment variable");

export const isAuth = (req: Request, res: Response, next: NextFunction) => {
    try{
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Authentication token missing' });

    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };
    (req as any).user = decoded;
    next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid authentication token', error: error });
    }
};