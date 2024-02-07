import { makeObservable, observable, action } from 'mobx';


class appointmentStore {
    appointments = [];
    isAppointment=true;

    constructor() {
        makeObservable(this, {
            appointments: observable,
            setList: action,
            setAdd: action,
            isAppointment: observable,
            setIsAppointment: action
        })
    }

    setList = (appointments) => {
        appointments.sort((a, b) => a.dateTime > b.dateTime ? 1 : -1);
        this.appointments = appointments;
    }


    setAdd = (appointment) => {
        const li = [...this.appointments, appointment];
        li.sort((a, b) => a.dateTime > b.dateTime ? 1 : -1);
        this.appointments = li;
    }

    setIsAppointment = (status) => {
        this.isAppointment = status;
    }
}

export default new appointmentStore();