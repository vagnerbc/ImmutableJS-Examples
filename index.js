const { Record, Map, is, fromJS, Seq, List } = require('immutable');

/**
 * Record
 */
const myRecord = Record({ name: 'Vagner', idade: 29 });

/**
 * Seq - Seq describes a lazy operation, 
 * allowing them to efficiently chain use of all the higher-order collection methods (such as map and filter) 
 * by not creating intermediate collections.
 */
const oddSquares = Seq([1, 2, 3, 4, 5, 6, 7, 8])
    .filter(x => {
        console.log('filter');

        return x % 2 !== 0
    })
    .map(x => {
        console.log('map');

        return x * x
    });

// Once the Seq is used, it performs only the work necessary. 
// In this example, no intermediate arrays are ever created, filter is called three times, and map is only called once
console.log(oddSquares.get(1));


/**
 * Map
 */
const mapA = Map({ a: 1, b: 2, c: 3 });
const mapAA = Map({ a: 1, b: 2, c: 3 });

// Immutable.js collections are treated as pure data values. 
// Two immutable collections are considered value equal (via .equals() or is()) if they represent the same collection of values.
console.log('equals : ', mapA.equals(mapAA)); // true
console.log('is : ', is(mapA, mapAA)); // true

const mapB = Map({ c: 3.1, d: 2, e: 3 });
console.log('merge : ', mapA.merge(mapB));

// Javascript map
const mapC = { 1: 'a', 2: 'b', 3: 'c' };

// Convert javascript to immutable
const mapD = fromJS(mapC);
console.log('fromJS : ', mapD);


// All Immutable.js Collections can be converted to plain JavaScript Arrays and Objects
let mapE = mapD.toJS();
console.log('toJS : ', mapE);
mapE = mapD.toObject();
console.log('toObject : ', mapE);
mapE = mapD.toArray();
console.log('toArray : ', mapE);


const myMap = Map({ a: Map({ 1: 'one' }), b: Map({ 2: 'two' }) });
console.log('get : ', myMap.get('a'));

console.log('mapKeys : ', myMap.mapKeys(key => key + '_'));

console.log('mapEntries : ', myMap.mapEntries(([key, value]) => [key, value.merge({ 2: 'two' })]));

console.log('toOrderedMap : ', myMap.toOrderedMap().toJS());

console.log('valueSeq : ', myMap.valueSeq().toJS());

console.log('keySeq : ', myMap.keySeq());

console.log('entrySeq: ', Map({ 1: 'a', 2: 'b', 3: 'b' }).entrySeq().toJS());

console.log('valueSeq: ', Map({ 1: 'a', 2: 'b', 3: 'b' }).valueSeq().toJS());

console.log('flip : ', myMap.flip());

console.log('filter : ', Map({ a: 1, b: 2, c: 3, d: 4 }).filter(x => x % 2 === 0));

console.log('filterNot : ', Map({ a: 1, b: 2, c: 3, d: 4 }).filterNot(x => x % 2 === 0));

console.log('groupBy : ', List([
    Map({ v: 0 }),
    Map({ v: 1 }),
    Map({ v: 1 }),
    Map({ v: 0 }),
    Map({ v: 2 })
]).groupBy(x => x.get('v')));

console.log('toSeq : ', Map({ 1: 'a', 2: 'b' }).toSeq().toJS())

console.log('toKeyedSeq : ', List(['a', 'b']).toKeyedSeq().toJS())

console.log('toIndexedSeq : ', Map({ 1: 'a', 2: 'b', 3: 'b' }).toIndexedSeq().toJS())

console.log('toSetSeq : ', Map({ 1: 'a', 2: 'b', 3: 'b' }).toSetSeq().toJS())

console.log('toSet: ', Map({ 1: 'a', 2: 'b', 3: 'b' }).toSet().toJS())

console.log('toList: ', Map({ 1: 'a', 2: 'b', 3: 'b' }).toList().toJS())

console.log('toStack: ', Map({ 1: 'a', 2: 'b', 3: 'b' }).toStack().toJS())





