class IntArray {
    // array = new Array();
    constructor(array = new Array(), name) {
        this.array = array;
        this.name = name;
    }
    scan() {
        let mang = this.array;
        let k = 0;
        this.name = prompt("Tên mảng: ");
        let index = Number(prompt("Số lượng phần tử trong mảng: "));
        console.log("Nhập phần tử mảng:")
        for (let i = 0; i < index; i++) {
            let a = Number(prompt("Phần tử thứ " + i + " là: "));
            //nếu là số thực thì không được vào
            if (Number.isInteger(a) == true) {
                // console.log(mang);
                // console.log(typeof(mang))
                mang[k] = a;
                k++;
            } else {
                console.log("Nhập sai! Có số thực!");
                break;
            }
        }
    }
    print() {
            console.log(a.array);
        }
        /**
         * tìm giá trị tại  vị trí
         */
    getElement() {
            let num = Number(prompt("Cần tìm giá trị ở vị trí: "));
            if (num > this.array.length - 1 || num < 0) {
                console.log("Vị trí cần tìm ngoài phạm vi mảng!")
            } else {
                console.log("Vị trí ", num, " có giá trị là: ", this.array[num])
            }
        }
        /**
         * tính độ dài mảng
         * @returns 
         */
    getSize() {
            let size = this.array.length;
            return size;
        }
        /**
         * 
         * @returns tính tổng mảng
         */
    getSum() {
            let tong = 0;
            for (let i = 0; i < this.array.length; i++) {
                tong += this.array[i];
            }
            return tong;
        }
        /**
         * lấy số lớn nhất trong mảng
         * @returns 
         */
    getMax() {
            let max = this.array[0];
            for (let i = 0; i < this.array.length; i++) {
                if (this.array[i] > max) {
                    max = this.array[i];
                }
            }
            return max;
        }
        /**
         * lấy các số chẵn trong mảng
         * @returns 
         */
    getEven() {
            let mang = [];
            let k = 0;
            for (let i = 0; i < this.array.length; i++) {
                if (this.array[i] % 2 == 0) {
                    mang[k] = this.array[i];
                    k++;
                }
            }
            return mang;
        }
        /**
         * thêm 1 phần tử vào đầu mảng
         */
    addHead() {
            let num = Number(prompt("Nhập số cần chèn: "));
            this.array.unshift(num);
            console.log(this.array)
                // return this.array;
        }
        /**
         * chèn vào vị trí inedx của mảng
         */
    insert() {
            let num = Number(prompt("Nhập số cần chèn: "));
            let index = Number(prompt("Nhập vị trí chèn: "));
            this.array.splice(index, 0, num);
        }
        /**
         * thêm phần tử của mảng P sau mảng array
         */
    addElements(mangP) {
            for (let i = 0; i < mangP.length; i++) {
                this.array.push(mangP[i]);
            }
            return this.array;
        }
        /**
         * Xóa phần tử tại vị trí index trong mảng, 
         * trả về phần tử bị xóa.
         *  Phương thức này có thể được dùng
         *  để xóa hết tất cả các phần tử trong mảng nếu người gọi hàm không truyền vào idx.
         */
    erase() {
        let index = Number(prompt("Nhập vị trí cần xóa: "));
        let remove = this.array.splice(index, 1);
        console.log(remove);
        console.log(this.array);
    }

    /**
     * Sao chép mảng từ vị trí start đến vị trí end
     */
    clone() {
        let start = Number(prompt("Nhập vị trí bắt đầu: "));
        let end = Number(prompt("Nhập vị trí kết thúc: "));
        if (end > this.array.length - 1) {
            console.log("Vượt quá độ dài mảng!")
        } else {
            for (let i = start; i <= end; i++) {
                this.array.push(this.array[i]);
            }
        }
        // console.log(this.array);
        // return this.array;
    }
}
let a = new IntArray();
let p = [1, 4, 3];
a.scan();
a.print();
// a.addElements(p)
a.clone();
console.log(a.array);
// a.getElement();
// a.addHead();