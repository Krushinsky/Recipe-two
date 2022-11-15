function MyRecipesComponent({label, image, calories, ingredientLines}){

    return(
        <div className="myRecipesComponent" key={ingredientLines}>
            <h2>{label}</h2>
            <img src={image} alt='food' />
            <h2>{calories.toFixed()} calories</h2>
            <ul>{ingredientLines.map(ingridient =>(
                <li>{ingridient}</li>
            ))}</ul>
        </div>
    )
}

export default MyRecipesComponent;