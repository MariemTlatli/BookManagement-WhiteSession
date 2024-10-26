// src/components/EditBook.js
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TextField, Button, Container } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";

const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [auth, setAuth] = useState("");
  const [pubDate, setPubDate] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`http://localhost:5555/Books/${id}`);
        const { title, auth, pub_date, price } = response.data;
        setTitle(title);
        setAuth(auth);
        setPubDate(pub_date);
        setPrice(price);
      } catch (error) {
        console.error("Error fetching book for editing:", error);
      }
    };

    fetchBook();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:5555/Books/${id}`, {
        title,
        auth,
        pub_date: pubDate,
        price,
      });

      navigate("/");
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };

  return (
    <Container>
      <h2>Edit Book</h2>
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
          Save Changes
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

export default EditBook;
