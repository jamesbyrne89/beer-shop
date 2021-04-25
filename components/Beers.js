import styled from "styled-components";
import BeerListItem from "./BeerListItem";

const BeerListStyles = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  max-width: 1000px;
  padding: 0;
  margin: 0;

  @media (max-width: 750px) {
    gap: 1rem;
  }
`;

const Beers = ({ beers }) => {
  return (
    <BeerListStyles>
      {beers.map((beer) => (
        <BeerListItem
          key={beer.id}
          id={beer.id}
          name={beer.name}
          tagline={beer.tagline}
          thumbnail={beer.image_url}
        />
      ))}
    </BeerListStyles>
  );
};

export default Beers;
