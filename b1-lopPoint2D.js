class point2D {
    constructor(dia, juxta) {
        this.dia = dia;
        this.juxta = juxta;
    }
    scan() {
        this.dia = Number(prompt("Nhập hoành độ: "));
        this.juxta = Number(prompt("Nhập tung độ: "));
    }
    print() {
        // console.log("hoành độ:", this.dia, "tung độ: ", this.juxta);
        console.log(" point có tọa độ: (" +
            this.dia + ", " +
            this.juxta + ")");

    }
    move() {
        let dx = Number(prompt("Điểm tung độ mới: "));
        let dy = Number(prompt("Điểm hoành độ mới: "))
        this.dia = dx;
        this.juxta = dy;
    }
    getDistance(point1, point2) {
        let khoangCach = Math.sqrt(Math.pow((point2.dia - point1.dia), 2) + Math.pow((point2.juxta - point1.juxta), 2));
        console.log(khoangCach, " là khoảng cách giữa 2 điểm");
    }

}

// let point = new point2D();
// let point2 = new point2D();
// point.scan();
// point.print();
// point2.scan();
// point2.print();
// point.getDistance(point, point2);

export default point2D;