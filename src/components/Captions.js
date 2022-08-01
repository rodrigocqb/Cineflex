import styled from "styled-components";
import { SeatWrapper } from "./Seat";

export default function Captions() {
    return (
        <CaptionsWrapper>
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
        </CaptionsWrapper>
    );
}

const CaptionsWrapper = styled.div`
  display: flex;
  margin-top: 16px;
  justify-content: space-around;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${(props) => props.theme.captionsFont};
    font-size: 13px;
  }
`;

const Caption = styled(SeatWrapper)`
  background-color: ${(props) => {
        switch (props.color) {
            case "watergreen":
                return "#8DD7CF";

            case "gray":
                return "#C3CFD9";

            case "yellow":
                return "#FBE192";

            default:
                return;
        }
    }};
  border-color: ${(props) => {
        switch (props.color) {
            case "watergreen":
                return "#1AAE9E";

            case "gray":
                return "#7B8B99";

            case "yellow":
                return "#F7C52B";

            default:
                return;
        }
    }};
  margin-bottom: 8px;
`;
