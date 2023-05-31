const dynasty = [
  {
    name: "San Dynasty",
    year: "MXLI",
  },
  {
    name: "Viloria Dynasty",
    year: "MCCCIIII",
  },
  {
    name: "Tan Dynasty",
    year: "MCCCXCVIII",
  },
  {
    name: "Bon Dynasty",
    year: "MCDXLV",
  },
  {
    name: "Maiko Dynasty",
    year: "MDCLXIV",
  },
  {
    name: "Paul Dynasty",
    year: "MCMXLIX",
  },
  {
    name: "Andre Dynasty",
    year: "MMXICX",
  },
];

console.log(longestDynasty(dynasty));

function longestDynasty(dynastyReign) {
  if (dynastyReign.length === 0) {
    return "No Data";
  }

  let longestDuration = 0;
  let longestDynastyReign = "";

  for (let i = 0; i < dynastyReign.length; i++) {
    const dynasty = dynastyReign[i];

    const startYear = convertYear(dynasty.year);

    if (startYear !== null) {
      const duration = startYear - 1000;
      if (duration > longestDuration) {
        longestDuration = duration;
        longestDynastyReign = dynasty.name;
      }
    } else {
      continue;
    }
  }

  if (longestDynastyReign === "") {
    return "Invalid";
  }

  return longestDynastyReign;
}

function convertYear(year) {
  const regex = /^M(?:CM|D?C{0,3})(?:XC|L?X{0,3})(?:IX|V?I{0,3})$/;

  if (!regex.test(year)) {
    return null;
  }

  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = year.length - 1; i >= 0; i--) {
    const currentRomanNumerals = romanNumerals[year[i]];

    if (i < year.length - 1 && currentRomanNumerals < romanNumerals[year[i + 1]]) {
      result -= currentRomanNumerals;
    } else {
      result += currentRomanNumerals;
    }
  }

  return result;
}
