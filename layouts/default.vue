<template>
  <div>
    <navbar />
    <b-container>
      <nuxt />
    </b-container>
    <pagefooter />
  </div>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 0.72rem;
}
</style>

<script>
import navbar from "../components/Navbar";
import pagefooter from "../components/PageFooter";
export default {
  components: {
    navbar,
    pagefooter
  }
};
</script>