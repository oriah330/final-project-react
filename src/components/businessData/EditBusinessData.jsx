import { useState } from "react"
import { IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { observer } from "mobx-react"
import businessStore from "../../data/businessStore";
import { editBusinessData } from "../../data/businessServer";
import '../../App.css';

const EditBusinessData = (observer(() => {

    const [open, setOpen] = useState(false);
    const [data, setData] = useState(businessStore.BD);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function handleEditBusiness(e) {
        e.preventDefault();
        console.log(data)
        editBusinessData(data);
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }

    return (
        <>
            <div id='fab1'>
                <Fab aria-label="add">
                    < CreateOutlinedIcon onClick={handleOpen} />
                </Fab>
            </div>

            <div>
                <IconButton onClick={handleOpen}>
                </IconButton>
                <Dialog open={open} onClose={handleClose} >
                    <DialogTitle className='dialogTitle'>עריכת פרטי עסק</DialogTitle>
                    <DialogContent>
                        <form onSubmit={handleEditBusiness} className='form'>
                            <TextField name='adress' value={data.adress} onChange={handleChange} />כתובת<br />
                            <TextField name='email' value={data.email} onChange={handleChange} />מייל<br />
                            <TextField name='phone' value={data.phone} onChange={handleChange} />טלפון<br />
                            <DialogActions className="btn">
                                <Button onClick={handleClose} type='button' variant="outlined" >ביטול</Button>
                                <Button onClick={handleClose} type='submit' variant="outlined" >אישור</Button>
                            </DialogActions>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>
        </>
    )
}))

export default EditBusinessData
