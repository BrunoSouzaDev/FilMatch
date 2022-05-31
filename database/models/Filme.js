module.exports = (sequelize, DataTypes) => {
    const Filme = sequelize.define('Filme',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nome:{
            type:DataTypes.STRING,
            allowNull:false
        }, 
        descricao:{
            type:DataTypes.STRING,
            allowNull:false
        },
        duracao:{
            type:DataTypes.DATE,
            allowNull:false
        },
        avaliacao:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        streaming:{
            type:DataTypes.STRING,
            allowNull:false
        },
        facha_etaria:{
            type:DataTypes.STRING,
            allowNull:false
        }
    },{
        tableName:'filme',
        timestamps:false
    })

    Filme.associate = (models) => {
    
        Filme.hasMany(models.Sessao, {
        foreignKey:"sessao_id",
        as: "sessoes"
    }),
    Filme.hasMany(models.Ator, {
        foreignKey:"ator_id",
        as: "Atores"
    }),
    Filme.hasMany(models.Genero, {
        foreignKey:"genero_id",
        as: "generos"
    })
} 
    return Filme
}