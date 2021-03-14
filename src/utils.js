import Lodash from 'lodash';

export function getRandomArrayElement(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return Object.assign({}, arr[index], {id: index + 1});
}


export function renameKeysObjectToCamelCase(obj) {
    let result = {}
    Object.entries(obj).map(([key, value]) => Object.assign(result, {[Lodash.camelCase(key)]: value}));
    return result;
}

const compose = (...funcs) => (item) => {
    return funcs.reduceRight((current, fn) => {
        return fn(current)
    }, item);
}

export {compose};

