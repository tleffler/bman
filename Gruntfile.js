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

    copy: {
      views: {
        expand: true,
        cwd: 'src/',
        src: '**/*.html',
        dest: 'dist/',
        filter: 'isFile'
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
    'copy',
    'browserify:dist',
    'jshint'
  ]);

  grunt.registerTask('styles', [
    'less'
  ]);


};
