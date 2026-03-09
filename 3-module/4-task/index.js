function showSalary(users, age) {
  const result = [];
  
  for (let item of users) {
      if (item['age'] <= age) {
          result.push(item['name'] + ", " + item['balance']);
      }
  }
  
  return result.join("\n");
}
