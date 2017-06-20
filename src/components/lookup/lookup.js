import {bindable, customElement, inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {filter} from './../../lib/filter';

@customElement('lookup')
@inject(Element, EventAggregator)
export class Lookup {
    /**
     * Backup of items as fallback after filter
     */
    backupItems;

    /**
     * Event fired when someone is looking to open the lookup
     */
    lookupEvent;

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
     * @param element
     */
    constructor(element, eventAggregator) {
        this.element = element;
        this.eventAggregator = eventAggregator;
    }

    /**
     * Aurelia life cycle
     */
    attached() {
        this.lookupHandler = this.lookup.bind(this);
        this.lookupEvent = this.eventAggregator.subscribe("lookup-request", this.lookupHandler);
    }

    /**
     * Aurelia life cycle
     */
    detached() {
        this.lookupEvent.dispose();
        this.lookupEvent = null;
        this.lookupHandler = null;

        this.dispose();
    }

    /**
     * Clean up resources and close the lookup
     */
    dispose() {
        this.element.classList.add("hidden");
        this.items = null;
        this.backupItems = null;
    }

    /**
     * Perform a lookup
     * @param args
     */
    lookup(args) {
        this.items = args.slice(0);
        this.backupItems = args.slice(0);
        this.element.classList.remove("hidden");
    }

    /**
     * Perform lookup acceptance
     */
    accept() {
        const result = this.items.find(item => item.id == this.selectedId);
        this.eventAggregator.publish("lookup-result", result);
        this.dispose();
    }

    /**
     * Perform cancel acceptance
     */
    cancel() {
        this.dispose();
    }

    /**
     * Search text changes, filter the list
     * @param newValue
     */
    searchTextChanged(newValue) {
        if (!newValue || newValue.length == 0) {
            return this.items = this.backupItems.slice(0);
        }

        this.items = filter(newValue, this.backupItems);
    }
}