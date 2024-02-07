import { useEffect } from 'react'
import { Grid } from '@mui/material'
import { observer } from "mobx-react"
import { getAppointment } from '../../data/appointmentServer'
import AppointmemtCard from './AppointmentCard'
import appointmentStore from "../../data/appointmentStore"


const ListOfAppointments = (observer(() => {

    useEffect(() => {
        if (!appointmentStore.appointments.length > 0) {
            getAppointment();
        }
    }, []);


    return (
        <>
            <Grid container spacing={2}>
                {appointmentStore.appointments.map((appointment, index) => (
                    <Grid item key={index} xs={12} sm={6} md={3}>
                        <AppointmemtCard appointment={appointment} />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}))

export default ListOfAppointments