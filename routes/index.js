
/*
 * GET home page.
 */

exports.index = function(req, res){

  res.render('index', { 
  	title: 'Express',
  	header: Math.floor((Math.random()*3)+1)
  })
};