<template>
  <div>
    <b-container>
      <!-- First Section of the site -->
      <b-row no-gutters class="mb-2">
        <b-col sm="12" md="4">
          <div class="square_logo">
            <div>
              <!-- <b-img src="../static/img/happy farmer.jpg" fluid alt="Responsive image"></b-img> -->
            </div>
          </div>
        </b-col>
        <b-col sm="12" md="8">
          <carousel />
        </b-col>
      </b-row>

      <!-- About Section -->

      <!-- Second column -->
      <b-row>
        <!-- First Column -->
        <b-col sm="12" md="6">
          <b-list-group flush>
            <b-list-group-item class="list-heading text-center">
              <h3 class="white">
                <span class="orange uppercase">Who</span> We Are
              </h3>
            </b-list-group-item>
            <b-list-group-item class="flex-column align-items-start">
              <div class="d-flex w-100 justify-content-between">
                <p
                  class="lead bold wide-spacing"
                >We are a non-proift organization that was set up in 2011 to help accelerate agriculture transformation in Tanzania through agricultural development initiatives that are designed to facilitate market access, enhance agribusiness competitiveness, increase productivity and improve access to inputs and finance for value chain actors.</p>
              </div>
            </b-list-group-item>
          </b-list-group>
        </b-col>

        <!-- Second column -->
        <b-col sm="12" md="6">
          <b-list-group flush>
            <b-list-group-item class="list-heading text-center">
              <h3 class="white">
                <span class="orange uppercase">What</span> We Do
              </h3>
            </b-list-group-item>
            <b-list-group-item to="#">
              <b-row>
                <b-col cols="2">
                  <b-img class="icon" src="../static/icons/growth.png" fluid alt="icon"></b-img>
                </b-col>
                <b-col cols="10">
                  <p class="lead">
                    <span class="green">Business Development</span>
                  </p>
                </b-col>
              </b-row>
            </b-list-group-item>
            <b-list-group-item>
              <b-row>
                <b-col cols="2">
                  <b-img class="icon" src="../static/icons/plant.png" fluid alt="icon"></b-img>
                </b-col>
                <b-col cols="10">
                  <p class="lead">
                    <span class="green">Study Projects</span>
                  </p>
                </b-col>
              </b-row>
            </b-list-group-item>
            <b-list-group-item>
              <b-row>
                <b-col cols="2">
                  <b-img class="icon" src="../static/icons/tractor.png" fluid alt="icon"></b-img>
                </b-col>
                <b-col cols="10">
                  <p class="lead">
                    <span class="green">Service Provision</span>
                  </p>
                </b-col>
              </b-row>
            </b-list-group-item>
            <b-list-group-item>
              <b-row>
                <b-col cols="2">
                  <b-img class="icon" src="../static/icons/handshake.png" fluid alt="icon"></b-img>
                </b-col>
                <b-col cols="10">
                  <p class="lead">
                    <span class="green">Market Facilitation</span>
                  </p>
                </b-col>
              </b-row>
            </b-list-group-item>
          </b-list-group>
        </b-col>
      </b-row>

      <!-- Testimonial Section -->
      <b-row>
        <testimonial />
      </b-row>
    </b-container>
  </div>
</template>

<script>
import carousel from "../components/Carousel.vue";
import testimonial from "../components/Testimonial.vue";
export default {
  head() {
    return {
      title: "BRITEN - Home"
    };
  },
  components: {
    carousel,
    testimonial
  }
};
</script>

<style scoped>
.square_logo {
  height: 100%;
  background-image: url("../static/img/happy.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #f7941c;
}

.shadow {
  text-shadow: 1px 1px 2px #222;
}

.white {
  color: #fafafa;
}
.green {
  color: #026939;
  font-weight: bold;
}
.orange {
  color: #f7941c !important;
}

.list-heading {
  background-color: #026939;
  padding: 1rem;
  text-transform: capitalize;
}

.icon-title {
  font-weight: bold;
  font-size: 1rem;
}

.icon {
  height: 2rem;
}

.bold {
  font-weight: 500;
}

.wide-spacing {
  line-height: 2;
}

.lg-text {
  font-size: 2.4rem;
}

.uppercase {
  text-transform: uppercase;
}
</style>