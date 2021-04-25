import { useQuery } from "react-query";
import Beers from "../components/Beers";
import Head from "next/head";

export default function Home() {
  const { data, error, isError, isLoading } = useQuery("beers", () =>
    fetch("https://api.punkapi.com/v2/beers").then((res) => res.json())
  );

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      <Head>
        <title>Punk API | All beers</title>
      </Head>
      <Beers beers={data} />
    </>
  );
}
