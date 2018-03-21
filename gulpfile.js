const gulp = require('gulp')
const nodemon = require('gulp-nodemon')

gulp.task('default', () => {
  nodemon({
    script: 'index.js',
    ext: 'js',
    env: {
      PORT: 8080
    },
    ignore: ['./node_modules']
  })
  .on('restart', () => {
    console.log('Restarting server')
  })
})
