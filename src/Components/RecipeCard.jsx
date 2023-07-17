export default function recipeCard({recipe}){
    console.log("single Recipe inside of card:", recipe)
    return(<div>
        <img src ={recipe.image}/>
        <h1>{recipe.title}</h1>
        <h3>{recipe.likes}Likes</h3>
        <div>{recipe.title}</div>
        <div>{recipe.title}</div>
        <div>{recipe.title}</div>
        </div>
    )
}