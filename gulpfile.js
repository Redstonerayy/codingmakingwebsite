//general
//npm install gulp gulp-plumber browser-sync gulp-rename gulp-util gulp-dart-sass gulp-sass-lint gulp-sourcemaps gulp-postcss autoprefixer cssnano gulp-htmlmin gulp-concat gulp-babel gulp-jshint gulp-uglify

const gulp = require("gulp");
const plumber = require("gulp-plumber");
const browsersync = require("browser-sync");
const rename = require("gulp-rename");
const gutil = require("gulp-util");

const src = './src';
const dest = './dest';

//sass
const sass = require("gulp-dart-sass");
const sasslint = require("gulp-sass-lint");
const sourcemaps = require("gulp-sourcemaps");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

//html
const htmlmin = require("gulp-htmlmin");

//js
const concat = require("gulp-concat");
const babel = require("gulp-babel");
const jshint = require("gulp-jshint");
const uglify = require("gulp-uglify");

/*================================================*/

// Reload the browser
const reload = (done) => {
    browsersync.reload();
    done();
}

// Serve the dev-server in the browser
const serve = (done) => {
    browsersync.init({
        server: {
            baseDir: dest
        }
    });
    done()
}

/*================================================*/

// Compile .html to minified .html
const html = () => {
    return gulp.src(`${src}/html/**/*.html`)
        // Init Plumber
        .pipe(plumber())
        // Compile HTML to minified HTML
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true,
            html5: true,
            removeEmptyAttributes: true,
            removeTagWhitespace: true,
            sortAttributes: true,
            sortClassName: true
        }))
        // Write everything to destination folder
        .pipe(gulp.dest(`${dest}/html`));
}

/*================================================*/

//images
const img = () => {
    return gulp.src(`${src}/img/*.*`)
        .pipe(gulp.dest(`${dest}/img`))
}

/*================================================*/

//javascript
const js = () => {
    return gulp.src(`${src}/js/**/*.js*`)
        // Init Plumber
        .pipe(plumber(((error) => {
            gutil.log(error.message)
        })))
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/preset-react']
        }))
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(uglify())
        .pipe(sourcemaps.write(''))
        // Write everything to destination folder
        .pipe(gulp.dest(`${dest}/js`));
}

/*================================================*/

//php
const php = () => {
    return gulp.src(`${src}/**/*.php`)
        .pipe(gulp.dest(`${dest}/`))
}

/*================================================*/

// Compile SASS to CSS with gulp
const css = () => {
    return gulp.src(`${src}/sass/**/*.sass`)
        // Init Plumber
        .pipe(plumber())
        /* .pipe(sasslint({
            options: {
                formater: 'stylish'
            },
            rules: {
                'indentation': 0
            }
        }))
        .pipe(sasslint.format())*/
        // Start sourcemap
        .pipe(sourcemaps.init())
        // Compile SASS to CSS
        .pipe(sass.sync({ outputStyle: "compressed"})).on('error', sass.logError)
        // Add suffix
        .pipe(postcss([autoprefixer(), cssnano()]))
        //Rename
        .pipe(rename({ suffix: ".min"}))
        // Write sourcemap
        .pipe(sourcemaps.write(''))
        // Write everything to destination folder
        .pipe(gulp.dest(`${dest}/css`))
        // Reload page
        .pipe(browsersync.stream());
}

/*================================================*/

const constantbuild = () => gulp.watch([
    `${src}/sass/**/*.sass`,
    `${src}/html/**/*.html`,
    `${src}/js/**/*.js*`,
    `${src}/**/*.php`,
    `${src}/img/*.*`
    ],
    gulp.series(html, css, js, img, php)
);

const build = gulp.series(html, css, js,  php, img);

const server = gulp.series(html, css, js, img, php, constantbuild);

/*================================================*/

//exports
exports.default = build;
exports.build = build;
exports.server = server;
