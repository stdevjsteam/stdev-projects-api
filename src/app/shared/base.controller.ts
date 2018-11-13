import { Response } from 'express';
import { IResult } from '../types/result';

export abstract class BaseController<TService> {

  protected constructor(protected service: TService) {}
  
  protected async handle(handler: Promise<IResult>, res: Response): Promise<void> {
    handler.then((result: IResult) => {
      if(result.headers) {
        res.set(result.headers);
      }
      res.status(result.statusCode).send(result.body);
    }).catch(err => {
      console.log(err);
      res.status(502).send({
        status: false,
        message: 'Something went wrong',
        data: null
      });
    })
    // try {
    //   const result: IResult = await handler;
    //   if(result.headers) {
    //     res.set(result.headers);
    //   }
    //   res.status(result.statusCode).send(result.body);
    // }
    // catch(err) {
    //   console.log(err);
    //   res.status(502).send({
    //     status: false,
    //     message: 'Something went wrong',
    //     data: null
    //   })
    // }
  }
}