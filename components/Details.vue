<template>
  <div>
    <div class="person mt-3" v-for="member in team" :key="member.id">
      <b-row>
        <b-col sm="12" md="3" class="text-right">
          <b-img rounded src="../static/img/placeholder.png" fluid alt="person"></b-img>
        </b-col>
        <b-col sm="12" md="9" class="mt-4">
          <h2 class="display-5 green">{{ member.name }}</h2>
          <h5 class="orange">{{ member.title }}</h5>
          <hr />
          <p class="lead">{{ member.description }}</p>
          <div v-for="item in team.social" :key="item.name">
            <p>{{item.name}}</p>
          </div>

          <div class="social-links">
            <b-link to="www.twitter.com">
              <b-img width="40" src="../static/icons/social/twitter.png" fluid alt="Instagram"></b-img>
            </b-link>
            <b-link to="www.twitter.com">
              <b-img width="40" src="../static/icons/social/linkedin.png" fluid alt="Instagram"></b-img>
            </b-link>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Details",
  data() {
    return {
      team: [
        {
          id: 1,
          name: "Josephine Miingi Kaiza",
          title: "CEO & Founder",
          description:
            "Josephine Miingi Kaiza is an experienced international consultant who has worked across Kenya, Tanzania, and Malawi for international organizations managing programs funded by USAID , AGRA, WFP, AFAP, and Comic Relief.",
          social: [
            { name: "twitter", show: true, link: `www.twitter.com/${name}` },
            {
              name: "instagram",
              show: true,
              link: `www.instagram.com/${name}`
            },
            { name: "facebook", show: true, link: `www.facebook.com/${name}` },
            { name: "linkedin", show: true, link: `www.linkedin.com/${name}` }
          ]
        },
        {
          id: 2,
          name: "Godfrey Bwana",
          title: "Head of Programs",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, earum alias delectus, reiciendis cumque harum possimus mollitia velit laborum praesentium id vitae officiis et minus vel nisi eum iure nihil maiores perferendis dolorem. Quaerat sequi aliquid suscipit asperiores quae expedita dolorem, eveniet ducimus rerum tenetur.",
          social: [
            { name: "twitter", show: true, link: `www.twitter.com/${name}` },
            {
              name: "instagram",
              show: true,
              link: `www.instagram.com/${name}`
            },
            { name: "facebook", show: true, link: `www.facebook.com/${name}` },
            { name: "linkedin", show: true, link: `www.linkedin.com/${name}` }
          ]
        },
        {
          id: 3,
          name: "Fauzia Ali Matano",
          title: "Project Manager",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, earum alias delectus, reiciendis cumque harum possimus mollitia velit laborum praesentium id vitae officiis et minus vel nisi eum iure nihil maiores perferendis dolorem. Quaerat sequi aliquid suscipit asperiores quae expedita dolorem, eveniet ducimus rerum tenetur.",
          social: [
            { name: "twitter", show: true, link: `www.twitter.com/${name}` },
            {
              name: "instagram",
              show: true,
              link: `www.instagram.com/${name}`
            },
            { name: "facebook", show: true, link: `www.facebook.com/${name}` },
            { name: "linkedin", show: true, link: `www.linkedin.com/${name}` }
          ]
        },
        {
          id: 4,
          name: "Caroline Frank",
          title: "Administration and Human Resource",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, earum alias delectus, reiciendis cumque harum possimus mollitia velit laborum praesentium id vitae officiis et minus vel nisi eum iure nihil maiores perferendis dolorem. Quaerat sequi aliquid suscipit asperiores quae expedita dolorem, eveniet ducimus rerum tenetur.",
          social: [
            { name: "twitter", show: true, link: `www.twitter.com/${name}` },
            {
              name: "instagram",
              show: true,
              link: `www.instagram.com/${name}`
            },
            { name: "facebook", show: true, link: `www.facebook.com/${name}` },
            { name: "linkedin", show: true, link: `www.linkedin.com/${name}` }
          ]
        },
        {
          id: 5,
          name: "Valentine Kimwaga",
          title: "Administration",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, earum alias delectus, reiciendis cumque harum possimus mollitia velit laborum praesentium id vitae officiis et minus vel nisi eum iure nihil maiores perferendis dolorem. Quaerat sequi aliquid suscipit asperiores quae expedita dolorem, eveniet ducimus rerum tenetur.",
          social: [
            { name: "twitter", show: true, link: `www.twitter.com/${name}` },
            {
              name: "instagram",
              show: true,
              link: `www.instagram.com/${name}`
            },
            { name: "facebook", show: true, link: `www.facebook.com/${name}` },
            { name: "linkedin", show: true, link: `www.linkedin.com/${name}` }
          ]
        },
        {
          id: 6,
          name: "Jackline Massam",
          title: "Finance Manager",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, earum alias delectus, reiciendis cumque harum possimus mollitia velit laborum praesentium id vitae officiis et minus vel nisi eum iure nihil maiores perferendis dolorem. Quaerat sequi aliquid suscipit asperiores quae expedita dolorem, eveniet ducimus rerum tenetur.",
          social: [
            { name: "twitter", show: true, link: `www.twitter.com/${name}` },
            {
              name: "instagram",
              show: true,
              link: `www.instagram.com/${name}`
            },
            { name: "facebook", show: true, link: `www.facebook.com/${name}` },
            { name: "linkedin", show: true, link: `www.linkedin.com/${name}` }
          ]
        },
        {
          id: 7,
          name: "Michael Matta",
          title: "Accountant",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, earum alias delectus, reiciendis cumque harum possimus mollitia velit laborum praesentium id vitae officiis et minus vel nisi eum iure nihil maiores perferendis dolorem. Quaerat sequi aliquid suscipit asperiores quae expedita dolorem, eveniet ducimus rerum tenetur."
        },
        {
          id: 8,
          name: "Job Chimwaga",
          title: "Results and Knowledge Management",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, earum alias delectus, reiciendis cumque harum possimus mollitia velit laborum praesentium id vitae officiis et minus vel nisi eum iure nihil maiores perferendis dolorem. Quaerat sequi aliquid suscipit asperiores quae expedita dolorem, eveniet ducimus rerum tenetur."
        },
        {
          id: 9,
          name: "Nathaniel Senje",
          title: "IT & Software Developer",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, earum alias delectus, reiciendis cumque harum possimus mollitia velit laborum praesentium id vitae officiis et minus vel nisi eum iure nihil maiores perferendis dolorem. Quaerat sequi aliquid suscipit asperiores quae expedita dolorem, eveniet ducimus rerum tenetur."
        }
      ]
    };
  }
};
</script>

<style>
.person {
  padding: 1.8rem;
  border-radius: 0.8rem;
  box-shadow: 0px 2px 2px #dadada;
}

.person:hover {
  box-shadow: 1px 1px 8px #cacaca;
}
</style>