var Skill = require('../models/skill');

module.exports = {
  index,
  show,
  newSkill,
  createSkill,
  deleteSkill,
  edit,
  update
};

function index(req, res, next) {
  res.render('skills/index', {
    skills: Skill.getAll()
  });
}

function show(req, res, next) {
  res.render('skills/show', {
    skill: Skill.getOne(req.params.id),
    skillNum: parseInt(req.params.id) + 1
  });
}

function newSkill(req, res) {
  
  res.render('skills/new');
}

function createSkill(req, res) {
  Skill.create(req.body);
  res.redirect('/skills');
}

function deleteSkill(req, res) {
  Skill.deleteSkill(req.params.id);
  res.redirect('/skills');
}

function edit(req, res) {
  res.render('skills/edit', {
    skill: Skill.getOne(req.params.id),
    skillNum: parseInt(req.params.id) + 1
  });
}

function update(req, res) {
  Skill.editSkill(req.params.id, req.body);
  res.redirect('/skills');
}