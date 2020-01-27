<template>
  <div class="row slideshow_row">
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

      <!-- <q-carousel-slide :name="1" class="" style="text-align: horizontal;">
        <div class="slide_item" style="background-image: url('../statics/kdeneon_1.jpg');"></div>
        <div class="" style="background-color: red;"></div>
      </q-carousel-slide> -->
      <!-- <q-carousel-slide :name="2" class="slide_item">
        <q-img class="" src="../statics/kdeneon_2.jpg" />
      </q-carousel-slide> -->

        <q-carousel-slide
          class="slide_item"
          name="1"
          img-src="../statics/kdeneon_1.jpg"
        />
        <q-carousel-slide
          class="slide_item"
          name="2"
          img-src="../statics/kdeneon_2.jpg"
        />
        <q-carousel-slide
          class="slide_item"
          name="3"
          img-src="../statics/kde_3.jpg"
        />
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
