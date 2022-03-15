import Fraction from './b5-lopFraction.js'
import IntArray from './b6-lopIntArray.js';

class FractionList {
    // ps = new Fraction();
    constructor(list = new Array()) {
        this.list = list;
    }
    scan() {
        let index = Number(prompt("Số lượng phần tử trong mảng phân số là:"));
        for (let i = 0; i < index; i++) {
            let a = new Fraction();
            a.numerator = Number(prompt("Tử số:"))
            a.denominator = Number(prompt("Mẫu số:"));
            this.list[i] = a;
        }
    }
    size() {
        return this.list.length;
    }
    resize() {
            let newLenght = Number(prompt("Nhập độ dài mảng mới:"));
            if (newLenght < this.size()) {
                let index = this.size() - newLenght;
                for (let i = 0; i < index; i++) {
                    this.list.pop();
                }
                return this.list;
            } else if (newLenght > this.size()) {
                let index = newLenght - this.size();
                let ps = new Fraction();
                ps.numerator = 0;
                ps.denominator = 0;
                for (let i = 0; i < index; i++) {
                    this.list.push(ps);
                }
                return this.list;
            } else {
                return this.list;
            }
        }
        /**
         * kiểm tra mảng có rỗng hay không
         * @returns 
         */
    isEmpty() {
            if (this.size() == 0) {
                return true;
            } else return false;
        }
        /**
         * lấy giá trị trong danh sách tại vị trí index
         */
    at() {
            let index = Number(prompt("Vị trí phần tử cần tìm:"));
            if (index > this.size() - 1 || index < 0) {
                console.log("Vị trí tìm không tồn tại!")
            } else {
                // for(let i = 0; i < this.size(); )
                // return this.list[index];
                console.log("Vị trí: ", index, " có giá trị là: (", this.list[index].numerator, "/", this.list[index].denominator, ")");
            }
        }
        /**
         * lấy phần tử đầu tiên
         */
    front() {
            return this.list[0];
        }
        /**
         * lấy phần tử cuối
         * @returns 
         */
    back() {
            return this.list[this.list.length - 1];
        }
        /**
         * 
         * @param {Number} n 
         * @param {Fraction} ps 
         */
    assign(n, ps) {
            if (n > 0) {
                for (let i = 0; i < n; i++) {
                    this.list.push(ps);
                }
                return this.list;
            }

        }
        /**
         * push một phần tử vào cuối mảng
         * @param {Fraction} ps 
         */
    push_back(ps) {
            return this.list.push(ps);
        }
        /**
         * Xóa một phân số ở cuối danh sách
         * 
         */
    pop_back() {

            return this.list.pop();
        }
        // insert() {
        //     let a = Number(prompt("Nhập 1 để chèn phân số, nhập 2 để chèn mảng phân số:"))
        //     let index = Number(prompt("Vị trí chèn: "));
        //     // console.log(frac)
        //     if (a == 1) {
        //         let ps = new Fraction();
        //         ps.scan();
        //         // this.list.push(ps);
        //         return this.list.splice(index, 0, ps);
        //     } else if (a == 2) {
        //         let psl = new FractionList();
        //         psl.scan();
        //         for (let i = 0; i < psl.length; i++) {
        //             console.log(psl.list, "có vô");
        //             console.log(psl[i]);
        //             this.list.splice(index, 0, psl.list[i]);
        //             index++;
        //         }
        //         return this.list;
        //     }
        // }
}
let a = new FractionList();
let b = new Fraction();
a.scan();
// b.scan();
a.insert();
console.log(a.list);
// a.isEmpty();
// if (a.isEmpty() == true) {
//     console.log("rỗng")
// } else {
//     console.log("không rỗng")
// }
// a.at();
// console.log(a)