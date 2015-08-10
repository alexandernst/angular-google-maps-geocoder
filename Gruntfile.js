module.exports = function(grunt) {

	var LIVERELOAD_PORT = 35729;

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		connect: {
			server: {
				options: {
					livereload: LIVERELOAD_PORT
				}
			}
		},

		jshint: {
			files: ['Gruntfile.js', 'src/*.js'],
			options: {
				globals: {
					angular: true
				}
			}
		},

		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= pkg.version %> */\n'
			},
			build: {
				src: 'src/<%= pkg.name %>.js',
				dest: 'dist/<%= pkg.name %>.min.js'
			}
		},

		watch: {
			files: ['<%= jshint.files %>'],
			tasks: ['clear'],
			options: {
				debounceDelay: 1000,
				livereload: LIVERELOAD_PORT
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-clear');

	grunt.registerTask('server', ['jshint', 'connect', 'watch']);
	grunt.registerTask('default', ['jshint', 'uglify']);

};
