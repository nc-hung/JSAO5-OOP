class Fraction {
    constructor(numerator, denominator) {
        this.numerator = numerator;
        this.denominator = denominator;
    }
    scan() {
        this.numerator = Number(prompt("Nhập tử số: "));
        this.denominator = Number(prompt("Nhập mẫu số: "));
    }
    print() {
            console.log("Phân số vừa nhập: (", this.numerator + "/" + this.denominator + " )");
        }
        /**
         * rút gọn phân số
         */
    reduce() {

        }
        /** Chuẩn hóa phân số x.
        * Phân số được chuẩn hóa nếu:
        Phân số dương thì tử số và mẫu số đều phải là số dương.
        Phân số âm thì tử số là số âm và mẫu số là số dương.
        Phân số bằng 0 thì tử số bằng 0 và mẫu số bằng 1.
     */
    normalize() {

        }
        /**
         * Giá trị trả về là kết quả của
         * phép cộng phân số x và y với nhau
         * @param {*} Fraction_y 
         */
    Fraction_Plus(Fraction_y) {

        }
        //....3 ham nua
}
let a = new Fraction();
a.scan();
a.print();