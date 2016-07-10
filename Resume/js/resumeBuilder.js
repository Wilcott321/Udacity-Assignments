// The bio object
var bio = {
	name : "Elliot Wilcott",
	role : "Web Developer",
	contacts : {
		"mobile" : "000.000.0000",
		"email" : "example@email.com",
		"github" : "@Wilcott321",
		"twitter" : "@OurCodeBlog",
		"location" : "Illinois, USA"
	},
	welcomeMsg : "Hey there! I'm Elliot Wilcott, a web aficionado specializing in frontend UI development and JavaScript programming.",
	skills : ["HTML5", "CSS", "Bootstrap", "JavaScript", "jQuery"],
	bioPic : "images/bioPic.png",
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
		for (skill in bio.skills){
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
		/* The #topContacts and #footerContacts for-loop */
		for (contact in bio.contacts) {
			var formattedContact = HTMLcontactGeneric.replace("%contact%", contact).replace("%data%", bio.contacts[contact]);
			$("#topContacts").append(formattedContact);
			$("#footerContacts").append(formattedContact);
		}
	}
};
bio.display();
// The education object
var education = {
	schools : [
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
			"major" : ["HTML & CSS", " Python"]
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
	], //end of onlineCourses object array
	displaySchools : function(){
		for (school in education.schools) {
			$("#education").append(HTMLschoolStart);
			var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedSchoolName = formattedName + formattedDegree;
			$(".education-entry:last").append(formattedSchoolName);
			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			$(".education-entry:last").append(formattedDates);
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$(".education-entry:last").append(formattedLocation);
			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
			$(".education-entry:last").append(formattedMajor);
		} // end of education school loop
	},
	displayCourses : function() {
		$("#education").append(HTMLonlineClasses);
		$("#education").append(HTMLonlineStart);
		for (course in education.onlineCourses) {
			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
			var titleSchool = formattedTitle + formattedSchool;
			$(".online-entry:last").append(titleSchool);
			var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
			$(".online-entry:last").append(formattedOnlineDates);
			var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
			$(".online-entry:last").append(formattedUrl);
		}// end of online courses loop
	}
}; // end of education object
education.displaySchools();
education.displayCourses();
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
/* The Skills Section: Works with ChartJS */
//ChartJS skills data objects that define value and color for each skill
var htmlData = [
	{
		value: 90,
		color: "#f5ae23"
	},
	{
		value: 10,
		color: "#f3f3f3"
	}
];
var cssData = [
	{
		value: 75,
		color: "#f5ae23"
	},
	{
		value: 25,
		color: "#f3f3f3"
	}
];
var jsData = [
	{
		value: 55,
		color: "#f5ae23"
	},
	{
		value: 45,
		color: "#f3f3f3"
	}
];
// ChartJS objects for displaying the skills donuts
var displaySkills = function() {
	var myHTMLDonut = new Chart(document.getElementById("html").getContext("2d")).Doughnut(htmlData, {pecentageInnerCutout:80});
	var myCSSDonut = new Chart(document.getElementById("css").getContext("2d")).Doughnut(cssData, {percentageInnerCutout:80});
	var myJSDonut = new Chart(document.getElementById("js").getContext("2d")).Doughnut(jsData, {percentageInnerCutout:80});
};
displaySkills();
/* The Map Section */
$("#mapDiv").append(googleMap);



