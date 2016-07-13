// The bio object
var bio = {
    name: 'Elliot Wilcott',
    role: 'Web Developer',
    contacts: {
        mobile: '000.000.0000',
        email: 'example@email.com',
        github: '@Wilcott321',
        twitter: '@OurCodeBlog',
        location: 'Illinois, USA'
    },
    welcomeMsg: "Hey there! I'm Elliot Wilcott, a web aficionado specializing in frontend UI development and JavaScript programming.",
    skills: ['HTML5', 'CSS', 'Bootstrap', 'JavaScript', 'jQuery'],
    bioPic: 'images/bioPic.png',
    display: function() {
        /* The #header section */
        var formattedName = HTMLheaderName.replace('%data%', bio.name);
        var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
        var formattedBioPic = HTMLbioPic.replace('%data%', bio.bioPic);
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMsg);
        $('#header').prepend(formattedRole);
        $('#header').prepend(formattedName);
        $('#header').append(formattedBioPic);
        $('#header').append(formattedWelcomeMsg);

        /* The skills for-loop in the #header */
        $('#header').append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
            $('#skills').append(formattedSkill);
        }


        /* The #topContacts and #footerContacts for-loop */
        for (contact in bio.contacts) {
            var formattedContact = HTMLcontactGeneric.replace('%contact%', contact).replace('%data%', bio.contacts[contact]);
            $('#topContacts').append(formattedContact);
            $('#footerContacts').append(formattedContact);
        }
    }
};
bio.display();
// The education object
var education = {
    schools: [{
        name: 'Udacity',
        degree: 'ND',
        dates: '2016-2016',
        location: 'Mountain View, CA',
        major: ['Frontend Web Developer']
    }, {
        name: 'Autodicdact University',
        degree: 'MA',
        dates: '2015-2016',
        location: 'Nashville, TN',
        major: ['JavaScript']
    }, {
        name: 'University of Hard Knocks',
        degree: 'BA',
        dates: '2012-2015',
        location: 'Chicago, IL',
        major: ['HTML & CSS', ' Python']
    }], //end of schools object array
    onlineCourses: [{
        title: 'How to Use Git and Github',
        school: 'Udacity',
        dates: 'July 2016',
        url: 'www.udacity.com'
    }, {
        title: 'JavaScript Basics',
        school: 'Udacity',
        dates: 'July 2016',
        url: 'www.udacity.com'
    }, {
        title: 'Intro to jQuery',
        school: 'Udacity',
        dates: 'July 2016',
        url: 'www.udacity.com'
    }], //end of onlineCourses object array
    display: function() {
        // create variables and assign them to object arrays
        var formals = education.schools;
        var onlines = education.onlineCourses;
        // create variables for the courses properties to be assigned later
        var name, degree, dates, location, major, school, url;
        /* create the .forEach() methods for displaying schools and courses,
        assign the functions for displaying the schools and courses as parameters
        in the .forEach() methods */
        formals.forEach(addFormalSchool);
        // for the title
        $('#education').append(HTMLonlineClasses);
        onlines.forEach(addOnlineCourse);
        // define the addFormalSchool() function
        function addFormalSchool(school) {
            name = HTMLschoolName.replace('%data%', school.name);
            degree = HTMLschoolDegree.replace('%data%', school.degree);
            dates = HTMLschoolDates.replace('%data%', school.dates);
            location = HTMLschoolLocation.replace('%data%', school.location);
            major = HTMLschoolMajor.replace('%data%', school.major);
            $('#education').append(HTMLschoolStart);
            $('.education-entry:last').append(name + degree);
            $('.education-entry:last').append(dates);
            $('.education-entry:last').append(location);
            $('.education-entry:last').append(major);
        }
        // define the addOnlineCourse() function
        function addOnlineCourse(course) {
            title = HTMLonlineTitle.replace('%data%', course.title);
            school = HTMLonlineSchool.replace('%data%', course.school);
            dates = HTMLonlineDates.replace('%data%', course.dates);
            url = HTMLonlineURL.replace('%data%', course.url);
            $('#education').append(HTMLschoolStart);
            $('.education-entry:last').append(title + school);
            $('.education-entry:last').append(dates);
            $('.education-entry:last').append(url);
        }
    }
}; // end of education object
education.display();

