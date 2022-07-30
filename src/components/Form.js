import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { LoaderWrapper, Spinner } from "../styles/Loader";

export default function Form({
    cpf,
    setCpf,
    name,
    setName,
    seats,
    seatNames,
    seatIds,
}) {
    const [sent, setSent] = useState(false);

    let navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        if (seatIds.length === 0) {
            return alert("Escolha pelo menos um assento");
        }
        const promise = axios.post(
            "https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many",
            {
                ids: seatIds,
                name: name,
                cpf: cpf,
            }
        );

        setSent(true);

        promise.then(() => {
            navigate("/sucesso", {
                replace: false,
                state: {
                    cpf: cpf,
                    name: name,
                    time: seats.name,
                    date: seats.day.date,
                    title: seats.movie.title,
                    seatNames: seatNames,
                },
            });
        });
    }

    return (
        <>
            {sent === true ? (
                <LoaderWrapper>
                    <FormSpinner />
                </LoaderWrapper>
            ) : (
                <FormWrapper onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Nome do comprador:</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Digite seu nome..."
                            value={name}
                            required
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="cpf">CPF do comprador:</label>
                        <input
                            id="cpf"
                            name="cpf"
                            type="text"
                            placeholder="Digite seu CPF... (com . e -)"
                            pattern="^([0-9]){3}\.([0-9]){3}\.([0-9]){3}-([0-9]){2}$"
                            value={cpf}
                            required
                            onChange={(e) => setCpf(e.target.value)}
                        />
                    </div>
                    <Button type="submit">Reservar assento(s)</Button>
                </FormWrapper>
            )}
        </>
    );
}

const FormWrapper = styled.form`
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
    background-color: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 3px;
    font-size: 18px;
    outline: none;
  }

  input::placeholder {
    font-style: italic;
    color: #afafaf;
  }
`;

const FormSpinner = styled(Spinner)`
  margin-top: 30%;
`;

export const Button = styled.button`
  width: 225px;
  height: 42px;
  margin-top: 57px;
  margin-bottom: 137px;
  border: 0px;
  background-color: #e8833a;
  border-radius: 3px;
  color: #ffffff;
  font-size: 18px;
`;
