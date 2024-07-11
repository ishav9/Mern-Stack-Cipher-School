const express = require('express');
const router = require("router");
const authMiddleWare = require("../middleware/auth-middleware")
const taskController = require("../controllers/task-controller");
router.post("/add", authMiddleWare, taskController.addnewTask)
router.get("/self",authMiddleWare,taskController.getTask)
module.exports=router;