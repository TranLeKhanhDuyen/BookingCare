import express from "express";

const router = express.Router();

let initWebRouters = (app) => {
  router.get("/", (req, res) => {
    return res.send("abc");
  });

  return app.use("/", router);
};
