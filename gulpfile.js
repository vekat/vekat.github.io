var gulp = require('gulp');
var sync = require('browser-sync');

// watch files for changes and reload
gulp.task('serve', () => {
	sync({
		server: {
			baseDir: './dist'
		}
	});

	gulp.watch(['./*.html', './assets/**/*'], {
		cwd: './dist'
	}, sync.reload);
});
