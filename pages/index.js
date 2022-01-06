import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import requests from '../utils/requests'

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <meta name="hulu 2.0" content="Monthly price. $6.99/mo · Streaming Library with thousands of TV episodes and movies · Most new episodes the day after they air · Access to award-winning Hulu ..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Nav />
      <Results results={ results } />
    </div>
  )
}


export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url ||
  requests.fetchTrending.url}`).then(res => res.json());

  return {
    props: {
      results: request.results,
    }
  }

}