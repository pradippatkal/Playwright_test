function generateName() {
  const syllables = [
    "la", "na", "ra", "ma", "sa", "ta", "ka", "jo", "ro", "mi",
    "li", "no", "va", "ke", "shi", "ri", "do", "mo", "ne", "ki",
    "ha", "su", "to", "za", "pa", "re", "fa", "lo", "si", "ga"
  ];
  let name = "";
  while (name.length < 6) {
    name += syllables[Math.floor(Math.random() * syllables.length)];
  }
  return name.substring(0, Math.floor(Math.random() * (8 - 6 + 1)) + 6);
}
function generateINPhone() {
  const randDigit = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const firstDigit = randDigit(7, 9);
  const restDigits = Array.from({ length: 9 }, () => randDigit(0, 9)).join('');
  return `${firstDigit}${restDigits}`;
}


function generateUSAddress() {
  const streets = [
    "Main St", "Oak St", "Elm St", "Maple Ave", "Cedar St",
    "Pine St", "Washington Ave", "Lakeview Dr", "Sunset Blvd", "Broadway"
  ];

  const streetNumber = Math.floor(100 + Math.random() * 900);
  const streetName = streets[Math.floor(Math.random() * streets.length)];

  return `${streetNumber} ${streetName}`;
}

function generateUSCity() {
  const cities = [
    "New York", "Los Angeles", "Chicago", "Houston", "Phoenix",
    "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose",
    "Austin", "Jacksonville", "Columbus", "Indianapolis", "Charlotte",
    "Seattle", "Denver", "Boston", "Nashville", "Baltimore"
  ];
  return cities[Math.floor(Math.random() * cities.length)];
}

const firstName = generateName()
const lastName = generateName()
const emergencyContactName = "Raja Kumar";
const relationshipToContractor = "Friend";
const emergencyContactEmail = "johndoe235@mail.com".toLowerCase();

export const agentData = {
  firstName: firstName,
  lastName: lastName,
  email: `${firstName}.${lastName}@mail.com`.toLowerCase(),
  fullName: `${firstName} ${lastName}`,
  emergencyContactName: emergencyContactName,
  relationshipToContractor: relationshipToContractor,
  emergencyContactemail: emergencyContactEmail,
  emergencyContactPhone: generateINPhone(),
  phone: generateINPhone(),
  mailingAddressLine1: generateUSAddress(),
  city: generateUSCity(),
  zipCode: '85001',
};

export const sponsorData = {
  sponsorFirstName: "ian",
  sponsorLastName: "Anderson",
  sponsorFullName: "ian Anderson",
  sponsorEmail: "ian.anderson@exprealty.com",

};



