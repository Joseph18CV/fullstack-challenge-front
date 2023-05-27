import styled from "styled-components"

export const StyledRegister = styled.main`
    width: 100vw;
    height: 100vh;

    background-color: #66CDAA;
    display: flex;
    align-items: center;

    .div-form {
        width: 600px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        text-align: center;
        background-color: white;
        border: 2px solid black;
        padding: 30px;
    }

    h1 {
        color: black;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 15px;
        margin: 10px;
        text-align: center;
    }

    form input {
        height: 35px;
        padding-left: 10px;
        border: 1px solid black;
        border-radius: 4px;
        color: black;
        font-weight: 500;
    }

    form p {
        color: green;
        font-weight: 550;
    }

    form label {
        font-weight: 600;
        text-align: left;
    }

    .example {
        color: green;
        display: flex;
        text-align: left;
        font-weight: 400;
        font-size: 12px;
    }

    form button {
        height: 35px;
        margin-top: 20px;
        border: none;
        border-radius: 4px;
        background-color: black;
        color: white;
        font-weight: 500;
        font-size: 18px;
    }

    a { 
        padding: 8px;
        color: white;
        background-color: blue;
    }

    .div-input-tel {
        display: flex;
        align-items: center;
        gap: 4px;
    }

    .input-tel {
        width: 100%;
    }
`