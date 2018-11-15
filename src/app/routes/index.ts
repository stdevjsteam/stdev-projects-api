import { Routing } from './routing';
import { PublicProjectsRouter } from './public-projects-router';
import { ExampleProjectsRouter } from './example-projects-router';
import { UsersRouter } from './users.router';

export class Routes extends Routing {
  private publicProjectsRouter: PublicProjectsRouter;
  private exampleProjectsRouter: ExampleProjectsRouter;
  private usersRouter: UsersRouter;

  constructor() {
    super();
  }

  init(): void {
    this.publicProjectsRouter = new PublicProjectsRouter();
    this.exampleProjectsRouter = new ExampleProjectsRouter();
    this.usersRouter = new UsersRouter();
  }

  route(): void {
    this.router.use('/public-projects/', this.publicProjectsRouter.router);
    this.router.use('/example-projects/', this.exampleProjectsRouter.router);
    this.router.use('/users/', this.usersRouter.router);
  }
}