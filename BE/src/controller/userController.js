import userService from '../services/userService';

const handleLogin = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res.status(500).json({
      errCode: 1, //login fail
      message: 'Missing inputs parameter!'
    });
  }

  const userData = await userService.handleUserLogin(email, password);
  console.log(userData);
  // check email exist
  // compare password
  // return userinfo

  return res.status(200).json({
    errCode: userData.errCode,
    message: userData.errMessage,
    user: userData.user ? userData.user : {}
  });
};

const handleGetAllUsers = async (req, res) => {
  const id = req.body.id;

  if (!id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: 'Missing required parameters',
      users: []
    });
  }

  const users = await userService.getAllUsers(id);
  return res.status(200).json({
    errCode: 0,
    errMessage: 'OKLA',
    users
  });
};

module.exports = {
  handleLogin: handleLogin,
  handleGetAllUsers: handleGetAllUsers
};
