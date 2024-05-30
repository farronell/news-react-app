import Card from "../Card";
import useNewsFetch from "../State/useNewsFetch";
import { LoaderCircle } from "lucide-react";

export default function NewsList() {
  const { data, loading, error } = useNewsFetch();
  if (loading) {
    return (
      <section>
        <LoaderCircle className="animate-spin" />
        <h2>Loading...</h2>
      </section>
    );
  }

  if (error) {
    return (
      <section>
        <h2>{error.massage}</h2>
      </section>
    );
  }

  return (
    <section className="pt-4 flex flex-row flex-wrap gap-2 w-full justify-center">
      {data.map((news) => (
        <Card news={news} loading={loading} error={error} key={news.url}/>
      ))}
    </section>
  );
}
