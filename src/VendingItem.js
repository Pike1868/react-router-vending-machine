import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Typography } from "@mui/material";

const VendingItem = ({ item }) => {
  return (
    <Container maxWidth="sm" style={{ textAlign: "center", marginTop: "20px" }}>
      <img
        src={item.image}
        alt={item.name}
        style={{ width: "300px", height: "auto", margin: "20px 0" }}
      />
      <Typography variant="h4" component="h2" gutterBottom>
        {item.name}
      </Typography>
      <Typography variant="body1" color="textSecondary">
        {item.message}
      </Typography>
      <Button
        variant="contained"
        sx={{ marginTop: "30px", backgroundColor: "purple" }}
      >
        <Link
          to="/"
          style={{
            display: "block",
            textDecoration: "none",
            color: "#fff",
          }}
        >
          Go Back
        </Link>
      </Button>
    </Container>
  );
};

export default VendingItem;
