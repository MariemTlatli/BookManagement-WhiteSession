// src/components/BookList.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:5555/Books");
        setBooks(response.data.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <Container>
      <h2>Book List</h2>
      <Button
        component={Link}
        to="/add"
        variant="contained"
        color="primary"
        style={{ marginBottom: 20 }}
      >
        Add New Book
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Author</TableCell>
            <TableCell>Publication Date</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map((book) => (
            <TableRow key={book._id}>
              <TableCell>{book.title}</TableCell>
              <TableCell>{book.auth}</TableCell>
              <TableCell>{book.pub_date}</TableCell>
              <TableCell>${book.price}</TableCell>
              <TableCell>
                <Button
                  component={Link}
                  to={`/books/${book._id}`}
                  variant="contained"
                  color="primary"
                  style={{ marginRight: 10 }}
                >
                  View
                </Button>
                <Button
                  component={Link}
                  to={`/edit/${book._id}`}
                  variant="contained"
                  color="secondary"
                >
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default BookList;
