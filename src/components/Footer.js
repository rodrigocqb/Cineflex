import styled from "styled-components";

export default function Footer({ img, title }) {
    return (
        <AppFooter>
            <Container>
                <img src={img} />
            </Container>
            <div>
                <span className="chosen-title">{title}</span>
            </div>
        </AppFooter>
    );
}

const AppFooter = styled.footer`
    width: 100vw;
    height: 117px;
    border-top: 1px solid #9EADBA;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    background-color: #DFE6ED;
    padding-left: 10px;
    
    span {
    font-size: 26px;
    }`;

const Container = styled.div`
    width: 64px;
    height: 88px;
    padding: 8px;
    background-color: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    margin-right: 15px;
    
    img {
    width: 48px;
    height: 72px;
    }`;