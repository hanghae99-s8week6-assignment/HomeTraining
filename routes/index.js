const express = require("express");
const Posts = require("./posts");
const Comments = require("./comments");
const Users = require("./users");
const Logins = require("./login");
const router = express.Router();
router.use('/posts/',Posts);
router.use('./comments/',Comments);
router.use('./users/',Users);
router.use('./login/',Logins);

module.exports = router;
