import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
`;

const Announcement = () => {
  return <Container>🚚 Free delivery from 6.00 PM to 11.59 PM</Container>;
};

export default Announcement;
