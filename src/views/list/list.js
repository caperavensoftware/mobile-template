import {bindable, inject} from "aurelia-framework";
import {Router} from 'aurelia-router';

@inject(Router)
export class List {
    @bindable items;
    @bindable selectedId;

    constructor(router) {
        this.router = router;
    }

    attached() {
        // initialize
        this.fetchRecords().then(result => this.items = result);
    }

    detached() {
        // dispose
        this.items = null;
    }

    /**
     * Override this method to fetch the list items you require
     * @returns {Array}
     */
    fetchRecords() {
        return new Promise(resolve => {
            const result = [];

            for(let i = 0; i < 100; i++) {
                result.push(new Model(i, `Item ${i}`));
            }

            resolve(result);
        });
    }


    selectedIdChanged(newValue) {
        console.log(`Selected id is ${newValue}`);
    }

    defaultAction() {
        console.log(this.selectedId);
    }
}

/**
 * Populate this model with the properties your service will return on the models
 */
class Model {
    id;
    title;

    constructor(id, title) {
        this.id = id;
        this.title = title;
    }
}