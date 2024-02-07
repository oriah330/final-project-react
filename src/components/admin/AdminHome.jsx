import { Button } from '@material-ui/core';
import { Outlet, Link, useParams } from "react-router-dom"
import AddService from "../services/AddService";
import BusinessData from "../businessData/BusinessData";
import Header from "../design/Header";
import '../../App.css'


function AdminHome() {

    return (
        <>
            <Header></Header>

            <div id='buttons'>
                <Button component={Link} to="./appointments" variant="outlined">רשימת פגישות</Button>
                <Button component={Link} to="./services" variant="outlined">רשימת השירותים</Button>
                <AddService></AddService>
            </div>
            <BusinessData></BusinessData>

            <div id="mainDiv" >
                <Outlet></Outlet>
            </div>
        </>
    )
}

export default AdminHome
