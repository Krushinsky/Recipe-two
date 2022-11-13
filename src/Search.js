import './App.scss'
import { useEffect, useState } from 'react';
import MyRecipesComponent from './MyRecipesComponent';


function Search(){

    const MY_ID ='12bbece5';
    const MY_KEY = '38b92855c67a5945f659c76c31e54d45';

    const [ mySearch, setMySearch] = useState('');
    const [myRecipes, setMyRecipes] = useState([]);
    const [wordSubmitted, setWordSubmitted] = useState('')
    
    useEffect (() => {
        const getAdvace = async() => {
        const response = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`)

        const data = await response.json();
        console.log(data.hits)
        setMyRecipes(data.hits)
        }
        getAdvace()
    }, [wordSubmitted])

const myRecipeSearch = (e) => {
  console.log(e.target.value)
    setMySearch(e.target.value)
}

const finalSearch = (e) =>{
e.preventDefault()
console.log(mySearch)
setWordSubmitted(mySearch);
}
const ShowPage =(e) =>{
  const conatiner = document.querySelector('.container')
  conatiner.classList.remove('active');
}
    return(
        <div className='screen' id="Services" onClick={ShowPage}>
        <div className='main'>
          <header className='header_two'>
            <div className='header'>
              <div className='header_item' >
                <h2 className='title'>Search page</h2>
                <form onSubmit={finalSearch}>
                    <input className='Search' placeholder='Search...' onChange={myRecipeSearch} value = {mySearch}>
                    </input>
                </form>
                <button className='btn' onClick={finalSearch}>Search</button>
                <div className='showRecipes'>
                    {myRecipes.map(element =>(
                        <MyRecipesComponent 
                        label={element.recipe.label} 
                        image={element.recipe.image} 
                        calories= {element.recipe.calories} 
                        ingredientLines = {element.recipe.ingredientLines}/>
                    ))}
                </div>
              </div>
            </div>
          </header>
        </div>
        <div className='shadow one'></div>
        <div className='shadow two'></div>
      </div>
    )
}
export default Search;