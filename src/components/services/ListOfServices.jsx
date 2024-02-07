import { useEffect } from 'react'
import { observer } from "mobx-react"
import Grid from '@mui/material/Grid';
import servicesStore from "../../data/servicesStore"
import { getServices } from '../../data/servicesServer'
import ServiceCard from './ServiceCard'


const ListOfServices = (observer(() => {

    useEffect(() => {
        if (!servicesStore.services.length > 0) {
            getServices();
        }
    }, []);


    return (
        <>
            <Grid container spacing={2}>
                {servicesStore.services.map((service, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        <ServiceCard service={service} />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}))

export default ListOfServices