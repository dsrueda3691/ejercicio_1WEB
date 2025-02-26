<template>
  <div class="fondo">
    <MainMenu></MainMenu>
    <div class="container my-5">
      <div class="row g-3">
        <div class="col-md-4">
          <label for="lblId" class="form-label">ID</label>
          <input
            type="text"
            class="form-control"
            id="lblId"
            v-model="estudianteNuevo.id"
          />
        </div>
        <div class="col-md-4">
          <label for="lblNombre" class="form-label">Nombre</label>
          <input
            type="text"
            class="form-control"
            id="lblNombre"
            v-model="estudianteNuevo.nombre"
          />
        </div>
        <div class="col-md-4">
          <label for="lblEdad" class="form-label">Edad</label>
          <input
            type="text"
            class="form-control"
            id="lblEdad"
            v-model="estudianteNuevo.edad"
          />
        </div>

        <div class="col-12">
          <button @click="addStudent" class="btn btn-primary">Guardar</button>
        </div>
      </div>

      <div class="row g-3 mt-5">
        <div class="col-md-4" v-for="estudiante in estudiantes" :key="estudiante.id">
          <div class="card">
            <img :src="require(`@/assets/fotoperfil.png`)" alt="Foto de estudiante" class="card-img-top estudiante-foto">
            <div class="card-body">
              <h5 class="card-title">{{ estudiante.nombre }}</h5>
              <p class="card-text">ID: {{ estudiante.id }}, Edad: {{ estudiante.edad }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainMenu from "@/components/MainMenu.vue";

export default {
  name: "PageAbout",
  data() {
    return {
      estudiantes: [
        {
          id: 29887755,
          nombre: "Jeimy Donado",
          edad: 18,
          foto: 'fotoperfil.png',
        },
        {
          id: 29887756,
          nombre: "Paulo Pallares",
          edad: 19,
          foto: 'fotoperfil.png',
        },
      ],
      estudianteNuevo: {
        id: 0,
        nombre: "",
        edad: 0,
        foto: "",
      },
    };
  },
  methods: {
    getAllStudents: function () {
      console.log(this.estudiantes);
    },
    addStudent: function () {
      let encontrado = false;

      for (let i = 0; i < this.estudiantes.length; i++) {
        if (this.estudianteNuevo.id == this.estudiantes[i].id) {
          encontrado = true;
          break;
        }
      }

      if (!encontrado) {
        this.estudiantes.push({ ...this.estudianteNuevo });
        alert("Se ha agregado un nuevo estudiante");

        this.estudianteNuevo = {
          id: 0,
          nombre: "",
          edad: 0,
          foto: "",
        };
      } else {
        alert("No se pudo guardar el estudiante, porque ya existe");
      }
    },
  },
  components: {
    MainMenu,
  },
  created: function () {
    this.getAllStudents();
  },
};
</script>

<style scoped>
.fondo {
  background-color: black;
}

.estudiante-foto {
  max-width: 500px;
  height: auto;
}
</style>