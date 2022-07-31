import styled from "styled-components";

export default function ThemeSwitch({setTheme, theme}) {
    return (
        <Switch onClick={() => setTheme(!theme)} >
            {theme ? "Dark" : "Light"}
        </Switch>
    );
}

const Switch = styled.button`
    position: fixed;
    top: 25px;
    right: 20px;
    background-color: ${props => props.theme.body};
    border: 1px solid ${props => props.theme.mainFont};
    outline: none;
    border-radius: 5px;
    color: ${props => props.theme.mainFont};
`;