import Link from "next/link";
import React from "react";
import styled from "styled-components";

const BeerListItemStyles = styled.a`
  flex-basis: calc(50% - 2rem);
  flex-shrink: 0;
  flex-grow: 0;

  @media (max-width: 750px) {
    flex-grow: 1;
    flex-basis: 100%;
  }

  &:hover li {
    border: solid 1px ${({ theme }) => theme.colors.primary};
  }

  li {
    display: grid;
    grid-template-columns: 1fr 2fr;
    border: solid 1px ${({ theme }) => theme.colors.grey};
    border-radius: 5px;
    padding: 1rem 1.5rem;
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontSizes.headingTwo};
    transition: all 0.25s;
  }

  .beer-list-item__thumbnail {
    margin: auto;
  }

  .beer-list-item__details {
    padding-left: 2rem;
  }

  .beer-list-item__name {
    font-weight: bold;
    margin-top: 2rem;
  }

  .beer-list-item__tagline {
    margin-top: 1rem;
    font-size: ${({ theme }) => theme.fontSizes.body};
  }

  img {
    height: 200px;
  }
`;

const BeerListItem = ({ name, tagline, thumbnail, id }) => {
  return (
    <Link href={`/beers/${id}`} passHref>
      <BeerListItemStyles>
        <li>
          <img className="beer-list-item__thumbnail" src={thumbnail} />
          <div className="beer-list-item__details">
            <div className="beer-list-item__name">{name}</div>
            <div className="beer-list-item__tagline">{tagline}</div>
          </div>
        </li>
      </BeerListItemStyles>
    </Link>
  );
};

export default BeerListItem;
