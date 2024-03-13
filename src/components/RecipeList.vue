<script>
export default {
  name: "RecipeList",
  data() {
    return {
      recipes: [{id: 0, title: 'Pizza'}, {id: 1, title: 'Spaghetti'}]
    }
  }
}
</script>

<template>
  <div class="filters">
    <div class="search-wrapper">
      <input class="search" placeholder="Title"/>
      <button class="search-btn">Search</button>
    </div>
    <select class="sort">
      <option>A->Z</option>
      <option>New</option>
      <option>Z->A</option>
    </select>
  </div>
  <ul class="list">
    <li class="list__item" v-for="recipe in recipes">
      <h4>{{recipe.title}}</h4>
    </li>
  </ul>
  <div class="pagination">
    <button class="pagination__btn">Previous</button>
    <div class="pagination__number">1</div>
    <button class="pagination__btn">Next</button>
  </div>
</template>

<style scoped>
  .list{
    margin-top: 2rem;
  }

  .list__item{
    border-bottom: 1px solid lightgray;
    padding: 1em 2em;
  }

  .list__item h4{
    margin: 0;
  }

  .list__item:hover{
    cursor: pointer;
    border-bottom: 1px solid gray;
    color: gray;
  }

  .filters{
    margin-top: 2rem;
    display: flex;
    gap: 4rem;
  }

  .search{
    box-sizing: border-box;
    padding: .5em;
    flex-grow: 1;
    font-size: 1.2rem;
  }

  .sort{
    padding: .5em;
    min-width: 20%;
  }

  .search-wrapper{
    flex-grow: 1;
    display: flex;
  }

  .search-btn{
    padding: .3em 1em;
  }

  .pagination{
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 2rem;
  }

  .pagination__btn{
    padding: .5em 1em;
    min-width: 10%;
  }

  .pagination__number{
    display: flex;
    align-items: center;
  }
</style>