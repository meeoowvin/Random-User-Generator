window.onload = () => {
  randomUserGenerator();
};
const randomUserGenerator = () => {
  fetch("https://randomuser.me/api/?nat=us,dk,fr,gb")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      showRandomUserData(data);
    });
};

showRandomUserData = (randomUser) => {
  if (randomUser.results[0].gender === "male") {
    document.getElementById("gender").innerHTML = "Male";
    document.getElementById("icon").src =
      "https://joeschmoe.io/api/v1/male/" +
      `${randomUser.results[0].name.first}`;
  } else {
    document.getElementById("gender").innerHTML = "Female";
    document.getElementById("icon").src =
      "https://joeschmoe.io/api/v1/female/" +
      `${randomUser.results[0].name.first}`;
  }

  document.getElementById(
    "name"
  ).innerText = `${randomUser.results[0].name.title} ${randomUser.results[0].name.first} ${randomUser.results[0].name.last}`;

  document.getElementById(
    "lname"
  ).innerText = `${randomUser.results[0].name.last}`;

  document.getElementById(
    "fname"
  ).innerText = `${randomUser.results[0].name.first}`;

  document.getElementById("age").innerText = `${randomUser.results[0].dob.age}`;

  document.getElementById(
    "birthday"
  ).innerText = `${randomUser.results[0].dob.date}`;

  document.getElementById(
    "location"
  ).innerText = `${randomUser.results[0].location.city}, ${randomUser.results[0].location.state}`;

  document.getElementById(
    "country"
  ).innerText = `${randomUser.results[0].location.country}`;

  document.getElementById(
    "description"
  ).innerText = `${randomUser.results[0].location.timezone.description}`;

  document.getElementById("email").innerText = `${randomUser.results[0].email}`;

  const registeredDate = new Date(`${randomUser.results[0].registered.date}`);
  const birthDate = new Date(`${randomUser.results[0].dob.date}`);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month1 = months[registeredDate.getMonth()]; //months from 1-12
  const day1 = registeredDate.getDate();
  const year1 = registeredDate.getUTCFullYear();

  regDate = month1 + " " + day1 + ", " + year1;

  const month2 = months[birthDate.getMonth()]; //months from 1-12
  const day2 = birthDate.getDate();
  const year2 = birthDate.getUTCFullYear();

  birDate = month2 + " " + day2 + ", " + year2;

  document.getElementById("registered_since").innerText = regDate;

  document.getElementById("age").innerText = `${randomUser.results[0].dob.age}`;

  document.getElementById("birthday").innerText = birDate;

  const rand = Math.random() < 0.5;

  if (rand === true) {
    document.getElementById("status").innerHTML = "Active";
    document
      .getElementById("status")
      .classList.replace("bg-red-500", "bg-green-500");
  } else {
    document.getElementById("status").innerHTML = "Inactive";
    document
      .getElementById("status")
      .classList.replace("bg-green-500", "bg-red-500");
  }

  document.getElementById("phone").innerText = `${randomUser.results[0].phone}`;
  document.getElementById("cell").innerText = `${randomUser.results[0].cell}`;

  document.getElementById(
    "username"
  ).innerText = `${randomUser.results[0].login.username}`;
  document.getElementById(
    "pass"
  ).innerText = `${randomUser.results[0].login.password}`;

  document.getElementById(
    "avatar"
  ).src = `${randomUser.results[0].picture.large}`;
};
