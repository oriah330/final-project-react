import Swal from 'sweetalert2';
import axios from "axios";
import appointmentStore from "./appointmentStore";
import '../App.css'


export async function getAppointment() {
    const res = await axios.get("http://localhost:8787/appointments");
    appointmentStore.setList(res.data);
}


export async function addAppointment(appointment) {
    try {
        const res = await axios.post("http://localhost:8787/appointment", appointment);
        if (res.status === 200) {

            appointmentStore.setAdd(appointment);
            Swal.fire({
                icon: "success",
                title: "פגישה נקבעה בהצלחה",
                showConfirmButton: false,
                timer: 3000,
            });
        }
    }
    catch (e) {
        Swal.fire({
            icon: "error",
            title: "תאריך ושעה שנבחרו תפוסים",
            showConfirmButton: false,
            timer: 3000,
            customClass: {
            }
        });
        throw e;
    }
}


