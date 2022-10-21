const searchBtn=document.getElementById('search-btn');
const mealList=document.getElementById('meal');
const mealDetailsContent=document.querySelector('.meal-details-content');
const receipeCloseBtn=document.getElementById('receipe-close-btn')

//event listneres
searchBtn.addEventListener('click', getMealList);
mealList.addEventListener('click',getMealRecipe);
//get meal list that matches with the ingredients
function getMealList(){
    let searchInputTxt=document.getElementById('search-input').value.trim();
    // console.log(searchInputTxt);
    fetch(`https:/www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
    .then(response=>response.json())
    .then(data=>{
        // console.log(data);
        let html="";
        if(data.meals){
            data.meals.forEach(meal=>{
                html+=`
                <div class="meal-item" data-id="${meal.idmeal}">
                <div class="meal-img">
                    <img src="${meal.strMealThumb}" alt="">
                </div>
                <div class="meal-name">
                    <h3>${meal.strMeal}</h3>
                </div>
            </div>`
            })
        }else{
            html="Sorry we could not found any meal";
            mealList.classList.add('notFound')
        }

        mealList.innerHTML=html;
    })
}

function getMealRecipe(e){
    e.preventDefault();
    if(e.target.classList.contains('receipe-button')){
        let mealItem=e.target.parentElement.parentElement;
        console.log(mealItem);
    }
}