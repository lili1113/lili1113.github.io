let skills = [];  // 存储技能点数据
let skillId = 0;  // 唯一的技能点ID
let currentSkillId = null;  // 当前选择的技能点ID

// 创建技能点
function addSkill() {
  skillId++;
  const skill = {
    id: skillId,
    label: `Skill ${skillId}`,
    isActive: false,
    note: ''
  };
  skills.push(skill);
  renderSkillTree();
}

// 删除技能点
function removeSkill() {
  if (skills.length > 0) {
    skills.pop();
    renderSkillTree();
  }
}

// 点亮技能点
function markComplete() {
  if (currentSkillId !== null) {
    const skill = skills.find(s => s.id === currentSkillId);
    skill.isActive = true;
    renderSkillTree();
  }
}

// 渲染技能树
function renderSkillTree() {
  const skillTreeContainer = document.getElementById('skillTree');
  skillTreeContainer.innerHTML = ''; // 清空当前树

  skills.forEach(skill => {
    const skillNode = document.createElement('div');
    skillNode.className = `skill-node ${skill.isActive ? 'active' : ''}`;
    skillNode.innerText = skill.label;
    skillNode.onclick = () => selectSkill(skill.id);

    skillTreeContainer.appendChild(skillNode);
  });
}

// 选择技能点
function selectSkill(id) {
  currentSkillId = id;
  document.getElementById('skillNote').value = skills.find(s => s.id === id).note;
}

// 保存笔记
function saveNote() {
  if (currentSkillId !== null) {
    const note = document.getElementById('skillNote').value;
    const skill = skills.find(s => s.id === currentSkillId);
    skill.note = note;
  }
}
