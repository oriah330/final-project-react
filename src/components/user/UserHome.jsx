import { useEffect } from 'react'
import { observer } from "mobx-react"
import servicesStore from "../../data/servicesStore"
import BusinessData from "../businessData/BusinessData"
import ListOfServices from "../services/ListOfServices"
import Header from '../design/Header'
import Body from '../design/Body'


const UserHome = (observer(() => {
    useEffect(() => {
        servicesStore.setShowButtonToTrue();
        console.log("user")
    }, [])

    return (
        <>
            <Header></Header>
            <BusinessData></BusinessData>
            <Body></Body>
            <ListOfServices></ListOfServices>
        </>
    )
}))

export default UserHome
