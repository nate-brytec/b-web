<template>
  <div>
    <div>
      <b-row class="project">
        <b-col sm="12" md="4" class="text-right">
          <b-img src="../static/img/maize.jpg" fluid class="project-img pr-3"></b-img>
        </b-col>
        <b-col sm="12" md="8" class="mt-2">
          <h2 class="green no-bold">IHEMI-LUDEWA</h2>
          <h3 class="orange no-bold sub">PiATA-TIJA Tanzania</h3>
          <hr />
          <p>The aim of this project is to support and promote smallholder agriculture transformation from subsistence to commercialized modern farming and agri-business for economic growth and poverty reductionwill support and promote smallholder agriculture transformation from subsistence to commercialized modern farming and agri-business for economic growth and poverty reduction.</p>
          <b-button pill variant="info">Read more...</b-button>
        </b-col>
      </b-row>
    </div>
    <div class="mt-5">
      <b-row class="project">
        <b-col sm="12" md="4" class="text-right">
          <b-img src="../static/img/beans.jpeg" fluid class="project-img pr-3"></b-img>
        </b-col>
        <b-col sm="12" md="8" class="mt-2">
          <h2 class="green no-bold">SUKA</h2>
          <h3 class="orange no-bold sub">PiATA-TIJA Tanzania</h3>
          <hr />
          <p>
            Increase Staple Crop Productivity for Smallholder Farmers, Strengthen and expand access to output markets, increase capacity of small holder farming households and agricultural systems to better prepare for and adapt to shocks and stresses and Strengthen capacity for farmer organizations and other focus agricultural value chain actor.
          </p>
          <b-button pill variant="info">Read more...</b-button>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.project {
  border-radius: 1rem;
  box-shadow: 2px 2px 8px #dadada;
}

.sub {
  font-size: 1.3rem;
}

.project-img {
  height: 17rem;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
}
</style>