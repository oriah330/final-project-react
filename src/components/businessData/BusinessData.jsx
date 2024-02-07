import { observer } from "mobx-react"
import { Typography } from '@material-ui/core';
import { useEffect } from "react";
import loginStore from "../../data/loginStore";
import EditBusinessData from "./EditBusinessData"
import businessStore from "../../data/businessStore";
import { getBusinessData } from "../../data/businessServer";
import '../../App.css';


const BusinessData = (observer(() => {

    useEffect(() => {
        getBusinessData();
    }, [])

    return (
        <>
            {businessStore.BD ? <div id='business'>
                <Typography> <strong id='strong'>כתובת:</strong> {businessStore.BD.adress}</Typography>
                <Typography>{businessStore.BD.email} <strong id='strong'>:מייל</strong></Typography>
                <Typography>{businessStore.BD.phone} <strong id='strong'>:טלפון</strong></Typography>
                {loginStore.isLogin && <EditBusinessData></EditBusinessData>}
            </div> : null}

        </>
    )
}))

export default BusinessData




