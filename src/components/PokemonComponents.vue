<template>
  <div  class="card">
    <img :src="imagen" alt="">
    <h3> {{ nombre }} </h3>
    <span :style="
    {'background-color': color}"
    class="span"> {{ tipo }} </span>
    <button key="btn" @click="infoPokemon(nombre)" >🔍︎</button>

  </div>
</template>

<script>

export default {
  name: 'PokemonComponents',
  props: { id: Number, imagen: String , nombre: String, tipo: String, color: String },
  data() {
    return {
      
    }
      },
      methods: {
        infoPokemon(nombre) {
          
          alert ('Selecionado '+nombre)
          
        }
      }
  
}

</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;


}

.card {
  display: flex;
  height: 310px;
  width: 100%;
  justify-content: space-between;
  
  border: solid black 2px;
}

img {
  height: 100%;
  width: 100%;
  cursor: pointer;

}

.span {
  width: 100%;
  
  color: black;

}
</style>