
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(table){
          table.increments('_id').primary();
          table.string('name');
          table.string('email');
          table.string('derived_key');
          table.string('salt');
          table.string('signupToken');
          table.string('signupTimestamp');
          table.string('signupTokenExpires');
          table.integer('failedLoginAttempts');
          table.string('emailVerificationTimestamp');
          table.boolean('emailVerified');
          table.string('pwdResetToken');
          table.string('pwdResetTokenExpires');
          table.boolean('accountLocked');
          table.string('accountLockedUntil');
          table.string('previousLoginTime');
          table.string('previousLoginIp');
          table.string('currentLoginTime');
          table.string('currentLoginIp');
        //   table.string('username', 100);
        //   table.string('card', 20);
        //   table.string('identify', 20);
        //   table.boolean('sex').default(true);
        //   table.integer('role_id', 10).unsigned().references('roles.id');
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
};
