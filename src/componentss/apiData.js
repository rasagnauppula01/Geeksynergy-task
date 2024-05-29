import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CompanyInfo from './companyInfo';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [votedMovies, setVotedMovies] = useState(new Set());

    useEffect(() => {
        axios.post('https://hoblist.com/api/movieList', {
            category: "movies",
            language: "kannada",
            genre: "all",
            sort: "voting"
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => setMovies(response.data.result))
        .catch(error => console.error('Error:', error));
    }, []);

    const handleVote = (movieId) => {
        if (!votedMovies.has(movieId)) {
            setMovies(movies.map(movie => 
                movie.id === movieId ? { ...movie, voting: movie.voting + 1 } : movie
            ));
            setVotedMovies(new Set([...votedMovies, movieId]));
        }
    };

    return (
        <div>
            <div>
            <nav>
                    <ul>
                        <li><Link to="/movies">Movies</Link></li>
                        <li><Link to="/company-info">Company Info</Link></li>
                        <li><Link to="/login">Logout</Link></li>
                    </ul>
                </nav>
            </div>

            <h1>Movies List</h1>
            <ul style={{alignContent:"center",marginLeft:"23%"}}>
                {movies.map(movie => (
                    <li key={movie.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '20px',width:"70%"}}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '20px' }}>
                            <button 
                                 
                                style={{ background: 'none', border: 'none' }}
                            >
                                <span style={{ fontSize: '24px', color:  'gray' }}>▲</span>
                            </button>
                            <span>{movie.voting}</span>
                            <button 
                                style={{ background: 'none', border: 'none', cursor: 'not-allowed' }}
                                disabled={true}
                            >
                                <span style={{ fontSize: '24px', color: 'grey' }}>▼</span>
                            </button>
                            <span>Votes</span>
                        </div>
                        <img src={movie.poster} alt={movie.title} style={{ width: '100px', marginRight: '20px' }} />
                        <div style={{textAlign:"left"}}>
                            
                            <h2>{movie.title}</h2>
                            <div>Genre: {movie.genre}</div>
                            <div>Director: {movie.director}</div>
                            <div>Starring: {movie.stars}</div>
                            <div>Release Date: {movie.releasedDate}</div>
                            <div><span>Mins|</span>English<span>{movie.releasedDate}</span></div>
                            <div style={{color:"lightblue"}}><span>{movie.pageViews}</span>|<span>Voted by{movie.totalVoted} People</span></div>
                
                        </div>
                        <br></br>
                        <button style={{ background: 'blue', color: 'white', border: 'none', padding: '10px 10px', cursor: 'pointer' , width:"100%",marginTop:"280px",marginLeft:"-410px",textAlign:"center"}}>
                                Watch Trailer
                            </button>
                    </li>
                ))}
            </ul>
            
        </div>
    );
};

export default Movies;
