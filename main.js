/*
Bài 1: Tìm ngày tháng năm

* Đầu vào:
- Ngày, tháng, năm
*Xử lí:
- Tạo hàm kiểm tra năm nhuận
- Tạo hàm kiểm tra số ngày trong tháng tương ứng với năm
- Tạo hàm tìm ngày hôm trước:
+ Ngày hôm trước bằng ngày nhập trừ đi 1
+ Nếu ngày nhập sau khi trừ băng 0 thì ngày hôm trước bằng số ngày của tháng trước đó
+ Khi đó tháng của ngày hôm trước bằng tháng nhập trừ đi 1
+ Nếu tháng nhập sau khi trừ băng 0 thì tháng của ngày hôm trước là 12
+ Khi đó năm của ngày hôm trước bằng năm nhập trừ đí 1
- Tạo hàm tìm ngày hôm sau:
+ Ngày hôm sau bằng ngày nhập cộng 1
+ Nếu ngày nhập sau khi cộng 1 lớn hơn số ngày trong tháng thì ngàu hôm sau là 1
+ Khi đó tháng của ngày hôm sau bằng tháng nhập cộng 1
+ Nếu tháng nhập sau khi cộng lớn hơn 12 thì tháng của ngày hôm sau là 1
+ Khi đó năm của ngày hôm sau bằng năm nhập cộng 1
- Khai báo 3 biến ngày, tháng, năm
- Gán giá trị cho ngày, tháng, năm
- Gọi hàm tìm ngày hôm trước với tham số ngày, tháng, năm
- Gọi hàm tìm ngày hôm sau với tham số ngày, tháng, năm
* Đầu ra:
- In ra màn hình ngày hôm truốc và ngày hôm sau
*/

function kiemTraNam(nam) {
  if (nam % 400 == 0 || (nam % 4 == 0 && nam % 100 != 0)) {
    return true;
  }
  return false;
}

function soNgayTrongThang(thang, nam) {
  switch (thang) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;

    case 2:
      if (kiemTraNam(nam)) {
        return 29;
      }
      return 28;

    case 4:
    case 6:
    case 9:
    case 11:
      return 30;

    default:
      console.error("Giá trị tháng không hợp lệ!");
      break;
  }
}

function ngayHomTruoc(ngay, thang, nam) {
  var ngayNhap = ngay;
  var thangNhap = thang;
  var namNhap = nam;
  if (nam > 0 && thang > 0 && ngay > 0 && ngay <= soNgayTrongThang(thang, nam)) {
    ngay--;
    if (ngay == 0) {
      thang--;
      if (thang == 0) {
        thang = 12;
        nam--;
      }
      ngay = soNgayTrongThang(thang, nam);
    }
    console.log("Ngày hôm trước của ngày " + ngayNhap + "/" + thangNhap + "/" + namNhap + " là: " + ngay + "/" + thang + "/" + nam);
  } else {
    console.error("Ngày, tháng, năm không hợp lệ!");
  }
}

function ngayHomSau(ngay, thang, nam) {
  var ngayNhap = ngay;
  var thangNhap = thang;
  var namNhap = nam;
  if (nam > 0 && thang > 0 && ngay > 0 && ngay <= soNgayTrongThang(thang, nam)) {
    ngay++;
    if (ngay > soNgayTrongThang(thang, nam)) {
      ngay = 1;
      thang++;
      if (thang > 12) {
        thang = 1;
        nam++;
      }
    }
    console.log("Ngày hôm sau của ngày " + ngayNhap + "/" + thangNhap + "/" + namNhap + " là: " + ngay + "/" + thang + "/" + nam);
  } else {
    console.error("Ngày, tháng, năm không hợp lệ!");
  }
}

var ngay, thang, nam;
ngay = 1;
thang = 3;
nam = 2022;

ngayHomTruoc(ngay, thang, nam);
ngayHomSau(ngay, thang, nam);

