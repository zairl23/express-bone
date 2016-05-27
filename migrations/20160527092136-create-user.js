'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Users', {
      _id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      derived_key: {
        type: Sequelize.STRING
      },
      salt: {
        type: Sequelize.STRING
      },
      signUpToken: {
          type:Sequelize.STRING
      },
      signupTimestamp: {
        type: Sequelize.STRING
      },
      signupTokenExpires: {
        type: Sequelize.STRING
      },
      failedLoginAttempts: {
          type:Sequelize.STRING
      },
      emailVerificationTimestamp: {
          type: Sequelize.STRING
      },
      emailVerified: {
          type: Sequelize.STRING
      },
      pwdResetToken: {
          type: Sequelize.STRING
      },
      pwdResetTokenExpires: {
          type: Sequelize.STRING
      },
      accountLocked: {
          type: Sequelize.STRING
      },
      accountLockedUntil:{
          type: Sequelize.STRING
      },
      previousLoginTime: {
          type: Sequelize.STRING
      },
      previousLoginIp: {
          type: Sequelize.STRING
      },
      currentLoginTime: {
          type: Sequelize.STRING
      },
      currentLoginIp: {
          type: Sequelize.STRING
      }
    //   createdAt: {
    //     allowNull: false,
    //     type: Sequelize.DATE
    //   },
    //   updatedAt: {
    //     allowNull: false,
    //     type: Sequelize.DATE
    //   }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Users');
  }
};
