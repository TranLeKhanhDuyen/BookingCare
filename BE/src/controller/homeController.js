import db from '../models/index';

const getHomePage = async (req, res) => {
  try {
    const data = await db.User.findAll();
    return res.render('homepage.ejs', {
      data: JSON.stringify(data)
    });
  } catch (e) {
    console.log(e);
  }
};

const getCRUD = (req, res) => {
  return res.render('crud.ejs');
};

module.exports = {
  getHomePage: getHomePage,
  getCRUD: getCRUD
};
