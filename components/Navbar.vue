<template>
  <div class="mb-5">
    <b-navbar class="green-nav" toggleable="lg">
      <!-- <b-container> -->
      <b-navbar-brand href="/">
        <img src="../static/img/Logo.png" alt="BRiTEN" width="150" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/">Home</b-nav-item>
          <b-nav-item-dropdown text="About" right>
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

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit" variant="warning">Search</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
      <!-- </b-container> -->
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "navbar"
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

.dropdown-item {
  display: block;
  width: 100%;
  padding: 0.25rem 1.5rem;
  clear: both;
  font-weight: 400;
  color: white;
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
}

.navbar-nav .nav-item {
  padding: 0.6rem;
  margin-top: 0;
  margin-bottom: 0;
}

.navbar-nav .nav-item:hover {
  background-color: #01ce6e5e;
}

.navbar-expand-lg .navbar-collapse {
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
}
</style>