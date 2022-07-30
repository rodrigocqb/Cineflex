import styled, { keyframes } from "styled-components";

export default function Loader() {
    return (
        <LoaderWrapper>
            <Spinner></Spinner>
        </LoaderWrapper>
    );
}

const Container = styled.div`
  border: 16px solid #f3f3f3;
  border-top: 16px solid #293845;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: 2s linear infinite;
`;

const Spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

export const Spinner = styled(Container)`
  animation-name: ${Spin};
  margin-top: 60%;
`;

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;  
`;
