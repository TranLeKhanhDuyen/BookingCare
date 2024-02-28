import express from "express";
import homeController from '../controller/homeController'

const router = express.Router();

const initWebRouters = (app) => {
  router.get("/", homeController.getHomePage)

  router.get("/test", (req, res) => {
    return res.send("test route ");
  });

  return app.use("/", router);
};

module.exports = initWebRouters
