const User = require("../models/User");

const getUsers = async (req, res) => {
  const { search, limit = 10, page = 1 } = req.query;
  const regex = new RegExp(search);
  const filter = {
    firstName: regex,
  };

  const users = await User.find(filter)
    .limit(limit)
    .skip((page - 1) * limit);

  const count = await User.countDocuments(filter);

  res.json({
    data: users,
    count,
    page,
    totalPage: Math.ceil(count / limit),
  });
};

module.exports = {
  getUsers,
};
