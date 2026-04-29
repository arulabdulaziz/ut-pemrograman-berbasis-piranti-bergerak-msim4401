function isPrime(num: number) : boolean {
  if(num < 2) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if(num % 2 === 0) return false;
  }

  return true;
}

function primeNumbersFromNIM(nim: string) : void {
  const limit = parseInt(nim.slice(-2)) + 10;

  console.log(`NIM: ${nim}`);
  console.log(`Limit: ${limit}`);
  console.log("Prime numbers:")

  let prime : number[] = [];

  for (let i = 1; i <= limit; i++) {
    if (isPrime(i)) {
      prime.push(i);
    }
  }

  console.log(prime.join(', '))

}

primeNumbersFromNIM("048886081");