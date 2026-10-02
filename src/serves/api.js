const API_KEY = "edb6759feddd0e172d9e32cd20bc3c31";

const BASE_URL="https://api.themoviedb.org/3";

export const getPopularMovies = async()=>{
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data= await response.json()
    return data.results
};
export const searchMovies = async(query)=>{
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data= await response.json()
    return data.results
};