const fs = require('fs');

Meteor.methods({
  'refreshFiles' () {
    const testFolder = '/Users/kumarravi/files/';

    fs.readdir(testFolder, (err, files) => {
      files.forEach(file => {
        console.log(file);
      });
    })
  }
});
