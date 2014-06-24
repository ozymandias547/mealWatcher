'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var RecipeSchema = new Schema({
	name: String,
	ingredients: [
		{ 
			ingredient: String,
			amount: Number,
			unit: String
		}
	],
	preparation: [ String ]
});
	
mongoose.model('Recipe', RecipeSchema);