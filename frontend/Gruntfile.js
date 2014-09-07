module.exports = function(grunt) {

  grunt.initConfig({
    pkg: {
        name: 'ponies-rocks'
    },
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['vendor/*.js','src/**/*.js', 'templates.js'],
        dest: '../dist/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          '../dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    qunit: {
      files: ['test/**/*.html']
    },
    watch: {
      files: ['src/**/*.js'],
      tasks: ['concat']
    },
    ngtemplates: {
        'ponies.rocks': {
            cwd: 'src',
            src: '**.html',
            dest: 'templates.js',
            options: {
                url: function(url) { return url.replace('.html', ''); }
            }
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-angular-templates');

  grunt.registerTask('default', ['qunit', 'ngtemplates', 'concat', 'uglify']);

};
