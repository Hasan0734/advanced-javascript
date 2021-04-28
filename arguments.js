function add(num1, num2) {
    console.log([...arguments]);
    let sum = 0;
  const arra = [...arguments];
    for (let i = 0; i < arra.length; i++) {
        const element = arra[i];
        sum = sum + element
    }

    return sum
}
const result = add(12, 12, 6, 5, 12, 25, 20);
console.log(result)