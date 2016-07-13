import browserify from 'browserify'
import gulp from 'gulp'
import source from 'vinyl-source-stream'
import watchify from 'watchify'

gulp.task('bundle', () => {
	return browserify('src/index.js')
		.transform('babelify', {presets: ['es2015', 'react']})
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('static/'))
})

gulp.task('watch', () => {
	const b = browserify({
		entries: ['src/index.js'],
		cache: {}, packageCache: {},
		plugin: ['watchify']
	});

	b.on('update', makeBundle);

	const makeBundle = () => {
		b.transform('babelify', {presets: ['es2015', 'react']})
			.bundle()
			.pipe(source('bundle.js'))
			.pipe(gulp.dest('static/'));
	}

	makeBundle();

	return b;
})