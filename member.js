function skillsMember() {
    var url = window.location.href;
    var id = url.substring(url.lastIndexOf('/') + 1);
    var member = {
        id: id,
        skills: []
    };
    var skills = document.querySelectorAll('.skill');
    skills.forEach(function (skill) {
        var skillId = skill.getAttribute('data-skill-id');
        var skillName = skill.querySelector('.skill-name').innerText;
        var skillLevel = skill.querySelector('.skill-level').innerText;
        var skillDescription = skill.querySelector('.skill-description').innerText;
        member.skills.push({
            id: skillId,
            name: skillName,
            level: skillLevel,
            description: skillDescription
        });
    });
    return member;
}