
/**
 * @param {any} data
 * @return {string}
 */
function stringify(data) {
    if (typeof data === 'bigint') throw 'Expected function to throw an exception';

    if (data === null || data === undefined || data === Infinity || Number.isNaN(data) || typeof data === 'symbol') return null;

    if (data instanceof Date) return `"${data.toJSON()}"`;

    if (data instanceof Function) return undefined;

    if (typeof data === 'string') return `"${data}"`;

    if (Array.isArray(data)) {
        const elements = data.map(value => `${stringify(value)}`);
        return `[${elements.join(',')}]`;
    }

    if (typeof data === 'object') {
        const keys = Object.keys(data);
        const pairsKeys = keys.filter(key => data[key] !== undefined && data[key] !== Infinity).map(key => `"${key}":${stringify(data[key])}`);
        return `{${pairsKeys.join(',')}}`;
    }

    return String(data);
}
