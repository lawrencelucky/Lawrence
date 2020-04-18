let yugiho = function (num) {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      arr.pop(i);
      let yu = i.toString();
      let replaced = yu.replace(yu, "yu");
      arr.push(replaced);
    }

    if (i % 3 === 0) {
      arr.pop(i);
      let gi = i.toString();
      let replaced = gi.replace(gi, "gi");
      arr.push(replaced);
    }
    if (i % 5 === 0) {
      arr.pop(i);
      let oh = i.toString();
      let replaced = oh.replace(oh, "oh");
      arr.push(replaced);
    }

    if (i % 2 === 0 && i % 3 === 0) {
      arr.pop(i);
      let yuGi = i.toString();
      let replaced = yuGi.replace(yuGi, "yu-gi");
      arr.push(replaced);
    }

    if (i % 2 === 0 && i % 5 === 0) {
      arr.pop(i);
      let yuOh = i.toString();
      let replaced = yuOh.replace(yuOh, "yu-oh");
      arr.push(replaced);
    }

    if (i % 3 === 0 && i % 5 === 0) {
      arr.pop(i);
      let giOh = i.toString();
      let replaced = giOh.replace(giOh, "gi-oh");
      arr.push(replaced);
    }

    if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
      arr.pop(i);
      let yuGiOh = i.toString();
      let replaced = yuGiOh.replace(yuGiOh, "yu-gi-oh");
      arr.push(replaced);
    }

    arr.push(i);
  }

  console.log(arr);
};

yugiho(100);
yugiho(50);
