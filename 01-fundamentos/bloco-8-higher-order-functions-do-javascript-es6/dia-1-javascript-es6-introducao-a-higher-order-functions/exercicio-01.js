const newEmployees = () => {
  const employees = {
    id1: firstNewEmployees('Pedro Guerra'),
    id2: firstNewEmployees('Luiza Drumond'), 
    id3: firstNewEmployees('Carla Paiva'), 
  }
  return employees;
};

const firstNewEmployees = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_');
  return {fullName, email: `${email}@trybe.com`};
}

console.log(newEmployees(firstNewEmployees));