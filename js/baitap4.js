// Bài tập 4
// Khối 1: Input 
// Độ dài  của chiều dài và chiều rộng hình chữ nhật
// width là chiều rộng và length là chiều dài của hình chữ nhật


// Khối 2: Các bước xử lý
// B1 Tạo gắn giá trị cho chiều dài hình chữ nhật là length
// B2 Tạo gắn giá trị cho  rộng hình chữ nhật là width
// B3 Tạo  biến chứa s và p trong đó ta hiểu s là diện tích và p là chu vi hình chữ nhật
// B4 Tạo biến sum là tổng của chiều rộng và chiều dài hình chữ nhật
// B4 Xậy dựng công thức tính chu vi, diện tích hình chữ nhật và sum:
// s = width * length;
// p = sum1 * 2;
// B5 Hiện kết quả  console.log

// Khối 3 Out put
//  Kết quả chu vi và diện tích của hình chữ nhật

// Thực hành
// Khởi tạo gắn giá trị cho chiều dài và chiều rộng
var width = 3;
var length = 5;

// Tạo biến chứa sum1 s và p

var sum1 = 0;
var s = 0;
var p = 0;

// Tính diện tích hình chữ nhật theo công thức s = width * length

s = width * length;

// Tính tổng chiều dài và chiều rộng hình chữ nhật theo công thức p = sum1 * 2

sum1 = width + length;

//  Tính chu vi hình chữ nhật theo công thức p = sum1 * 2

p = sum1 * 2;

// Hiển thị kết quả
console.log("Diện tích hình chữ nhật: " +s);
console.log("Diện tích chu vi chữ nhật: " +p);

