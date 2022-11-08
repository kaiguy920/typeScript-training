// =============================================================================
//                                FUNCTIONS
// =============================================================================

function add(a: number, b: number): number {
    return a + b
}

// if function isn't designed to return a value you can annotate with :void
function log(message: string): void {
    console.log('LOG', message);
    
}

// indefinfinate # of arguments '...values'
function sum(...values: number[]) {
    return values.reduce((previous, current) => {
        return previous + current
    })
}

console.log(sum(1, 2)) // 3
console.log(sum(1, 2, 3)) // 6

// **  can store a function in a variable **
type Add = (a: number, b: number) => number
let add2: Add

add2 = function (a: number, b: number): number {
    return a + b
}

// =============================================================================
//                            STRUCTURAL TYPING
// =============================================================================

type User = {id: string}
type Product = {id: string}

let user: User = {id: 'user123'}
let product: Product = {id: 'product-fwefw575'}

// since types are structural, if they are the same, it doesn't care about the name
user = product
product = user

// ===============================================================================

type Point2D = {x: number, y:number}
type Point3D = {x: number, y:number, z:number}

let point2D: Point2D = {x:0, y:10}
let point3D: Point3D = {x:0, y:10, z:20}

/** Extra info is okay */ // has the required input variables of x & y
point2D = point3D
function takesPoint2D(point: Point2D) {/** ... */}
takesPoint2D(point3D)

// point3D = point2D // Error: missing info

// =============================================================================
//                                      CLASS
// =============================================================================
class Animal {
    // private keeps variable only accessable within the class
    // private name: string
    // protected keeps variable inaccessible to instances but accessible within the class hiarchy 
    protected name: string
    
    constructor(name: string) {
        this.name = name
    }
 // public keeps variable accessable outside of the class
    public move(distanceInMeters: number): void {
        console.log(`${this.name} moved ${distanceInMeters}m.`);   
    }
}
let cat = new Animal('Cat')
cat.move(10)
// cat.name = 'Dog' // Error: Property 'name' is private and only accessible within class 'Animal'

class Bird extends Animal {
    fly(distanceInMeters: number) {
        console.log(`${this.name} flew ${distanceInMeters}m.`);
        
    }
}
let bird = new Bird('Pigeon')
bird.fly(24)


