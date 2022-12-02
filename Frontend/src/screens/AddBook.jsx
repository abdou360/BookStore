import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import {createBook} from '../services/BookService'


const AddBook = ({ history }) => {


    const [titre, setTitle] = useState('')
    const [prix, setPrice] = useState(0)
    const [description, setDescription] = useState('')
    const [author, setAuthor] = useState('')
    //const [published, setPublished] = useState(true)
    const [cover, setCover] = useState('')

    const addBook = async (e) => {

        e.preventDefault()

        // const data = {
        //     title: title,
        //     price: price,
        //     description: description,
        //     published: published
        // }


        const formData = new FormData()

        formData.append('cover', cover)
        formData.append('titre', titre)
        formData.append('prix', prix)
        formData.append('description', description)
        formData.append('author', author)
        //formData.append('published', published)
        console.log(formData);
         await createBook(formData);
        history.push('/')
    
    }



    return (
        <>
            <Container className='mt-5 p-2'>
                <h1>Add Book</h1>
                <hr />

                <Form onSubmit={addBook} method="POST" encType='multipart/form-data'>

                <Form.Group controlId="fileName" className="mb-3">
                    <Form.Label>Upload Image</Form.Label>
                    <Form.Control
                        type="file"
                        name='cover'
                        onChange={(e) => setCover(e.target.files[0])}
                        size="lg" />
                </Form.Group>

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

                   {/*  <Form.Group className="mb-3" controlId="publishedCheckedid">
                        <Form.Check
                            type="checkbox"
                            onChange={(e) => setPublished(e.target.checked)}
                            label="publish"
                           />
                    </Form.Group>
 */}

                    <Button variant="primary" type="submit">
                        Add Book
                    </Button>
                </Form>
            </Container>
        </>
    )
}

export default AddBook