module.exports = (sequelize, DataTypes) => {
    const Topico = sequelize.define('Topico',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        titulo_topico:{
            type:DataTypes.STRING,
            allowNull:false
        },
        post_time:{
            type:DataTypes.DATE,
            allowNull:false
    },
        tableName:'topico',
        timestamps:false
    })

    Topico.associate = (models) => {
        Topico.belongsTo(models.Forum, {
          foreignKey: "forum_id",
          as: "forum"
        }),
        Topico.belongsTo(models.Usuario, {
            foreignKey: "usuario_id",
            as: "usuario"
        }),
    Topico.hasMany(models.Mensagem, {
        foreignKey:"topico_id",
        as: "mensagens"
    })
} 
    return Topico
}