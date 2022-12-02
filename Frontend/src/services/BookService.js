//read
import axios from 'axios';
 const client =axios.create(
{
  baseURL:"http://localhost:2999",

} 
)
//Get
export const  getAllBooks=()=> {
    var data=[];
    data=  client.get('/api/books');
   console.log(data);
   return data;
};
//Get By ID
export const  getBookById=(id)=> {
    var data=[];
    data=   client.get(`/api/book/${id}`);
   console.log("Hoooooooli"+ data);
   return data;
};
//Create
export  const createBook=(data) =>{
    client.post('/api/book',data);
    console.log('Done !');
}
//Delete
export async function deleteBook(bookId) {
    client.delete(`/api/book/${bookId}`)
 console.log("Deleted"+bookId)
}
//Update
export async function editBook(id,data) {
    await client.put(`/api/book/${id}`, data);
    console.log("uodated !");
}


