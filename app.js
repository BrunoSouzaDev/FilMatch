const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session')
const logMiddleware = require('./middlewares/logSite')
const bodyParser = require('body-parser')



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser())


app.use('/', cadastroRouter)
app.use('/users', usersRouter)
app.use('/resultadofilme', resultadoFilmeRouter)
app.use('/homeforum', homeForum)
app.use('/criarsessao', criarSessao)
app.use('/users', usersRouter);
app.use('/suporte', suporteRouter);
app.use('/movies', moviesRouter);
app.use('/sobrenos', sobreNosRouter);
app.use('/perfil' , perfil)
app.use('/perfilusuario', perfilUsuario)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
