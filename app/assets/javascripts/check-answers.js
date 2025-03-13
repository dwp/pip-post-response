// File upload 1
const check = document.getElementById("confirm-check");
const button = document.getElementById("send-response");

check.addEventListener("change", function(event){
    if (check.checked) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
});
