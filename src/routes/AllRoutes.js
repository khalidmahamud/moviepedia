import { Routes, Route } from 'react-router-dom';
import { MovieList, MovieDetail, Search, PageNotFound } from '../pages';

export const AllRoutes = ({ searchParam, setSearchParam }) => {
    return (
        <div className='dark:bg-slate-800'>
            <Routes>
                <Route path='' element={<MovieList apiPath="movie/now_playing" title="Home" />} />
                <Route path='movie/popular' element={<MovieList apiPath="movie/popular" title="Popular" />} />
                <Route path='movie/top' element={<MovieList apiPath="movie/top_rated" title="Top Rated" />} />
                <Route path='movie/upcoming' element={<MovieList apiPath="movie/upcoming" title="Upcoming" />} />
                <Route path='movie/:id' element={<MovieDetail />} />
                <Route path='search' element={<Search apiPath="search/movie" searchParam={searchParam} setSearchParam={setSearchParam} />} />
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </div>
    );
};