/* 
Bài 2: Tìm số ngày trong tháng

* Đầu vào:
- Tháng, năm
* Xử lí:
- Tạo hàm kiểm tra năm nhuận:
+ Nếu số năm chia hết cho 400 hoặc nếu số năm chia hết cho 4 và không chia hết cho 100, đó là năm nhuận
- Tạo hàm kiểm tra số ngày trong tháng tương ứng với năm:
+ Nếu tháng là 1, 3, 5, 7, 8, 10, 12 thì số ngày là 31
+ Nếu tháng là 4, 6, 9, 11 thì số ngày là 3
+ Nếu tháng là 2 thì số ngày là 28 hoặc 29 nếu là năm nhuận
- Khai báo biến ngày, tháng, năm
- Gán giá trị cho biến tháng và năm
- Gọi hàm tìm số ngày trong tháng với tham số là tháng và năm sau đó gán kết quả vào biến ngày
* Đầu ra:
- Sô ngày trong tháng tương ứng
*/

function kiemTraNam(nam) {
  if (nam % 400 == 0 || (nam % 4 == 0 && nam % 100 != 0)) {
    return true;
  }
  return false;
}

function soNgayTrongThang(thang, nam) {
  switch (thang) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;

    case 2:
      if (kiemTraNam(nam)) {
        return 29;
      }
      return 28;

    case 4:
    case 6:
    case 9:
    case 11:
      return 30;

    default:
      console.error("Giá trị tháng không hợp lệ!");
      break;
  }
}

var ngay, thang, nam;
thang = 2;
nam = 2022;
ngay = soNgayTrongThang(thang, nam);

console.log("Số ngày trong tháng " + thang + " năm " + nam + " là: " + ngay);

/*
Bài 3: Đọc số có 3 chữ số

* Đầu vào:
- Số nguyên có 3 chữ số 
* Xử lí:
- Khai báo biến số nguyên, hàng trăm, hàng chục, hàng đơn vị
- Tạo hàm đọc số có 3 chữ số
- Nếu số nhập vào không phải số có 3 chữ số thì thông báo không hợp lệ
- Tách hàng trăm, hàng chục, hàng đơn vị của số trên
- Sử dụng cấu trúc switch case để in ra cách đọc hàng trăm, hàng chục, hàng đơn vị
- Gán giá trị cho biến số nguyên
- Gọi hàm đọc số có 3 chữ số với tham số là số nguyên trên
* Đầu ra:
- Cách đọc số có 3 chữ số
*/

var soNguyen, hangTram, hangChuc, hangDonVi;

function docSoCoBaChuSo(soNguyen) {
  if (soNguyen < 100 || soNguyen > 999) {
    console.error("Số vừa nhập không phải là số có 3 chữ số");
  } else {
    var hangTram = Math.floor(soNguyen / 100);
    var hangChuc = Math.floor((soNguyen / 10) % 10);
    var hangDonVi = soNguyen % 10;
    var docHangTram, docHangChuc, docHangDonVi;

    switch (hangTram) {
      case 1:
        docHangTram = "Một trăm ";
        break;
      case 2:
        docHangTram = "Hai trăm ";
        break;
      case 3:
        docHangTram = "Ba trăm ";
        break;
      case 4:
        docHangTram = "Bốn trăm ";
        break;
      case 5:
        docHangTram = "Năm trăm ";
        break;
      case 6:
        docHangTram = "Sáu trăm ";
        break;
      case 7:
        docHangTram = "Bảy trăm ";
        break;
      case 8:
        docHangTram = "Tám trăm ";
        break;
      case 9:
        docHangTram = "Chín trăm ";
        break;

      default:
        break;
    }
  }

  if (hangChuc == 0 && hangDonVi != 0) {
    docHangChuc = "lẻ ";
  } else {
    switch (hangChuc) {
      case 1:
        docHangChuc = "mười ";
        break;
      case 2:
        docHangChuc = "hai mươi ";
        break;
      case 3:
        docHangChuc = "ba mươi ";
        break;
      case 4:
        docHangChuc = "bốn mươi ";
        break;
      case 5:
        docHangChuc = "năm mươi ";
        break;
      case 6:
        docHangChuc = "sáu mươi ";
        break;
      case 7:
        docHangChuc = "bảy mươi ";
        break;
      case 8:
        docHangChuc = "tám mươi ";
        break;
      case 9:
        docHangChuc = "chín mươi ";
        break;

      default:
        break;
    }
  }

  switch (hangDonVi) {
    case 1:
      if (hangChuc == 1 || hangChuc == 0) {
        docHangDonVi = "một";
      } else {
        docHangDonVi = "mốt";
      }
      break;
    case 2:
      docHangDonVi = "hai";
      break;
    case 3:
      docHangDonVi = "ba";
      break;
    case 4:
      docHangDonVi = "bốn";
      break;
    case 5:
      docHangDonVi = "nắm";
      break;
    case 6:
      docHangDonVi = "sáu";
      break;
    case 7:
      docHangDonVi = "bảy";
      break;
    case 8:
      docHangDonVi = "tám";
      break;
    case 9:
      docHangDonVi = "chín";
      break;

    default:
      break;
  }

  console.log("Số " + soNguyen + " đọc là: " + docHangTram + docHangChuc + docHangDonVi);
}

