import React from "react";
import vendingList from "./vendingList";
import { Link } from "react-router-dom";
import { Container, Grid, Paper, Button, Typography } from "@mui/material";

const VendingMachine = () => {
  return (
    <Container maxWidth="sm">
      <Typography sx={{ textAlign: "center" }}>
        Hello I am a vending machine, what would you like to eat?
      </Typography>
      <Paper
        style={{
          padding: "20px",
          margin: "20px 0",
          textAlign: "center",
          border: "2px solid black",
          backgroundColor: "rgba(211,211,211,0.5)",
        }}
      >
        <h2>Vending Machine</h2>
        <Grid container spacing={2}>
          {vendingList.map((item) => (
            <Grid item xs={12} sm={12} md={12} key={item.id}>
              <Button
                variant="contained"
                color="primary"
                style={{ margin: "1px", width: "100px", height: "100px" }}
              >
                <Link
                  to={`/${item.name}`}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: "50px",
                      height: "50px",
                    }}
                  />
                  {item.name}
                </Link>
              </Button>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
};

export default VendingMachine;
