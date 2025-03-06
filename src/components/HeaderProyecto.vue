<template>

    <header>
      <nav>
        <ul>
          <a class="navbar-brand" href="proyecto">
            <img :src="require(`@/assets/logo copy.png`)" alt="" />
            <span style="color: white"> Retro Realms </span>
          </a>
          <li><a href="proyecto">Inicio</a></li>
          <li><a href="proyecto">Ofertas</a></li>
          <li><a href="proyecto">Catálogo</a></li>
          <li id="user-info" style="display: none">
            <span class="user-icon"></span>
          </li>
        </ul>
      </nav>
    </header>

</template>

<script>
export default {
  name: "HeaderProyecto",
};
</script>

<style scoped>
header {
  background-color: #4b0082;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 500;
  box-shadow: 20px rgba(0, 0, 0, 0.57);
  height: 19vh;
}
.navbar-brand {
  display: inline-block;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;
  display: flex;
  position: static;
}

nav ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}



.navbar-brand:hover,
.navbar-brand:focus {
  text-decoration: none;
}

.navbar-brand,
.navbar-brand:hover {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 24px;
}
nav ul li {
  margin: 0 1rem;
}

nav ul li a {
  color: #f0f0f0;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
  font-size: 1.1rem;
}

nav ul li a:hover,
nav ul li a.active {
  color: #00ffff;
}

</style>
