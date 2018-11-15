import { Routing } from './routing';
import { UsersController } from '../controllers/users.controller';

export class UsersRouter extends Routing {
  private usersController: UsersController;
  
  constructor() {
    super();
  }

  init() {
    this.usersController = new UsersController();
  }

  route(): void {

    this.router.post('/',      this.usersController.register.bind(this.usersController));  // Create
    this.router.post('/login',      this.usersController.login.bind(this.usersController));  // Login

    // this.router.get('/',       this.usersController.getProjects.bind(this.usersController));    // Read

    // this.router.put('/',       this.usersController.getProjects.bind(this.usersController));    // Update

    // this.router.delete('/:id', this.usersController.removeProject.bind(this.usersController));  // Delete
  }
}