// The bio object
var bio = {
	"name" : "Elliot Wilcott",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "000.000.0000",
		"email" : "example@email.com",
		"github" : "@Wilcott321",
		"twitter" : "@OurCodeBlog",
		"location" : "Illinois, USA"
	},
	"welcomeMsg" : "Hey there! I'm Elliot Wilcott, a web aficionado specializing in frontend UI development and JavaScript programming.",
	"skills" : ["HTML5", "CSS", "Bootstrap", "JavaScript", "jQuery"],
	"bioPic" : "images/bioPic.png",
	display : function() {
		/* The #header section */
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
		var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		$("#header").append(formattedBioPic);
		$("#header").append(formattedWelcomeMsg);

		/* The skills for-loop in the #header */
		$("#header").append(HTMLskillsStart);
		for (i = 0; i <= 4; i++){
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(formattedSkill);
		}
		/* The #topContacts section */
		for (contact in bio.contacts) {
			var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
			var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
			var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
			var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		}
		$("#topContacts").append(formattedMobile);
		$("#topContacts").append(formattedEmail);
		$("#topContacts").append(formattedGithub);
		$("#topContacts").append(formattedTwitter);

		/* The contacts  in the #footerContacts */
		for (contact in bio.contacts) {
			var formattedContact = HTMLcontactGeneric.replace("%contact%", bio.contacts);
			formattedContact = formattedContact.replace("%data%", bio.contacts.contact);
		}
		/* formattedMobile = HTMLcontactGeneric.replace("%contact%", "mobile");
		formattedMobile = formattedMobile.replace("%data%", bio.contacts.mobile);
		$("#footerContacts").append(formattedMobile);
		formattedEmail = HTMLcontactGeneric.replace("%contact%", "email");
		formattedEmail = formattedEmail.replace("%data%", bio.contacts.email);
		$("#footerContacts").append(formattedEmail); */
	}
};
bio.display();
// The education object
var education = {
	"schools" : [
		{
			"name" : "Udacity",
			"degree" : "ND",
			"dates" : "2016-2016",
			"location" : "Mountain View, CA",
			"major" : ["Frontend Web Developer"]
		},
		{
			"name" : "Autodicdact University",
			"degree" : "MA",
			"dates" : "2015-2016",
			"location" : "Nashville, TN",
			"major" : ["JavaScript"]
		},
		{
			"name" : "University of Hard Knocks",
			"degree" : "BA",
			"dates" : "2012-2015",
			"location" : "Chicago, IL",
			"major" : ["HTML & CSS", "Python"]
		}
	], //end of schools object array
	onlineCourses : [
		{
			"title" : "How to Use Git and Github",
			"school" : "Udacity",
			"dates" : "July 2016",
			"url" : "www.udacity.com"
		},
		{
			"title" : "JavaScript Basics",
			"school" : "Udacity",
			"dates" : "July 2016",
			"url" : "www.udacity.com"
		},
		{
			"title" : "Intro to jQuery",
			"school" : "Udacity",
			"dates" : "July 2016",
			"url" : "www.udacity.com"
		}
	] //end of onlineCourses object array
};
// The work object
var work = {
	"jobs" : [
		{
			"employer" : "Employer One",
			"title": "Web Manager",
			"dates" : "2014 - present",
			"location" : "St. Louis, MO",
			"description" : "Developer and manager of main sites and content management system. Responsble for training all staff on web standards and procedures."
		},
		{
			"employer" : "Employer Two",
			"title" : "Freelance Web Developer",
			"dates" : "2014 - present",
			"location" : "Chicago, IL",
			"description" : "I build responsive, interactive web sites for non-profit organizations and small businesses."
		},
	], // end of jobs object array
	/* The #workExperience section */
	displayWork : function() {
		for (job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);
			var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$(".work-entry:last").append(formattedWorkDates);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			$(".work-entry:last").append(formattedWorkLocation);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedWorkDescription);
		}
	}
};
work.displayWork();
// The projects object
var projects = {
	"projects" : [
		{
			"title" : "Project One",
			"dates" : "Spring 2016",
			"description" : "Designed and developed Creative Template, a Bootstrap 3 theme for artists and developers to use as a resume and showcase of their work.",
			"image" : ["images/197x148.gif"]
		},
		{
			"title" : "Project Two",
			"dates" : "Summer 2015",
			"description" : "Redesigned and developed the business website for Operation Drive NFP using HTML5, CSS, Bootstrap, and jQuery.",
			"image" : ["images/197x148.gif"]
		},
		{
			"title" : "Project Three",
			"dates" : "Spring 2015",
			"description" : "Designed and developed a real estate and touriste website for Lets Go Island using HTML5, CSS, and Bootstrap.",
			"image" : ["images/197x148.gif"]
		}
	],
	/* The #projects section */
	display : function() {
		for (project in projects.projects) {
			$("#projects").append(HTMLprojectStart);
			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$(".project-entry:last").append(formattedProjectTitle);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formattedProjectDates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedProjectDescription);
			if (projects.projects[project].image.length > 0){
				for (image in projects.projects[project].image) {
					var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].image[image]);
					$(".project-entry:last").append(formattedImage);
				} // end of image for-loop
			} // end of project.images if-statement
		} // end of project for loop	
	} // end of display function
};
projects.display();


/* The #topContacts section */
for (contact in bio.contacts) {
}

/* The #education section */

/* The #skillsChart section */

/* The Map Section */
$("#mapDiv").append(googleMap);



