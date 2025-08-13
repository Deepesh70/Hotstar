 import React, { useState , useEffect} from 'react'
 
const dummyMovies =[
    {
    id: 1,
    title: "Inception",
    year: 2010,
    age: "PG-13",
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
    // add real link to poster, backdrop, and trailer
    poster: "/src/assets/images/interstellar.jpeg",
    backdrop: "https://example.com/inception-backdrop.jpg",
    trailer: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"

    },
    {
    id: 2,
    title: "The Dark Knight",
    year: 2008,
    age: "PG-13",
    description: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
    poster: "/src/assets/images/interstellar.jpeg",
    backdrop: "https://example.com/dark-knight-backdrop.jpg",
    trailer: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",

    },
    {
    id: 3,
    title: "Interstellar",
    year: 2014,
    age: "PG-13",
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    // add poster from assets, images, interstellar.jpeg
    poster: "/src/assets/images/interstellar.jpeg",
    backdrop: "https://example.com/interstellar-backdrop.jpg",
    trailer: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",

},
    {
        id: 4,
        title: "The Matrix",
        year: 1999,
        age: "R",
        description: "A computer hacker learns about the true nature of his reality and his role in the war against its controllers.",
        poster: "/src/assets/images/interstellar.jpeg",
        backdrop: "/src/assets/images/interstellar.jpeg",
        trailer: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    }
]

 const Main = () => {
    const [showTrailer, setTrailer]= useState(false);
    const [selection, setSelection] = useState(dummyMovies[0]); // Initialize with first movie, not entire array
    useEffect(() => {
        setTrailer(false);
        const Timer= setTimeout(() => {
            setTrailer(true);
        }, 3000);
        return () => clearTimeout(Timer);
    }, [selection]
);
   return (
     <div  className="relative z-0 w-full h-screen bg-cover bg-center transition-all duration-500" style={{ backgroundImage: `url(${selection.backdrop})` }}>

        {showTrailer?(<video 
        
        autoPlay
        loop
        muted
        className='absolute w-full h-full object-cover overflow-none'

        src={selection.trailer}></video>):(
        <img 
        className='absolute w-full h-full object-cover'
        
        src={selection.poster}></img>)}

        <div className="absolute image-card bottom-6 right-6 flex gap-2  bg-black/30 p-3 rounded ">
            {dummyMovies.map((movie)=>(
                <img 
                key={movie.id}
                src={movie.poster}
                alt={movie.title}
                className='h-16 w-auto rounded cursor-pointer hover:scale-105 transition-transform'
                onClick={() => setSelection(movie)}
                ></img>
            ))}
        </div>

        <div className="description absolute bottom-10 lef-10 z-10 max-w-xl">
            <h1>{selection.title}</h1>
            <p>{selection.description}</p>
        </div>
     </div>
   )
 }
 
 export default Main