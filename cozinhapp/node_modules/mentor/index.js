var minimist = require('minimist');
var util = require('util');
var argv = minimist(process.argv);
var mentorsList = require('./mentors.json');

if (argv.list) {
    console.log(util.format("There are a total of %s mentors around the world." +
        " The detailed names:", mentorsList.length));
    mentorsList.forEach(function(m) {
        console.log('- ' + m);
    });
    return;
}

console.log(mentorsList[Math.floor(Math.random() * mentorsList.length)]);