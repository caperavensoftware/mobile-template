import {bindable, inject} from "aurelia-framework";
import {Router} from 'aurelia-router';
import {EventAggregator} from 'aurelia-event-aggregator';
import {filter} from './../../lib/filter';

@inject(EventAggregator, Router)
export class List {
    /**
     * backup of items as fallback after filter
     */
    backupItems;

    /**
     * List of data items bound to and shown in the  list
     */
    @bindable items;

    /**
     * Id of selected item
     */
    @bindable selectedId;

    /**
     * text being search on
     */
    @bindable searchText;

    /**
     * Constructor
     * @param router
     */
    constructor(eventAggregator, router) {
        this.eventAggregator = eventAggregator;
        this.router = router;
    }

    /**
     * Aurelia life cycle event
     */
    attached() {
        this.fetchRecords().then(result => {
            this.items = result.slice(0);
            this.backupItems = result.slice(0);
        });
    }

    /**
     * Aurelia life cycle event
     */
    detached() {
        this.items = null;
        this.backupItems = null;
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
        const event = this.eventAggregator.subscribe("lookup-result", result => {
           console.log(result);
           event.dispose();
        });

        this.eventAggregator.publish("lookup-request", this.items);
    }

    searchTextChanged(newValue) {
        if (!newValue || newValue.length == 0) {
            return this.items = this.backupItems.slice(0);
        }

        this.items = filter(newValue, this.backupItems);
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