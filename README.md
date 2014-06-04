mealWatcher
===========

Automatically make a shopping list by providing a recipe! Never have scrap ingredients lying around again!

git add .
git commit -m "whatever"
git push origin master

db.startup_log.find();
use mealWatcher
db.recipes.insert({name: "pizza"});
db.recipes.find();
db.recipes.find({ name: "pizza" });
db.recipes.update({ name: "pizza" }, {$set: {"ingredients": "cheese"} });
db.recipes.remove({ name: "pizza" });

npm install mongojs --save