"use strict";let inputsTextConfig=[{inputClass:".js-input-name",previewClass:".js-preview-name",defaultValue:"Tree Huggers",prevewPrefix:"",previewElementAttribute:"innerHTML"},{inputClass:".js-input-job",previewClass:".js-preview-job",defaultValue:"Front-end developers",prevewPrefix:"",previewElementAttribute:"innerHTML"},{inputClass:".js-input-email",previewClass:".js-preview-email",defaultValue:"",previewPrefix:"mailto:",previewElementAttribute:"href"},{inputClass:".js-input-phone",previewClass:".js-preview-phone",defaultValue:"",previewPrefix:"",previewElementAttribute:"href"},{inputClass:".js-input-linkedin",previewClass:".js-preview-linkedin",defaultValue:"",previewPrefix:"https://www.linkedin.com/in/",previewElementAttribute:"href"},{inputClass:".js-input-github",previewClass:".js-preview-github",defaultValue:"",previewPrefix:"https://www.github.com/",previewElementAttribute:"href"}];function updateAllInputs(){for(const e of inputsTextConfig){const t=document.querySelector(e.inputClass),r=document.querySelector(e.previewClass);document.querySelector(e.previewElementAttribute);let l=t.value;"innerHTML"===e.previewElementAttribute?(l=""===t.value?e.defaultValue:t.value,r.innerHTML=l):"href"===e.previewElementAttribute&&(""===t.value?l="#":(l=l.replace(e.previewPrefix,""),l=e.previewPrefix+l),r.href=l)}saveInLocalStorage()}const inputTextElements=document.querySelectorAll(".js-input-text");for(const e of inputTextElements)e.addEventListener("keyup",updateAllInputs);const collapsableHeaders=document.querySelectorAll(".js-collapsable-header");for(const e of collapsableHeaders)e.addEventListener("click",switchCollapsable);function switchCollapsable(e){const t=e.currentTarget.parentNode,r=document.querySelectorAll(".js-collapsable-container");for(const e of r)t===e?e.classList.toggle("collapsable--close"):e.classList.add("collapsable--close")}const cardElement=document.querySelector(".js-card"),paletteElements=document.querySelectorAll(".js-palette"),cardPreviewText=document.querySelector(".card__preview--text"),borderIcons=document.querySelectorAll(".js-border-palette1-color3"),linkIcons=document.querySelectorAll(".js-icon-palette1-color2");let checkedPalette=1;function handlePalette(e){const t=document.querySelector(".js-palette:checked");if(checkedPalette=t.value,cardElement.classList.add("palette"+checkedPalette),"1"===checkedPalette){cardPreviewText.classList.remove("js-palette2","js-palette3"),cardPreviewText.classList.add("js-palette1");for(const e of borderIcons)e.classList.remove("js-border-palette2-color3","js-border-palette3-color3"),e.classList.add("js-border-palette1-color3");for(const e of linkIcons)e.classList.remove("js-icon-palette3-color2","js-icon-palette2-color2"),e.classList.add("js-icon-palette1-color2")}else if("2"===checkedPalette){cardPreviewText.classList.remove("js-palette1","js-palette3"),cardPreviewText.classList.add("js-palette2");for(const e of borderIcons)e.classList.remove("js-border-palette3-color3","js-border-palette1-color3"),e.classList.add("js-border-palette2-color3");for(const e of linkIcons)e.classList.remove("js-icon-palette3-color2","js-icon-palette1-color2"),e.classList.add("js-icon-palette2-color2")}else if("3"===checkedPalette){cardPreviewText.classList.remove("js-palette1","js-palette2"),cardPreviewText.classList.add("js-palette3");for(const e of borderIcons)e.classList.remove("js-border-palette1-color3","js-border-palette2-color3"),e.classList.add("js-border-palette3-color3");for(const e of linkIcons)e.classList.remove("js-icon-palette1-color2","js-icon-palette2-color2"),e.classList.add("js-icon-palette3-color2")}saveInLocalStorage()}for(const e of paletteElements)e.addEventListener("change",handlePalette);const fr=new FileReader,uploadBtn=document.querySelector(".js__profile-trigger"),fileField=document.querySelector(".js__profile-upload-btn"),profileImage=document.querySelector(".js__profile-image"),profilePreview=document.querySelector(".js__profile-preview");let photo="";function getImage(e){const t=e.currentTarget.files[0];fr.addEventListener("load",writeImage),fr.readAsDataURL(t)}function writeImage(){photo=fr.result,updatePhoto(),saveInLocalStorage()}function updatePhoto(){const e=photo||"./assets/images/animals.gif";profilePreview.style.backgroundImage=`url(${e})`,profileImage.style.backgroundImage=`url(${e})`}function fakeFileClick(){fileField.click()}function saveInLocalStorage(){const e={photo:photo,palette:document.querySelector(".js-palette:checked").value,name:document.querySelector(".js-input-name").value,job:document.querySelector(".js-input-job").value,email:document.querySelector(".js-input-email").value,phone:document.querySelector(".js-input-phone").value,linkedin:document.querySelector(".js-input-linkedin").value,github:document.querySelector(".js-input-github").value},t=JSON.stringify(e);localStorage.setItem("userData",t)}function getFromLocalStorage(){const e=localStorage.getItem("userData");if(null!==e){const t=JSON.parse(e);document.querySelector(".js-input-name").value=t.name,document.querySelector(".js-input-job").value=t.job,document.querySelector(".js-input-email").value=t.email,document.querySelector(".js-input-phone").value=t.phone,document.querySelector(".js-input-linkedin").value=t.linkedin,document.querySelector(".js-input-github").value=t.github,photo=t.photo;const r=document.querySelectorAll(".js-palette");for(const e of r)e.value===t.palette&&(e.checked=!0);updateAllInputs(),handlePalette(),updatePhoto()}}uploadBtn.addEventListener("click",fakeFileClick),fileField.addEventListener("change",getImage);const resetButton=document.querySelector(".js-reset"),previewName=document.querySelector(".js-preview-name"),previewJob=document.querySelector(".js-preview-job"),previewEmail=document.querySelector(".js-preview-email"),previewPhone=document.querySelector(".js-preview-phone"),previewLinkedin=document.querySelector(".js-preview-linkedin"),previewGithub=document.querySelector(".js-preview-github"),cardImage=document.querySelector(".js__profile-image"),previewImage=document.querySelector(".js__profile-preview"),form=document.querySelectorAll(".js-form");function reset(){for(let e=0;e<form.length;e++)form[e].value="";previewName.innerHTML="Tree Huggers",previewJob.innerHTML="Front-end developers",previewEmail.removeAttribute("href"),previewPhone.removeAttribute("href"),previewLinkedin.removeAttribute("href"),previewGithub.removeAttribute("href"),cardImage.style.backgroundImage="url(./assets/images/animals.gif)",previewImage.style.backgroundImage="",resetLocalStorage()}function resetLocalStorage(){localStorage.clear("js-palette"),localStorage.clear("js-preview-name"),localStorage.clear("js-preview-job"),localStorage.clear("image"),localStorage.clear("phone"),localStorage.clear("email"),localStorage.clear("linkedin"),localStorage.clear("github")}resetButton.addEventListener("click",reset);const formElement=document.querySelector(".js-submit");function handleSubmit(e){e.preventDefault()}formElement.addEventListener("submit",handleSubmit),getFromLocalStorage(),updateAllInputs(),handlePalette(),updatePhoto();