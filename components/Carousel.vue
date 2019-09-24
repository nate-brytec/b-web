<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      label-indicators
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <div>
        <b-carousel-slide img-src="../static/slider/third.png">
          <h1 class="carousel-titile">BRITEN</h1>
          <h3 class="carousel-text">Building Rural Incomes Through Entrepreneurship</h3>
        </b-carousel-slide>
      </div>
      <div>
        <b-carousel-slide img-src="../static/slider/fifth.png">
          <h3 class="carousel-text">enhance farmer's agribusiness competitiveness</h3>
        </b-carousel-slide>
      </div>
      <div>
        <b-carousel-slide img-src="../static/slider/third.png">
          <h3 class="carousel-text">Improve access to inputs and finance for value chain actors</h3>
        </b-carousel-slide>
      </div>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>

<style >
.carousel-logo {
  padding: 1rem;
  background-color: #f7941c;
  height: 7rem;
}
.carousel-title {
  font-weight: 700;
  font-size: 6rem;
  text-shadow: -3px 3px 8px #232323;
}

.carousel-text {
  font-size: 2rem;
  font-weight: normal;
  text-transform: capitalize;
}
</style>