import Sequelize, { Model } from 'sequelize';

class Station extends Model {
  static init(sequelize) {
    super.init(
      {
        serial: Sequelize.STRING,
        name: Sequelize.STRING
      },
      { sequelize }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Premise, { foreignKey: 'premise_id', as: 'premise' });
  }
}

export default Station;
