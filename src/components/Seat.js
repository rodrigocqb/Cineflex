import { useState } from "react";
import styled from "styled-components";

export default function Seat({children, isAvailable, id, seatIds, setSeatIds}) {
    const [clicked, setClicked] = useState(false);

    return (
        <SeatWrapper isAvailable={isAvailable} onClick={() => {
            if (!isAvailable) {
                alert("Esse assento não está disponível");
            }
            else if (seatIds.includes(id) === false) {
                setSeatIds([...seatIds, id]);
                setClicked(!clicked);
            }
            else {
                setSeatIds((current) => current.filter((seatIds) => {
                    return seatIds !== id;
                }));
                setClicked(!clicked);
            }
        }}>
            {children}
        </SeatWrapper>
    );
}

export const SeatWrapper = styled.div`
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