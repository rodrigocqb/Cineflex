import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promise.then((response) => {
            setMovies(response.data);
        })
    }, []);

    return (
        <main className="home">
            <h2 className="title">Selecione o filme</h2>
            <div className="movie-list">
                {movies.map((value) => {
                    return (
                        <Link to={`/sessoes/${value.id}`} key={value.id} >
                            <div className="movie">
                                <img src={value.posterURL} alt="" />
                            </div>
                        </Link>
                    )
                })}
            </div>
        </main>
    );
}