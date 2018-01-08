$(document).ready( function(){

	$('.js-back').hide();

//Llamo a la función que imprime un párrafo
	printNews();

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
	renderActivities(activities);
	renderActivity(activities);
});

	/*
	* Le entrego un párrafo al div llamado 'callout-news'
	*/
	function printNews() {
	$('.callout-news').append('<p class="newrecipes">NUEVAS RECETAS</p>');
 }

/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
* el objeto, si tiene el atributo "highlighted", siempre está como true
*/

function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);
	for (var i = 0; i < recipesArray.length; i++) {
		if (recipesArray[i].highlighted) {
			console.log([i]);
			renderRecipe(recipesArray[i]);
		}
	}
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
* el argumento 'recipe' recibe el valor de 'recipesArray[i]', no es 
* necesario darte la posición nuevamente
*/

function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
		$('.list-recipes').append(
			'<a class="item-recipe" href="#">' +
				'<span class="attribution">' +
					'<span class="title-recipe">' + recipe.title + '</span>' +
					'<span class="metadata-recipe">' +
					'<span class="author-recipe">' + recipe.source.name + '</span>' +
					'<span class="bookmarks-recipe">' +
					'<span class="icon-bookmark"></span>' +
					'</span>' +
				'</span>'+
			'</span>'+
			'<img src="img/recipes/640x800/'+ recipe.name +'.jpg"</>' +
			'</a>')
}

/*
* Función que se encarga de pintar todas las actividades
* Si la longitud de activities es > 0, 
* desaparece el mensaje "No one is cooking yet!"
*/
function renderActivities(activities) {
	console.log('Activities: ', activities);
	if (activities.length > 0) {
		$('.wrapper-message').hide();
	}
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
* se cambia argumento por el arreglo correcto
*/
function renderActivity(activities) {
	$('.list-activities').append(
		'<a href="#" class="item-activity">' +
			'<span class="attribution">' +
				'<span class="avatar">' +
				'<img src="' + activities[0].userAvatar + '" class="image-avatar">' +
				'</span>' +
				'<span class="meta">' +
					'<span class="author">' + activities[0].userName + '</span> made ' +
					'<span class="recipe"> ' + activities[0].recipeName + '</span>: ' + activities[0].text +
					'<span class="location"> ' + activities[0].place+ '</span>' +
				'</span>' +
			'</span>' +
			'<div class="bg-image" style="background-image: url(' + activities[0].image + ');"></div>' +
			'</a>')
}


