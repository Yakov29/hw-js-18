
const users = [
    {
      name: "John",
      eyeColor: "blue",
      gender: "male",
      isActive: true,
      email: "john@example.com",
      age: 30,
    },
    {
      name: "Jane",
      eyeColor: "green",
      gender: "female",
      isActive: false,
      email: "jane@example.com",
      age: 25,
    },
  
  ];
  

  const userNames = users.map(user => user.name);
  

  function getUsersByEyeColor(eyeColor) {
    return users.filter(user => user.eyeColor === eyeColor);
  }
  const usersWithEyeColor = getUsersByEyeColor("blue");

  function getUserNamesByGender(gender) {
    return users.filter(user => user.gender === gender).map(user => user.name);
  }
  const maleUserNames = getUserNamesByGender("male");
  

  const inactiveUsers = users.filter(user => !user.isActive);
  

  function getUserByEmail(email) {
    return users.find(user => user.email === email);
  }
  const userEmail = "john@example.com";
  const userByEmail = getUserByEmail(userEmail);
  

  function getUsersByAgeRange(min, max) {
    return users.filter(user => user.age >= min && user.age <= max);
  }
  const usersInAgeRange = getUsersByAgeRange(20, 35);
  