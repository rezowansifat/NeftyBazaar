const express = require("express");

const {
  getAllUser,
  createUser,
  getSingleUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

//User Routs
const router = express.Router();

router.route("/user").get(getAllUser).post(createUser);
router
  .route("/user/:id")
  .get(getSingleUser)
  .patch(updateUser)
  .delete(deleteUser);

module.exports = router;
