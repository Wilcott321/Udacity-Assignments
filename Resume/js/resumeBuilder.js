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

var education = {
	"name" : "Udacity",
	"degree" : "ND",
	"dates" : "2016-2016",
	"location" : "Online, USA",
	"major" : "Frontend Web Developer"
};

var work = {
	"employer" : "Employer",
	"title": "Web Manager",
	"dates" : "2014 - present",
	"location" : "Illinois, USA",
	"description" : "Developer and manager of main site. Responsble for training all staff on web standards and procedures."
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
var formattedSchool = HTMLschoolName.replace("%data%", education.name);
var formattedDegree = HTMLschoolDegree.replace("%data%", education.degree);
var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.dates);
var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.location);
var formattedMajor = HTMLschoolMajor.replace("%data%", education.major);

/* The #workExperience section */




