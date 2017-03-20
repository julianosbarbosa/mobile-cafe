var gulp = require('gulp'),
    browserSync = require('browser-sync');

//monta um servidor na porta 3000 e sincorniza o browser com o codigo
gulp.task('default', function() {
    browserSync.init({
        server: {
            baseDir: 'src'
        }
    });
    gulp.watch('src/**/*').on('change', browserSync.reload);
});