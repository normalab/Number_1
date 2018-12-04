var express = require('express');
var router = express.Router();

/* Get home page  */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Комплектующие ' });
});



/* Motherboard  */
router.get('/motherboard', function(req, res, next) {
  res.render ('hardviews', {title: 'Материнская плата', picture: 'images/motherboard.jpg', desc: 'Motherboard'})
});

/* CPU  */
router.get('/CPU', function(req, res, next) {
  res.render ('hardviews', {title: 'Процессор', picture: 'images/CPU.jpg', desc: 'CPU'})
});

/* Video card  */
router.get('/videocard', function(req, res, next) {
  res.render ('hardviews', {title: 'Видеокарта', picture: 'images/Videocard.jpg', desc: 'Video card'})
});

/* Power supply  */
router.get('/powersupply', function(req, res, next) {
  res.render ('hardviews', {title: 'Блок питания', picture: 'images/Powersupply.jpg', desc: 'Power supply'})
});

/* HDD  */
router.get('/HDD', function(req, res, next) {
  res.render ('hardviews', {title: 'HDD', picture: 'images/HDD.jpg', desc: 'HDD'})
});

/* RAM  */
router.get('/RAM', function(req, res, next) {
  res.render ('hardviews', {title: 'ОЗУ', picture: 'images/RAM.jpg', desc: 'RAM'})
});








module.exports = router;
