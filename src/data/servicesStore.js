import { makeObservable, observable, action } from 'mobx';
import evening from '../images/evening.jpg';
import bride from '../images/bride.png';
import group from '../images/group.jpg';

class servicesStore {
    services = [];
    showButton = false;


    constructor() {
        makeObservable(this, {
            services: observable,
            setServices: action,
            addNewService: action,
            showButton: observable,
            setShowButtonToTrue: action
        })
    }

    setServices = (data) => {
        console.log(data)
        if (data.length) {
            this.services = [...defaultServices, ...data];
        }
        else {
            this.services = defaultServices;
        }
    }

    addNewService = (service) => {
        this.services = [...this.services, service];
    }

    setShowButtonToTrue() {
        this.showButton = true;
    }
}

export default new servicesStore();

const defaultServices = [
    { name: 'איפור ערב', desc: ' איפור עמיד במיוחד המותאם אישית לתווי הפנים', image: evening },
    { desc: 'למידה חוויתית בקבוצות קטנות להעשרת הידע המקצועי שלך', name: 'סדנת איפור קבוצתית', image: group },
    { name: 'הטבות ומבצעים לכלה', desc: 'חבילות משתלמות במיוחד עם מגוון אפשרויות לכלה', image: bride },
    // { name: 'סדנת איפור אישית' }
]