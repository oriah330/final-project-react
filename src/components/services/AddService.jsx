import { useState } from "react"
import { observer } from "mobx-react"
import Fab from '@material-ui/core/Fab';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@material-ui/core';
import { addService } from "../../data/servicesServer";


const AddService = (observer(() => {

    const [newService, setNewService] = useState({ name: '' });

    function handleChange(event) {
        const { id, value } = event.target;
        setNewService(newService => ({
            ...newService,
            [id]: value
        }));
    }


    function handleAddService(e) {
        e.preventDefault();
        addService(newService);
    }


    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <>
            <div id='fab2'>
                <Fab aria-label="add">
                    <AddCircleIcon onClick={handleOpen} />
                </Fab>
            </div>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle className='dialogTitle'>הוספת שירות לעסק</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleAddService} className='form'>
                        <TextField id='name' onChange={handleChange} /> סוג שירות<br />
                        <TextField id='desc' onChange={handleChange} /> תיאור<br />
                        <DialogActions className="btn">
                            <Button onClick={handleClose} type='button' variant="outlined">ביטול</Button>
                            <Button onClick={handleClose} type="submit" variant="outlined">שמירה</Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    )
}))

export default AddService
