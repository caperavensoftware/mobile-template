import {expect, assert} from 'chai';
import 'aurelia-polyfills';
import {ElementMockup} from './../../mockups/element-mockup';
import {Lookup} from './../../../src/components/lookup/lookup';

describe('Lookup Tests', function() {
    let instance;
    let element;

    beforeEach(function() {
        element = new ElementMockup();
        instance = new Lookup(element);
    });

    it('constructor', function() {
        expect(instance).to.not.be.null;
    });

    it('not constructor', function() {
        expect(() => Lookup()).to.throw("Cannot call a class as a function");
    });
});