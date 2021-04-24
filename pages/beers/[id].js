import SingleBeer from "../../components/SingleBeer";

const SingleBeerPage = (props) => <SingleBeer {...props} />;

export async function getStaticPaths() {
  const data = await fetch("https://api.punkapi.com/v2/beers").then((res) =>
    res.json()
  );

  const paths = data.map((beer) => ({
    params: { id: beer.id.toString(), name: beer.name },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(ctx) {
  const { id } = ctx.params;
  const [data] = await fetch(
    `https://api.punkapi.com/v2/beers/${id}`
  ).then((res) => res.json());
  const { name } = data;
  return {
    props: {
      id,
      name,
    },
  };
}

export default SingleBeerPage;
