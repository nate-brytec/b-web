<template>
  <div>
    <b-row>
      <b-col cols="12" class="pb-5">
        <p class="display-4 green text-center">Our Management</p>
      </b-col>
    </b-row>
    <b-row>
      <div class="mt-3">
        <b-card img-src="../static/img/placeholder.png" img-alt="Card image" img-left>
          <b-card-text>
            <h2 class="display-5 green">Josephine Miingi Kaiza</h2>
            <h5 class="orange">CEO & Founder</h5>
            <hr />
            <p>Josephine Miingi Kaiza is an experienced international consultant who has worked across Kenya, Tanzania, and Malawi for international organizations managing programs funded by USAID , AGRA, WFP, AFAP, and Comic Relief.</p>
            <div class="social-links">
              <b-link to="www.twitter.com">
                <b-img width="30" src="../static/icons/social/twitter.png" fluid alt="Instagram"></b-img>
              </b-link>
              <b-link to="www.twitter.com">
                <b-img width="30" src="../static/icons/social/linkedin.png" fluid alt="Instagram"></b-img>
              </b-link>
            </div>
          </b-card-text>
        </b-card>
      </div>

      <div class="mt-3">
        <b-card img-src="../static/img/placeholder.png" img-alt="Card image" img-right class="mt-3">
          <b-card-text class="text-right">
            <h2 class="display-5 green">Godfrey Bwana</h2>
            <h5 class="orange">Head of Programs</h5>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident obcaecati fuga cumque amet. Sint eos eveniet velit, nihil sunt hic. Maiores, error porro.</p>
            <div class="social-links">
              <b-link href="www.twitter.com">
                <b-img width="30" src="../static/icons/social/twitter.png" fluid alt="Twitter"></b-img>
              </b-link>
              <b-link href="www.twitter.com">
                <b-img width="30" src="../static/icons/social/linkedin.png" fluid alt="LinkedIN"></b-img>
              </b-link>
              <b-link href="www.twitter.com">
                <b-img width="30" src="../static/icons/social/instagram.png" fluid alt="Instagram"></b-img>
              </b-link>
            </div>
          </b-card-text>
        </b-card>
      </div>

      <div>
        <b-card img-src="../static/img/placeholder.png" img-alt="Card image" img-left class="mt-3">
          <b-card-text>
            <h2 class="display-5 green">Fauzia Matano</h2>
            <h5 class="orange">Programs Manager</h5>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident obcaecati fuga cumque amet. Sint eos eveniet velit, nihil sunt hic. Maiores, error porro.</p>
            <div class="social-links">
              <b-link to="www.twitter.com">
                <b-img width="30" src="../static/icons/social/facebook.png" fluid alt="Instagram"></b-img>
                <b-img width="30" src="../static/icons/social/instagram.png" fluid alt="Instagram"></b-img>
                <b-img width="30" src="../static/icons/social/twitter.png" fluid alt="Instagram"></b-img>
                <b-img width="30" src="../static/icons/social/linkedin.png" fluid alt="Instagram"></b-img>
              </b-link>
            </div>
          </b-card-text>
        </b-card>
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

.card-img-left {
  height: 30vh !important;
}
.card-img-right {
  height: 30vh !important;
}
</style>