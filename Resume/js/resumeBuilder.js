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
/* The header */
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


