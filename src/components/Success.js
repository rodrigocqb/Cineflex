import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./Form";


export default function Success() {
    const { state } = useLocation();
    let { cpf, name, time, date, title, seatNames } = state;
    seatNames.sort((a, b) => {
        return a - b;
    });

    return (
        <>
            <SuccessWrapper>
                <SuccessTitle>
                    <h2>Pedido feito com sucesso!</h2>
                </SuccessTitle>

                <Receipt>
                    <div>
                        <h3>Filme e sessão</h3>
                        <p>{title}</p>
                        <p>{`${date} ${time}`}</p>
                    </div>
                    <div>
                        <h3>Ingressos</h3>
                        {seatNames.map((value) => {
                            return (
                                <p key={value}>
                                    {value.length > 1 ? `Assento ${value}` : `Assento 0${value}`}
                                </p>
                            );
                        })}
                    </div>
                    <div>
                        <h3>Comprador</h3>
                        <p>{`Nome: ${name}`}</p>
                        <p>{`CPF: ${cpf}`}</p>
                    </div>
                </Receipt>
                <Link to="/">
                    <Button>Voltar pra Home</Button>
                </Link>
            </SuccessWrapper>
        </>
    );
}

const SuccessWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SuccessTitle = styled.div`
  font-weight: 700;
  color: ${props => props.theme.successFont};
  display: flex;
  justify-content: center;

  h2 {
    width: 180px;
    margin-bottom: 10px;
  }
`;

const Receipt = styled.div`
  width: 100%;
  padding-left: 4px;
  margin-bottom: 30px;

  div {
    margin-top: 40px;
  }

  h3 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 9px;
  }

  p {
    font-size: 24px;
    margin-top: 4px;
  }
`;
