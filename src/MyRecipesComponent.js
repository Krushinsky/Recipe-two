function MyRecipesComponent({label, image, calories, ingredientLines}){

    return(
        <div>
            <h2>{label}</h2>
            <img src={image} alt='image' />
            <h2>{calories.toFixed()} calories</h2>
            <ul>{ingredientLines.map(ingridient =>(
                <li>{ingridient}</li>
            ))}</ul>
        </div>
    )
}

export default MyRecipesComponent;