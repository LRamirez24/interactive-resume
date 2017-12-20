var bio = {
	"name" : "luis Ramirez",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "323-775-6830",
		"email" : "l.r.32@hotmail.com",
		"github" : "aztecdaddy",
		"twitter" : "apex1776",
		"location": "Los Angeles, CA",
	},
	"welcomeMessage" : "hello friends how is your day, this is my resume the code is in github.",
	"skills" : ["HTML", "CSS", "javaScript", "Jquery"],
	"bioPic" : "images/sexyPic.jpg"
};

var work = {
	"jobs": [
	{
		"employer": "WWE",
		"title": "front-End Developer",
		"dates": "2015-2017",
		"location": "New York, NY",
		"description": "I was the one that handled the dirty work.",
		"url": "http://www.wwe.com"
	},
	{
		"employer": "New Japan Pro Wrestling",
		"title": "Web Developer",
		"dates": "2011-2014",
		"location": "tokyo",
		"description": "It was an honor living in Japan and working there."
	}
	]
};


var projects = {
	"projects": [
	{
		"title": "Movie trailers",
		"dates": "2017",
		"description": "its a movie website that plays the trailers of my favorite films",
		"images": [
		"http://vsmart-solutions.com/assets/images/web-dev.png",
		"https://cdn.makeuseof.com/wp-content/uploads/2016/10/programming-journal-overview.jpg"
		]
	}
	]
}

var education = {
	"schools": [
	{
		"school": "UCSB",
		"location": "santa Barbara, CA",
		"degree": "BA",
		"majors": ["envst", "hist"],
		"dates": "2011-2015",
		"url": "https://www.ucsb.edu"
	},
	{
		"school": "UCLA",
		"location": "Los Angeles, CA",
		"degree": "BA",
		"majors": ["CS"],
		"dates": 2014,
		"url": "http://www.ucla.edu"
	}
	],
	"onlineCourses": [
	{
		"title": "javaScript",
		"school": "udacity",
		"dates": 2014,
		"url": "https://classroom.udacity.com/"
	}
	]
};



var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

var mobile = bio.contacts.mobile;
var formattedMobile = HTMLmobile.replace("%data%", mobile);
var email = bio.contacts.email;
var formattedEmail = HTMLemail.replace("%data%", email);
var github = bio.contacts.github;
var formattedGithub = HTMLgithub.replace("%data%", github);
var twitter = bio.contacts.twitter;
var formattedTwitter = HTMLtwitter.replace("%data%", twitter);
var contactLocation = bio.contacts.location;
var formattedContactLocation = HTMLlocation.replace("%data%", contactLocation);
$("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedContactLocation);
$("#header").append(formattedMessage);


if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
	
	var name = "Luis Ramirez"
	var formattedName = HTMLheaderName.replace("%data%", name);
	var role = "Web Developer"
	var formattedRole = HTMLheaderRole.replace("%data%", role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").prepend(formattedPic);
}


work.jobs.forEach(function(job) {
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
	var formattedDates = HTMLworkDates.replace("%data%", job.dates);
	$(".work-entry:last").append(formattedDates);
	var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
	$(".work-entry:last").append(formattedDescription);
});




for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var formattedProjectDateTitle = formattedProjectTitle + formattedProjectDates;
		$(".project-entry:last").append(formattedProjectDateTitle);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedProjectDescription);
	}

if (projects.projects[project].images.length > 0) {
	for (image in projects.projects[project].images) {
		var formattedProjectImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
		$(".project-entry:last").append(formattedProjectImages);
	}
}




//projects.display = projects.projects.forEach(function(project){
//	$("#projects").append(HTMLprojectStart);
//	$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", project.title));
//	$(".project-entry:last").append(HTMLprojectDates.replace("%data%", project.dates));
//	$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", project.description));
//	$(".project-entry:last").append(HTMLprojectImage.replace("%data%", project.images));
//});







education.schools.forEach(function(school) {
	$("#education").append(HTMLschoolStart);
	var formattedSchoolNames = HTMLschoolName.replace("%data%", school.school);
	$(".education-entry:last").append(formattedSchoolNames);
	var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
	$(".education-entry:last").append(formattedSchoolDates);
	var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);
	$(".education-entry:last").append(formattedMajor);
	var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
	$(".education-entry:last").append(formattedDegree);
	var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
	$(".education-entry:last").append(formattedSchoolLocation);
});


education.onlineCourses.forEach(function(onlineCourse){
	$(".education-entry:last").append(HTMLonlineClasses);
	var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
	var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
	var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
	$(".education-entry:last").append(formattedOnlineTitleSchool);
	var formattedOnlineDate = HTMLonlineDates.replace("%data%", onlineCourse.dates);
	$(".education-entry:last").append(formattedOnlineDate);
	var formattedOnlineUrl = HTMLonlineURL.replace("%data%", onlineCourse.url);
	$(".education-entry:last").append(formattedOnlineUrl);

});





























//displayWork();




$(document).click(function(loc){
    var x=loc.pageX;
    var y=loc.pageY;
    logClicks(x,y);
});

function inName(name){
    name=name.trim().split(" ");
    console.log(name);
    name[1]=name[1].toUpperCase();
    name[0]=name[0].slice(0,1).toUpperCase()+name[0].slice(1).toLowerCase();
    return name[0]+" "+name[1];
}
$('#main').append(internationalizeButton);

function locationizer(school_obj) {
	var locationArray = [];
	for (school in school_obj.schools) {
		var newLocation = school_obj.schools[school].location;
		locationArray.push(newLocation);
	}
	return locationArray;
}

$("#mapDiv").append(googleMap);
