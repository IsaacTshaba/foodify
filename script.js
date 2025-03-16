// Updated Recipes Array with ingredients and realistic photo URLs
const recipes = [
    {
        id: 1,
        name: "Spaghetti Bolognese",
        image: "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?w=600&auto=format",
        description: "A classic Italian pasta dish with a hearty tomato and meat sauce, served over perfectly cooked spaghetti.",
        ingredients: [
            "1 lb ground beef",
            "1 onion, finely chopped",
            "2 cloves garlic, minced",
            "1 carrot, diced",
            "1 celery stalk, diced",
            "1 can (14 oz) crushed tomatoes",
            "2 tbsp tomato paste",
            "1 cup beef broth",
            "1 tsp dried oregano",
            "1 tsp dried basil",
            "Salt and pepper to taste",
            "1 lb spaghetti",
            "Parmesan cheese for serving"
        ]
    },
    {
        id: 2,
        name: "Chicken Curry",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&auto=format",
        description: "A rich and flavorful Indian dish with tender chicken pieces simmered in a spiced creamy curry sauce.",
        ingredients: [
            "2 lbs chicken thighs, cut into pieces",
            "2 onions, finely chopped",
            "3 cloves garlic, minced",
            "1 tbsp ginger, grated",
            "2 tbsp curry powder",
            "1 tsp turmeric",
            "1 tsp cumin",
            "1 can (14 oz) coconut milk",
            "1 cup chicken broth",
            "2 tbsp vegetable oil",
            "Salt to taste",
            "Fresh cilantro for garnish"
        ]
    },
    {
        id: 3,
        name: "Vegetable Stir-fry",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&auto=format",
        description: "A colorful and healthy mix of fresh vegetables sautéed in a tangy soy-ginger sauce.",
        ingredients: [
            "1 red bell pepper, sliced",
            "1 yellow bell pepper, sliced",
            "1 cup broccoli florets",
            "1 carrot, julienned",
            "1 cup snap peas",
            "1 cup mushrooms, sliced",
            "3 cloves garlic, minced",
            "1 tbsp ginger, grated",
            "3 tbsp soy sauce",
            "1 tbsp sesame oil",
            "2 tbsp vegetable oil",
            "1 tsp honey or maple syrup",
            "Sesame seeds for garnish"
        ]
    },
    {
        id: 4,
        name: "Beef Tacos",
        image: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=600&auto=format",
        description: "Crispy taco shells filled with spiced ground beef, lettuce, tomatoes, cheese, and a dollop of sour cream.",
        ingredients: [
            "1 lb ground beef",
            "1 packet taco seasoning",
            "12 taco shells",
            "1 cup shredded lettuce",
            "1 cup diced tomatoes",
            "1 cup shredded cheddar cheese",
            "1/2 cup sour cream",
            "1/4 cup sliced jalapeños (optional)",
            "1/2 cup salsa",
            "1 lime, cut into wedges"
        ]
    },
    {
        id: 5,
        name: "Salmon Teriyaki",
        image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&auto=format",
        description: "Tender salmon fillets glazed with a sweet and savory teriyaki sauce, served with steamed rice and vegetables.",
        ingredients: [
            "4 salmon fillets",
            "1/3 cup soy sauce",
            "1/4 cup mirin",
            "2 tbsp honey",
            "1 tbsp ginger, grated",
            "2 cloves garlic, minced",
            "1 tbsp vegetable oil",
            "2 green onions, sliced",
            "1 tbsp sesame seeds",
            "Steamed rice for serving",
            "Steamed broccoli for serving"
        ]
    },
    {
        id: 6,
        name: "Margherita Pizza",
        image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=600&auto=format",
        description: "A classic Italian pizza topped with fresh mozzarella cheese, ripe tomatoes, basil leaves, and olive oil.",
        ingredients: [
            "1 pizza dough",
            "1/2 cup tomato sauce",
            "8 oz fresh mozzarella, sliced",
            "2 tomatoes, sliced",
            "Fresh basil leaves",
            "2 tbsp olive oil",
            "Salt and pepper to taste",
            "1 tsp dried oregano (optional)"
        ]
    },
    {
        id: 7,
        name: "Caesar Salad",
        image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=600&auto=format",
        description: "A refreshing salad of crisp romaine lettuce, crunchy croutons, Parmesan cheese, and creamy Caesar dressing.",
        ingredients: [
            "2 heads romaine lettuce, chopped",
            "1 cup croutons",
            "1/2 cup Parmesan cheese, grated",
            "For the dressing:",
            "1 clove garlic, minced",
            "2 anchovy fillets (optional)",
            "1 tsp Dijon mustard",
            "1 egg yolk",
            "2 tbsp lemon juice",
            "1/3 cup olive oil",
            "Salt and pepper to taste"
        ]
    },
    // {
    //     id: 8,
    //     name: "Lemon Garlic Shrimp",
    //     image: "https://images.unsplash.com/photo-1625943553859-23453ce9d73f?w=600&auto=format",
    //     description: "Juicy shrimp sautéed in a tangy lemon garlic butter sauce, served with pasta or crusty bread.",
    //     ingredients: [
    //         "1 lb large shrimp, peeled and deveined",
    //         "4 tbsp butter",
    //         "4 cloves garlic, minced",
    //         "1 lemon, juiced and zested",
    //         "1/4 cup white wine (optional)",
    //         "1/4 cup fresh parsley, chopped",
    //         "Salt and pepper to taste",
    //         "Red pepper flakes (optional)",
    //         "8 oz pasta or crusty bread for serving"
    //     ]
    // },
];

