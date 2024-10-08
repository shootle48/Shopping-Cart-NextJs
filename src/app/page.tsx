"use client";

import { Stack, Typography, Container, Grid } from "@mui/material";
import React from "react";
import ItemCart from "./item-cart";

export default function Home() {
  const [totalItems, setTotalItems] = React.useState(0);
  const [grandTotal, setGrandTotal] = React.useState(0);

  const handleIncrement = (price: number) => {
    setTotalItems(totalItems + 1);
    setGrandTotal(grandTotal + price);
  };

  const handleDecrement = (price: number) => {
    if (totalItems > 0) {
      setTotalItems(totalItems - 1);
      setGrandTotal(grandTotal - price);
    }
  };

  const myItems = [
    { itemname: "iPhone 15 Pro", price: 41900, image: "https://www.apple.com/v/iphone-15/c/images/overview/contrast/iphone_15pro__ezc4eofw13yq_large.jpg" },
    { itemname: "iPhone 15", price: 32900, image: "https://www.apple.com/v/iphone-15/c/images/overview/contrast/iphone_15__dozjxuchowcy_large.jpg" },
    { itemname: "iPad Pro", price: 32900, image: "https://www.apple.com/v/ipad-pro/aq/images/overview/contrast/product-tile/ipad_pro__ea93uc0cnvsm_large.jpg" },
    { itemname: "iPad Air", price: 20900, image: "https://www.apple.com/v/ipad-pro/aq/images/overview/contrast/product-tile/ipad_air__crdt2g2u9z0i_large.jpg" },
    { itemname: "iPad", price: 14900, image: "https://www.apple.com/v/ipad/home/ck/images/overview/select/product-tile/pt_ipad_10th_gen__ej5p5x6yf2gm_xlarge.png" },
    { itemname: "iPad mini", price: 17900, image: "https://www.apple.com/v/ipad/home/ck/images/overview/select/product-tile/pt_ipad_mini__f3iy3qb50gia_xlarge.png" },
    { itemname: "MacBook Air", price: 37900, image: "https://www.apple.com/v/macbook-air/s/images/overview/routers/compare_mba_13_15__caznvrb61zyu_large.png" },
    { itemname: "MacBook Pro", price: 73900, image: "https://www.apple.com/v/macbook-air/s/images/overview/routers/compare_mbp_14_16__f7ovwhzitq6i_large.png" },
    { itemname: "iMac", price: 49900, image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/imac-24-no-id-blue-selection-hero-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1701459101618" },
    { itemname: "Mac mini", price: 20900, image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-mini-pro-hero-202301?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1670038313664" },
    { itemname: "Mac Studio", price: 69900, image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-studio-select-202306?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1684345161143" },
  ];

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Shopping Cart
      </Typography>
      <Grid container spacing={4}>
        {myItems.map((item) => (
          <ItemCart
            key={item.itemname}
            itemname={item.itemname}
            itemPrice={item.price}
            image={item.image}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
          />
        ))}
      </Grid>
      <Stack direction="row" spacing={2} justifyContent="space-between" mt={2}>
        <Typography variant="h5">ราคาทั้งหมด:</Typography>
        <Typography variant="h5">
          {grandTotal.toLocaleString()} บาท
        </Typography>
      </Stack>
    </Container>
  );
}
