import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BookCover } from 'book-cover-3d'
import Button from 'react-bootstrap/Button';




const BookCard = ({ book }) => {
    return (
        <>

            <Card className='shadow-lg m-2 p-3 rounded' style={{ width: '18rem',background:"#23a865"}}>
            <Card.Title>Title: {book.titre}</Card.Title>

{/*                 { <Card.Img src={book.cover} /> }
 */}               {  <BookCover height={250}>
               <img alt="" src="https://stephenking.com/images/novel/fairy-tale.jpg" />
               </BookCover> 
               }
                <Card.Body>
                    <Card.Title>Price: ${book.prix}</Card.Title>
                    <Card.Text>
                        Description: {book.description.slice(0,10)}...
                    </Card.Text>
                    <Link to={`book/${book.id}`}>
                    <Button variant="outline-success">More</Button>{' '}
                   </Link>
                </Card.Body>
        
            </Card>

        </>
    )
}

export default BookCard