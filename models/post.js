'use strict';
module.exports = (sequelize, DataTypes) => {
  var Post = sequelize.define('Post', {
    text: DataTypes.STRING
  }); 

  Post.associate: function(models) {
      Post.belongsTo(models.User,{
        foreignKey: "userId"
      })
      
    }
  
  return Post;
};