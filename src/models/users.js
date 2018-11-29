export default (sequelize, DataType) => sequelize
  .define('Users', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataType.STRING,
      allowNull: false
    }
  });
