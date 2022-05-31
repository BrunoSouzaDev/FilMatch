module.exports = (sequelize, DataTypes) => {
    const Ator = sequelize.define('Ator',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nome:{
            type:DataTypes.STRING,
            allowNull:false
        }
    },{
        tableName:'Ator',
        timestamps:false
    })

    Ator.associate = (models) => {
        Ator.belongsTo(models.Filme, {
          foreignKey: "filme_id",
          as: "filme"
        }) 

    Ator.hasMany(models.Filme, {
        foreignKey:"ator_id",
        as: "filmes"
    })
} 
    return Ator
}