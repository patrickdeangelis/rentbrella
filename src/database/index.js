import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import Premise from '../app/models/Premise';
import Station from '../app/models/Station';

const models = [Premise, Station];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
