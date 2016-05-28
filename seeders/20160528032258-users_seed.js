'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('users', [{
        "name":"admin",
       "_id":1,
       "email":"756127792@qq.com",
       "derived_key":"8da274f50e683d7d0e6ee7898e03f97d5173a068",
       "salt":"789ad05a72eb625d4142da9c033f1aab",
       "signupToken":"146b9eb0-9ba3-4559-a5dc-96e248c503bb",
       "signupTimestamp":"2016-04-27T18:17:10.000Z",
       "signupTokenExpires":"2016-04-28T18:17:10.000Z",
       "failedLoginAttempts":0,
       "emailVerificationTimestamp":
       "2016-04-27T18:18:36.000Z",
       "emailVerified":1,
       "pwdResetToken":null,
       "pwdResetTokenExpires":null,
       "accountLocked":0,
       "accountLockedUntil":null,
       "previousLoginTime":"2016-04-27T18:18:44.000Z",
       "previousLoginIp":"::1",
       "currentLoginTime":"2016-04-28T16:03:40.000Z",
       "currentLoginIp":"::1"
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('users', null, {});
  }
};
