import MovieCard from '../componets/MovieCard'
import '../css/Home.css'
import { useState } from 'react';
function Home  () {

    const [searchQuery,setsearchQuery]=useState('')


    const movies=[
        {id:1,title:"Varanasi",date:"2024",url:"https://i.pinimg.com/736x/ea/bf/71/eabf710368b4056b3cf5b993baa0d787.jpg"},
        {id:1,title:"Puspa",date:"2030",url:"https://i.pinimg.com/736x/9d/e0/b1/9de0b1848eeb322d577d74dbf4884113.jpg"},
        {id:1,title:"kalki",date:"2027",url:"https://i.pinimg.com/736x/8e/44/92/8e449291c39005a81c838b769b825ed9.jpg"},
        {id:1,title:"Goku",date:"2026",url:"https://i.pinimg.com/736x/b4/26/5f/b4265f9b87f5091e100074ec67a067b6.jpg"},
        {id:1,title:"og",date:"2025",url:"https://i.pinimg.com/736x/7d/52/d6/7d52d6f8dff69b9d9ca58c511e2abb4d.jpg"},
        {id:1,title:"og2",date:"2023",url:"https://i.pinimg.com/736x/2b/9c/a8/2b9ca86e01774930d6e9a46cd5a721be.jpg"}
    ]
    const handelSearch = (e) =>{
        e.preventDefault()
        setsearchQuery("")
    }
    return <div className="home">
        <div>
            <form onSubmit={handelSearch} className='search-form'>
                <input type='text' placeholder='Search for raka..' value={searchQuery} className='search-input' 
                onChange={(e)=>setsearchQuery(e.target.value)}/>
                <button type='submit' className='search-button'>Search</button>
            </form>
        </div>
        <div className="movie-grid">
            {movies.map(movie=>
                movie.title.toLocaleLowerCase().startsWith(searchQuery) && <MovieCard movie={movie} key={movie.kye}/>)}
        </div>
    </div>

};
export default Home