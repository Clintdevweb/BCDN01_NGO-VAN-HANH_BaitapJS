// Bài tập 4
// Khối 1: Input 
// Số có 2 chữ số được nhập vào


// Khối 2: Các bước xử lý
// B1 Tạo gắn giá trị cho số  có 2 chữ được nhập vào num_nhap
// B2 Tạo biến chứa chữ số hàng chục
// B3 Tạo biến chứa chữ số hàng đơn vị
// Tạo biến chứa tổng của chữ số hàng chục và chữ số hàng đơn vị là sum_num2
// B4 Lấy chữ số hàng đơn vị theo công thức int so_hang_dv = num_nhap%10
// B5 Lấy chữ số hàng chục theo công thức int so_hang_chuc = num_nhap/10
// Tính tổng chữ số hàng chục và chữ số hàng đơn vị của số đã nhập theo công thức sum_num2 = so_hang_dv + so_hang_chuc;
// B6 Hiện kết quả  console.log

// Khối 3 Out put
// Kết quả tổng 2 chữ số của số có 2 chữ số được nhập vào

// ***********
// Thực hành
// Tạo gắn giá trị cho số  có 2 chữ 
var num_nhap = 30;
var so_hang_dv = 0;
var so_hang_chuc = 0;
var sum_num2 = 0;

// Lấy chữ số hàng đơn vị theo công thức int so_hang_dv = num_nhap%10
so_hang_dv = parseInt(num_nhap%10);
console.log("Chữ số hàng đơn vị: " +so_hang_dv);

// Lấy chữ số hàng chục theo công thức int so_hang_chuc = num_nhap/10
so_hang_chuc = parseInt(num_nhap/10);
console.log("Chữ số hàng chục: " +so_hang_chuc);

// Tính tổng chữ số hàng chục và chữ số hàng đơn vị của số đã nhập theo công thức sum_num2 = so_hang_dv + so_hang_chuc;
sum_num2 = so_hang_dv + so_hang_chuc;

console.log("Tổng các chữ số của số có 2 chữ số: " +sum_num2);
