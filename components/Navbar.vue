<template>
  <div class="mb-5">
    <b-navbar class="green-nav" toggleable="lg">
      <b-container>
        <b-navbar-brand class="logo" href="/"></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="/">Home</b-nav-item>
            <b-nav-item href="/about">About</b-nav-item>
            <b-nav-item href="/team">Our Team</b-nav-item>
            <b-nav-item href="/projects">Our Projects</b-nav-item>
            <b-nav-item href="/partners">Our partners</b-nav-item>
            <!-- <b-nav-item href="/media">Media Gallery</b-nav-item> -->
            <b-nav-item href="/contact">Contact us</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      nav: "nav-link"
    };
  }
};
</script>

<style scoped>
.green-nav {
  background-color: #026939;
  padding: 0 !important;
}

.navbar-light .navbar-nav .nav-link {
  color: white;
  text-transform: uppercase;
  font-weight: bold;
}

.navbar-nav .nav-item {
  padding: 0.6rem;
  margin-top: 0;
  margin-bottom: 0;
}

.navbar-nav .nav-item:hover {
  background-color: #07ca6f59;
}

.navbar-expand-lg .navbar-collapse {
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
}

.logo {
  width: 11rem;
  height: 5rem;
  background-color: #f7941c;
  background-image: url("../static/img/Logo.png");
  background-size: 85%;
  background-position: center;
  background-repeat: no-repeat;
}
</style>