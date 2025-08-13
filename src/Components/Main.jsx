import React, { useState, useEffect } from 'react'

const dummyMovies = [
    {
        id: 1,
        title: "Inception",
        year: 2010,
        age: "PG-13",
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
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
    const [showTrailer, setTrailer] = useState(false);
    const [selection, setSelection] = useState(dummyMovies[0]);

    useEffect(() => {
        setTrailer(false);
        const Timer = setTimeout(() => {
            setTrailer(true);
        }, 3000);
        return () => clearTimeout(Timer);
    }, [selection]);

    return (
        <div className="flex h-screen w-full overflow-hidden">
          

          
            <div className="relative flex-1 z-0 h-full bg-cover bg-center transition-all duration-500" style={{ backgroundImage: `url(${selection.backdrop})` }}>
               
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10"></div>

               
                {showTrailer ? (
                    <video
                        autoPlay
                        loop
                        muted
                        className="absolute w-full h-full object-cover fade-in"
                        src={selection.trailer}
                        style={{ zIndex: 0 }}
                    ></video>
                ) : (
                    <img
                        className="absolute w-full h-full object-cover fade-in"
                        src={selection.poster}
                        alt={selection.title}
                        style={{ zIndex: 0 }}
                    />
                )}

                {/* Movie Selector */}
                <div className="absolute bottom-8 right-8 flex gap-4 bg-black/40 p-4 rounded-lg z-20 shadow-lg">
                    {dummyMovies.map((movie) => (
                        <img
                            key={movie.id}
                            src={movie.poster}
                            alt={movie.title}
                            className={`h-20 w-14 rounded-lg cursor-pointer transition-transform duration-200 hover:scale-110 border-4 ${selection.id === movie.id ? 'border-yellow-400 shadow-xl' : 'border-transparent'}`}
                            onClick={() => setSelection(movie)}
                        />
                    ))}
                </div>

                {/* Description */}
                <div className="absolute bottom-20 left-12 z-20 max-w-xl text-white drop-shadow-lg">
                    <h1 className="text-5xl font-extrabold mb-4 leading-tight">{selection.title} <span className="text-lg font-semibold bg-black/60 px-2 py-1 rounded ml-2">{selection.year} • {selection.age}</span></h1>
                    <p className="text-lg font-medium bg-black/40 p-4 rounded-lg">{selection.description}</p>
                </div>

                {/* Fade-in animation */}
                <style>
                    {`
                    .fade-in {
                        animation: fadeIn 1.2s;
                    }
                    @keyframes fadeIn {
                        from { opacity: 0; }
                        to { opacity: 1; }
                    }
                    `}
                </style>
            </div>
        </div>
    )
}

export default Main