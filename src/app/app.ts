import * as express from 'express';
import * as cors from 'cors';
import { json } from 'body-parser';
import { Routes } from './routes/index';
import { database } from './db/database';

export class App {
  private routes: Routes;
  private expressApp: express.Express;
  private corsOptions: cors.CorsOptions;
  private errorCount: number = 0;
  private port = process.env.PORT || 3000;

  constructor() {
    this.expressApp = express();
    this.corsOptions = {
      optionsSuccessStatus: 200
    };
  }

  private async use(): Promise<void> {
    if(this.errorCount > 4) return;

    this.expressApp.use(cors(this.corsOptions));
    this.expressApp.use(json());

    this.routes = new Routes();
    this.expressApp.use('/api', this.routes.router);
    this.expressApp.use('*', (req, res) => {
      res.status(404).send('Not Found');
    });
  }

  public async bootstrap() {
    await this.use();
    this.expressApp.listen(this.port, (): void => {
      console.log(`Server started on ${this.port}`);
      database.db.sequelize.sync();
    });
  }
};