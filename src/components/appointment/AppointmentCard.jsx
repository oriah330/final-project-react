import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { observer } from 'mobx-react';



const AppointmemtCard = observer(({ appointment }) => {

    const currentDate = new Date();
    let color;
    if (new Date(appointment.dateTime).toDateString() == currentDate.toDateString()) {
        color = 'red';
    } else if (new Date(appointment.dateTime) <= currentDate.setDate(currentDate.getDate() + 7) &&
        new Date(appointment.dateTime) >= currentDate.setDate(currentDate.getDate() - 14)
    ) {
        color = 'orange';
    } else {
        color = 'green';
    }


    return (
        <div style={{ marginTop: '80px' }}>
            <Card sx={{ maxWidth: 350, height: 280 }} >
                <CardActionArea>
                    <CardContent>
                        <Typography variant="h6">
                            <strong> פגישה עבור: {appointment.service?.name} </strong>
                        </Typography>
                        <Typography variant="h5" component="div" style={{ color }}>
                            {new Date(appointment.dateTime).toLocaleString()}
                        </Typography>
                        <Typography variant="h5" component="div"><br />
                            -פרטי לקוח-
                        </Typography>
                        <Typography variant="h6" component="div">
                            {appointment.name}
                        </Typography>
                        <Typography variant="h6">
                            {appointment.phone}
                        </Typography>
                        <Typography variant="h6">
                            {appointment.email}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
});

export default AppointmemtCard