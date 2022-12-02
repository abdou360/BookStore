import React, {useState, useEffect} from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router-dom'
import { getBookById ,editBook} from '../services/BookService'
const EditBook = () => {

    const { id } = useParams()
    const navigate = useNavigate();
    


    const [titre, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [prix, setPrice] = useState(0)
    const [description, setDescription] = useState('')

    useEffect(() => {
        const getDataById = async () => {
           const data= getBookById(id);
            setTitle(data.title)
            setAuthor(data.author)
            setPrice(data.price)
            setDescription(data.description)
        }

        getDataById()
    },[id])

   const updateHandler = async (e) => {

        e.preventDefault()
        const data = {
            titre: titre,
            author:author,
            prix: prix,
            description: description,
        }
        editBook(id,data);
      //  await .put(`/api/products/${id}`, data)
      navigate('/');

   }

    return (
        <>
            <Container className='mt-5 p-2'>
                <h1>Edit Book</h1>
                <hr />

                <Form onSubmit={updateHandler}>
                    <Form.Group className="mb-3" controlId="titre">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            value={titre}
                            onChange={(e) => setTitle(e.target.value)}
                            type="text"
                          />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="author">
                        <Form.Label>Author</Form.Label>
                        <Form.Control
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            type="text"
                          />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="prix">
                        <Form.Label>Price ($)</Form.Label>
                        <Form.Control
                            value={prix}
                            onChange={(e) => setPrice(e.target.value)}
                            type="number"
                             />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            as="textarea"
                            />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Update Product
                    </Button>
                </Form>
            </Container>
        </>
    )
}

export default EditBook