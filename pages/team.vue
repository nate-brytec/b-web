<template>
  <div>
    <b-row>
      <b-col cols="12" class="pb-5">
        <p class="display-4 green text-center no-bold">Our Management</p>
        <hr />
      </b-col>
    </b-row>
    <b-row>
      <Details />
    </b-row>
  </div>
</template>

<script>
import Details from "../components/Details";
export default {
  name: "Team",
  components: {
    Details
  }
};
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

.card-img-left {
  height: 30vh !important;
}
.card-img-right {
  height: 30vh !important;
}
</style>