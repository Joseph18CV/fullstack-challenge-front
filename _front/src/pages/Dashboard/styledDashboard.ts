import styled from "styled-components"

export const StyledDashboardNav = styled.nav`
    width: 100vw;
    top: 0;
    background-color: #164aff;
    display: flex;
`

export const StyledDashboard = styled.div`
    background-color: rgba(0,0,0,0.1);
    height: 100vh;

    .div-nav {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        padding: 15px;
    }

    .div-nav h2 {
        color: white;
        font-weight: 600;
        font-size: 25px;
    }

    .div-nav-client {
        display: flex;
        background-color: white;
        padding: 8px;
        width: 260px;
        justify-content: space-between;
        border-radius: 8px;
        align-items: center;
        text-align: center;
    }

    .div-nav-client button {
        color: black;
        font-weight: 550;
        font-size: 15px;
        background-color: transparent;
        border: none;
    }

    .img-nav {
        font-size: 30px;
        background-color: rgba(0,0,0,0.1);
        padding: 5px;
        border-radius: 4px;
    }

    .img-nav:hover {
        background-color: rgba(0,0,0,0.3);
    }

    .img-leave {
        font-size: 30px;
        background-color: #c50000;
        padding: 5px;
        border-radius: 4px;
    }

    .img-leave:hover {
        background-color: red;
    }

    main {
        width: 80%;
        margin: 60px auto;
    }

    .button-add-contact {
        width: 45px;
        height: 30px;
        margin-bottom: 8px;
        border-radius: 4px;
        background-color: #16ce00;
        font-size: 18px;
        border: 1.5px solid green;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    li {
        background-color: rgba(0,0,0, .1);
        display: flex;
        justify-content: space-between;
        height: 80px;
        align-items: center;
        text-align: center;
        padding: 20px;
        border: 1px solid black;
        border-radius: 4px;
    }

    li:hover {
        background-color: rgba(0,0,0, .2);
    }

    li div {
        display: flex;
        align-items: center;
        text-align: center;
        gap: 15px;
        font-size: 20px;
    }

    li div span {
        background-color: white;
        border-radius: 35%;
        padding: 8px;
    }

    .button-edit-contact {
        padding: 6px;
        border: 1.5px solid black;
        background-color: white;
    }
`