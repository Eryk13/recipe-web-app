<script>
export default {
  name: "MainLayout"
}
</script>

<template>
  <div id="wrapper">
    <header id="main-header">
      <nav id="main-header__nav">
        <a id="main-header__logo">Recipe book</a>
        <div id="main-header__links">
          <RouterLink class="link" :to="{name: 'recipes'}">recipes</RouterLink>
          <RouterLink class="link" :to="{name: 'addRecipe'}">add</RouterLink>
        </div>
        <div id="main-header__auth-links">
          <RouterLink class="link" :to="{name: 'login'}">login</RouterLink>
          <RouterLink class="link" :to="{name: 'register'}">register</RouterLink>
        </div>
      </nav>
    </header>
    <main  id="content">
      <slot></slot>
    </main>
    <footer>
      <p>
        Recipe book - 2024
      </p>
    </footer>
  </div>
</template>

<style scoped>
  #main-header{
    padding: 1em 4em;
    border-bottom: 1px solid lightgray;
  }

  #main-header__logo{
    font-size: 2rem;
  }

  #main-header__logo{
    cursor: pointer;
  }

  #main-header__links{
    display: flex;
    flex-grow: 1;
    margin-left: 2rem;
    gap: 1rem;
  }

  #main-header__nav{
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  #main-header__auth-links{
    display: flex;
    gap: 1rem;
  }

  #content{
    flex-grow: 1;
    padding: 0 4em;
  }

  #wrapper{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  footer{
    padding: 1em 4em;
    border-top: 1px solid lightgray;
  }

  footer p{
    margin: 0;
  }
</style>