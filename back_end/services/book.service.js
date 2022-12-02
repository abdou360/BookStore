const bookRepository  = require('../repository/book.repository');

class BookService {

    constructor() {}

    async getBooks() {
        return await bookRepository.getBooks();
    }
    async getBook(id) {
        return await bookRepository.getBook(id);
    }

    async createBook(book) {
        console.log(book);
        return await bookRepository.createBook(book);
    }

    async updateBook(book) {
        return await bookRepository.updateBook(book);
    }

    async deleteBook(bookId) {
        return await bookRepository.deleteBook(bookId);
    }

}

module.exports = new BookService();