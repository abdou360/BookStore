const router = require('express').Router()
const bookController = require('../controllers/book.controller')

//**********************Book routes */
router.post('/api/book',bookController.upload,(req,res)=>{
       const book={
            cover: req.file.path,
            titre: req.body.titre,
            prix: req.body.prix,
            author: req.body.author,
            description: req.body.description,
        }
   
    bookController.createBook(book);
    res.status(200).send(book);
})
//*****Get Books */
router.get('/api/books',(req,res)=>{
    bookController.getBooks().then(data => res.json(data));
})
//*************Get One */
router.get('/api/book/:id',(req,res)=>{
    let id=req.params.id;
    bookController.getBook(id).then(data => res.json(data));
})
//******Edit a Book */
router.put('/api/book/:id',(req,res)=>{
  let id=req.params.id;
    bookController.updateBook(req.body.book,id).then(data => res.json(data));
})
//*****Delete a Book */
router.delete('/api/book/:id',(req,res)=>{
    bookController.deleteBook(req.params.id).then(data => res.json(data));
})
module.exports = router
