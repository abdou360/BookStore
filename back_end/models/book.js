module.exports = (sequelize, DataTypes, Model) => {

    class Books extends Model {}

    Books.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
        titre: {
          type: DataTypes.STRING,
         // allowNull: false
        },
        description: {
            type: DataTypes.STRING
            // allowNull defaults to true
          },
           author: {
            type: DataTypes.STRING
            // allowNull defaults to true
          },
           prix: {
            type: DataTypes.STRING
            // allowNull defaults to true
          },
          cover: DataTypes.STRING,
      
      }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'books',
        timestamps:false // We need to choose the model name
      });
      
      return Books;
}