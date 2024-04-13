const index = (req, res) => {
    res.render('index', {title: 'Meak Dash',});
};
const aboutme = (req, res) => {
    res.render('aboutme', {title: 'Rest1',});
};

const certification = (req, res) => {
    res.render('certification', {title: 'SignUp',});
};
const contact = (req, res) => {
    res.render('contact', {title: 'Help',});
};
const projects = (req, res) => {
    res.render('projects', {title: 'Help',});
};
const resume = (req, res) => {
    res.render('resume', {title: 'Help',});
};

module.exports = {
    index,
    aboutme,
    certification,
    contact,
    projects,
    resume
};