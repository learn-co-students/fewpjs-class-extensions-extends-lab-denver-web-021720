class Polygon {
    constructor(array) {
        this.array = array;
    }

    get countSides() {
        return this.array.length;
    }

    get perimeter() {
        return this.array.reduce((sum, num) => sum + num);
    }

}

class Triangle extends Polygon {
    get isValid() {
        if (this.countSides == 3 && (this.array[0] + this.array[1] > this.array[2]) 
                                 && (this.array[0] + this.array[2] > this.array[1])
                                 && (this.array[1] + this.array[2] > this.array[0])) {
            return true;
        }
        else {
            return false;
        }
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.countSides == 4 && this.array.every((val, i, arr) => val === arr[0])) {
            return true;
        }
        else {
            return false;
        }
    }

    get area() {
        return this.array[0] * this.array[0]
    }

}


