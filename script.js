
var vaccinated = false;

var name=  'Chris Oneal';

var message = 'Hi' + name + 'Vaccine Approved, Welcome to Massy Stores!';

var elName = document.getElementById('AYV');

elName.textContent = message;

console.log(message);



var vaccinated = false;


var name = 'Chris Oneal';

var message = 'Hi ' + name + ' ,Vaccine Approved, Welcome to MovieTowne!';

var elName = document.getElementById('AYV');

elName.textContent = message;

console.log(message);



var vaccineCard = {
  name: 'Chris Oneal',
  vaccinationLocation: 'Napa',
  type: 'Astra Zenica',
  secondDose: new Date('Nov 2, 2021 01:00:00'),
  fullyVacced: true,
  getDifference:function(){
    var today = new Date()
    var difference = today.getTime() - vaccineCard.secondDose.getTime();
    difference = Math.floor(difference/84600000);
    return difference;
  }
};

var date = vaccineCard.getDifference();
var daysUntil = 14 - date;


if (vaccineCard.fullyVacced == true) {
 if (date >= 14) {
 var message = document.getElementById("message");
 message.textContent= "Your Vaccination has be verified enjoy your Movie!";
 } else {
   var message = document.getElementById("message");
    message.textContent= "There are " + daysUntil + " until you will be fully vaccinated. Please try again then";
 }
 } else { var message = document.getElementById("message");
    message.textContent= "Unfortunatley you are not vaccinated and cannot be allowed entry."
}
