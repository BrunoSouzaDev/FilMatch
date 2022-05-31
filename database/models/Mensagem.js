module.exports = (sequelize, DataTypes) => {
    const Mensagem = sequelize.define('Mensagem',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        titulo:{
            type:DataTypes.STRING,
            allowNull:false
        },
        mensagem:{
            type:DataTypes.STRING,
            allowNull:false
        },
        data:{
        type:DataTypes.DATE,
        allowNull:false
        },
        tableName:'mensagem',
        timestamps:false
    })

    Mensagem.associate = (models) => {
        Mensagem.belongsTo(models.Usuario, {
          foreignKey: "usuario_id",
          as: "usuario"
        }),
        Mensagem.belongsTo(models.Topico,{
            foreignKey:"topico_id",
            as:"topico"
        })

    Mensagem.hasMany(models.Usuario, {
        foreignKey:"mensagem_id",
        as: "usuarios"
    })
}
    return Mensagem
}