var mongojs = require('mongojs');
var db = mongojs('mealWatcher', ['recipes']);

var recipeFixtures = [
	{'name': 'Grilled Chicken'},
	{'name': 'Pizza'},
	{'name': 'Sphagetti'},
	{'name': 'Meat balls'},
	{'name': 'Grilled Chicken'},
	{'name': 'Pizza'},
	{'name': 'Sphagetti'},
	{'name': 'Meat balls'},
	{'name': 'Grilled Chicken'},
	{'name': 'Pizza'},
	{'name': 'Sphagetti'},
	{'name': 'Meat balls'},
	{'name': 'Grilled Chicken'},
	{'name': 'Pizza'},
	{'name': 'Sphagetti'},
	{'name': 'Meat balls'},
	{'name': 'Grilled Chicken'},
	{'name': 'Pizza'},
	{'name': 'Sphagetti'},
	{'name': 'Meat balls'},
	{
	'name': 'Grilled Turkey Burgers with Cheddar and Smoky Aioli', 
	'ingredients' : [
		{ 
			'ingredient' :  'cumin seeds',
			'amount' : '.5',
			'unit' : 'teaspoon'
		},
		{ 
			'ingredient' :  'coriander seeds',
			'amount' : '.5',
			'unit' : 'teaspoon'
		},
		{ 
			'ingredient' :  'mayonnaise',
			'amount' : '.5',
			'unit' : 'cup'
		},
		{ 
			'ingredient' :  'extra-virgin olive oil plus additional for brushing',
			'amount' : '2',
			'unit' : 'tablespoon'
		},
		{ 
			'ingredient' :  '2 teaspoons fresh lemon juice',
			'amount' : '2',
			'unit' : 'teaspoon'
		},
		{ 
			'ingredient' :  '1 1/2 teaspoons smoked paprika',
			'amount' : '1.5',
			'unit' : 'teaspoon'
		},
		{ 
			'ingredient' :  'garlic, pressed',
			'amount' : '1',
			'unit' : 'clove'
		},
		{ 
			'ingredient' :  'ground dark-meat turkey',
			'amount' : '1',
			'unit' : 'pound'
		},
		{ 
			'ingredient' :  'inch-thick red onion slices',
			'amount' : '4.33',
			'unit' : 'slices'
		},
		{ 
			'ingredient' :  'large red bell pepper, quartered',
			'amount' : '1',
			'unit' : ''
		},
		{ 
			'ingredient' :  'white cheddar cheese or Monterey Jack cheese',
			'amount' : '4',
			'unit' : 'slices'
		},
		{ 
			'ingredient' :  'sesame-seed hamburger buns',
			'amount' : '4',
			'unit' : 'buns'
		},
		{ 
			'ingredient' :  'Arugula',
			'amount' : '',
			'unit' : ''
		},
		{ 
			'ingredient' :  'Pickle wedges',
			'amount' : '',
			'unit' : ''
		},
		{ 
			'ingredient' :  'Corn chips',
			'amount' : '',
			'unit' : ''
		},
	],
	'preparation' : [
		'Toast cumin seeds and coriander seeds in small skillet over medium-high heat until aromatic and slightly darker in color, shaking skillet often, about 1 1/2 minutes. Cool. Finely grind toasted seeds in spice grinder or in mortar with pestle. Whisk mayonnaise, 2 tablespoons extra-virgin olive oil, fresh lemon juice, smoked paprika, garlic, and ground spices in small bowl. Season aioli to taste with salt and pepper. DO AHEAD: Aioli can be made 1 day ahead. Cover and refrigerate.',
		'Place turkey in medium bowl. Add 2 tablespoons aioli; mix gently. Using damp hands, divide turkey mixture into 4 equal portions, then form each into scant 3/4-inch thick patty, about 3 1/2 inches in diameter. Using thumb, make small indentation in center of each burger. DO AHEAD: Can be made 4 hours ahead. Cover and chill.',
		'Prepare barbecue (medium-high heat). Sprinkle burgers with salt and pepper. Brush onion slices and bell pepper pieces with oil; sprinkle with salt and pepper. Grill onions and bell peppers until soft and charred, about 4 minutes per side.',
		'Grill turkey burgers 5 minutes. Turn over; grill until almost cooked through, about 4 minutes. Top each burger with 1 cheese slice and grill until meat is cooked through and cheese melts, about 1 minute longer. Place 1 turkey burger on each of 4 bun bottoms. Arrange grilled red pepper pieces, then grilled red onion slices over. Top each with dollop of aioli and some arugula. Cover burgers with bun tops and serve with pickle wedges and corn chips.'
	]
}

];

db.recipes.remove({});

recipeFixtures.forEach(function(recipe) {
	db.recipes.insert(recipe);
});


