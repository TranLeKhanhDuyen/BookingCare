import db from '../models/index';
import CRUDService from '../services/CRUDService';

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

const postCRUD = async (req, res) => {
  const message = await CRUDService.createNewUser(req.body);
  return res.send('post crud from server');
};

const displayGetCRUD = async (req, res) => {
  const data = await CRUDService.getAllUser();
  return res.render('displayCRUD.ejs', {
    dataTable: data
  });
};

const getEditCRUD = async (req, res) => {
  const userId = req.query.id;
  if (userId) {
    const userData = await CRUDService.getUserInfoById(userId);
    // check user data not found

    // let userData
    return res.render('editCRUD.ejs', {
      user: userData
    });
  } else {
    return res.send('Users not found!');
  }
};

const putCRUD = async (req, res) => {
  const data = req.body;
  let allUsers = await CRUDService.updateUserData(data);
  return res.render('displayCRUD.ejs', {
    dataTable: allUsers
  });
};

const deleteCRUD = async (req, res) => {
  const id = req.query.id;
  if (id) {
    await CRUDService.deleteUserById(id);
    return res.send('Delete the user succed!');
  } else {
    return res.send('User not found!');
  }
};

module.exports = {
  getHomePage: getHomePage,
  getCRUD: getCRUD,
  postCRUD: postCRUD,
  displayGetCRUD: displayGetCRUD,
  getEditCRUD: getEditCRUD,
  putCRUD: putCRUD,
  deleteCRUD: deleteCRUD
};
