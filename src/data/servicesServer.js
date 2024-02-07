import Swal from 'sweetalert2';
import axios from "axios";
import servicesStore from "./servicesStore";


export async function getServices() {
    const services = await axios.get("http://localhost:8787/services");
    servicesStore.setServices(services.data);
}


export async function addService(service) {
    const res = await axios.post("http://localhost:8787/service", service);
    if (res.status === 200) {
        servicesStore.addNewService(service);
        Swal.fire({
            icon: "success",
            title: "שירות חדש נוסף",
            showConfirmButton: false,
            timer: 2000,
        });
        return 'success';
    }
    else
        return 'failed';
}


