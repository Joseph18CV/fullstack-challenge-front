import { conUser } from "../../hooks/useAuth"
import { StyledModalDeleteUser } from "./styledModalDeleteUser"

export const ModalDeleteUser = () => {

    const {userDelete, setIsOpenModalDeleteuser} = conUser()

    return (
        <StyledModalDeleteUser>
            <div className="container">
                <button className="button-x" onClick={() => setIsOpenModalDeleteuser(false)}>X</button>
                <p>Tem certeza que deseja excluir sua conta?</p>
                <span>Essa ação não pode ser desfeita</span>
                <div className="buttons">
                    <button onClick={() => userDelete()} className="confirm-button">Confirmar</button>
                    <button onClick={() => setIsOpenModalDeleteuser(false)} className="cancel-button">Cancelar</button>
                </div>
            </div>
        </StyledModalDeleteUser>
    )
}