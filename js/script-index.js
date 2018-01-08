$(document).ready( function(){

	$('.js-back').hide();

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

	printNews();
});

	/*
	* Le entrego un párrafo al div llamado 'callout-news'
	*/
	function printNews() {
	$(".callout-news").append('<p class="newrecipes">NUEVAS RECETAS</p>');
 }

/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
* el objeto, si tiene el atributo "highlighted", siempre está como true
*/
var recipe = [];

function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);
	for (var i = 0; i < recipesArray.length; i++) {
		if (recipesArray[i].highlighted){
			console.log([i]);
			recipe.push(recipesArray[i].highlighted);
			console.log(recipe);
			renderRecipe(recipesArray[i]);
		}
	}
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);

}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


