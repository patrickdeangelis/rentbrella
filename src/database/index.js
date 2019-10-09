import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import Premise from '../app/models/Premise';

const models = [Premise];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map(model => model.init(this.connection));
  }
}

export default new Database();
