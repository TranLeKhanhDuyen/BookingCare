const getHomePage = (req, res) => {
  return res.send('homepage.ejs');
};

module.exports = {
  getHomePage: getHomePage
};
