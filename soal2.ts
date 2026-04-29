function aritmethicSequenceFromNIM(nim: string) : void {
  const start = parseInt(nim.slice(-2));

  const thirdFromLast = parseInt(nim[nim.length - 3]);

  const step = thirdFromLast + 1;

  console.log(`NIM: ${nim}`);
  console.log(`Start: ${start}`);
  console.log(`Step: ${step}`);

  let result : number[] = [];

  for (let i = 0; i < 10; i++) {
    result.push(start + i * step);
  }

  console.log(result.join(", "))
}

aritmethicSequenceFromNIM("048886081");