// Initialize favorites array
const favorites = [];

// DOM Elements
const recipeListSection = document.getElementById("recipe-list");
const recipeDetailSection = document.getElementById("recipe-detail");
const favoritesSection = document.getElementById("favorites");
const recipesContainer = document.getElementById("recipes-container");
const recipeDetailContent = document.getElementById("recipe-detail-content");
const favoritesList = document.getElementById("favorites-list");
const searchBar = document.getElementById("search-bar");

// Navigation
document.getElementById("home-link").addEventListener("click", () => showPage(recipeListSection));
document.getElementById("favorites-link").addEventListener("click", () => {
    renderFavorites();
    showPage(favoritesSection);
});

document.getElementById("back-btn").addEventListener("click", () => showPage(recipeListSection));

// Display recipes
function renderRecipes(recipesToRender) {
    recipesContainer.innerHTML = "";
    recipesToRender.forEach((recipe) => {
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("recipe-card");
        recipeCard.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}" onerror="this.src='/api/placeholder/250/180?text=${encodeURIComponent(recipe.name)}'">
            <h3>${recipe.name}</h3>
            <p>${recipe.description}</p>
            <button onclick="viewRecipe(${recipe.id})">View Details</button>
        `;
        recipesContainer.appendChild(recipeCard);
    });
}

// View recipe details
function viewRecipe(id) {
    const recipe = recipes.find((r) => r.id === id);
    if (recipe) {
        // Create the ingredients list HTML
        const ingredientsList = recipe.ingredients.map(ingredient => 
            `<li>${ingredient}</li>`
        ).join('');
        
        recipeDetailContent.innerHTML = `
            <h1>${recipe.name}</h1>
            <img src="${recipe.image}" alt="${recipe.name}" class="detail-image" onerror="this.src='/api/placeholder/500/300?text=${encodeURIComponent(recipe.name)}'">
            <div class="recipe-info">
                <h2>Description</h2>
                <p>${recipe.description}</p>
                
                <h2>Ingredients</h2>
                <ul class="ingredients-list">
                    ${ingredientsList}
                </ul>
            </div>
            <button onclick="addToFavorites(${recipe.id})">Add to Favorites</button>
        `;
        showPage(recipeDetailSection);
    }
}

// Add recipe to favorites
function addToFavorites(id) {
    const recipe = recipes.find((r) => r.id === id);
    if (recipe && !favorites.find((fav) => fav.id === id)) {
        favorites.push(recipe);
        alert(`${recipe.name} added to favorites!`);
    } else {
        alert("Recipe is already in favorites.");
    }
}

// Render favorites
function renderFavorites() {
    favoritesList.innerHTML = "";
    if (favorites.length === 0) {
        favoritesList.innerHTML = "<p>You haven't added any favorites yet.</p>";
        return;
    }
    
    favorites.forEach((favorite) => {
        const favoriteItem = document.createElement("li");
        favoriteItem.classList.add("favorite-item");
        favoriteItem.innerHTML = `
            <img src="${favorite.image}" alt="${favorite.name}" onerror="this.src='/api/placeholder/250/180?text=${encodeURIComponent(favorite.name)}'">
            <h3>${favorite.name}</h3>
            <p>${favorite.description}</p>
            <button onclick="viewRecipe(${favorite.id})">View Details</button>
            <button onclick="removeFromFavorites(${favorite.id})">Remove</button>
        `;
        favoritesList.appendChild(favoriteItem);
    });
}

// Remove recipe from favorites
function removeFromFavorites(id) {
    const index = favorites.findIndex((fav) => fav.id === id);
    if (index !== -1) {
        const recipeName = favorites[index].name;
        favorites.splice(index, 1);
        renderFavorites();
        alert(`${recipeName} removed from favorites.`);
    }
}

// Search functionality
searchBar.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    const filteredRecipes = recipes.filter((recipe) => 
        recipe.name.toLowerCase().includes(query) || 
        recipe.description.toLowerCase().includes(query) ||
        recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(query))
    );
    renderRecipes(filteredRecipes);
});

// Show/hide sections
function showPage(section) {
    document.querySelectorAll(".page").forEach((page) => page.classList.add("hidden"));
    section.classList.remove("hidden");
}

// Initial render
renderRecipes(recipes);