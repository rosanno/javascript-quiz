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
    const { name, year } = dynastyReign[i];

    const startYear = convertYear(year);

    if (!isNaN(startYear)) {
      const duration = startYear - 1000;
      if (duration > longestDuration) {
        longestDuration = duration;
        longestDynastyReign = name;
      }
    } else {
      return "Invalid";
    }
  }

  return longestDynastyReign;
}

function convertYear(year) {
  const romanSymbols = {
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
    const currentSymbol = romanNumerals[year[i]];

    if (i < year.length - 1 && currentSymbol < romanSymbols[year[i + 1]]) {
      result -= currentSymbol;
    } else {
      result += currentSymbol;
    }
  }

  return result;
}
