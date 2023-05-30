import styled from "styled-components"

export const StyledModalEditClient = styled.div`
    background-color: rgba(0,0,0, .5);
    width: 100vw;
    height: 100vh;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;

    .container {
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 40px;
        width: 500px;
        position: relative;
    }

    .button-x {
        position: absolute;
        top: 10px;
        right: 10px;
        border: transparent;
        font-size: 25px;
        outline: none;
        background-color: transparent;
        color: black;
        font-weight: 700;
    }

    .container h2 {
        font-weight: 600;
        margin-bottom: 20px;
    }

    .container form {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 18px;
    }

    form label {
        font-size: 18px;
        font-weight: 500;
    }

    input {
        width: 100%;
        height: 36px;
        padding-left: 5px;
        border-radius: 4px;
        outline: none;
    }

    .example {
        color: green;
        display: flex;
        text-align: left;
        font-weight: 400;
        font-size: 12px;
    }

    p {
        color: red;
        font-weight: 550;
        text-align: center;
    }

    .input-error {
        border: 1.5px solid red;
    }

    button {
        padding: 8px;
        color: white;
        background-color: blue;
        margin-top: 10px;
    }

    .div-input-tel {
        display: flex;
        align-items: center;
        gap: 4px;
    }

    button {
        height: 40px;
        outline: none;
        border: transparent;
        font-size: 18px;
    }

`