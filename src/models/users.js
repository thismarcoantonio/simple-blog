export default (sequelize, DataType) => sequelize
  .define('Users', {
    id: {
      primaryKey: true,
      type: DataType.UUID,
      defaultValue: DataType.UUIDV1
    },
    username: {
      type: DataType.STRING,
      allowNull: false
    }
  });
