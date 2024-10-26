// src/components/BookDetail.js
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Button, Typography } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";

const BookDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`http://localhost:5555/Books/${id}`);
        setBook(response.data);
      } catch (error) {
        console.error("Error fetching book:", error);
      }
    };

    fetchBook();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/books/${id}`);
      navigate("/");
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  if (!book) return <p>Loading...</p>;

  return (
    <Container>
      <Typography variant="h4">{book.title}</Typography>
      <Typography variant="h6">Author: {book.auth}</Typography>
      <Typography variant="body1">Publication Date: {book.pub_date}</Typography>
      <Typography variant="body1">Price: ${book.price}</Typography>
      <Button
        onClick={handleDelete}
        variant="contained"
        color="secondary"
        style={{ marginTop: 20 }}
      >
        Delete Book
      </Button>
      <Button
        component={Link}
        to="/"
        variant="contained"
        color="primary"
        style={{ marginTop: 20, marginLeft: 20 }}
      >
        Return
      </Button>
    </Container>
  );
};

export default BookDetail;
