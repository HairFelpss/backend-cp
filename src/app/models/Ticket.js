module.exports = (sequelize, DataTypes) => {
  const cp_ticket = sequelize.define('cp_ticket', {
    title: DataTypes.STRING,
    status: DataTypes.INTEGER,
    category: DataTypes.INTEGER,
  });

  cp_ticket.associate = (models) => {
    cp_ticket.belongsTo(models.User, {
      foreignKey: 'helper_id',
      as: 'helper',
    });

    cp_ticket.belongsTo(models.User, {
      foreignKey: 'helped_id',
      as: 'helped',
    });
  };

  return cp_ticket;
};
