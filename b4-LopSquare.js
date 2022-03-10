import point2D from "./b1-lopPoint2D.js";

class Square {
    constructor(point = new point2D, side) {
        this.point = point;
        this.side = side;
    }
    scan() {
        this.point.scan();
        this.side = Number(prompt("Nhập độ dài cạnh hình vuông: "));
    }
    print() {
        this.point.print();
        console.log("Hình vuông có độ dài cạnh là: ", this.side);
    }
    move() {
        this.point.move();
        console.log(" point có tọa độ mới: (" +
            this.point.dia + ", " +
            this.point.juxta + ")");
    }
    getArea() {
        let area = Math.pow(this.side, 2);
        console.log("Diện tích hình vuông là: ", area);
    }
}

// let a = new Square();
// a.scan();
// a.print();
// a.move();
// a.getArea();