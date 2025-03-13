// File upload 1
const submit = document.getElementById("submit-button");
const error1 = document.getElementById("file-upload-error-1");
const docPreview = document.getElementById("doc-preview");
const fileSelect = document.getElementById("at38-form");
const fileUploadContainer = document.getElementById("file-upload-container");
let contains = "AT38 Jerry F.pdf";

fileSelect.addEventListener("change", function(event){
    let uploadName = fileSelect.value.toLowerCase();

    if (uploadName.includes(contains.toLowerCase())) {
        docPreview.classList.remove("govuk-visually-hidden");
        error1.classList.add("govuk-visually-hidden");
        fileUploadContainer.classList.remove("govuk-form-group--error");
    } else {
        docPreview.classList.add("govuk-visually-hidden");
        error1.classList.remove("govuk-visually-hidden");
        fileUploadContainer.classList.add("govuk-form-group--error");
    }
});

submit.addEventListener("click", function(event){
    let uploadName = fileSelect.value.toLowerCase();

    if (uploadName.includes(contains.toLowerCase())) {
        error1.classList.add("govuk-visually-hidden");
        fileUploadContainer.classList.remove("govuk-form-group--error");
    } else {
        event.preventDefault();
        error1.classList.remove("govuk-visually-hidden");
        fileUploadContainer.classList.add("govuk-form-group--error");
    }
});
