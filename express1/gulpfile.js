
var gulp = require('gulp');
var less = require('gulp-less');//转换less用的
var concat = require('gulp-concat');//合并
var rename = require('gulp-rename');//重命名
var cleancss = require('gulp-clean-css');//压缩
var uglify = require('gulp-uglify');//混淆js
var fs = require('fs');
var rev = require('gulp-rev');//加MD5后缀
var jshint = require('gulp-jshint');//js校验
var systemConfig = require('./config/config').systemConfig;

