module.exports = function (grunt) {
    /* jshint camelcase: false */
    'use strict';

    var srcCss = ['web/css/*.css'],
        srcHtml = ['web/*.html'],
        srcJs = ['web/js/*.js'],
        specHtml = ['web/spec/*Spec.html'],
        specJs = ['web/spec/*.js'],
        jshintFiles = ['GruntFile.js'].concat(srcJs, specJs),
        watchFiles = [].concat(jshintFiles, srcCss, srcHtml, specHtml);

    ['grunt-browserify',
     'grunt-contrib-jshint',
     'grunt-contrib-connect',
     'grunt-contrib-uglify',
     'grunt-contrib-watch',
     'grunt-mocha-phantomjs',
     'grunt-contrib-copy',
     'grunt-contrib-clean'].forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            options: {
                jshintrc: true
            },
            all: jshintFiles
        },
        connect: {
            server: {
                options: {
                    port: 8000
                }
            }
        },
        watch: {
            scripts: {
                options: {
                    atBegin: true
                },
                files: watchFiles,
                tasks: ['default']
            }
        },
        browserify: {
            dev: {
                files: {
                    'dist/js/bundle.js': ['web/js/index.js']
                },
                options: {
                    debug: true
                }
            },
            release: {
                files: {
                    'dist/js/bundle.js': ['web/js/index.js']
                },
                options: {
                    debug: false
                }
            }
        },
        uglify: {
            release: {
                files: {
                    'dist/js/bundle.js': ['dist/js/bundle.js']
                }
            }
        },
        mocha_phantomjs: {
            all: specHtml
        },
        copy: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: 'web/',
                        src: ['index.html', 'css/**'],
                        dest: 'dist/'
                    }
                ]
            }
        },
        clean: ['dist/']
    });

    grunt.registerTask('validate', ['jshint', 'mocha_phantomjs']);
    grunt.registerTask('default', ['validate', 'copy:dist', 'browserify:dev']);
    grunt.registerTask('dev', ['default', 'connect', 'watch']);
    grunt.registerTask('release', ['validate', 'copy:dist', 'browserify:release', 'uglify:release']);
};
