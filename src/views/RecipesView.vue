<script>
import MainLayout from "@/layouts/MainLayout.vue";
import RecipeList from "@/components/RecipeList.vue";

export default {
  name: "RecipesView",
  components: {RecipeList, MainLayout}
}
</script>

<template>
  <MainLayout>
    <RecipeList></RecipeList>
  </MainLayout>
</template>

<style scoped>

</style>