import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer";

export default function Session() {
    const [seats, setSeats] = useState({});
    const { idSessao } = useParams();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`);
        promise.then((response) => {
            setSeats(response.data);
        })
    }, []);

    return (
        <>
            {seats.seats === undefined ?
                <div>Carregando...</div> :
                <>
                    <main>
                        <Title>Selecione o(s) assento(s)</Title>

                        <SeatList>
                            {seats.seats === undefined ?
                                <div>Carregando...</div> :
                                seats.seats.map((value) => {
                                    return (
                                        <Seat key={value.id} isAvailable={value.isAvailable}>{value.name.length > 1 ? 
                                            value.name : `0${value.name}`}</Seat>
                                    );
                                })}
                        </SeatList>
                        <Captions>
                            <div>
                                <Caption color={"watergreen"}></Caption>
                                <p>Selecionado</p>
                            </div>
                            <div>
                                <Caption color={"gray"}></Caption>
                                <p>Disponível</p>
                            </div>
                            <div>
                                <Caption color={"yellow"}></Caption>
                                <p>Indisponível</p>
                            </div>
                        </Captions>

                        <Form>
                            <div>
                                <label for="name">Nome do comprador:</label>
                                <input id="name" name="name" type="text" placeholder="Digite seu nome..." required />
                            </div>
                            <div>
                                <label for="cpf">CPF do comprador:</label>
                                <input id="cpf" name="cpf" type="text" placeholder="Digite seu CPF... (com . e -)"
                                    pattern="^([0-9]){3}\.([0-9]){3}\.([0-9]){3}-([0-9]){2}$" required />
                            </div>
                            <button type="submit">Reservar assento(s)</button>
                        </Form>
                    </main>

                    <Footer img={seats.movie.posterURL} title={seats.movie.title}>
                        {<span>{`${seats.day.weekday} - ${seats.name}`}</span>}
                    </Footer>
                </>}
        </>
    );
}

const Title = styled.h2`
margin-bottom: 26px`;

const SeatList = styled.div`
    display: flex;
    flex-wrap: wrap;
    column-gap: 7px;
    row-gap: 18px;
    justify-content: center;`;

const Seat = styled.div`
    width: 26px;
    height: 26px;
    background-color: ${(props) => !props.isAvailable ? "#FBE192" : "#C3CFD9"};
    border: 1px solid ${(props) => !props.isAvailable ? "#F7C52B" : "#808F9D"};
    border-radius: 12px;
    color: #000000;
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: center;`;

const Captions = styled.div`
    display: flex;
    margin-top: 16px;
    justify-content: space-around;
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #4E5A65;
        font-size: 13px;
    }`;

const Caption = styled(Seat)`
    background-color: ${props => {
        switch (props.color) {
            case "watergreen":
                return "#8DD7CF";

            case "gray":
                return "#C3CFD9";

            case "yellow":
                return "#FBE192";
        }
    }};
    border-color: ${props => {
        switch (props.color) {
            case "watergreen":
                return "#1AAE9E";

            case "gray":
                return "#7B8B99";

            case "yellow":
                return "#F7C52B";
        }
    }};
    margin-bottom: 8px;`;

const Form = styled.form`
    margin-top: 36px;
    display: flex;
    flex-direction: column;
    align-items: center;

    label {
        display: block;
        font-size: 18px;
        margin-top: 9px;
        margin-bottom: 3px;
    }

    input {
        padding-left: 18px;
        width: 327px;
        height: 51px;
        background-color: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        font-size: 18px;
        outline: none;
    }

    input::placeholder {
        font-style: italic;
        color: #AFAFAF;
    }

    button {
        width: 225px;
        height: 42px;
        margin-top: 57px;
        border: 0px;
        background-color: #E8833A;
        border-radius: 3px;
        color: #FFFFFF;
        font-size: 18px;
    }
`;