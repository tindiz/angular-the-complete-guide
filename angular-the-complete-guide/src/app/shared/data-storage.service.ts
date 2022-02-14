import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Recipe} from "../recipes/recipe.model";
import {RecipesService} from "../recipes/recipes.service";
import {map, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  constructor(private http: HttpClient,
              private recipesService: RecipesService) {}

  storeRecipes() {
    const recipes = this.recipesService.getRecipes();
    this.http
      .put('https://ng-course-recipe-book-dd4ee-default-rtdb.firebaseio.com/recipes.json', recipes)
      .subscribe(response => {
        console.log(response);
      });
  }


  fetchRecipes() {
    return this.http
      .get<Recipe[]>('https://ng-course-recipe-book-dd4ee-default-rtdb.firebaseio.com/recipes.json')
      .pipe(map(recipes => {
        return recipes.map(recipe => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : []
          }
        })
      }),
      tap(recipes => {
        this.recipesService.setRecipes(recipes);
      })
      );
  }
}
