import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export const MovieDetail = ({ apiPath }) => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const param = useParams();

    const url = `https://api.themoviedb.org/3/${apiPath}${param.id}?api_key=${API_KEY}`;
    
    const { data: movie } = useFetch(url);
    const {id, original_title, overview, poster_path, genres, vote_average, vote_count, runtime, budget, revenue, release_date, imdb_id} = movie;

    const image = `https://image.tmdb.org/t/p/w500${poster_path}`

    return (
        <main>
            <section className="max-w-7xl mx-auto p-5 py-7 flex flex-col lg:flex-row items-center lg:justify-center gap-10 lg:gap-[7rem]">
                <div className="max-w-xs lg:max-w-sm">
                    <img className="rounded-sm" src={image} alt={original_title} />
                </div>
                <div className="flex flex-col gap-5 lg:items-start items-center">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white">{original_title}</h1>
                    <p className="text-lg leading-7 text-gray-700 dark:text-slate-200 lg:w-auto max-w-lg">{overview}</p>
                    <div className="flex gap-3 my-4">
                        {
                            genres && genres.map((genre) => (
                                <div className="border border-gray-400 p-3 rounded-md text-gray-700 dark:text-slate-200">
                                    {genre.name}
                                </div>
                            ))
                        }
                    </div>
                    <p className="flex items-center gap-2 text-xl text-gray-700 dark:text-slate-200">
                        <span>⭐</span>{vote_average}
                        <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                        {vote_count}<span className="text-lg">{vote_count === 1 ? ` review` : ` reviews`}</span>
                    </p>
                    <p className="text-gray-900 dark:text-white text-xl font-semibold mt-2">Runtime: <span className="text-lg text-gray-700 dark:text-slate-200 font-normal">{runtime} mins</span></p>
                    <p className="text-gray-900 dark:text-white text-xl font-semibold">Budget: <span className="text-lg text-gray-700 dark:text-slate-200 font-normal">{budget}</span></p>
                    <p className="text-gray-900 dark:text-white text-xl font-semibold">Revenue: <span className="text-lg text-gray-700 dark:text-slate-200 font-normal">{revenue}</span></p>
                    <p className="text-gray-900 dark:text-white text-xl font-semibold">Release Date: <span className="text-lg text-gray-700 dark:text-slate-200 font-normal">{release_date}</span></p>
                    <p className="text-gray-900 dark:text-white text-xl font-semibold">IMDB Code: <span className="text-lg text-gray-700 dark:text-slate-200 font-normal"><a target="_blank" href={`https://www.imdb.com/title/${imdb_id}/`}>{imdb_id}</a></span></p>
                </div>
            </section>
        </main>
    );
};
