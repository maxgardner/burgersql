module.exports = function(sequelize, DataTypes) {
  let Burger = sequelize.define("burger",
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
      },
      devoured: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false
      }
    },
    {
      classMethods: {
        associate: function(models) {
          Burger.belongsTo(models.Restaurant, {
            foreignKey: {
              allowNull: false
            }
          });
        }
      }
    });
    return Burger;
}
