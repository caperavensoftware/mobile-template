import {bindable, inject} from "aurelia-framework";
import {EventAggregator} from 'aurelia-event-aggregator';
import {Router} from 'aurelia-router';

@inject(EventAggregator, Router)
export class List {
    constructor(eventAggregator, router) {
        this.eventAggregator = eventAggregator;
        this.router = router;
    }

    attached() {
        // initialize
    }

    detached() {
        // dispose
    }
}