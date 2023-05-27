import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { FaUserEdit } from "react-icons/fa";

interface Contacts {
    id: number,
    name: string,
    email: string
}

interface Client {
    id: number,
    name: string,
    email: string,
    password: string,
    telephone: string
}

export const Dashboard = () => {

    const token = localStorage.getItem("token")
    const [contacts, setContacts] = useState<Contacts[]>([])
    const [clients, setClients] = useState<Client>()

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
        <nav>
            <div className="div-nav">
                <h2>Company</h2>
                <div className="div-nav-client">
                    <p>{clients?.name}</p>
                    <FaUserEdit/>
                </div>
            </div>
        </nav>
            <ul>
                {contacts.map(contact => <li key={contact.id}>{contact.name}</li>)}
            </ul>
        </>
    )
}