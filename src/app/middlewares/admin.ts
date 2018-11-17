import { Request, Response, NextFunction } from "express";

export function adminMiddleware(req: Request, res: Response, next: NextFunction) {
    req.user.isAdmin ? next() : res.status(403).send('Unauthorized');
}