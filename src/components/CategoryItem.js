import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  height: 450px;
  margin: 5px;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  text-transform: uppercase;
  color: white;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: white;
  border: none;
  cursor: pointer;
  margin-top: 25px;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.imageURL} />
      <Info>
        <Title>{item.title}</Title>
        <Button>Check Now!</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
