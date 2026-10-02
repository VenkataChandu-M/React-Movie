import MovieCard from '../componets/MovieCard'
import '../css/Home.css'
import { useState, useEffect } from 'react';
import { getPopularMovies , searchMovies } from '../serves/api';


function Home  () {

    const [searchQuery,setsearchQuery]=useState('')
    const [movies,setMovies]= useState([])
    const [err,seterr]=useState(null)
    const [loding,setLoding]= useState(true)

    useEffect(() =>{
        const lodePoplurMovies = async () =>{
            try{
                const poplurMovies= await getPopularMovies()
                setMovies(poplurMovies)
            } catch (err) {
                console.log(err)
                seterr("Failed to load movies...")
            }
            finally{
                setLoding(false)
            }
        }
        lodePoplurMovies()
    },[])


    
    
    const handelSearch = async (e) =>{
        e.preventDefault()
        if (!searchQuery.trim()) return
        if (loding) return
        setLoding(true)
        try{
            const searchResult= await searchMovies(searchQuery)
            setMovies(searchResult)
            seterr(null)
        }
        catch(e){
            console.log(e)
            seterr("Failed to search")
        }
        finally{
            setLoding(false)
        }
    }
    return <div className="home">
        <div>
            <form onSubmit={handelSearch} className='search-form'>
                <input type='text' placeholder='Search for Movie..' value={searchQuery} className='search-input' 
                onChange={(e)=>setsearchQuery(e.target.value)}/>
                <button type='submit' className='search-button'>Search</button>
            </form>
        </div>
        {loding ? (<div className='loading'>Loading...</div>) :<div className="movie-grid">
            {movies.map(movie=>
                 <MovieCard movie={movie} key={movie.id}/>)}
        </div> }
        
    </div>

};
export default Home