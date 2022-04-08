const elForm = document.querySelector(".hero__form");
let elNameInput = document.querySelector(".name-input");
let elEmailInput = document.querySelector(".email-input");
let elPhoneInput = document.querySelector(".phone-input");
let elPasswordInput = document.querySelector(".hero__password");
let elConfirmInput = document.querySelector(".confirm");
let elSubmitBtn = document.querySelector(".hero__btn");

elForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

elNameInput.addEventListener("keyup", () => {
  elText = elNameInput.value.trim();
  let elOutput = document.querySelector(".name-hint");

  try {
    if(elText == "" || elText.match(/[0-9]/) || elText.match(/[!@#$%^&*]/) || elText.includes("  ")){
      elNameInput.style.outline = "2px solid #ee0004";
      elOutput.style.display = "block";
      elOutput.style.color = "#ee0004";
      throw "Enter a valid name";
    } else {
      elNameInput.style.outline = "2px solid #543fd3";
      elOutput.style.display = "block";
      elOutput.style.color = "#543fd3";
      throw "Success";
    }
  } catch(e) {
    elOutput.innerText = e;
  }
});

elNameInput.addEventListener("blur", () => {
  if(elNameInput.value == ""){
    elNameInput.style.outline = "none";
    let elOutput = document.querySelector(".name-hint");
    elOutput.style.display = "none";
  }
});

elEmailInput.addEventListener("keyup", () => {
  let emailText = elEmailInput.value;
  let elError = document.querySelector(".bxs-error-circle");
  let elEmailHint = document.querySelector(".email-hint");

  try{
    if(!emailText.includes("@gmail")){
      elEmailInput.style.outline = "2px solid #ee0004";
      elEmailHint.style.display = "block";
      elEmailHint.style.color = "#ee0004";
      elError.style.display = "block";
      throw "Please, enter a valid email address";
    } else{
      elEmailInput.style.outline = "2px solid #543fd3";
      elEmailHint.style.display = "block";
      elEmailHint.style.color = "#543fd3";
      elError.style.display = "none";
      throw "Success";
    }
  } catch(e){
    elEmailHint.innerText = e;
  }
});

elEmailInput.addEventListener("blur", () => {
  if(elEmailInput.value == ""){
    elEmailInput.style.outline = "none";
    let elOutput = document.querySelector(".email-hint");
    elOutput.style.display = "none";
    let elError = document.querySelector(".bxs-error-circle");
    elError.style.display = "none";
  }
});

elPhoneInput.addEventListener("keyup", () => {
  let elPhone = elPhoneInput.value.trim();
  let elPhoneHint = document.querySelector(".phone-hint");

  try{
    if(!Number(elPhone) || elPhone.length != 13){
      elPhoneInput.style.outline = "2px solid #ee0004";
      elPhoneHint.style.color = "#ee0004";
      throw "Please, enter a valid phone number";
    } else{
      elPhoneInput.style.outline = "2px solid #543fd3";
      elPhoneHint.style.color = "#543fd3";
      throw "Success";
    }
  } catch (e){
    elPhoneHint.innerText = e;
  }
});

elPhoneInput.addEventListener("blur", () => {
  if(elPhoneInput.value.length <= 4){
    elPhoneInput.style.outline = "none";
    let elOutput = document.querySelector(".phone-hint");
    elOutput.style.color = "#595959";
    elPhoneInput.value = "+998";
  }
});

elPasswordInput.addEventListener("keyup", () => {
  let elPassword = elPasswordInput.value.trim();
  let elPasswordHint = document.querySelector(".password-hint");

  try{
    if(elPassword.match(/[A-Z]/) == null || elPassword.match(/[0-9]/) == null || elPassword.match(/[!@#$%^&*]/) == null || elPassword.length <= 8){
      elPasswordInput.style.outline = "2px solid #ee0004";
      elPasswordHint.style.color = "#ee0004";
      throw "Please, enter a valid password";
    } else{
      elPasswordInput.style.outline = "2px solid #543fd3";
      elPasswordHint.style.color = "#543fd3";
      throw "Success";
    }
  } catch (e){
    elPasswordHint.innerText = e;
  }
});

elPasswordInput.addEventListener("blur", () => {
  if(elPasswordInput.value == ""){
    elPasswordInput.style.outline = "none";
    let elOutput = document.querySelector(".password-hint");
    elOutput.style.color = "#595959";
  }
});

elConfirmInput.addEventListener("keyup", () => {
  let elConfirm = elConfirmInput.value.trim();
  let elPassword  = elPasswordInput.value.trim();
  let elConfirmHint = document.querySelector(".confirm-hint");

  try{
    if(elConfirm != elPassword){
      elConfirmInput.style.outline = "2px solid #ee0004";
      elConfirmHint.style.color = "#ee0004";
      throw "Please, enter a correct password";
    } else{
      elConfirmInput.style.outline = "2px solid #543fd3";
      elConfirmHint.style.color = "#543fd3";
      throw "Success"; 
    }
  } catch(e) {
    elConfirmHint.innerText = e;
  }
});

elConfirmInput.addEventListener("blur", () => {
  if(elConfirmInput.value == ""){
    elConfirmInput.style.outline = "none";
    let elOutput = document.querySelector(".confirm-hint");
    elOutput.style.color = "#595959";
  }
});

elSubmitBtn.addEventListener("click", () => {
  let elHeroContainer = document.querySelector(".hero__container");
  elNameInput.value = "";
  elEmailInput.value = "";
  elPhoneInput.value = "";
  elPasswordInput.value = "";
  elConfirmInput.value = "";
  
  let elOutput = document.querySelector(".name-hint");
  elOutput.style.display = "none";
  elNameInput.style.outline = "none";

  elEmailInput.style.outline = "none";
  let elOutputTwo = document.querySelector(".email-hint");
  elOutputTwo.style.color = "#595959";
  elOutputTwo.innerText = "Please enter your email adress";
  let elError = document.querySelector(".bxs-error-circle");
  elError.style.display = "none";

  elPhoneInput.style.outline = "none";
  let elOutputThree = document.querySelector(".phone-hint");
  elOutputThree.style.color = "#595959";
  elOutputThree.innerText = "Optional - we never use this for marketing"
  elPhoneInput.value = "+998";

  elPasswordInput.style.outline = "none";
  let elOutputFour = document.querySelector(".password-hint");
  elOutputFour.style.color = "#595959";
  elOutputFour.innerText = "Please enter your password";

  elConfirmInput.style.outline = "none";
  let elOutputFive = document.querySelector(".confirm-hint");
  elOutputFive.style.color = "#595959";
  elOutputFive.innerText = "Please confirm your password";
})