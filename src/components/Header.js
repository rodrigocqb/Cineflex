import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
    return (
        <AppHeader>
            <Link to="/" >
                <h1>CINEFLEX</h1>
            </Link>
        </AppHeader>
    )
}

const AppHeader = styled.header`
    width: 100vw;
    height: 67px;
    background-color: #C3CFD9;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    
    h1 {
    font-size: 34px;
    color: #E8833A;
    }`;