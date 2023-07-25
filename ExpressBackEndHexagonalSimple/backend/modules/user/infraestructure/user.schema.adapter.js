const UserSchema = require('./user.schema');

const RoleSchemaAdapter = {
  creteUser: function (
    first_name,
    last_name,
    dni,
    birth_date,
    phone,
    role_id,
    email,
    password,
    user_name,
    client
  ) {
    UserSchema.create(
      first_name,
      last_name,
      dni,
      birth_date,
      phone,
      role_id,
      email,
      password,
      user_name,
      client
    );
  },
};

module.exports = RoleSchemaAdapter;
