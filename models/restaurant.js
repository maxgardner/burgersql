module.exports = function(sequelize, DataTypes) {
  let Restaurant = sequelize.define("restaurant",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      }
    },
    {
      classMethods: {
        associate: function(models) {
          Restaurant.hasMany(models.Burger, {
            onDelete: "cascade"
          });
        }
      }
    });
    return Burger;
}
