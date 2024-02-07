import { makeObservable, observable, action } from 'mobx';

class businessStore {
    BD = {};

    constructor() {
        makeObservable(this, {
            BD: observable,
            setBD: action
        })
    }

    setBD = (data) => {
        this.BD = data;
    }
}

export default new businessStore();