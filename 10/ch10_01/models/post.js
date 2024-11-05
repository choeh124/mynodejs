module.exports = (sequelize, DataTypes)=>{
    const Post = sequelize.define('Post', {
        id:{
            type : DataTypes.INTEGER,
            allowNull: true,
            primaryKey: true,
            autoIncrement: true,
        },
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        count: DataTypes.INTEGER,
    },{
        tableName: "posts"
    });
    Post.associate = function(models){ //Foreign Key
        models.Post.belongsTo(models.User); //UserId FK
    }
    return Post;
}