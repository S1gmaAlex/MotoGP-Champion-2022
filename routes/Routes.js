const { Router } = require('express');
const HomeController = require('../controllers/Controller');

const router = Router();
//test view
router.get("/", HomeController.getAllData);
router.get("/add", HomeController.addData);
router.post("/create", HomeController.createData);
router.get("/edit/:id", HomeController.editData);
router.post("/update/:id", HomeController.updateData);
router.get("/delete/:id", HomeController.deleteData);

module.exports = router;