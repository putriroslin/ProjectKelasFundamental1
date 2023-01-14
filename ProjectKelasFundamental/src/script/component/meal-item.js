class MealItem extends HTMLElement {
    constructor() {
      super();
      this.shadowDOM = this.attachShadow({mode: 'open'});
    }
    set meal(meal) {
      this._meal = meal;
      this.render();
    }
    render() {
      this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            :host {
                display: block;
                margin-bottom: 15px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                border-radius: 10px;
                overflow: hidden;
                background-color: white;
            }
            .fan-art-meal {
                width: 100%;
                max-height: 200px;
                object-fit: cover;
                object-position: center;
            }
            .meal-info {
                padding: 20px;
            }
            .meal-info > h2 {
                font-weight: lighter;
                text-align: center;
                font-size: large;
                font-weight: bold;
            }
            .meal-info > h4 {
              text-align: left;
              text-decoration: underline;
            }
            .meal-info > p {
                margin-top: 10px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 10;
            }
        </style>

        <div class="container mt-5">
          <div class="row">
            <div class="col-sm-4">
            <img class="fan-art-meal" src="${this._meal.strMealThumb}" alt="Fan Art">
              <div class="meal-info">
                <h2>${this._meal.strMeal}</h2>
                <h4>${this._meal.strArea}</h4>
                <p>Instructions :</p>
                <p>${this._meal.strInstructions}</p> 
              </div>
            </div>
          </div>
        </div>
      `;
    }
  }
   
  customElements.define('meal-item', MealItem);