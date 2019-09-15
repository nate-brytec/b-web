<template>
  <div class="mb-5">
    <b-navbar class="green-nav" toggleable="lg">
      <b-container>
        <b-navbar-brand class="logo" href="/">
          <!-- <img src="../static/img/Logo.png" alt="BRiTEN" width="150" /> -->
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="/">Home</b-nav-item>
            <b-nav-item-dropdown text="About">
              <b-dropdown-item href="/about/history">Our Story</b-dropdown-item>
              <b-dropdown-item href="/about/mission">Our Mission</b-dropdown-item>
              <b-dropdown-item href="/about/vision">Our Vision</b-dropdown-item>
              <b-dropdown-item href="/about/management">Our Management</b-dropdown-item>
              <b-dropdown-item href="/about/team">Our Team</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown text="Projects" right>
              <b-dropdown-item href="/projects/ihemi">IHEMI-LUDEWA</b-dropdown-item>
              <b-dropdown-item href="/projects/simvc">SUKA</b-dropdown-item>
              <b-dropdown-item href="/projects/simvc">SIM-VC</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item href="/partners">Partners</b-nav-item>
            <b-nav-item href="/media">Media</b-nav-item>
            <b-nav-item href="/contact">Contact Us</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "navbar",
  data(){
    return{
      nav : "nav-link"
    }
  }
};
</script>

<style scoped>
.green-nav {
  color: white;
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

/* Dropdown */
.nav-item .b-nav-dropdown .dropdown{
  color: red !important;
}
#__BVID__14__BV_button_ {
  color: red !important;
}

.nav-link .dropdown-toggle span {
  color: red;
}
</style>