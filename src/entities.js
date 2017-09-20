import {Remote} from './decorators';

export class Animal {

    // Property for each instance
    @Remote
    weight;
    // Property for each instance
    @Remote
    name;
    // Property for each instance
    @Remote
    id;
    // Property for each instance, but only for UI
    virtualId;

    /*toJson() {
        return this._remoteProps;
    }*/
}