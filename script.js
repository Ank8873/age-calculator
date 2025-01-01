function calculateAge()
{
  const today=new Date();
  const birthdateInput=document.getElementById("birthdate").value;
  const birthdatPart=birthdateInput.split("-");
  const birthDay=birthdatPart[2];
  const birthMonth=birthdatPart[1] - 1;
  const birthYear=birthdatPart[0];
  const birthDate=new Date(birthYear,birthMonth,birthDay);
  console.log(birthdateInput);
  console.log(birthdatPart);
  console.log(birthDay);
  console.log(birthMonth);
  console.log(birthYear);
  console.log(birthDate);
  const ageInMilliSeconds=today - birthDate;
  console.log(ageInMilliSeconds);
  const ageInSecond=Math.floor(ageInMilliSeconds/1000);
  const ageInMinutes=Math.floor(ageInSecond/60);
  const ageInHours=Math.floor(ageInMinutes/60);
  const ageInDays=Math.floor(ageInHours/24);
  const ageInWeeks=Math.floor(ageInDays/7);
  const ageInMonths=Math.floor(ageInDays/30.436875);
  const ageInYears=Math.floor(ageInDays/365.25);
  const resultContaier=document.getElementById("rescontainer");
  const result=document.getElementById("result");
  result.innerHTML=`
    <div class="result-item">
        <h2>Result:</h2>
        <p>${ageInYears} Years ${ageInMonths % 12} Months ${ageInDays % 31} Days 
        </p>
    </div>
    <div class="result-items">
        <p>or ${ageInMonths} Months ${ageInDays % 31} Days</p>
    </div>
    <div class="result-items">
        <p>or ${ageInWeeks} Weeks ${ageInDays % 7} Days</p>
    </div>
    <div class="result-items">
        <p>or ${ageInDays} Days</p>
    </div>
    <div class="result-items">
        <p>or ${ageInHours} Hours</p>
    </div>
    <div class="result-items">
        <p>or ${ageInMinutes} Minutes</p>
    </div>
    <div class="result-items">
        <p>or ${ageInSecond} Seconds</p>
    </div>
  `;
};

const agecalculatorForm=document.getElementById("ageCalculator");
agecalculatorForm.addEventListener("submit",(Event)=>
{
  Event.preventDefault();
  calculateAge();
});