import axios from "axios";
import businessStore from "./businessStore";

export async function getBusinessData() {
    const res = await axios.get("http://localhost:8787/businessData");
    businessStore.setBD(res.data);
}

export async function editBusinessData(data) {
    const res = await axios.put("http://localhost:8787/businessData",data);
    businessStore.setBD(res.data);
}