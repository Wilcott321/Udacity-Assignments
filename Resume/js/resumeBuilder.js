// The bio object
var bio = {
	"name" : "E. Wilson",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "000.000.0000",
		"email" : "example@email.com",
		"github" : "@Wilcott321",
		"twitter" : "@OurCodeBlog",
		"location" : "Illinois, USA"
	},
	"welcomeMsg" : "Hey there! I'm E. Wilson, a web aficionado specializing in frontend UI development and JavaScript programming.",
	"skills" : ["HTML5", "CSS", "Bootstrap", "JavaScript", "jQuery"],
	"bioPic" : "images/bioPic.png"
};
// The education object
var education = {
	"schools" : [
		{
			"name" : "Udacity",
			"degree" : "ND",
			"dates" : "2016-2016",
			"location" : "Online, USA",
			"major" : ["Frontend Web Developer"]
		},
		{
			"name" : "Autodicdact University",
			"degree" : "MA",
			"dates" : "2015-2016",
			"location" : "Online, USA",
			"major" : ["JavaScript"]
		},
		{
			"name" : "University of Hard Knocks",
			"degree" : "BA",
			"dates" : "2012-2015",
			"location" : "Online, USA",
			"major" : ["HTML & CSS", "Python"]
		}
	] //end of schools object array
};
// The work object
var work = {
	"jobs" : [
		{
			"employer" : "Employer One",
			"title": "Web Manager",
			"dates" : "2014 - present",
			"location" : "Illinois, USA",
			"description" : "Developer and manager of main sites and content management system. Responsble for training all staff on web standards and procedures."
		},
		{
			"employer" : "Employer Two",
			"title" : "Freelance Web Developer",
			"dates" : "2014 - present",
			"location" : "Online, USA",
			"description" : "I build responsive, interactive web sites for non-profit organizations and small businesses."
		},
	] // end of jobs object array
};
// The projects object
var projects = {
	"experience" : [
		{
			"title" : "Project One",
			"dates" : "Spring 2016",
			"description" : "Designed and developed Creative Template, a Bootstrap 3 theme for artists and developers to use as a resume and showcase of their work.",
			"image" : "images/197x148.gif"
		},
		{
			"title" : "Project Two",
			"dates" : "Summer 2015",
			"description" : "Redesigned and developed the business website for Operation Drive NFP using HTML5, CSS, Bootstrap, and jQuery.",
			"image" : "images/197x148.gif"
		},
		{
			"title" : "Project Three",
			"dates" : "Spring 2015",
			"description" : "Designed and developed a real estate and touriste website for Lets Go Island using HTML5, CSS, and Bootstrap.",
			"image" : "images/197x148.gif"
		}
	]
};
/* The #header section */
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

/* The #topContacts section */
for (contact in bio.contacts) {
}

/* The #education section */


/* The #workExperience section */




