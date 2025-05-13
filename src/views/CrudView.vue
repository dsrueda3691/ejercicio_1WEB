<template>
  <Header>
    <nav class="brand-nav">
      <router-link to="/">
        <span class="titulo">CRUD</span>
      </router-link>
    </nav>

    <nav class="menu-nav">
      <ul>
        <li class="opciones" @click="nuevoUsuario()">Agregar</li>
        
      </ul>
    </nav>
  </Header>

  <DialogModel
    v-model:visible="isActivate"
    maximizable
    modal
    header="Nuevo Usuario"
    :style="{ width: '50rem' }"
    :breakpoints="{ '1199px': '75vw', '575px': '98vw' }"
  >
    <div class="form">
      <InputTextPrime
        class="w-full"
        type="text"
        v-model="usuario.cedula"
        placeholder="Cedula"
      />
      <InputTextPrime
        class="w-full"
        type="text"
        v-model="usuario.nombre"
        placeholder="Nombre"
      />
      <InputTextPrime
        class="w-full"
        type="text"
        v-model="usuario.usuario"
        placeholder="Usuario"
      />
      <InputTextPrime
        class="w-full"
        type="password"
        v-model="usuario.clave"
        placeholder="Clave"
      />
      <InputTextPrime
        class="w-full"
        type="password"
        v-model="usuario.repetirclave"
        placeholder="RepetirClave"
      />
      <InputTextPrime
        class="w-full"
        type="text"
        v-model="usuario.genero"
        placeholder="Genero"
      />
      <InputTextPrime
        class="w-full"
        type="text"
        v-model="usuario.programa"
        placeholder="Programa"
      />
    </div>
    <button @click="guardar()">Guardar</button>
  </DialogModel>

  <DialogModel
    v-model:visible="isActivateDelete"
    maximizable
    modal
    header="Nuevo Usuario"
    :style="{ width: '50rem' }"
    :breakpoints="{ '1199px': '75vw', '575px': '98vw' }"
  >
    <div class="form">
      <InputTextPrime
        class="w-full"
        type="text"
        v-model="usuario.cedula"
        placeholder="Cedula"
      />
    </div>
    <button @click="guardar()">Eliminar</button>
  </DialogModel>

  <div class="table">
    <DataTablePrime
      :value="usuarios"
      paginator
      :rows="5"
      :rowsPerPageOptions="[5, 10, 20, 50]"
      tableStyle="min-width: 50rem"
    >
      <ColumnPrime
        field="cedula"
        header="Cedula"
        sortable
        style="width: 25%"
      ></ColumnPrime>
      <ColumnPrime
        field="nombre"
        header="Nombre"
        sortable
        style="width: 25%"
      ></ColumnPrime>
      <ColumnPrime
        field="usuario"
        header="Usuario"
        sortable
        style="width: 25%"
      ></ColumnPrime>
      <ColumnPrime
        field="genero"
        header="genero"
        sortable
        style="width: 20%"
      ></ColumnPrime>
      <ColumnPrime
        field="programa"
        header="programa"
        sortable
        style="width: 25%"
      ></ColumnPrime>
      <ColumnPrime class="w-24 !text-end">
        <template #body="slotProps">
          <Button class="lupa" @click="ver(slotProps.data)" severity="success"
            >🗑️</Button
          >
        </template>
      </ColumnPrime>
    </DataTablePrime>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuarios: [],
      usuario: {
        cedula: null,
        nombre: "",
        usuario: "",
        clave: "",
        repetirclave: "",
        genero: "",
        programa: "",
      },
      isActivate: false,
      isActivateDelete: false,
    };
  },

  methods: {
    getAllUsuarios: async function () {
      let url =
        "https://cobuses.com.co/APIV2/model/usuarios.php?dato=getallusuarios";
      let vue = this;
      await this.axios
        .get(url)
        .then(function (response) {
          console.log("ESTOS SON LOS DATOS");

          console.log(response.data);

          console.log("STATUS");

          console.log(response.status);

          vue.usuarios = response.data;
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {
          console.log("Proceso terminado");
        });
    },

    NuevoUsuarios: async function () {
      let datosEnviar = {
        cedula: this.usuario.cedula,
        nombre: this.usuario.nombre,
        usuario: this.usuario.usuario,
        clave: this.usuario.clave,
        genero: this.usuario.genero,
        programa: this.usuario.programa,
      };
      let url =
        "https://cobuses.com.co/APIV2/model/usuarios.php?dato=insertusuario";
      let vue = this;
      await this.axios
        .post(url, JSON.stringify(datosEnviar))
        .then(function (response) {
          /* console.log("ESTOS SON LOS DATOS");

                    console.log(response.data);

                    console.log("STATUS");

                    console.log(response.status);

                    vue.usuarios = response.data;*/
          if (response.status == 200) {
            alert("Usuario creado con exito");
            (vue.isActivate = false), (this.usuario.cedula = null);
            this.usuario.nombre = "";
            this.usuario.usuario = "";
            this.usuario.clave = "";
            this.usuario.repetirclave = "";
            this.usuario.genero = "";
            this.usuario.programa = "";
          }
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {
          console.log("Proceso terminado");
        });
    },
    ver: function (usuario) {
      alert("Usuario Selecionado " + usuario.nombre);
      console.log(usuario);
    },
    nuevoUsuario: function () {
      this.isActivate = true;
    },
    deleteUsuario: function () {
      this.isActivateDelete = true;
    },
    guardar: function () {
      console.log(this.usuario);
      this.isActivate = false;
    },
  },

  created: function () {
    this.getAllUsuarios();
  },
};
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 11vh;
  padding: 0 2rem;
  transition: background-color 0.3s ease, box-shadow 0.3s ease,
    transform 0.3s ease;
  z-index: 1000;
  background-color: #1f1f1f;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.titulo {
  font-size: 2rem;
  font-weight: bold;
  transform: translateY(-10px);
  animation: slideIn 0.6s ease forwards;
}

.hidden-header {
  transform: translateY(-100%);
}

.transparent-header {
  background-color: transparent;
  box-shadow: none;
}

.brand-nav {
  display: flex;
  align-items: center;
}

.navbar-brand {
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 0.5rem;
}

.navbar-brand img {
  height: 40px;
}

.navbar-brand span {
  color: #f0f0f0;
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
}

.opciones {
  color: #f0f0f0;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
  font-size: 1.1rem;
  opacity: 0;
  transform: translateY(-10px);
  cursor: pointer;
  animation: slideIn 0.6s ease forwards;
}

.menu-nav ul {
  display: flex;
  list-style: none;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
  align-items: center;
}

.menu-nav ul li:nth-child(1) a {
  animation-delay: 0.2s;
}

.menu-nav ul li:nth-child(2) a {
  animation-delay: 0.4s;
}

.menu-nav ul li:nth-child(3) a {
  animation-delay: 0.6s;
}

@keyframes slideIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.opciones:hover {
  color: #52ac57;
}

.table {
  width: 75%;
  margin: 40px auto;
  background-color: black;
  margin-top: 10%;
}

.lupa {
  border-radius: 40%;
  filter: grayscale();
  margin: auto;
}
</style>
