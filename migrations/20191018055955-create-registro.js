module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('registros', {
    id: {
      allowNull: false,
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    matricula: {
      allowNull: false,
      type: Sequelize.STRING,
      primaryKey: true,
    },
    fechahora: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    aula: {
      allowNull: true,
      type: Sequelize.STRING,
    },
  }),
  down: queryInterface => queryInterface.dropTable('registros'),
};
