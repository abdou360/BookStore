module.exports = (sequelize, DataTypes, Model) => {

    class Users extends Model {}

    Users.init({
        // Model attributes are defined here
        first_name: {
          type: DataTypes.STRING,
         // allowNull: false
        },
        last_name: {
            type: DataTypes.STRING
            // allowNull defaults to true
          },
          email: {
            type: DataTypes.STRING,
            unique: true
            // allowNull defaults to true
          },
           password: {
            type: DataTypes.STRING
           // allowNull defaults to true
          },
          token: {
            type: DataTypes.STRING
            // allowNull defaults to true
          },
      
      }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'users',
        timestamps:false // We need to choose the model name
      });
      
      return Users;
}