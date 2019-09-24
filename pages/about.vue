<template>
  <div>
    <jumbo />
    <b-row>
      <b-col cols="12" class="mt-5">
        <h2 class="green no-bold">Our History</h2>
        <hr />
        <p
          class="paragraph"
        >Building Rural Incomes Through Entrepreneurship is a non-profit organization that was set up in 2011 to help accelerate agriculture transformation in Tanzania through agricultural development initiatives that are designed to facilitate market access, enhance agribusiness competitiveness, increase productivity and improve access to inputs and finance for value chain actors.</p>
      </b-col>
      <b-col cols="12" class="mt-5">
        <h2 class="green no-bold">Our Mission</h2>
        <hr />
        <p
          class="paragraph"
        >Our mission and principle goal is to increase incomes and improve livelihoods mainly for smallholder farmers by ensuring their integration into value chains while creating efficiencies for all other market actors. We aim at providing the highest level of services to individuals and business.</p>
      </b-col>
      <b-col cols="12" class="mt-5">
        <h2 class="green no-bold">Our Values</h2>
        <hr />

        <p class="paragraph">
          <b style="color:#026939;">BRiTEN</b> is committed to retaining the trust and confidence of the farmers, value chain actors, donors, and funders by ensuring the following:
        </p>
        <br />
        <ol>
          <li>
            <b>Integrity:</b> We maintain credibility by making certain our actions always match our words.
          </li>

          <br />
          <li>
            <b>Accountability:</b> We accept personal responsibility to efficiently use organization resources, improve our systems, and help others improve their effectiveness.
          </li>

          <br />
          <li>
            <b>Service:</b> We treat our clients with dignity, respect, and courtesy; listen objectively to the needs of the client; and respond in a timely, efficient and responsible manner. We believe in service above self.
          </li>

          <br />
          <li>
            <b>Teamwork:</b> We multiply the creativity, talents, and contributions of each individual and business by focusing on team goals. Each of us succeeds individually when we achieve success as a team.
          </li>

          <br />
          <li>
            <b>Employees:</b> We recognize that the quality, motivation and performance of our employees are the key factors in achieving our successes.
          </li>
        </ol>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import jumbo from "../components/Jumbotron";
export default {
  components: {
    jumbo
  }
};
</script>

<style scoped>
.paragraph {
  /* font-size: 1.4rem; */
  line-height: 2;
}

li {
  /* font-size: 1.4rem; */
  line-height: 2;
}
.green{
  color: #026939;
  font-weight: bold;
}
.orange {
  color: #f7941c !important;
}
.no-bold {
 font-weight: normal;
}
</style>