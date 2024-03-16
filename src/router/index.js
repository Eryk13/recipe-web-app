import {createRouter, createWebHistory} from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import CreateRecipeView from "@/views/CreateRecipeView.vue";
import RecipesView from "@/views/RecipesView.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import EditRecipeView from "@/views/EditRecipeView.vue";
import RecipeDetailView from "@/views/RecipeDetailView.vue";

const routes = [
    { path: '/', component: HomeView, name: 'home' },
    { path: '/recipes', component: RecipesView, name: 'recipes'},
    { path: '/recipes/:id', component: RecipeDetailView, name: 'recipeDetail'},
    { path: '/recipes/add', component: CreateRecipeView, name: 'addRecipe'},
    { path: '/recipes/edit/:id', component: EditRecipeView, name: 'editRecipe'},
    { path: '/login', component: LoginView, name: 'login'},
    { path: '/register', component: RegisterView, name: 'register'}
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router;