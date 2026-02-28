function sumSalary(salaries) {
  let sum = 0;
    
  for (let val of Object.values(salaries)) {
      if (isNaN(val) || !isFinite(val)) {
          continue;
      }
 
      sum += val;
  }
    
  return sum;
}
