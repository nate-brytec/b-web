<template>
  <div>
    <!-- Jumbotron -->
    <b-breadcrumb :items="items"></b-breadcrumb>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "About",
          href: "/about_"
        },
        {
          text: "Mission",
          href: "/about_/mission"
        },
        {
          text: "Library",
          active: true
        }
      ]
    };
  }
};
</script>

<style>
</style>