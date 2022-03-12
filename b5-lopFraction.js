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
        //Tim ước số
    timUoc(so) {
            let mangSo = new Array();
            if (so == 0) {
                console.log("error");
            } else {
                for (let i = 1; i <= so; i++) {
                    if (so % i == 0) {
                        mangSo.push(i);
                    }
                }
            }
            return mangSo;
        }
        //tim UCLN
        /**
         * tìm ước chung lớn nhất của 2 số (tử và mẫu)
         * @param {Number} so1 
         * @param {Number} so2 
         * @returns x:  ước chung lớn nhất
         */
    UCLN(so1, so2) {
            let mang1 = this.timUoc(so1);
            let mang2 = this.timUoc(so2);
            let x = new Array();
            let k = 0;
            for (let i = 0; i < mang1.length; i++) {
                for (let j = 0; j < mang2.length; j++) {
                    if (mang1[i] == mang2[j]) {

                        x[k] = mang1[i];
                        k++;
                        // x = x.push(mang2[j]);
                        // break;
                    }
                }
            }
            // x mảng chứa các ước chung
            // return x;
            console.log(x);

            return x[x.length - 1];
        }
        /**
         * rút gọn phân số
         * 
         */
    reduce(x) {
            return `(${this.numerator / x} / ${this.denominator / x}) `;
        }
        /** Chuẩn hóa phân số x.
        * Phân số được chuẩn hóa nếu:
        Phân số dương thì tử số và mẫu số đều phải là số dương.
        Phân số âm thì tử số là số âm và mẫu số là số dương.
        Phân số bằng 0 thì tử số bằng 0 và mẫu số bằng 1.
     */
    normalize() {
            if (this.numerator != 0) {
                if (this.denominator == 0) {
                    return false;
                } else if (this.denominator < 0) {
                    this.numerator = -this.numerator;
                    this.denominator = -(this.denominator);
                    return `(${this.numerator} / ${this.denominator}) `;
                } else if (this.denominator > 0) {
                    return `(${this.numerator} / ${this.denominator}) `;
                }
            } else if (this.numerator == 0 && this.denominator == 0) {
                this.numerator = 0;
                this.denominator = 1;
                return `(${this.numerator} / ${this.denominator}) `;
            }
        }
        /**
         * Giá trị trả về là kết quả của
         * phép cộng phân số x và y với nhau
         * @param {Fraction} phanSo2 
         */
    fractionPlus(phanSo2) {
            let a = new Fraction();
            //kiểm tra mẫu số của 2 phân số
            // 2 mẫu số bằng nhau
            if (this.denominator == phanSo2.denominator) {

                a.numerator = this.numerator + phanSo2.numerator;
                a.denominator = this.denominator;
                return a;
                // return `(${tu}/${mau})`; //trả ra string
            }
            //2 mẫu số khác nhau
            else {
                let tu1 = this.numerator * phanSo2.denominator;
                let tu2 = phanSo2.numerator * this.denominator;
                let mauChung = this.denominator * phanSo2.denominator;
                a.numerator = tu1 + tu2;
                a.denominator = mauChung;
                return a;
            }
        }
        //nhân hai phân số
    fractionMultiply(phanSo2) {
            let a = new Fraction();
            a.numerator = this.numerator * phanSo2.numerator;
            a.denominator = this.denominator * phanSo2.denominator;
            return a;
        }
        // so sánh 2 phân số
    soSanhPS(phanSo2) {
        //kiểm tra mẫu số của 2 phân số
        // 2 mẫu số bằng nhau
        let x = 0;
        if (this.denominator == phanSo2.denominator) {
            if (this.numerator > phanSo2.numerator) {
                // console.log(`(${this.numerator}/${this.denominator}) > (${phanSo2.numerator}/${phanSo2.denominator})`);
                return x = 2;
            } else if (this.numerator == phanSo2.numerator) {
                // console.log(`(${this.numerator}/${this.denominator}) = (${phanSo2.numerator}/${phanSo2.denominator})`);
                return x = 1;
            } else {
                // console.log(`(${this.numerator}/${this.denominator}) < (${phanSo2.numerator}/${phanSo2.denominator})`);
                return x = 0;
            }
        }
        //2 mẫu số khác nhau
        else {
            let tu1 = this.numerator * phanSo2.denominator;
            let tu2 = phanSo2.numerator * this.denominator;
            let mauChung = this.denominator * phanSo2.denominator;
            if (tu1 > tu2) {
                // console.log(`(${this.numerator}/${this.denominator}) > (${phanSo2.numerator}/${phanSo2.denominator})`);
                return x = 2;
            } else if (tu1 == tu2) {
                // console.log(`(${this.numerator}/${this.denominator}) = (${phanSo2.numerator}/${phanSo2.denominator})`);
                return x = 1;
            } else {
                // console.log(`(${this.numerator}/${this.denominator}) < (${phanSo2.numerator}/${phanSo2.denominator})`);
                return x = 0;
            }
        }

    }
    boolEqual(x, phanSo2) {
        if (x == 1) {
            console.log(`(${this.numerator}/${this.denominator}) = (${phanSo2.numerator}/${phanSo2.denominator})`);
        } else {
            console.log("Hai phân số không bằng nhau!");
        }
    }
    boolLessThan(x, phanSo2) {
        if (x == 0) {
            console.log(`(${this.numerator}/${this.denominator}) bé hơn (${phanSo2.numerator}/${phanSo2.denominator})`);
        } else {
            console.log(`(${this.numerator}/${this.denominator}) không bé hơn (${phanSo2.numerator}/${phanSo2.denominator})`);
        }
    }


}




let a = new Fraction();
let b = new Fraction();
let c = new Fraction();
a.scan();
b.scan();

console.log(a.soSanhPS(b));
a.boolEqual(a.soSanhPS(b), b);
a.boolLessThan(a.soSanhPS(b), b);
// console.log(a.UCLN(a.numerator, a.denominator))
// c = a.reduce(a.UCLN(a.numerator, a.denominator));
// b.scan();
// c = a.fractionPlus(b)
// console.log(typeof(c));
// console.log(c);
// console.log(c.numerator);
// console.log(c.denominator);
// let d = c.UCLN(c.numerator, c.denominator);
// console.log(d);
// let e = c.reduce(d);
// let c = a.UCLN(a.numerator, a.denominator);
// console.log(c);
// let d = a.reduce(c);
// console.log(d)
// console.log(a.normalize())
// a.print();