var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills')

/* GET skills listing. */
router.get('/', skillsCtrl.index);

router.get('/new', skillsCtrl.newSkill);

router.get('/:id/edit', skillsCtrl.edit);

// get one skill
router.get('/:id', skillsCtrl.show);

router.post('/', skillsCtrl.createSkill);

router.delete('/:id', skillsCtrl.deleteSkill);

router.put('/:id', skillsCtrl.update);

module.exports = router;
