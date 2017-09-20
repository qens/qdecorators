"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Remote = exports.Remote = function Remote(target, name, descriptor) {
    target._remoteProps = target._remoteProps || [];
    target._remoteProps.push(name);
};