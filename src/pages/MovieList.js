import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";
import { Card } from "../components";

export const MovieList = ({ apiPath, title }) => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${API_KEY}`;
    
    const { data } = useFetch(url);
    const movies = data.results;

    useTitle(title);

    return (
        <main>
            <section className="max-w-7xl mx-auto py-7">
                <div className="flex flex-wrap justify-center gap-5">

                        {
                            movies &&
                            movies.map((movie) => (
                                <Card 
                                    key={movie.id}
                                    movie={movie}
                                />
                            ))
                        }

                </div>
            </section>
        </main>
    );
};
