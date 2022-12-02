const { connect } = require('../config/connexion');

class UserRepository {

    db = {};

    constructor() {
        this.db = connect();
        // For Development
         this.db.sequelize.sync().then(() => {
            console.log("Connected");
        }); 
    }

    async getBooks() {
        
        try {
            const books = await this.db.books.findAll();
            console.log('books:::', books);
            return books;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

}

module.exports = new UserRepository();