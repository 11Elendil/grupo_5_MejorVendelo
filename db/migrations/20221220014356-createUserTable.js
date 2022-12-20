'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', 
      {
        id : { type : Sequelize.INTEGER , autoIncrement: true , primaryKey: true},
        firstname : Sequelize.STRING,
        lastname : Sequelize.STRING,
        email: { type: Sequelize.STRING, unique: true },
        type: { type: Sequelize.ENUM, values: ['comprador', 'vendedor'] },
        password: Sequelize.STRING,
        avatar: Sequelize.STRING ,
      }
    )
  }
};
