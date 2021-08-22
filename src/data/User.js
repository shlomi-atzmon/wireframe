const avatars = [
  "https://semantic-ui.com/images/avatar/small/jenny.jpg",
  "https://semantic-ui.com/images/avatar/small/steve.jpg",
  "https://semantic-ui.com/images/avatar/small/elliot.jpg",
  "https://semantic-ui.com/images/avatar2/small/kristy.png",
  "https://semantic-ui.com/images/avatar2/small/matthew.png",
  "https://semantic-ui.com/images/avatar2/small/molly.png",
  "https://semantic-ui.com/images/avatar2/small/elyse.png",
  "https://semantic-ui.com/images/avatar/small/daniel.jpg",
  "https://semantic-ui.com/images/avatar/small/helen.jpg"
];

const names = [
  "Eyal",
  "Liam",
  "Olivia",
  "Noah",
  "Emma",
  "Oliver",
  "Ava",
  "Elijah",
  "Charlotte",
  "Sophia",
  "James",
  "Amelia",
  "Benjamin",
  "Isabella",
  "Lucas",
  "Mia",
  "Henry",
  "Evelyn",
  "Alexander",
  "Harper",
];


const User = {
  name: names[Math.floor(Math.random() * names.length)],
  avatar: avatars[Math.floor(Math.random() * avatars.length)],
};

export default User;