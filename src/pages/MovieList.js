import { useFetch } from "../hooks/useFetch";
import { Card } from "../components";

export const MovieList = ({ param }) => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const url = `https://api.themoviedb.org/3/${param}?api_key=${API_KEY}`;
    
    const { data:movies } = useFetch(url);

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
