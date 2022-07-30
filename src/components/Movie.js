import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Loader from "../styles/Loader";
import Footer from "./Footer";

export default function Movie() {
    const [sessions, setSessions] = useState({});
    const { idFilme } = useParams();

    useEffect(() => {
        const promise = axios.get(
            `https://mock-api.driven.com.br/api/v7/cineflex/movies/${idFilme}/showtimes`
        );
        promise.then((response) => {
            setSessions(response.data);
        });
    }, []);

    return (
        <>
            {sessions.days === undefined ? (
                <Loader />
            ) : (
                <>
                    <main className="selected-movie">
                        <h2 className="title">Selecione o horário</h2>
                        <SessionList>
                            {sessions.days.map((days) => {
                                return (
                                    <div className="days" key={days.id}>
                                        <h3>{`${days.weekday} - ${days.date}`}</h3>
                                        <Showtimes>
                                            {days.showtimes.map((time) => {
                                                return (
                                                    <Link
                                                        to={`/assentos/${time.id}`}
                                                        key={time.id}
                                                        style={{ textDecoration: "none" }}
                                                    >
                                                        <div className="time">{time.name}</div>
                                                    </Link>
                                                );
                                            })}
                                        </Showtimes>
                                    </div>
                                );
                            })}
                        </SessionList>
                    </main>
                    <Footer img={sessions.posterURL} title={sessions.title} />
                </>
            )}
        </>
    );
}

const SessionList = styled.div`
  margin-bottom: 139px;

  h3 {
    font-size: 20px;
    margin-bottom: 22px;
  }
`;

const Showtimes = styled.div`
  display: flex;
  column-gap: 8px;
  margin-bottom: 27px;

  div {
    width: 83px;
    height: 43px;
    background-color: #e8833a;
    color: #ffffff;
    font-size: 18px;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
