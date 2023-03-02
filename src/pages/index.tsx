import useSWR from 'swr';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export default function Home() {
  const { data, error, isLoading } = useSWR(API_URL);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return <main></main>;
}
