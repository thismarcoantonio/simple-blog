import Sequelize from 'sequelize';
import fs from 'fs';
import { resolve } from 'path';
import config from './config';

const loadModels = (sequelize) => {
  const dir = resolve(__dirname, 'models');
  return fs
    .readdirSync(dir)
    .reduce((accumulator, file) => {
      const model = sequelize.import(resolve(dir, file));

      return {
        ...accumulator,
        [model.name]: model
      };
    }, {});
};

export default () => {
  const options = { ...config.databaseOptions, operatorsAliases: Sequelize.Op };
  const sequelize = new Sequelize(config.database, config.username, config.password, options);
  const database = { sequelize, Sequelize, models: loadModels(sequelize) };

  const { Users, Posts } = database.models;

  Users.hasMany(Posts);

  sequelize.sync().done(() => database);

  return database;
};
