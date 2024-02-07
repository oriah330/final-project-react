import { useState } from "react"
import { observer } from "mobx-react"
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Select, FormControl, InputLabel, MenuItem } from '@material-ui/core';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Swal from 'sweetalert2';
import { addAppointment } from "../../data/appointmentServer";
import servicesStore from "../../data/servicesStore"
import '../../App.css';


const AddAppointment = (observer(() => {

    const [error, setError] = useState(false);

    const currentDate = new Date();

    const [newAppointment, setNewAppointment] = useState({
        dateTime: dayjs('2024-01-28T15:30'),
        field1: "",
        field2: "",
    });

    function handleChange(event) {
        const { id, value } = event.target;
        setNewAppointment(newAppointment => ({
            ...newAppointment,
            [id]: value
        }));
        setError(false);
    }


    function handleAddAppointment(e) {
        e.preventDefault();
        if (newAppointment.dateTime >= currentDate) {
            addAppointment(newAppointment)
                .then(x => handleClose())
                .catch(() => setError(true));
        }
        else {
            Swal.fire({
                icon: "error",
                title: "התאריך שנבחר אינו חוקי",
                showConfirmButton: false,
                timer: 3000,
                customClass: {
                }
            });
            setError(true);
        }
    }


    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
        setError(false);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button onClick={handleOpen} type='button' id='button'>לקביעת פגישה</Button>
            <Dialog open={open} onClose={handleClose} style={{ 'zIndex': 50 }}>
                <DialogTitle className='dialogTitle'>קביעת פגישה</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleAddAppointment} className='form'>
                        <TextField id='name' type='text' onChange={handleChange} />שם<br />
                        <TextField id='email' type='email' onChange={handleChange} />מייל<br />
                        <TextField id='phone' type='number' onChange={handleChange} />טלפון<br />
                        <LocalizationProvider dateAdapter={AdapterDayjs}><br />
                            <DateTimePicker
                                name="dateTime"
                                value={newAppointment.dateTime}
                                onChange={(newValue) => setNewAppointment({ ...newAppointment, dateTime: newValue })}
                                disablePast
                                className={`MuiOutlinedInput-root ${error ? 'error' : ''}`}
                            />
                        </LocalizationProvider><br /><br />
                       
                        <FormControl>
                            <InputLabel id="service-select-label">סוג השירות</InputLabel>
                            <Select
                                labelId="service-select-label"
                                id="service"
                                value={newAppointment.service}
                                onChange={(e) => setNewAppointment({ ...newAppointment, service: e.target.value })}
                            >
                                {servicesStore.services.map((service, index) => (
                                    <MenuItem key={index} value={service}>{service.name}</MenuItem>
                                ))}

                            </Select>
                        </FormControl>

                        <DialogActions className="btn">
                            <Button onClick={handleClose} type='button' variant="outlined">ביטול</Button>
                            <Button type="submit" variant="outlined">שמירה</Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    )
}))

export default AddAppointment
