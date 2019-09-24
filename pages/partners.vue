<template>
  <div>
    <b-row>
      <div>
        <b-row class="mb-5">
          <b-col sm="12" md="4" class="text-right">
            <b-img class="team" fluid src="../static/img/partners/amdt.jpg"></b-img>
          </b-col>
          <b-col sm="12" md="6">
            <h2 class="display-5 green">AMDT</h2>
            <hr />
            <h3 class="orange">Donor</h3>
            <p>The Agriculture Markets Development Trust (AMDT) has been established by the Governments of Denmark, Government of Ireland, Government of Sweden and the Government of Switzerland.The Trust has been established as a long term facility to address challenges experienced in past markets developing initiatives in Tanzania.</p>
          </b-col>
        </b-row>
      </div>

      <div>
        <b-row class="text-right">
          <b-col sm="12" md="7">
            <h2 class="display-5 green">AGRA</h2>
            <hr />
            <h3 class="orange">Donor</h3>
            <p>AGRA exists to fulfill the vision that Africa can feed itself and the world—transforming agriculture from a solitary struggle to survive to a business that thrives. News from our blog Seed producers schooled on hybrid maize seeds.</p>
          </b-col>
          <b-col sm="12" md="4" class="text-left">
            <b-img class="team" src="../static/img/partners/agra.png" fluid alt="Fluid image"></b-img>
          </b-col>
        </b-row>
      </div>

      <div class="text-center mt-5" style="padding: 3rem; background-color:#fafafa;">
        <b-row>
          <b-col cols="3">
            <b-img class="partner" fluid src="../static/img/partners/sagcot.png" alt="i-partner"></b-img>
          </b-col>
          <b-col cols="3">
            <b-img class="partner" fluid src="../static/img/partners/eagc.jpg" alt="i-partner"></b-img>
          </b-col>
          <b-col cols="3">
            <b-img class="partner" fluid src="../static/img/partners/agra.png" alt="i-partner"></b-img>
          </b-col>
          <b-col cols="3">
            <b-img class="partner" fluid src="../static/img/partners/amdt.jpg" alt="i-partner"></b-img>
          </b-col>
        </b-row>
      </div>
    </b-row>
  </div>
</template>

<script>
export default {};
</script>


<style>
.display-5 green {
  font-size: 2rem;
}

.green {
  color: #026939;
}

.orange {
  color: #f7941c;
}

.team {
  height: 30vh !important;
}

.partner {
  height: 10rem;
}
</style>