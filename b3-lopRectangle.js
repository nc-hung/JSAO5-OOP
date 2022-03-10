import point2D from "./b1-lopPoint2D.js";

class Rectangle {
    constructor(point = new point2D(), long, wide) {
        this.point = point;
        this.long = long;
        this.wide = wide;
    }
    scan() {
        this.point.scan();
        this.long = Number(prompt("Nhập chiều dài HCN: "));
        this.wide = Number(prompt("Nhập chiều rộng HCN: "));
    }
    printf() {
        this.point.print();
        console.log("HCN có chiều dài: " +
            this.long + " và chiều rộng: " +
            this.wide + " point có tọa độ: (" +
            this.point.dia + ", " +
            this.point.juxta + ")");
    }
    move() {
        this.point.move();
        this.point.print();
    }
    getArea() {
        let area = this.long * this.wide;
        console.log("Diện tích hình chữ nhật là: ", area);
    }
}
// let a = new Rectangle();
// a.scan();
// a.printf();
// a.move();
// a.getArea();