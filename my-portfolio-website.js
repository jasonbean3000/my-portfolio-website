let home = document.getElementById('home-button');
let about = document.getElementById('about-button');
let projects = document.getElementById('projects-button');
let contact = document.getElementById('contact-button');
let homeclick = document.getElementById('home-click')
let aboutclick = document.getElementById('about-click')
let projectsclick = document.getElementById('projects-click')
let contactclick = document.getElementById('contact-click')



switchButtonHome = () => {
    home.style.display = 'block';
    about.style.display = 'none';
    projects.style.display = 'none';
    contact.style.display = 'none';
    homeclick.style.color = '#F5D94D';
    
    aboutclick.style.color = '#E1E8FA';
    projectsclick.style.color = '#E1E8FA';
    contactclick.style.color = '#E1E8FA';
    
}

switchButtonAbout = () => {
    home.style.display = 'none';
    homeclick.style.color = '#E1E8FA';
    about.style.display = 'flex';
    projects.style.display = 'none';
    contact.style.display = 'none';
    aboutclick.style.color = '#F5D94D';
    projectsclick.style.color = '#E1E8FA';
    contactclick.style.color = '#E1E8FA';
    
};

switchButtonProjects = () => {
    projects.style.display = 'flex';
    projectsclick.style.color = '#F5D94D';
    home.style.display = 'none';
    homeclick.style.color = '#E1E8FA';
    about.style.display = 'none';
    aboutclick.style.color = '#E1E8FA';
    contact.style.display = 'none';
    contactclick.style.color = '#E1E8FA';
    
}

switchButtonContact = () => {
    contact.style.display = 'flex';
    contactclick.style.color = '#F5D94D';
    home.style.display = 'none';
    homeclick.style.color = '#E1E8FA';
    about.style.display = 'none';
    aboutclick.style.color = '#E1E8FA';
    projects.style.display = 'none';
    projectsclick.style.color = '#E1E8FA';
}

homeclick.addEventListener('mouseenter', switchButtonHome);
aboutclick.addEventListener('mouseenter', switchButtonAbout);
projectsclick.addEventListener('mouseenter', switchButtonProjects);
contactclick.addEventListener('mouseenter', switchButtonContact)







