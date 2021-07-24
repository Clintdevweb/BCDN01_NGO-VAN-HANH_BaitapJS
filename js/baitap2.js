// Bài tập 2
// Khối 1: Input 
// 5 số thực
// Công thức tính trung bình 5 số:
//  Tổng 5 số / 5


// Khối 2: Các bước xử lý
// B1 Tạo gắn giá trị cho 5 số
// B2 Tạo biến chứa tổng(sum)
// Công thức tính tổng: sum = num1 + num2 + num3 + num4 + num5;

// B3 Tạo biến chứa giá trị trung bình(avg)
// Công thức tính trung bình tổng 5 số thực: avg = sum / 5 
// B4 Hiện kết quả  console.log



// Khối 3: Out put
// Kết quả trung bình của 5 số thực

// Thực hành
// Tạo gắn giá trị cho 5 số thực
var num1 = 1;
var num2 = 2;
var num3 = 3;
var num4 = 4;
var num5 = 5.5;

// Tạo gắn giá trị tạm thời cho 2 biến sum và avg
var sum = 0;
var avg = 0;

// Tính sum theo công thức sum = num1 + num2 + num3 + num4 + num5
sum = num1 + num2 + num3 + num4 + num5;

// Tính avg theo công thức avg =  sum / 5

avg = sum / 5;

// Hiển thị kết quả

console.log("Hiện thị kết quả trung bình tổng 5 số thực: " +avg);


