import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Card } from "../components";

export const Search = ({ param, searchParam, setSearchParam }) => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    
    const [queryParam] = useSearchParams();
    setSearchParam(queryParam.get('q'));

    const url = `https://api.themoviedb.org/3/${param}?api_key=${API_KEY}&query=${searchParam}`;

    const { data: movies } = useFetch(url);

    return (
        <main>
            <section className="max-w-7xl mx-auto py-7">
                <div>
                    <p className="text-3xl text-gray-900 dark:text-white mx-2 mb-10">{movies.length ? `Results for '${searchParam}'` : `No Result for '${searchParam}'`}</p>
                </div>
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
