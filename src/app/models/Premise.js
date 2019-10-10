import Sequelize, { Model } from 'sequelize';

class Premise extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        adress: Sequelize.STRING
      },
      {
        sequelize
      }
    );
    return this;
  }
}

export default Premise;
