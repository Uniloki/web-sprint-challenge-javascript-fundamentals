// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:


// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class CuboidMaker2{
    constructor(length,width,height){
    this.length = length;
    this.width = width;
    this.height = height;
}
    volume() {
        console.log(this.length*this.height*this.width);
    }
    surfaceArea() {
        console.log(((this.length*this.width)+(this.length*this.height)+(this.width*this.height)) * 2);
    }
}

class CubeMaker extends CuboidMaker2{
    constructor(length,width,height){
        super(length,width,height);
    }
    cubevolume() {
        console.log (this.length*this.width*this.height);
    }
    cubeSurfaceArea(){
        console.log ((this.length*this.width) * 6);
    }
}




const cuboid1 = new CuboidMaker2(4,5,5);

const cube = new CubeMaker(3,3,3);

console.log(cuboid1.volume()); // 100
console.log(cuboid1.surfaceArea()); // 130

console.log(cube.cubevolume());
console.log(cube.cubeSurfaceArea());