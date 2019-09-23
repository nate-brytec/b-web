<template>
  <div style=" width: 100%">
    <h3 class="text-center mt-2" style="color: #323232;">What Our Customers Say</h3>
    <hr />
    <b-carousel
      id="carousel-1"
      :interval="3000"
      background="#ababab"
      controls
      img-width="1024"
      img-height="480"
      style="text-shadow: -1px 1px 2px #444"
      fade
    >
      <b-carousel-slide class="slide"
        caption="Elias - Farmer"
        text="'My motivation to start Agro dealer business started after the training I went through. I had to take my time after the training and ask the trainer how I was going to achieve this goal and for sure he connected me with the right people'"
        img-src="../static/img/footer.png"
      ></b-carousel-slide>

      <b-carousel-slide class="slide"
        caption="Daimundi Kilatu - Farmer"
        text="'It was my first time to sell and get that much amount of money. Like other farmers, I will never again sell my maize to middle salesmen, instead I will be selling collectively and by weight instead of volume.'"
        img-src="../static/img/footer.png"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "testimonial",
};
</script>

<style scoped>
.slide {
  max-height: 15rem;
}

.user-icon {
  border: 0px solid #111;
  border-radius: 100%;
}
</style>