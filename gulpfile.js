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
        var readme_html = markdown.parse(markdown_in);
        fs.readFile(path.join(__dirname, 'template.html'), 'utf8', function(error, html_in){
            if (error){return cb(error);}
            var index_html = html_in.replace(/{{markdown}}/, readme_html);
            fs.writeFile(path.join(__dirname, 'index.html'), index_html, cb);
        });
    });
});
gulp.task('default', ['build']);