<template>
  <div class="Body">
    <HeaderProyecto></HeaderProyecto>
    <main>
      <main>
        <section style="height: 600px">
          <div id="homejuegos-grid">
            <div id="imagen">
              <img
                class="imagen-baratos"
                :src="require(`@/assets/juegos.png`)"
                alt=""
              />
            </div>
            <div id="contenido">
              <h1 style="text-align: center; font-size: 50px">
                RetroRealms: Ofertas Especiales
              </h1>
              Bienvenido a RetroRealms, tu paraíso gamer. Explora nuestras
              ofertas especiales en una amplia variedad de videojuegos, desde
              los clásicos retro que marcaron una era hasta los lanzamientos más
              recientes. Ya sea que estés buscando un juego de tu infancia o el
              último éxito, nuestras promociones exclusivas te permiten
              disfrutarlo todo sin gastar de más. ¡Descubre nuestras ofertas y
              encuentra tu próxima aventura en RetroRealms!
            </div>
          </div>
        </section>
      </main>

      <section class="ofertas">
        <div class="oferta-card">
          <img :src="require(`@/assets/paquete.jpg`)" alt="Oferta Especial 1" />
          <h3>Pack Aventura Épica</h3>
          <p class="descripcion">Incluye 3 juegos de aventura AAA</p>
          <p class="precio-original">Precio original: $179.99</p>
          <p class="precio-oferta">Precio oferta: $99.99</p>
          <button>Comprar Ahora</button>
        </div>
        <div class="oferta-card">
          <img
            :src="require(`@/assets/estrategia.jpg`)"
            alt="Oferta Especial 2"
          />
          <h3>Colección Estrategia</h3>
          <p class="descripcion">5 juegos de estrategia clásicos</p>
          <p class="precio-original">Precio original: $129.99</p>
          <p class="precio-oferta">Precio oferta: $79.99</p>
          <button>Comprar Ahora</button>
        </div>
        <div class="oferta-card">
          <img :src="require(`@/assets/indie.jpeg`)" alt="Oferta Especial 3" />
          <h3>Bundle Indie Gems</h3>
          <p class="descripcion">10 juegos indie premiados</p>
          <p class="precio-original">Precio original: $99.99</p>
          <p class="precio-oferta">Precio oferta: $49.99</p>
          <button>Comprar Ahora</button>
        </div>
      </section>

      <section class="oferta-del-dia">
        <h2>Oferta del Día</h2>
        <div class="oferta-destacada">
          <img :src="require(`@/assets/V-V2-en.jpg`)" alt="Oferta del Día" />
          <div class="oferta-info">
            <h3>Cyberpunk 2077: Edición Definitiva</h3>
            <p class="descripcion">
              Incluye el juego base y todas las expansiones
            </p>
            <p class="precio-original">Precio original: $89.99</p>
            <p class="precio-oferta">Precio oferta: $59.99</p>
            <p class="tiempo-restante">
              Tiempo restante: <span id="countdown">12:00:00</span>
            </p>
            <button>Aprovechar Oferta</button>
          </div>
        </div>
      </section>
    </main>
    
    <FooterProyecto></FooterProyecto>
  </div>
</template>

<script>
import FooterProyecto from "@/components/FooterProyecto.vue";
import HeaderProyecto from "@/components/HeaderProyecto.vue";


export default {
  name: "ProyectoView",
  mounted() {
    // Manejo del contador de ofertas
    const countdownElement = document.getElementById("countdown");
    if (countdownElement) {
      let time = 12 * 60 * 60; // 12 horas en segundos
      function updateCountdown() {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;
        countdownElement.textContent = `${hours
          .toString()
          .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
          .toString()
          .padStart(2, "0")}`;
        if (time > 0) {
          time--;
          setTimeout(updateCountdown, 1000);
        }
      }
      updateCountdown();
    }
  },
  components: {
    HeaderProyecto,
    FooterProyecto,
  },
};
</script>

<style scoped>
.oferta-del-dia {
  margin-top: 100px;
}

.body {
  font-family: "Roboto", sans-serif;
  background-color: #f0f0f0;
  color: #333333;
  margin: 0;
  padding: 0;
  line-height: 1.6;
}




main {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 2rem;
}

h1,
h2,
h3,
h4 {
  color: #4b0082;
}

.hero-text {
  font-size: 1.4rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #8a2be2;
}

.ofertas {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.oferta-card {
  background-color: #ffffff;
  border-radius: 10px;
  padding: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.oferta-card:hover {
  transform: translateY(-5px);
  box-shadow: 120px rgba(0, 0, 0, 0.15);
}

.oferta-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 1rem;
}

button {
  background-color: #8a2be2;
  color: #f0f0f0;
  border: none;
  padding: 0.7rem 1.2rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  font-weight: bold;
}

button:hover {
  background-color: #4b0082;
  transform: scale(1.05);
}

.oferta-destacada {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.oferta-destacada img {
  width: 100%;
  height: auto;
  border-radius: 5px;
  object-fit: cover;
}

.precio-original {
  text-decoration: line-through;
  color: #808080;
}

.precio-oferta {
  font-size: 1.4rem;
  font-weight: bold;
  color: #8a2be2;
}


.user-icon {
  background-color: #00ffff;
  color: #4b0082;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: bold;
}

#contenido {
  grid-area: 1/2/2/3;
}

#homejuegos-grid {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(2, 1fr);
  gap: 0;
  align-items: center;
  align-content: center;
  width: 100%;
  height: 100%;
}

#imagen {
  grid-area: 1/1/2/2;
}

.imagen-carta {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  overflow: hidden;
  border-radius: 10% 10% 0 0;
}

.imagen-baratos {
  width: 100%;
  height: 100%;
  border-radius: 10% 10% 0 0;
}

.imagen-carta:hover {
  cursor: pointer;
  opacity: 0.5;
  transition: 1s;
  scale: 1.05;
}
</style>
