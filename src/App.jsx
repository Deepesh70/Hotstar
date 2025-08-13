import React from 'react'
import Header from "/src/components/Header.jsx"
import Banner from "/src/components/Banner.jsx"
import Main from "/src/components/Main.jsx"
import MovieRow from "/src/components/MovieRow.jsx"
import AuthButton from "/src/components/AuthButton.jsx"
 
export default function App() {
    const API_KEY = "03ffdb6e3c55d1059f42a10f70374353";
 return (
 <div>
 <AuthButton />
 <Banner />
 <div className="div">
 <Header />
 <Main />

 </div>
 <MovieRow fetchUrl={`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`}/>
 <MovieRow fetchUrl={`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`}/>
 <MovieRow fetchUrl={`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`}/>
 {/* <MovieRow fetchUrl={`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`}/> */}
 </div>
 )
}
 
 
