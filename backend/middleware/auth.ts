import { Request, Response, NextFunction as Next } from 'express';

// Verify the header of the request contains the requested API key
// If successful, pass control to one of the controllers
// If not, reject request
const auth = (req: Request, res: Response, next: Next) => {
// Code to go here..
}

export default auth;