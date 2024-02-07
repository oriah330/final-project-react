import Swal from 'sweetalert2';
import axios from "axios";
import loginStore from "./loginStore";


export async function CheckLogin(name, password) {
    try {
        const isValid = await axios.post("http://localhost:8787/login", { name, password });
        if (isValid.status === 200) {
            loginStore.setIsLogin(true);
            console.log("success");
        }
    }
    catch (e) {
        if (e.response) {
            Swal.fire({
                icon: "error",
                title: "שם משתמש או סיסמה שגויים",
                showConfirmButton: false,
                timer: 2000,
            });
        }
        else {
            alert('server failed');
        }
        throw e
    }
}


