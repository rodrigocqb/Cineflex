import { useLocation } from "react-router-dom";

export default function () {
    const { state } = useLocation();
    console.log(state);

    return (
        <>

        </>
    );
}