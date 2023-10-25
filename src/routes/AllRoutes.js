import { Routes, Route } from 'react-router-dom';
import { MovieList, MovieDetail, Search, PageNotFound } from '../pages';

export const AllRoutes = ({ searchParam, setSearchParam }) => {
    return (
        <div className='dark:bg-slate-800'>
            <Routes>
                <Route path='' element={<MovieList apiPath="movie/now_playing" />} />
                <Route path='movie/popular' element={<MovieList apiPath="movie/popular" />} />
                <Route path='movie/top' element={<MovieList apiPath="movie/top_rated" />} />
                <Route path='movie/upcoming' element={<MovieList apiPath="movie/upcoming" />} />
                <Route path='movie/:id' element={<MovieDetail apiPath="movie/" />} />
                <Route path='search' element={<Search apiPath="search/movie" searchParam={searchParam} setSearchParam={setSearchParam} />} />
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </div>
    );
};
