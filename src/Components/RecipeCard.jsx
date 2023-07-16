export default function recipeCard({recipe}){
    console.log("single Recipe inside of card:", recipe)
    return(
        <div>{recipe.title}</div>
    )
}