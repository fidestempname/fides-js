'use strict';
module.exports = (sequelize, DataTypes) => {
  
  const Model = sequelize.define('Model', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      autoIncrement: false,
    },
    name: DataTypes.STRING,
    mode: {
      type: DataTypes.ENUM('classification', 'regression'),
    },
    version: DataTypes.STRING,
  }, {});
  
  Model.associate = function(models) {
    Model.belongsTo(models.Organization)
  };

  return Model;
};