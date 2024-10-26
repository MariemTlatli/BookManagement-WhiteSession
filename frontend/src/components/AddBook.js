// src/components/AddBook.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [auth, setAuth] = useState("");
  const [pubDate, setPubDate] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5555/books", {
        title,
        auth,
        pub_date: pubDate,
        price,
      });

      navigate("/");
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  return (
    <Container>
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Author"
          value={auth}
          onChange={(e) => setAuth(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Publication Date"
          type="date"
          value={pubDate}
          onChange={(e) => setPubDate(e.target.value)}
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
          required
        />
        <TextField
          label="Price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Add Book
        </Button>
        <Button
          component={Link}
          to="/"
          variant="contained"
          color="primary"
          style={{ marginLeft: 20 }}
        >
          Return
        </Button>
      </form>
    </Container>
  );
};

export default AddBook;
