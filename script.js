// AGE CALCULATOR

document.getElementById("dob").addEventListener("change", function () {

try {

let dob = new Date(this.value);
let today = new Date();

if(dob > today)
{
alert("Future dates are not allowed.");
return;
}

let age = today.getFullYear() - dob.getFullYear();

document.getElementById("age").value = age;

}
catch(error)
{
console.log(error);
}

});

// PROFILE IMAGE VALIDATION

document.getElementById("photo").addEventListener("change", function(){

let file = this.files[0];

if(file)
{
let extension = file.name.split('.').pop().toLowerCase();

if(!['jpg','jpeg','png'].includes(extension))
{
alert("Only JPG, PNG, and JPEG files are allowed.");
this.value="";
return;
}

let reader = new FileReader();

reader.onload=function(e)
{
document.getElementById("preview").src=e.target.result;
};

reader.readAsDataURL(file);
}

});

// ADDRESS CHARACTER COUNT

document.getElementById("address1").addEventListener("input", function(){

document.getElementById("charCount").innerHTML =
this.value.length + " / 200";

});

// COURSE FEE CALCULATOR

let courses = document.querySelectorAll(".course");

courses.forEach(course=>{

course.addEventListener("change", calculateFee);

});

function calculateFee()
{
let total=0;

courses.forEach(course=>{

if(course.checked)
{
total += Number(course.value);
}

});

let gst = total * 0.18;

let discount = total > 15000 ? total * 0.10 : 0;

let finalAmount = total + gst - discount;

document.getElementById("fee").innerText=total;
document.getElementById("gst").innerText=gst.toFixed(2);
document.getElementById("discount").innerText=discount.toFixed(2);
document.getElementById("finalAmount").innerText=finalAmount.toFixed(2);
}

// SKILL SLIDER

document.getElementById("prog").oninput=function()
{
document.getElementById("progValue").innerText=this.value;
};

document.getElementById("comm").oninput=function()
{
document.getElementById("commValue").innerText=this.value;
};

// GRADE CALCULATOR

function calculateGrade()
{
let marks=document.querySelectorAll(".marks");

let total=0;

for(let i=0;i<marks.length;i++)
{
let value=Number(marks[i].value);

if(value>100)
{
alert("Percentage cannot exceed 100.");
return;
}

total+=value;
}

let percentage=total/5;

let grade="D";

if(percentage>=90)
grade="A+";
else if(percentage>=80)
grade="A";
else if(percentage>=70)
grade="B";
else if(percentage>=60)
grade="C";

document.getElementById("total").innerText=total;
document.getElementById("percentage").innerText=percentage+"%";
document.getElementById("grade").innerText=grade;
}

// PASSWORD STRENGTH

document.getElementById("password").addEventListener("keyup", function(){

let pass=this.value;

let strength="Weak";

if(pass.length>=8 &&
/[A-Z]/.test(pass) &&
/[a-z]/.test(pass) &&
/[0-9]/.test(pass) &&
/[^A-Za-z0-9]/.test(pass))
{
strength="Strong";
}
else if(pass.length>=6)
{
strength="Medium";
}

document.getElementById("strength").innerText=
"Password Strength : "+strength;

});

// FORM VALIDATION

document.getElementById("registrationForm")
.addEventListener("submit", function(e){

let mobile=document.getElementById("mobile").value;

let email=document.getElementById("email").value;

let terms=document.getElementById("terms").checked;

let password=document.getElementById("password").value;

let confirm=document.getElementById("confirmPassword").value;

let emailRegex =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!/^\d{10}$/.test(mobile))
{
alert("Mobile number must contain exactly 10 digits.");
e.preventDefault();
return;
}

if(!emailRegex.test(email))
{
alert("Enter a valid email address.");
e.preventDefault();
return;
}

if(password !== confirm)
{
alert("Passwords do not match.");
e.preventDefault();
return;
}

if(!terms)
{
alert("Please accept Terms & Conditions.");
e.preventDefault();
return;
}

alert("Registration Submitted Successfully");

});

// PROGRESS BAR

let fields=document.querySelectorAll("input,textarea,select");

fields.forEach(field=>{

field.addEventListener("input", updateProgress);

});

function updateProgress()
{
let filled=0;

fields.forEach(field=>{

if(field.value.trim()!=="")
filled++;

});

let percent=(filled/fields.length)*100;

document.getElementById("progressBar").style.width=
percent+"%";
}

document.getElementById("darkModeBtn")
.addEventListener("click",()=>{

document.body.classList.toggle("dark-mode");

localStorage.setItem(
"darkMode",
document.body.classList.contains("dark-mode")
);

});

if(localStorage.getItem("darkMode")==="true")
{
document.body.classList.add("dark-mode");
}

//Local Storage Auto Save Purpose 
const allInputs =
document.querySelectorAll("input, textarea, select");

allInputs.forEach(input=>{

input.addEventListener("input",()=>{

localStorage.setItem(
input.id || input.name,
input.value
);

});

});

window.onload = () => {

allInputs.forEach(input=>{

let savedValue=
localStorage.getItem(input.id || input.name);

if(savedValue)
{
input.value=savedValue;
}

});

};
const sections =
document.querySelectorAll(".section");

let currentStep=0;

showStep(currentStep);

function showStep(step)
{
sections.forEach(
section=>section.classList.remove("active")
);

sections[step].classList.add("active");
}

document.querySelectorAll(".nextBtn")
.forEach(btn=>{

btn.addEventListener("click",()=>{

if(currentStep < sections.length-1)
{
currentStep++;
showStep(currentStep);
}

});

});

document.querySelectorAll(".prevBtn")
.forEach(btn=>{

btn.addEventListener("click",()=>{

if(currentStep>0)
{
currentStep--;
showStep(currentStep);
}

});

});
function showSummary()
{
document.getElementById("summaryPage")
.style.display="block";

document.getElementById("summaryName")
.innerText=
document.getElementById("fullname").value;

document.getElementById("summaryEmail")
.innerText=
document.getElementById("email").value;

document.getElementById("summaryMobile")
.innerText=
document.getElementById("mobile").value;

document.getElementById("summaryFee")
.innerText=
document.getElementById("finalAmount").innerText;
}