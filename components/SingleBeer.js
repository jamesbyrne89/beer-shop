import React from "react";
import Head from "next/head";
import { useQuery } from "react-query";
import styled from "styled-components";

const SingleBeerStyles = styled.article`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  grid-gap: 5rem;
  max-width: 700px;

  @media (max-width: 750px) {
    display: block;
    margin-left: clamp(0.5rem, 5vw, 5rem);
    margin-right: clamp(0.5rem, 5vw, 5rem);
  }

  .single-beer {
    &__thumbnail {
      height: 400px;
      @media (max-width: 750px) {
        height: 200px;
      }
    }

    &__name {
      font-size: ${({ theme }) => theme.fontSizes.headingOne};
      font-weight: bold;
    }

    &__abv {
      span {
        font-weight: bold;
        margin-right: 0.25rem;
      }
    }

    &__food-pairing {
      li {
        list-style: none;
      }
    }
  }
`;

const SingleBeer = ({ id, name }) => {
  const { data, error, isError, isLoading } = useQuery("single-beer", () =>
    fetch(`https://api.punkapi.com/v2/beers/${id}`).then((res) => res.json())
  );

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const [beer] = data;

  return (
    <>
      <Head>
        <title>Punk API | {name}</title>
      </Head>
      <SingleBeerStyles>
        <img className="single-beer__thumbnail" src={beer.image_url} />
        <div className="single-beer__details">
          <h2 className="single-beer__name">{beer.name}</h2>
          <div className="single-beer__abv">
            <span>ABV:</span>
            {beer.abv}%
          </div>
          <p className="single-beer__description">{beer.description}</p>
          <div className="single-beer__food-pairing">
            <h3>Why not try with:</h3>
            {beer.food_pairing.map((food) => (
              <li>{food}</li>
            ))}
          </div>
        </div>
      </SingleBeerStyles>
    </>
  );
};

export default SingleBeer;
