import { useState } from "react";
import styled from "styled-components";

export default function Seat({
    children,
    isAvailable,
    id,
    seatIds,
    setSeatIds,
    name,
    seatNames,
    setSeatNames,
}) {
    const [clicked, setClicked] = useState(false);

    return (
        <SeatWrapper
            isAvailable={isAvailable}
            clicked={clicked}
            onClick={() => {
                if (!isAvailable) {
                    alert("Esse assento não está disponível");
                } else if (seatIds.includes(id) === false) {
                    setSeatIds([...seatIds, id]);
                    setSeatNames([...seatNames, name]);
                    setClicked(!clicked);
                } else {
                    setSeatIds((current) =>
                        current.filter((seatIds) => {
                            return seatIds !== id;
                        })
                    );
                    setSeatNames((current) =>
                        current.filter((seatNames) => {
                            return seatNames !== name;
                        })
                    );
                    setClicked(!clicked);
                }
            }}
        >
            {children}
        </SeatWrapper>
    );
}

export const SeatWrapper = styled.div`
  width: 26px;
  height: 26px;
  background-color: ${(props) => {
        if (props.isAvailable === false) {
            return "#FBE192";
        } else if (props.clicked === true) {
            return "#8DD7CF";
        } else {
            return "#C3CFD9";
        }
    }};
  border: 1px solid
    ${(props) => {
        if (props.isAvailable === false) {
            return "#F7C52B";
        } else if (props.clicked === true) {
            return "#1AAE9E";
        } else {
            return "#7B8B99";
        }
    }};
  border-radius: 12px;
  color: #000000;
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
