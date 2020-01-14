<template>
  <div class="row slideshow_row">
    <!-- col-9 -->
    <!-- style="min-height:1000px;" -->
    <!-- <div class="overlay">
            <p class="caption">#Switch2Linux</p>
          </div>-->
    <div class="slideshow_container">
      <q-carousel
        class="qcarousel"
        animated
        v-model="slide"
        navigation
        arrows
        infinite
        autoplay
        transition-prev="slide-right"
        transition-next="slide-left"
      >
        <q-carousel-slide
          class="slide_item"
          :name="1"
          img-src="../statics/kdeneon_1.png"
        />
        <q-carousel-slide
          class="slide_item"
          :name="2"
          img-src="../statics/kdeneon_2.png"
        />
        <!--<q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
              <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />-->
      </q-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slideshow",
  data() {
    return {
      slide: 1
    };
  }
};
</script>
