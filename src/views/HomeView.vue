<template>
  <div>
    <h1>Página Principal</h1>
    <p>
      <router-link to="/sobre-nosotros">Ir a la página sobre-nosotros</router-link>
    </p>
    <p>
      <router-link to="/proyecto">Ir a la página Del Proyecto</router-link>
    </p>
    <p>
      <router-link to="/crud">Ir a la página Del CRUD</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
};
</script>

<style>

</style>
