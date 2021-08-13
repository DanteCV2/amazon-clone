import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import RoomIcon from "@material-ui/icons/Room";
import { Link } from "react-router-dom";

function Header({ cartItems, user, signOut }) {
  const getCount = () => {
    let count = 0;
    cartItems.forEach((item) => {
      count += item.product.qty;
    });

    return count;
  };

  return (
    <Container>
      <HeaderLogo>
        <Link to="/">
          <img src="https://i.imgur.com/7I9Was5.png" />
        </Link>
      </HeaderLogo>
      <HeadderAdress>
        <RoomIcon />
        <HeadeOption>
          <OptionOne>Hello,</OptionOne>
          <OptionTwo>Select your address</OptionTwo>
        </HeadeOption>
      </HeadderAdress>
      <HeaderSearch>
        <HeaderInput type="text" />
        <SearchIconContainer>
          <SearchIcon />
        </SearchIconContainer>
      </HeaderSearch>
      <HeaderNavItems>
        <HeadeOption onClick={signOut}>
          <OptionOne>Hello {user.name}</OptionOne>
          <OptionTwo>Account & List</OptionTwo>
        </HeadeOption>
        <HeadeOption>
          <OptionOne>Returns</OptionOne>
          <OptionTwo>& Orders</OptionTwo>
        </HeadeOption>

        <Cart>
          <Link to="/cart">
            <ShoppingCartIcon />
            <CartCount>{getCount()}</CartCount>
          </Link>
        </Cart>
      </HeaderNavItems>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  height: 60px;
  background-color: #0f1111;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
`;

const HeaderLogo = styled.div`
  img {
    width: 100px;
    margin-left: 11px;
  }
`;

const HeadderAdress = styled.div`
  padding-left: 9px;
  display: flex;
  align-items: center;
`;

const OptionOne = styled.div``;

const OptionTwo = styled.div`
  font-weight: 700;
`;

const HeaderSearch = styled.div`
  display: flex;
  flex-grow: 1;
  height: 40px;
  border-radius: 4px;
  overflow: hidden;
  margin-left: 4px;
  background-color: white;

  &:focus-within {
    box-shadow: 0 0 0 3px #f90;
  }
`;

const HeaderInput = styled.input`
  flex-grow: 1;
  border: 0;
  &:focus {
    outline: none;
  }
`;

const SearchIconContainer = styled.div`
  background-color: #febd69;
  width: 45px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderNavItems = styled.div`
  display: flex;
`;

const HeadeOption = styled.div`
  padding: 10px 9px;
  cursor: pointer;
`;

const Cart = styled.div`
  display: flex;

  a {
    display: flex;
    align-items: center;
    padding-right: 9px;
    color: white;
    text-decoration: none;
  }
`;

const CartCount = styled.div`
  padding-left: 4px;
  font-weight: 700;
  color: #f08804;
`;
