var gulp = require('gulp');
var path = require('path');
var del = require('del');
var fs = require('fs');
var markdown = require('markdown');

gulp.task('clean', function(cb){
    del(path.join(__dirname, 'index.html'), cb);
});
gulp.task('build', ['clean'], function(cb){
    fs.readFile(path.join(__dirname, 'README.md'), 'utf8', function(error, markdown_in){
        if (error){return cb(error);}
        var html_out = markdown.parse(markdown_in);
        console.log(html_out)
        fs.writeFile(path.join(__dirname, 'index.html'), html_out, cb);
    });
});
gulp.task('default', ['build']);