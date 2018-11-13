import * as Sequelize from 'sequelize';
import { IResult } from '../types/result';

export abstract class BaseService<TInstance, TAttributes> {

  constructor(protected model: Sequelize.Model<TInstance, TAttributes>) {}

  protected async addItem(item) {
    return await this.model.create(item);
  }

  protected async getById(id: number) {
    return await this.model.findById(id);
  }

  protected async editItem(item) {
    return await this.model.update(item);
  }

  protected async removeItem(id: number) {
    return await this.model.destroy({
      where: {
        id: id
      }
    });
  }

  protected async getAll() {
    return await this.model.findAll();
  }

  protected getResult(statusCode: number, headers: Object | null, status: boolean, message: string, data: any = null): IResult {
    return {
      statusCode: statusCode,
      headers: headers,
      body: {
        status: status,
        message: message,
        data: data
      }
    }
  }
}