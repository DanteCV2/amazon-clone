import React from "react";
import styled from "styled-components";
import { db } from "../firebase";

function CartItem({ id, item }) {
  const deleteItem = (e) => {
    e.preventDefault();

    db.collection("cartItems").doc(id).delete();
  };

  let options = [];

  for (let i = 1; i < Math.max(item.qty + 1, 20); i++) {
    options.push(<option value={i}>Qty: {i}</option>);
  }

  const changeQty = (newQty) => {
    db.collection("cartItems")
      .doc(id)
      .update({
        qty: parseInt(newQty),
      });
  };

  return (
    <Container>
      <ImageContainer>
        <img src={item.image} />
      </ImageContainer>
      <CartItemInfo>
        <CartItemTop>
          <h2>{item.name}</h2>
        </CartItemTop>
        <CartInfoBottom>
          <CarItemQty>
            <select
              value={item.qty}
              onChange={(e) => changeQty(e.target.value)}
            >
              {options}
            </select>
          </CarItemQty>
          <CartItemDelete onClick={deleteItem}>Delete</CartItemDelete>
        </CartInfoBottom>
      </CartItemInfo>
      <CartItemPrice>${item.price}</CartItemPrice>
    </Container>
  );
}

export default CartItem;

const Container = styled.div`
  padding: 12px 0;
  display: flex;
  border-bottom: 1px solid #ddd;
`;
const ImageContainer = styled.div`
  width: 180px;
  height: 180px;
  flex-shrink: 0;
  flex-grow: 0;
  margin-right: 16px;
  img {
    object-fit: contain;
    height: 100%;
    width: 100%;
  }
`;
const CartItemInfo = styled.div`
  flex-grow: 1;
`;
const CartItemTop = styled.div`
  color: #007185;
  h2 {
    font-size: 18px;
  }
`;
const CartInfoBottom = styled.div`
  display: flex;
  margin-top: 4px;
  align-items: center;
`;
const CarItemQty = styled.div`
  select {
    border-radius: 7px;
    background-color: #f0f2f2;
    padding: 8px;
    box-shadow: 0 2px 5px rgba(15, 17, 17, 0.15);

    :focus {
      outline: none;
    }
  }
`;
const CartItemDelete = styled.div`
  color: #007185;
  margin-left: 16px;
  cursor: pointer;
`;
const CartItemPrice = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-left: 16px;
`;
