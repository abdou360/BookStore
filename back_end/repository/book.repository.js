const { connect } = require('../config/connexion');
//const logger = require('../logger/api.logger');


class BookRepository {

    db = {};

    constructor() {
        this.db = connect();
        // For Development
        this.db.sequelize.sync({ force: true }).then(() => {
            console.log("Drop and re-sync db. Connected");
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

    async createBook(book) {
        let data = {};
        try {
            //book.createdate = new Date().toISOString();
            console.log(book);
            data = await this.db.books.create(book);
            console.log('Book created !');
        } catch(err) {
            console.log(err)
           // logger.error('Error::' + err);
        }
        return data;
    }
//Get One
async getBook(bookId) {
    let data = {};
    try {
        data = await this.db.books.findOne({ where: { id: bookId } });
        console.log('One book returned  !');
    } catch(err) {
        console.log(err)
    }
    console.log(data);
    return data;
}
    async updateBook(book,id) {
        let data = {};
        try {
            data = await this.db.books.update({...book}, {
                where: {
                    id: id
                }
            });
        } catch(err) {
            console.log(err)
        }
        return data;
    }

    async deleteBook(bookId) {
        let data = {};
        try {
            data = await this.db.books.destroy({
                where: {
                    id: bookId
                }
            });
        } catch(err) {
            console.log(err)
        }
        console.log('Book destroyed !!')
        return data;
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }

}

module.exports = new BookRepository();