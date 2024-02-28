import db from '../models/index';

const getHomePage = async (req, res) => {
  try {
  } catch (e) {
    console.log(e);
  }

  const data = await db.user.findAll();
  return res.send('homepage.ejs');
};

module.exports = {
  getHomePage: getHomePage
};
