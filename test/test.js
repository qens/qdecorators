var assert = require('assert');
var expect = require('chai').expect;
import 'babel-polyfill';
import {describe, it} from "mocha";
import {Animal} from './../src/entities';

describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal(-1, [1, 2, 3].indexOf(4));
        });
    });
});

describe('QEntity', () => {
    describe('#_remoteProps', () => {
        it('should not present properties which are not decorated as remote', () => {
            let animal = new Animal();
            let _remoteProps = animal._remoteProps;
            expect(_remoteProps).to.have.lengthOf(3);

        })
    })
});