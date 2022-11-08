let message: string = "Hello world"
message += ' again'
console.log(message);


// =============================================================================
//                                 PRIMITIVE TYPES
// =============================================================================

let isPresent: boolean = false
let magic: number = 66.6
let hello: string = 'world'

let notDefined: undefined = undefined
let notPresent: null = null

let penta: symbol = Symbol('star')
let biggy: bigint = 24n


// =============================================================================
//                                 INSTANCE TYPES
// =============================================================================

let regexp: RegExp = new RegExp('ab+c')

let array: Array<number> = [1, 2, 3]

let set: Set<number> = new Set([1, 2, 3])

// a first in first out collection
class Queue<T> {
    private data: Array<T> = []
    push(item: T) { this.data.push(item)}
    pop(): T | undefined {return this.data.shift()}
}

let queue: Queue<number> = new Queue()

// =============================================================================
//                                 ARRAYS & TUPLES
// =============================================================================

let array2: number[] = [1, 2, 3]

// fixed length array = tuple
let tuple: [number, number] = [0, 0]
// will get error if you do any less or more than 2 items
// tuple = [5] //Error
// tuple = [5, 4, 3] //Error

// =============================================================================
//                                OBJECT ALIAS
// =============================================================================
type Point = { x:number, y:number}

let center: Point = {
    x: 0,
    y: 0,
}

let unit: Point = {
    x: 1,
    y: 1,
}

// =============================================================================
//                                CONST DECLARATION
// =============================================================================
const point: Point = { x:0, y:0}

// point = {x:1, y:1} // Error
// All other behaviors are the same as 'let'
point.x = 123
point.y = 456
console.log(point);
