import { StyledNotContacts } from "./styledNotContacts"
import { FaUserPlus } from "react-icons/fa"

export const NotContacts = () => {
    return (
        <>
            <StyledNotContacts>
                <p>Nenhum contato encontrado!</p>
                <span>Clique no <FaUserPlus/> para adicionar um contato</span>
            </StyledNotContacts>
        </>
    )
}