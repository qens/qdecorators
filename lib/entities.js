'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Animal = undefined;

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3;

var _decorators = require('./decorators');

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var Animal = exports.Animal = (_class =

/*toJson() {
    return this._remoteProps;
}*/
function Animal() {
    _classCallCheck(this, Animal);

    _initDefineProp(this, 'weight', _descriptor, this);

    _initDefineProp(this, 'name', _descriptor2, this);

    _initDefineProp(this, 'id', _descriptor3, this);
}
// Property for each instance

// Property for each instance

// Property for each instance, but only for UI
, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'weight', [_decorators.Remote], {
    enumerable: true,
    initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'name', [_decorators.Remote], {
    enumerable: true,
    initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'id', [_decorators.Remote], {
    enumerable: true,
    initializer: null
})), _class);