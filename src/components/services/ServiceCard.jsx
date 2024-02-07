import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { observer } from 'mobx-react';
import servicesStore from "../../data/servicesStore"
import AddAppointment from '../appointment/AddAppointment';


const ServiceCard = observer(({ service }) => {

    return (
        <div style={{ marginTop: '80px' }}>
            <Card sx={{ maxWidth: 450, height: 150, border: '2px solid rgb(255, 225, 240)' }} >
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {service.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {service.desc}
                        </Typography>
                    </CardContent>
                </CardActionArea>

                {servicesStore.showButton && (
                    <CardActions>
                        <AddAppointment></AddAppointment>
                    </CardActions>
                )}
            </Card>
        </div>
    );
});

export default ServiceCard