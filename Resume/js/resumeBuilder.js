/* Step 1: Define a variable for your name and then use the replace method 
 to replace data in HTMLheaderName with the value stored in the name variable */
var name = "E. Wilson";
var formattedName = HTMLheaderName.replace("%data%", name);

/* Step 2: Do the same for your role. Replace the data in the HTMLheaderRole
variable with the value stored */
var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

/* Step 3: Use the prepend method to add both your name and role to the 
<div> with the id of "header" */
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

/* Step 4: Crete an object for your bio. Inside the bio save your name,
role, contact info, picture url, a welcome message, and skills as properties*/
var bio = {
	"name" : "E. Wilson",
	"role" : "Web Developer",
	"contactInfo" : {
		mobile : "000.000.0000";
		email : "example@email.com";
		github : "@Wilcott321";
		location : "Illinois, USA"
	},
	"welcomeMessage" : "Hey there! I'm E. Wilson, a web aficionado specializing in frontend UI development and JavaScript programming.",
	"skills" : ["HTML5", "CSS", "Bootstrap", "JavaScript", "jQuery"],
	"bioPic" : "images/bioPic.png"
};
