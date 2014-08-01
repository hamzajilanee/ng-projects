module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'css/app.css': 'scss/app.scss'
        }
      }
    },

    connect: {
      options: {
          port: 9000,
          livereload: 35729,
          hostname: 'localhost'
      },
      livereload: {
          options: {
              open: true          }
      },
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },
      sass: {
        files: ['scss/**/*.scss', '*.html'],
        tasks: ['sass'],
        options: {
          livereload: true,
        },
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.registerTask('build', ['sass']);
  grunt.registerTask('default', ['build', 'connect', 'watch']);
};