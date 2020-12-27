let User = require("../models/user.model");

module.exports = {
  getUsers(request, response) {
    User.find()
      .then((users) => response.status(200).json(users))
      .catch((error) => response.status(400).json(error));
  },
  addUser(request, response) {
    const { username } = request.body;

    const newUser = new User({ username });

    newUser
      .save()
      .then(() => response.status(200).json(`User ${username} added.`))
      .catch((error) => response.status(400).json(error));
  },
};
