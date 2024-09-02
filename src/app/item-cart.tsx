"use client";
import { IconButton, Stack, Typography, Grid, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React from "react";
import Image from "next/image";

export default function ItemCart({
  itemname,
  itemPrice,
  image,
  handleIncrement,
  handleDecrement,
}: {
  itemname: string;
  itemPrice: number;
  image: string;
  handleIncrement: (price: number) => void;
  handleDecrement: (price: number) => void;
}) {
  const [count, setCount] = React.useState(0);
  const [totalPrice, setTotalPrice] = React.useState(0);

  const handleAddItemClick = () => {
    const newCount = count + 1;
    setCount(newCount);
    const newTotalPrice = newCount * itemPrice;
    setTotalPrice(newTotalPrice);
    handleIncrement(itemPrice);
  };

  const handleDeleteItemClick = () => {
    if (count === 0) {
      return;
    }
    const newCount = count - 1;
    setCount(newCount);
    const newTotalPrice = newCount * itemPrice;
    setTotalPrice(newTotalPrice);
    handleDecrement(itemPrice);
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12} md={2}>
        <Image src={image} alt={itemname} width={100} height={100} />
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography variant="h6">{itemname}</Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Stack direction="row" spacing={2} alignItems="center" justifyContent="flex-end">
          <IconButton onClick={handleDeleteItemClick}>
            <RemoveIcon />
          </IconButton>
          <Box width="40px" textAlign="center">
            <Typography variant="h6">{count}</Typography>
          </Box>
          <IconButton onClick={handleAddItemClick}>
            <AddIcon />
          </IconButton>
          <Box minWidth="120px" textAlign="right">
            <Typography variant="h6">
              {totalPrice.toLocaleString()} บาท
            </Typography>
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
}
