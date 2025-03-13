<template>
    <h4 class="titulo">Pokedex</h4>
    <div class="container">
    <div v-for="pokemon in pokemones " :key="pokemon.id">
        <PokemonComponents 
        :id="pokemon.id"
        :nombre="pokemon.nombre"
        :color="pokemon.type_color"
        :imagen="pokemon.imagen"
        :tipo="pokemon.type_name"
        >
        </PokemonComponents>
    </div>

    </div>
</template>

<script>
import PokemonComponents from '@/components/PokemonComponents.vue';
export default {
    data() {
        return {
            pokemones:[],

        }

    },
    methods: {
        getAllPokemones: async function () {
            let url = "https://cobuses.com.co/APIV2/model/pokemon.php?dato=getallpokemon";
            let vue = this;
            await this.axios
                .get(url)
                .then(function (response) {

                    console.log("Estos Son los datos")
                    console.log(response.data);

                    console.log("Status")
                    console.log(response.status);
                    vue.pokemones=response.data;

                }).catch(function (error) {
                    console.log(error);
                }).finally(function () {
                    console.log("Peticion Completada")
                })


        },

    },
    created: function () {
        this.getAllPokemones();

    },
        components: {
        PokemonComponents
    }

}
</script>

<style scoped>
.titulo{
    background-color: red;
    color: white;
    font-size: 100px;
    text-align: center;
    border-bottom:solid black 2px ;
    padding: 20px;
}

.container {
    
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    gap: 100px 10px;
}


</style>