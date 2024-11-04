module.exports = (sequelize, DataTypes) => {

    const Post = sequelize.define("Post", {
        title:{
            type: DataTypes.STRING,
            allowNull: false
        },
        content: DataTypes.STRING,
        author: DataTypes.STRING,
        filename:{  //논리적인 모델추가작업은 여기에서 수작업으로 해야 한다.
            type: DataTypes.STRING,
            allowNull: true
        }
    });
    Post.associate = function(models) {
        Post.hasMany(models.Comment);
    }
    return Post;
};