export const fetchRecipes = (async () => {
    const response = await fetch(`/api/recipes`);
    return await response.json();
})


export const fetchRecipe = (async (path) => {
    const response = await fetch(`/api/recipes/${path}`);
    const json = await response.json();
    return json["recipe"]["value"];
})


export const fetchShoppingList = (async (recipes) => {
    const response = await fetch(`/api/shopping_list`,{
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(recipes)
    });

    return await response.json();
})
