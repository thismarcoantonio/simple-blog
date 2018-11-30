export default (sequelize, DataType) => sequelize
  .define('Posts', {
    id: {
      primaryKey: true,
      type: DataType.UUID,
      defaultValue: DataType.UUIDV1
    },
    title: {
      type: DataType.STRING,
      allowNull: false
    }
  });