soNguyen = 236;

docSoCoBaChuSo(soNguyen);

/*
  Bài 4: Sinh viên xa trường nhất

  * Đầu vào:
 - Tên và tọa độ 3 sinh viên 
 - Tọa độ của trường  
 * Xử lí:
 - Tạo hàm tính khoảng cách giữa 2 điểm với tham số là tọa độ x, y của điểm thứ nhất và điểm thứ hai
 - Tạo hàm tìm khoảng cách lớn nhất với tham số là kết quả của hàm tính khoảng cách
 - Trong hàm tìm khoảng cách lớn nhất gọi hàm tìm khoảng cách giữa 2 điểm 
 - Khởi tạo các biến tọa đố x, y của 3 sinh viên và trường học
 - Gọi hàm tìm khoảng cách lớn nhất
 * Đầu ra:
 - Xuất ra tên sinh viên xa trường nhất
 */

function tinhKhoangCach(toaDoX1, toaDoY1, toaDoX2, toaDoY2) {
  return Math.sqrt(Math.pow(toaDoX2 - toaDoX1, 2) + Math.pow(toaDoY2 - toaDoY1, 2));
}

function timSvXaTruongNhat(tenSv1, toaDoXSv1, toaDoYSv1, tenSv2, toaDoXSv2, toaDoYSv2, tenSv3, toaDoXSv3, toaDoYSv3, toaDoXTruong, toaDoYTruong) {
  var khoangCachSv1 = tinhKhoangCach(toaDoXSv1, toaDoYSv1, toaDoXTruong, toaDoYTruong);
  var khoangCachSv2 = tinhKhoangCach(toaDoXSv2, toaDoYSv2, toaDoXTruong, toaDoYTruong);
  var khoangCachSv3 = tinhKhoangCach(toaDoXSv3, toaDoYSv3, toaDoXTruong, toaDoYTruong);

  var khoangCachLonNhat = khoangCachSv1;
  if (khoangCachLonNhat < khoangCachSv2) {
    khoangCachLonNhat = khoangCachSv2;
  }
  if (khoangCachLonNhat < khoangCachSv3) {
    khoangCachLonNhat = khoangCachSv3;
  }

  switch (khoangCachLonNhat) {
    case khoangCachSv1:
      console.log("Sinh viên " + tenSv1 + " xa trường nhất với khoảng cách: " + khoangCachLonNhat);
      break;

    case khoangCachSv2:
      console.log("Sinh viên " + tenSv2 + " xa trường nhất với khoảng cách: " + khoangCachLonNhat);
      break;

    case khoangCachSv3:
      console.log("Sinh viên " + tenSv3 + " xa trường nhất với khoảng cách: " + khoangCachLonNhat);
      break;

    default:
      break;
  }
}

var tenSv1 = "Nguyen Van A";
var toaDoXSv1 = 3;
var toaDoYSv1 = 6;
var tenSv2 = "Nguyen Van B";
var toaDoXSv2 = 2;
var toaDoYSv2 = 3;
var tenSv3 = "Nguyen Van C";
var toaDoXSv3 = 7;
var toaDoYSv3 = 9;
var toaDoXTruong = 10;
var toaDoYTruong = 21;

timSvXaTruongNhat(tenSv1, toaDoXSv1, toaDoYSv1, tenSv2, toaDoXSv2, toaDoYSv2, tenSv3, toaDoXSv3, toaDoYSv3, toaDoXTruong, toaDoYTruong);
