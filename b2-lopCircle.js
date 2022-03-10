import point2D from "./b1-lopPoint2D.js";

// import point2D from "./b1-lopPoint2D";
// export { default }
// from "./b1-lopPoint2D"

class Circle {
    //point(point2D), radius(ban kinh)
    //new point2D có thể không có dấu ngoặc tròn
    constructor(point = new point2D(), radius) {
        this.point = point;
        this.radius = radius;
    }
    scan() {
        this.point.scan();
        this.radius = Number(prompt("Bán kính của hình tròn là: "))
    }
    print() {
        //lúc nhận vào point có kiểu là point2D thì phương thức print mới có thể chạy
        console.log("Tâm hình tròn: ");
        this.point.print();
        console.log("bán kính hình tròn: ", this.radius)
    }
    move() {
        this.point.move();
    }
    getArea() {
        let area = Math.pow((this.radius), 2) * 3.14;
        console.log("Diện tích hình tròn là: ", area);
    }
}

// let a = new point2D();

// let circle = new Circle();
// circle.scan();
// circle.print();
// circle.move();
// circle.print();
// circle.getArea();