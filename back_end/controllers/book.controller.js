const bookService  = require('../services/book.service');
const multer = require('multer');
const path = require('path')
//*********Storage function */
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
  })
  
class BookController {
    
//*Setup Storage Conf
  upload= multer({
        storage: storage,
        limits: { fileSize: '1000000' },
        fileFilter: (req, file, cb) => {
            const fileTypes = /jpeg|jpg|png|gif/
            const mimeType = fileTypes.test(file.mimetype)  
            const extname = fileTypes.test(path.extname(file.originalname))
      
            if(mimeType && extname) {
                return cb(null, true)
            }
            cb('Give proper files formate to upload')
        }
      }).single('cover')
//***Get */
    async getBooks() {
        return await bookService.getBooks();
    }
    async getBook(id) {
        return await bookService.getBook(id);
    }


    async createBook(book) {
       
        console.log(book);
        return await bookService.createBook(book);     
    }

    async updateBook(book) {
        return await bookService.updateBook(book);
    }

    async deleteBook(bookId) {
        return await bookService.deleteBook(bookId);
    }
}
module.exports = new BookController();