import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
            <MovieList>
                {movies.map((value) => {
                    return (
                        <Link to={`/sessoes/${value.id}`} key={value.id} >
                            <div className="movie">
                                <img src={value.posterURL} alt="" />
                            </div>
                        </Link>
                    )
                })}
            </MovieList>
        </main>
    );
}

const MovieList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 11px;
    margin-bottom: 22px;
    
    div {
        width: 145px;
        height: 209px;
        padding: 8px;
        background-color: #FFFFFF;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
        border-radius: 3px;
    }
    
    img {
        width: 129px;
        height: 193px;
    }`;