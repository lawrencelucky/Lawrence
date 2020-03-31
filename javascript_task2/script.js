const data = [
  {
    principal: 2500,
    time: 1.8
  },

  {
    principal: 1000,
    time: 5
  },

  {
    principal: 3000,
    time: 1
  },

  {
    principal: 2000,
    time: 3
  }
];

const interestCalculator = arr => {
  arr.forEach(el => {
    let rate;
    if (el.principal >= 2500 && el.time > 1 && el.time < 3) {
      rate = 3;
    } else if (el.principal >= 2500 && el.time >= 3) {
      rate = 4;
    } else if (el.principal < 2500 || el.time <= 1) {
      rate = 2;
    } else {
      rate = 1;
    }
    let interest = (el.principal * el.time * rate) / 100;

    let interestData = [
      {
        principal: el.principal,
        rate: rate,
        time: el.time,
        interest: interest
      }
    ];

    console.log(interestData);
    return interestData;
  });
};

interestCalculator(data);
