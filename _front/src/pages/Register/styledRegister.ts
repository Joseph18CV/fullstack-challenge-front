import styled from "styled-components"

export const StyledRegister = styled.main`
    width: 100vw;
    height: 100vh;

    background-color: rgba(0,0,0,0.1);
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
        max-height: 100%;
    }

    form input {
        height: 35px;
        padding-left: 10px;
        border: 1px solid black;
        border-radius: 4px;
        color: black;
        font-weight: 500;
        outline: none;
    }

    form p {
        color: red;
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

    form button:hover {
        background-color: rgba(0,0,0,0.7);
    }

    a { 
        padding: 8px;
        color: white;
        background-color: blue;
    }

    a:hover {
        background-color: #1632ab;
    }

    .div-input-tel {
        display: flex;
        align-items: center;
        gap: 4px;
    }

    .input-tel {
        width: 100%;
    }

    .input-error {
        border: 1.5px solid red;
    }
`
