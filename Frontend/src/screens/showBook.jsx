import React, { useState, useEffect } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import BookCard from '../Components/BookCard'
import {getAllBooks} from '../services/BookService'
import SearchBar from '../Components/SearchBar'

const ShowBook = () => {


    const [books, setBooks] = useState([])
    const [searchInput] = useState("");

    useEffect(() => {
        const getProductsData = async () => {
            const { data } = await getAllBooks();
            console.log(data)
            setBooks(data)
        }
        getProductsData()
    }, [])

    return (
        <>
           <Container  className="justify-content-center p-2">
               <h1 className='text-center'>Your Librairy</h1>
               <hr />
               <SearchBar/>
               <Row>
                    {
                        // eslint-disable-next-line array-callback-return
                        books.filter(book=> {
                            if (searchInput === '') {
                              return book;
                            } else if (book.title.toLowerCase().includes(searchInput.toLowerCase())) {
                              return book;
                            }
                          }).map(book => {
                            return <Col md={6} lg={4} sm={12} key={book.id}>
                                <BookCard book={book} />
                            </Col>
                        })
                    }
               </Row>


           </Container>

           
        </>
    )
}

export default ShowBook