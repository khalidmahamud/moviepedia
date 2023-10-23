import { Routes, Route } from 'react-router-dom';
import { MovieList, MovieDetail, Search, PageNotFound } from '../pages';

export const AllRoutes = () => {
    return (
        <div className='dark:bg-slate-800'>
            <Routes>
                <Route path='' element={<MovieList param="movie/now_playing" />} />
                <Route path='movies/popular' element={<MovieList param="movie/popular" />} />
                <Route path='movies/top' element={<MovieList param="movie/top_rated" />} />
                <Route path='movies/upcoming' element={<MovieList param="movie/upcoming" />} />
                <Route path='movies/:id' element={<MovieDetail />} />
                <Route path='search' element={<Search />} />
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </div>
    );
};
