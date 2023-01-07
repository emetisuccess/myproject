// toast message alert
const Toast = {
    init() {
        this.hideTimeout = null;

        this.el = document.createElement("div");
        this.el.className = "toast-msg";
        this.el.setAttribute("id", "toast_msg");
        document.body.appendChild(this.el);
        // console.log(this.el);
    },

    show(message, state) {
        clearTimeout(this.hideTimeout);
        this.el.textContent = message;
        this.el.className = 'toast-msg toast-msg-visible';

        if (state) {
            this.el.classList.add(`toast-msg-${state}`);
        }

        this.hideTimeout = setTimeout(() => {
            this.el.classList.remove("toast-msg-visible");
        }, 3000);
    }
}
document.addEventListener("DOMContentLoaded", () => Toast.init());


const vehicletowing = document.querySelector("#vehicletowing");
vehicletowing.addEventListener('submit', (e) => {
    e.preventDefault();
    let year = document.getElementById("year").value;
    let model_name = document.getElementById("model_name").value;
    let make = document.getElementById("make").value;
    let color = document.getElementById("color").value;
    let contact_name = document.getElementById("contact_name").value;
    let contact_number = document.getElementById("contact_number").value;
    let address = document.getElementById("address").value;
    let city = document.getElementById("city").value;
    let state = document.getElementById("state").value;
    let zipcode = document.getElementById("zipcode").value;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let res = document.getElementById("demo").innerHTML = this.responseText;
            console.log(res);
        }
    };
    xhttp.open("POST", "/myproject-development/resources/functions.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(`vehicletowing=${1}&year=${year}&model_name=${model_name}&make=${make}&color=${color}&contact_name=${contact_name}&contact_number=${contact_number}&address=${address}&city=${city}&state=${state}&zipcode=${zipcode}`);
});


// // vehicle lease services
// vehiclelease.addEventListener("submit", (e) => {
//     e.preventDefault();

//     console.log("carLease");
//     let image1 = document.getElementById("image1").value;
//     let image2 = document.getElementById("image2").value;
//     let image3 = document.getElementById("image3").value;
//     let model_year = document.getElementById("year").value;
//     let model_name = document.getElementById("model_name").value;
//     let make = document.getElementById("make").value;
//     let color = document.getElementById("color").value;
//     let contact_name = document.getElementById("contact_name").value;
//     let contact_number = document.getElementById("contact_number").value;
//     let address = document.getElementById("address").value;
//     let city = document.getElementById("city").value;
//     let state = document.getElementById("state").value;
//     let zipcode = document.getElementById("zipcode").value;


//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             let res = document.getElementById("demo").innerHTML = this.responseText;
//             console.log(res);
//         }
//     };
//     xhttp.open("POST", "/myproject-development/resources/functions.php", true);
//     xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//     xhttp.send(`vehiclelease=${1}&year=${year}&model_name=${model_name}&make=${make}&color=${color}&contact_name=${contact_name}&contact_number=${contact_number}&address=${address}&city=${city}&state=${state}&zipcode=${zipcode}`);
// });


// document.querySelector("#drivers").addEventListener("submit", (e) => {
//     e.preventDefault();
//     console.log("driver");
// })
