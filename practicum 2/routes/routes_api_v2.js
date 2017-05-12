// API version 2
var express = require('express');
var router = express.Router();
var path = require('path');
router.get('*', function(request, response) {
 response.status(200);
 response.json({
 "description": "Recipes "
 });
});
router.get('/api/v2/recipes', function(request,response){
	response.json({recipes})
	var recipes = require('.//recepies.js');
});
module.exports = router;