import {bindable, inject, customAttribute, DOM} from 'aurelia-framework';

@customAttribute('selectable')
@inject(DOM.Element)
export class Selectable {
    @bindable selectedId;
    oldSelectedItem;

    constructor(element) {
        this.element = element;
    }

    attached() {
        this.clickHandler = this.click.bind(this);
        this.element.addEventListener("click", this.clickHandler);
        this.element.classList.add("selectable");
    }

    detached() {
        this.element.removeEventListener("click", this.clickHandler);
        this.clickHandler = null;
    }

    click(event) {
        if (event.target.tagName === "UL") {
            return false;
        }

        const targetLi = this.parentLi(event.target);
        if (targetLi) {
            this.selectedId = this.getId(targetLi);
        }
    }

    parentLi(element) {
        if (element.tagName == "LI") {
            return element;
        }

        return this.parentLi(element.parentElement);
    }

    getId(target) {
        if (!target) {
            return null;
        }

        const id = target.dataset.id;

        if (id) {
            return id;
        }
        else {
            return this.getId(target.parentElement);
        }
    }

    selectedIdChanged()
    {
        var newSelectedElement = this.element.querySelectorAll('[data-id="' + this.selectedId + '"]')[0];
        var hold = this.element.querySelectorAll('[data-id="' + this.selectedId + '"]');

        if (this.oldSelectedItem) {
            this.oldSelectedItem.setAttribute("aria-selected", false);
        }

        if(newSelectedElement)
        {
            this.oldSelectedItem = newSelectedElement;
            newSelectedElement.setAttribute("aria-selected", true);
        }
    }
}