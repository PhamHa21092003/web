function checkinfordangky(){
    var ten = document.getElementById("Ten").value;
    var email = document.getElementById("Email").value;
    var sdt = document.getElementById("SDT").value;
    var pass = document.getElementById("Pass").value;
    var cfpass = document.getElementById("ComfirmPass").value;
    var erTen = document.getElementById("error_ten");
    var erEmaail = document.getElementById("error_email");
    var erSDT = document.getElementById("error_sdt");
    var erPass = document.getElementById("error_pass");
    var erCfPass = document.getElementById("error_confirm");
    var cb = document.getElementById("DieuKhoan").checked;
    var lb = document.getElementById("lbCheckBox");

    var ok = true;

    if (ten == "") {
        erTen.style.color = "red";
        erTen.innerHTML = "* Tên không được rỗng";
        ok = false;

    } else {
        erTen.innerHTML = "";
    }

    if (sdt == "") {
        erSDT.style.color = "red";
        erSDT.innerHTML = "* SDT không được rỗng";
        ok = false;

    } else {
        erTen.innerHTML = "";
    }

    if (email == "") {
        erEmaail.style.color = 'red';
        erEmaail.innerHTML = "* Email không được rỗng";
        ok = false;
    } else {
        erEmaail.innerHTML = "";
    }

    if (pass == "") {
        erPass.style.color = 'red';
        erPass.innerHTML = "* Pass không được rỗng";
        ok = false;
    } else {
        erPass.innerHTML = "";
    }

    if (cfpass == "") {
        erCfPass.style.color = 'red';
        erCfPass.innerHTML = "* erCfPass không được rỗng"
        ok = false;
    } else {
        erCfPass.innerHTML = "";
    }

    if (ok) {
        if (pass != cfpass) {
            erCfPass.style.color = 'red';
            erCfPass.innerHTML = "* Pass không giống với CfPass"
            ok = false;
        } else {
            erCfPass.innerHTML = "";
        }
    }

    if (!cb) {
        lb.style.color = "red";
        ok = false;
    } else {
        lb.style.color = "black";
    }

    return ok;

}

function checkinfordangnhap() {
    var email = document.getElementById("dnEmail").value;
    var pass = document.getElementById("dnPass").value;
    var erEmail = document.getElementById("error_email");
    var erPass = document.getElementById("error_pass");
    var ok = true;

    if (email == "") {
        erEmail.style.color = 'red';
        erEmail.innerHTML = "* Email không được rỗng";
        ok = false;
    } else {
        erEmail.innerHTML = "";
    }

    if (pass == "") {
        erPass.style.color = 'red';
        erPass.innerHTML = "* Password không được rỗng";
        ok = false;
    } else {
        erPass.innerHTML = "";
    }

    return ok;
}