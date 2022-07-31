import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
    let { pathname } = useLocation();
    let navigate = useNavigate();

    return (
        <AppHeader>
            {pathname === "/" ? (
                <></>
            ) : (
                <BackButton
                    onClick={() => {
                        navigate(-1);
                    }}
                >
                    {"<-"}
                </BackButton>
            )}
            <Link to="/">
                <h1>CINEFLEX</h1>
            </Link>
        </AppHeader>
    );
}

const AppHeader = styled.header`
  width: 100vw;
  height: 67px;
  background-color: ${props => props.theme.header};
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;

  h1 {
    font-size: 34px;
    color: ${props => props.theme.headerFont};
  }
`;

const BackButton = styled.button`
    width: 30px;
    height: 30px;
    border: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: ${props => props.theme.headerFont};
    color: #ffffff;
    position: absolute;
    top: 18px;
    left: 15px;
    font-size: 18px;
`;