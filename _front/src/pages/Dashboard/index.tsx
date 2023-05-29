import { useEffect } from "react"
import { GrLogout } from "react-icons/gr"
import { api } from "../../services/api"
import { FaUserSlash, FaUserEdit } from "react-icons/fa"
import { StyledDashboard, StyledDashboardNav } from "./styledDashboard"
import { NotContacts } from "../../components/NotContacts/notContacts"
import { FaUserPlus } from "react-icons/fa"
import { FaUser } from "react-icons/fa"
import { conUser, useAuth } from "../../hooks/useAuth"
import { Client, Contacts } from "../../providers/AuthProvider"
import { ModalAddContact } from "../../components/ModalAddContact"
import { ModalDeleteUser } from "../../components/ModalDeleteUser"

export const Dashboard = () => {

    const token = localStorage.getItem("token")
    const {clients, contacts, setClients, setContacts, logOut} = useAuth()
    const {setIsOpenModal, isOpenModal, setIsOpenModalDeleteuser, isOpenModalDeleteUser, setIsOpenModalDeleteContact, isOpenModalDeleteContact, contactDelete} = conUser()

    const toggleModal = () => setIsOpenModal(!isOpenModal)
    const toggleModalDeleteUser = () => setIsOpenModalDeleteuser(!isOpenModalDeleteUser)

    useEffect(() => {
        const getContacts = async () => {
            const response = await api.get<Contacts[]>("contact", {
                headers: {Authorization: `Bearer ${token}`}
            })

            setContacts(response.data)
        }
        getContacts()
    }, [])

    useEffect(() => {
        const getClient = async () => {
            const response = await api.get<Client>("client", {
                headers: {Authorization: `Bearer ${token}`}
            })

            setClients(response.data)
        }
        getClient()
    }, [])

    return (
        <>
        {isOpenModalDeleteUser && <ModalDeleteUser/>}
        {isOpenModal && <ModalAddContact/>}
        <StyledDashboard>
        <StyledDashboardNav>
            <div className="div-nav">
                <h2>Company</h2>
                <div className="div-nav-client">
                    <button>Cliente: {clients?.name}</button>
                    <FaUserEdit className="img-nav"/>
                    <FaUserSlash onClick={toggleModalDeleteUser} className="img-nav"/>
                    <GrLogout onClick={() => logOut()} className="img-leave" />
                </div>
            </div>
        </StyledDashboardNav>
        <main>
            <button onClick={toggleModal} className="button-add-contact"><FaUserPlus/></button>
            {contacts?.length > 0
            ?
            <ul>
                {contacts.map(contact => <li key={contact.id}>
                    <div>
                        <span><FaUser/></span>
                        <p>Contato: {contact.name}</p>
                    </div>
                    <div>
                        <p>Telefone: +{contact.telephone}</p>
                        <FaUserSlash onClick={() => contactDelete(contact.id)} className="img-nav"/>
                    </div>
                    </li>
                    )}
            </ul>
            :
            <NotContacts/>
            }
        </main>
        </StyledDashboard>
        </>
    )
}