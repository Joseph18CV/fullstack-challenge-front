import { styled } from "styled-components"

export const StyledModalDeleteUser = styled.div`
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
        gap: 20px;
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

    p {
        font-size: 18px;
    }

    span {
        font-size: 18px;
        color: red;
        font-weight: 600;
    }

    .buttons {
        display: flex;
        gap: 30px;
    }

    button {
        padding: 12px;
        outline: none;
        border: transparent;
        font-size: 18px;
    }

    .confirm-button {
        background-color: green;
        color: white;
        border-radius: 4px;
    }

    .cancel-button {
        background-color: red;
        color: white;
        border-radius: 4px;
    }

`
