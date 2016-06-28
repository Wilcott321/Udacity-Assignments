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
