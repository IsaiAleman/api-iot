module.exports = (sequelize, DataTypes) => {
  const Registro = sequelize.define('Registro', {
    id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    matricula: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    fechahora: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    aula: {
      allowNull: true,
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'registros',
    timestamps: false,
  });
  
  return Registro;
};
