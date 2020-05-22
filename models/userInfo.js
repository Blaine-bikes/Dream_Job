var userinfo = sequelize.define('userinfo', {
    Title: {
      type: Sequelize.STRING
    },
    Field: {
      type: Sequelize.STRING
    },
    Location: {
      type: Sequelize.STRING
    },
  });

  userinfo.sync();

  module.exports = userinfo;