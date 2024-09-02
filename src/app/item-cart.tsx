import {
    IconButton,
    Stack,
    Typography,
    Grid,
    Card,
    CardContent,
    CardMedia,
  } from "@mui/material";
  import AddIcon from "@mui/icons-material/Add";
  import RemoveIcon from "@mui/icons-material/Remove";
  import React from "react";
  
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
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt={itemname}
            sx={{ 
              objectFit: "contain",  // ทำให้ภาพแสดงทั้งหมดภายในกรอบ
              objectPosition: "center", // ทำให้ภาพอยู่ตรงกลาง
            }}
          />
          <CardContent>
            <Typography variant="h6" gutterBottom>
              {itemname}
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <IconButton onClick={handleDeleteItemClick}>
                <RemoveIcon />
              </IconButton>
              <Typography variant="h6">{count}</Typography>
              <IconButton onClick={handleAddItemClick}>
                <AddIcon />
              </IconButton>
            </Stack>
            <Typography variant="h6" textAlign="right" mt={2}>
              {totalPrice.toLocaleString()} บาท
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  }
  