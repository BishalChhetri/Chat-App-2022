const users = [];

//Add user
const addUser = ({ id, username, room }) => {
  //clean the data
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();

  //Validate data
  if (!username || !room) {
    return { error: "Username & Room are equired!" };
  }

  // Validate username & Room
  const existingUser = users.find((user) => {
    return user.username === username && user.room === room;
  });

  if (existingUser) {
    return { error: "Username is in use." };
  }

  const user = { id, username, room };
  users.push(user);
  return { user };
};

//Remove user
const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);
  // Found user
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

//Get user
const getUser = (id) => {
  return users.find((user) => user.id === id);
};

//get users of same room
const getUsersInRoom = (room) => {
  room = room.trim().toLowerCase();
  return users.filter((user) => user.room === room);
};

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
};
