module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      build: {
        files: [
            {expand: true, src: ['package.json'], dest: 'build/'},
        ],
    }
},
  });


  grunt.loadNpmTasks('grunt-contrib-copy');


};