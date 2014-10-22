module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    version: '<%= pkg.version %>',

    jshint: {
      javascripts: {
        src: ['src/**/*.js']
      },

      tests: {
        options: {
          jshintrc: 'test/.jshintrc'
        },

        src: ['test/**/*.js']
      }
    },

    browserify: {
      options: {
        bundleOptions: {
          debug: true
        }
      },

      dist: {
        files: {
          'dist/bundle.js': ['./src/main.js']
        }
      }
    },

    clean: {
      dist: ['dist']
    },

    less: {
      dist: {
        src: 'src/main.less',
        dest: 'dist/bundle.css'
      }
    }
  });

  grunt.registerTask('build', [
    'browserify:dist',
    'jshint'
  ]);

  grunt.registerTask('styles', [
    'less'
  ]);


};
