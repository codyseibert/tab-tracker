module.exports = (sequelize, DataTypes) => {
  const History = sequelize.define('History', {
    viewCount: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    }
  })

  History.associate = function (models) {
    History.belongsTo(models.User)
    History.belongsTo(models.Song)
  }

  return History
}
