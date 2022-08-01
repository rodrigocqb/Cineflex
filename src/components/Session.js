import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Loader from "../styles/Loader";
import Captions from "./Captions";
import Footer from "./Footer";
import Form from "./Form";
import Seat from "./Seat";

export default function Session() {
    const [seats, setSeats] = useState({});
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [seatIds, setSeatIds] = useState([]);
    const [seatNames, setSeatNames] = useState([]);

    const { idSessao } = useParams();

    useEffect(() => {
        const promise = axios.get(
            `https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`
        );
        promise.then((response) => {
            setSeats(response.data);
        });
    }, [idSessao]);

    return (
        <>
            {seats.seats === undefined ? (
                <Loader />
            ) : (
                <>
                    <SessionContainer>
                        <Title>Selecione o(s) assento(s)</Title>

                        <SeatList>
                            {seats.seats.map((value) => {
                                return (
                                    <Seat
                                        key={value.id}
                                        isAvailable={value.isAvailable}
                                        id={value.id}
                                        seatIds={seatIds}
                                        setSeatIds={setSeatIds}
                                        name={value.name}
                                        seatNames={seatNames}
                                        setSeatNames={setSeatNames}
                                    >
                                        {value.name.length > 1 ? value.name : `0${value.name}`}
                                    </Seat>
                                );
                            })}
                        </SeatList>

                        <Captions />

                        <Form
                            name={name}
                            setName={setName}
                            seats={seats}
                            cpf={cpf}
                            setCpf={setCpf}
                            seatIds={seatIds}
                            seatNames={seatNames}
                        />
                    </SessionContainer>

                    <Footer img={seats.movie.posterURL} title={seats.movie.title}>
                        {<span>{`${seats.day.weekday} - ${seats.name}`}</span>}
                    </Footer>
                </>
            )}
        </>
    );
}

const Title = styled.h2`
  margin-bottom: 26px;
`;

const SeatList = styled.div`
  max-width: 323px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 7px;
  row-gap: 18px;
  justify-content: center;
`;

const SessionContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
