var vaccineCard = new Object();
var vaccineCard = {
  name: 'Chris Oneal',
  vaccinationLocation: 'Napa',
  type:'Astra Zenica',
  secondDose: new Date('August 10, 2021 01:00:00'),
  fullyVacced: true,
  checkDifference: function(){
    var today = new Date();
    var difference = today.getTime() - vaccineCard.secondDose.gettime();
    difference = Math.floor(difference/ 90000000);
    return difference;
  }
};

var date = vaccineCard.checkDifference();

var daysUntil = 14 - date;

if (vaccineCard.fullyVaccinated == true) {
  if (date >= 14) {
    var message = document.getElementById("message");
    message.textContent = "Vaccination Card Verified!";
  }
  else{
    var message = document.getElementById("message");
    message.textContent = "There are" + daysUntil + "days until may be allowed to enter";
    }
  else{
    var message = document.getElementById("message");
    message.textContent = "Vaccination Card was unable to be Verified. Unfortunatley we cannot allow you access to our buisness";
  }
}



var vaccinated = false;

var name=  'Chros Oneal';

var message = 'Hi' + name + 'Vaccine Approved, Welcome to Massy Stores!';

var elName = document.getElementById('AYV');

elName.textContent = message;

console.log(message);
