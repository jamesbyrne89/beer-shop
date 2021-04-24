import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.headingOne};
  text-transform: uppercase;
  margin: auto;
`;

const HeaderStyles = styled.header`
  text-align: center;
  display: flex;
  align-items: center;
  height: 5rem;
  padding: 1rem;
  border-bottom: solid 1px ${({ theme }) => theme.colors.grey};
`;

const Header = () => (
  <HeaderStyles>
    <Title>
      <Link href="/">
        <a>Punk API</a>
      </Link>
    </Title>
  </HeaderStyles>
);

export default Header;
