import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function Movie() {
    const [sessions, setSessions] = useState([]);
    const { idFilme } = useParams();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);
        promise.then((response) => {
            setSessions(response.data);
            console.log(response.data.days)
        })
    },[])

    return (
        <main className="selected-movie">
            <h2 className="title">Selecione o horário</h2>
            <div className="session-list">
                {sessions.days.map((days) => {
                    return (
                            <div className="days" key={days.id} >
                                <h3>{`${days.weekday} - ${days.date}`}</h3>
                            </div>
                    )
                })}
            </div>
        </main>
    );
}