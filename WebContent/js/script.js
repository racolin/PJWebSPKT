// Tuổi tối thiểu của người đăng nhập
age = 16;   
//

// Hiệu ứng nhảy màu của chữ
i = 0;
color = ["red", "green", "blue", "black", "brown", "pink"];
// Hàm đổi màu chữ của class .text-contact
function swapColor() {
    i = (i + 1) % color.length;
    document.getElementsByClassName("text-contact")[0].style.color = color[i];
}
// Gọi hàm swapColor sau mỗi 0.5s
interval_color = setInterval(swapColor, 500);
// clearInterval(interval_color);

// Kiểm tra re-password và password có đúng chưa.
// Nếu đúng thì đổi màu nền success và báo mật khẩu khớp.
// Nếu chưa thì đổi màu nền warnign và báo mật khẩu chưa khớp .
function comparePassword() {
    repass = document.getElementsByName("repass")[0].value;
    pass = document.getElementsByName("password_sign")[0].value;
    return repass == pass && repass != "";
}

document.getElementById("btn-signin").disabled = true;
document.getElementById("btn-login").disabled = true;

function checkRepass() {
    message = document.getElementById("message-password");
    message.textContent = "Mật khẩu nhập lại không chính xác! Cẩn thận caps lock."
    message.classList.add("alert-warning");
    message.classList.remove("alert-info");
    btn_signin = document.getElementById("btn-signin");
    btn_signin.disabled = true;
    if (comparePassword()) {
        message.textContent = "Mật khẩu đã nhập đã khớp!"
        message.classList.add("alert-success");
        message.classList.remove("alert-warning"); 
    }
}


// Xảy ra khi click vào đăng ký. Mục đích để set max và value của thẻ dayofbirth
// Load sau để giảm tải lúc đầu tải trang. Vì đây chỉ là 1 hàm nhỏ. 
// Ngày sinh của khách hàng khi đăng ký phải trên 16 tuổi
function load() {
    max_date = new Date()
    max_date = new Date(max_date.setDate(max_date.getDate() - age * 365)).toISOString().split('T')[0]
    document.getElementsByName("dayofbirth")[0].setAttribute("max", max_date);
    document.getElementsByName("dayofbirth")[0].setAttribute("value", max_date);
}

// Kiểm tra thẻ input có rỗng hay không với list names được đưa vào
// Trả về thẻ input rỗng. Nếu đã điền hết thì trả về độ dài của names
function checkEmptyListInputByName(names) {
    length = names.length
    for (var i = 0; i < length; i++) {
        if (typeof names[i] != "string" || document.getElementsByName(names[i])[0].value.trim() == "") {
            return i;
        }
    }
    return length;
}

// Signup khi chưa điền xong sẽ bị cảnh báo
function checkSigniniFill() {
    names = ["fullname", "email", "phonenumber", "username_sign"]
    length = names.length
    if (checkEmptyListInputByName(names) == length && comparePassword() 
    & requirePassword(document.getElementsByName("password_sign")[0].value)) {
        btn_signin.disabled = false;
    }
}

// Login khi chưa điền xong sẽ bị cảnh báo
function checkLoginFill() {
    names = ["username_log", "password_log"]
    length = names.length
    if (checkEmptyListInputByName(names) == length) {
        document.getElementById("btn-login").disabled = false;
    }
}

function checkRequirePassword(e) {
    mess = document.getElementById("info-password")
    if (requirePassword(e.srcElement.value)) {
        mess.classList.remove("alert-warning");
        mess.classList.add("alert-info");
        return;
    }
    mess.classList.remove("alert-info");
    mess.classList.add("alert-warning");
}

// require password Không ký tự đặc biệt và chỉ số chữ hoa chữ thường
function requirePassword(pass) {
    return !/[^a-zA-Z0-9]/.test(pass) && /[0-9]/.test(pass) 
    && /[A-Z]/.test(pass) && /[a-z]/.test(pass) && pass.length > 9;
}