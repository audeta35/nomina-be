var express = require('express');
var router = express.Router();
const hobbyController = require('../controllers/hobby')

router.get('/', hobbyController.getAllHobby);
router.post('/add', hobbyController.addHobby);
router.put('/edit', hobbyController.editHobby);
router.delete('/delete/:id', hobbyController.deleteHobby);
router.post('/detail/:id', hobbyController.getHobbyById);

module.exports = router;