// The work object
var work = {
    jobs: [{
        employer: 'Employer One',
        title: 'Web Manager',
        dates: '2014 - present',
        location: 'St. Louis, MO',
        description: 'Developer and manager of main sites and content management system. Responsble for training all staff on web standards and procedures.'
    }, {
        employer: 'Employer Two',
        title: 'Freelance Web Developer',
        dates: '2014 - present',
        location: 'Chicago, IL',
        description: 'I build responsive, interactive web sites for non-profit organizations and small businesses.'
    }, ], // end of jobs object array
    /* The #workExperience section */
    display: function() {
        for (var i = 0; i < work.jobs.length; i++) {
            $('#workExperience').append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[i].employer);
            var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[i].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $('.work-entry:last').append(formattedEmployerTitle);
            var formattedWorkDates = HTMLworkDates.replace('%data%', work.jobs[i].dates);
            $('.work-entry:last').append(formattedWorkDates);
            var formattedWorkLocation = HTMLworkLocation.replace('%data%', work.jobs[i].location);
            $('.work-entry:last').append(formattedWorkLocation);
            var formattedWorkDescription = HTMLworkDescription.replace('%data%', work.jobs[i].description);
            $('.work-entry:last').append(formattedWorkDescription);
        }
    }
};
work.display();
// The projects object
var projects = {
    projects: [{
        title: 'Project One',
        dates: 'Spring 2016',
        description: 'Designed and developed Creative Template, a Bootstrap 3 theme for artists and developers to use as a resume and showcase of their work.',
        images: ['images/197x148.gif']
    }, {
        title: 'Project Two',
        dates: 'Summer 2015',
        description: 'Redesigned and developed the business website for Operation Drive NFP using HTML5, CSS, Bootstrap, and jQuery.',
        images: ['images/197x148.gif']
    }, {
        title: 'Project Three',
        dates: 'Spring 2015',
        description: 'Designed and developed a real estate and touriste website for Lets Go Island using HTML5, CSS, and Bootstrap.',
        images: ['images/197x148.gif']
    }],
    /* The #projects section */
    display: function () {
        // create variables for the projects object array and properties
        var myProjects = projects.projects;
        var title, dates, description;
        // define the .forEach() method, the function is the parameter
        myProjects.forEach(addMyProject);
        // define the addMyProject() function
        function addMyProject(project) {
            title = HTMLprojectTitle.replace('%data%', project.title);
            dates = HTMLprojectDates.replace('%data%', project.dates);
            description = HTMLprojectDescription.replace('%data%', project.description);
            $('#projects').append(HTMLprojectStart);
            $('.project-entry:last').append(title);
            $('.project-entry:last').append(dates);
            $('.project-entry:last').append(description);
            // define the .forEach() method for images
            project.images.forEach(function(img) {
                image = HTMLprojectImage.replace('%data%', img);
                $('.project-entry:last').append(image);
            });
        }
    }
};
projects.display();
/* The Skills Section: Works with ChartJS */
//ChartJS skills data objects that define value and color for each skill
var htmlData = [{
    value: 90,
    color: '#f5ae23'
}, {
    value: 10,
    color: '#f3f3f3'
}];
var cssData = [{
    value: 75,
    color: '#f5ae23'
}, {
    value: 25,
    color: '#f3f3f3'
}];
var jsData = [{
    value: 55,
    color: '#f5ae23'
}, {
    value: 45,
    color: '#f3f3f3'
}];
// ChartJS objects for displaying the skills donuts
var displaySkills = function() {
    var myHTMLDonut = new Chart(document.getElementById('html').getContext('2d')).Doughnut(htmlData, {
        pecentageInnerCutout: 80
    });
    var myCSSDonut = new Chart(document.getElementById('css').getContext('2d')).Doughnut(cssData, {
        percentageInnerCutout: 80
    });
    var myJSDonut = new Chart(document.getElementById('js').getContext('2d')).Doughnut(jsData, {
        percentageInnerCutout: 80
    });
};
displaySkills();
/* The Map Section */
$('#mapDiv').append(googleMap);



