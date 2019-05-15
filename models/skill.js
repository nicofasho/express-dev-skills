const skills = [
  {skill: 'HTML', proficiency: 'expert'},
  {skill: 'JavaScript', proficiency: 'intermediate'},
  {skill: 'SQL', proficiency: 'novice'},
  {skill: 'git', proficiency: 'novice'},
  {skill: 'CSS', proficiency: 'intermediate'},
  {skill: 'Vidya', proficiency: 'expert'}
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteSkill,
  editSkill
}

function getAll() {
  return skills;
}

function getOne(id) {
  return skills[id];
}

function create(skill) {
  skills.push(skill);
}

function deleteSkill(id) {
  skills.splice(id, 1);
}

function editSkill(id, skill) {
  skills[id] = skill;
}