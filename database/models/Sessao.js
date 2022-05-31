const Usuario = require("./Usuario")

module.exports = (sequelize, DataTypes) => {
    const Sessao = sequelize.define('Sessao',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        data:{
            type:DataTypes.DATE,
            allowNull:false
        }, 
        horario:{
            type:DataTypes.DATE,
            allowNull:false
        }
    },{
        tableName:'sessao',
        timestamps:false
    })

    Sessao.associate = (models) => {
        Sessao.belongsTo(models.Filme, {
          foreignKey: "filme_id",
          as: "filme"
        }) 

    Sessao.hasMany(models.Usuario, {
        foreignKey:"usuario_id",
        as: "usuarios"
    })
} 
    return Sessao
}