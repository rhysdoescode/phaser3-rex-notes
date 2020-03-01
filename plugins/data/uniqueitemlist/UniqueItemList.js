import IsPlainObject from '../../utils/object/IsPlainObject.js';
import GetValue from '../../utils/object/GetValue.js';
import DestroyCallbackMethods from './DestroyCallbackMethods.js';
import ContainMethods from './ContainMethods.js';
import ArrayMethods from './ArrayMethods.js';
import SetMethods from './SetMethods.js';
import Clone from '../../utils/object/Clone.js';

class UniqueItemList {
    constructor(items, config) {
        if (IsPlainObject(items)) {
            config = items;
            items = GetValue(config, 'items', undefined);
        }

        this.items = [];
        this.enableDestroyCallback(GetValue(config, 'enableDestroyCallback', true));
        if (items) {
            this.addMultiple(items);
        }
    }

    destroy(destroyItems) {
        this.clear(destroyItems);
        this.items = undefined;
    }

    getItems() {
        return this.items;
    }

    cloneItems(out) {
        return Clone(this.items, out);
    }

    isList(item) {
        return (item instanceof UniqueItemList);
    }

    newList(items) {
        var config = {
            enableDestroyCallback: this._enableDestroyCallback
        }
        return new UniqueItemList(items, config);
    }

    get length() {
        return this.items.length;
    }
}

Object.assign(
    UniqueItemList.prototype,
    DestroyCallbackMethods,
    ContainMethods,
    ArrayMethods,
    SetMethods
)

export default UniqueItemList;