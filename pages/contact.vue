<template>
  <div>
    <b-row class="mb-5">
      <b-col sm="12" md="6" lg="4">
        <h3 class="green">Now you can reach us!</h3>
        <hr />
        <b-row class="mt-3">
          <b-col cols="2">
            <b-img width="30" src="../static/icons/g_location.png" fluid alt="location"></b-img>
          </b-col>
          <b-col cols="10">457 Mikocheni Street, Mikocheni B</b-col>
        </b-row>
        <b-row class="mt-3">
          <b-col cols="2">
            <b-img width="30" src="../static/icons/g_call.png" fluid alt="call"></b-img>
          </b-col>
          <b-col cols="10">+255 22 2780 504</b-col>
        </b-row>
        <b-row class="mt-3">
          <b-col cols="2">
            <b-img width="30" src="../static/icons/g_email.png" fluid alt="email"></b-img>
          </b-col>
          <b-col cols="10">info@britentz.org</b-col>
        </b-row>
        <h3 class="green mt-4">Or follow us on social media</h3>
        <hr />
        <b-row class="mt-3">
          <b-col cols="2">
            <b-img width="30" src="../static/icons/social/linkedin.png" fluid alt="linkedin"></b-img>
          </b-col>
          <b-col cols="10">LinkedIn</b-col>
        </b-row>
        <b-row class="mt-3">
          <b-col cols="2">
            <b-img width="30" src="../static/icons/social/instagram.png" fluid alt="Instagram"></b-img>
          </b-col>
          <b-col cols="10">Instagram</b-col>
        </b-row>
        <b-row class="mt-3">
          <b-col cols="2">
            <b-img width="30" src="../static/icons/social/youtube.png" fluid alt="YouTube"></b-img>
          </b-col>
          <b-col cols="10">YouTube</b-col>
        </b-row>
      </b-col>
      <b-col sm="12" lg="8" class="mt-5">
        <div>
          <b-embed
            type="iframe"
            aspect="16by9"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1655.91757014213!2d39.23776055940417!3d-6.756815341330629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4dda0c4d8caf%3A0xfd3ca3b164f36209!2sBRITEN!5e0!3m2!1sen!2stz!4v1569306066173!5m2!1sen!2stz"
            allowfullscreen
          ></b-embed>
        </div>
      </b-col>
    </b-row>
    <b-row class="form-div">
      <b-col sm="12" md="6" offset-md="3">
        <h4 v-if="show" class="green text-center">Or you can write to us and we will get back to you</h4>
        <h4 v-else class="green text-center">We appreciate you writing to us!</h4>
        <hr />
      </b-col>
      <b-col sm="12" md="6" offset-md="3">
        <div>
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group id="input-group-2" label-for="input-2">
              <b-form-input id="input-2" v-model="form.name" required placeholder="Your name"></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-1"
              label-for="input-1"
              description="We will not share your email with anyone else."
            >
              <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                required
                placeholder="Your email"
              ></b-form-input>
            </b-form-group>

            <b-form-textarea
              id="textarea"
              v-model="form.message"
              placeholder="Write your message here..."
              rows="6"
              max-rows="10"
              class="mb-2"
            ></b-form-textarea>

            <b-button type="submit" variant="info">Submit</b-button>
            <b-button type="reset" variant="warning">Reset</b-button>
          </b-form>
          <div v-show="this.show != true">
            <b-alert variant="success" show>Your message was received!</b-alert>

            <b-card class="mb-2">
              <b-card-text>
                <p class="lead">{{this.form.message}}</p>
                <p class="small user-details">
                  {{this.form.name}} -
                  <em>{{this.form.email}}</em>
                </p>
              </b-card-text>
            </b-card>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        message: ""
      },
      // Concatnate to get details
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.show = !this.show;
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.message = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>

<style scoped>
.green {
  color: #026939;
}

.user-details {
  font-weight: bold;
}

.form-div {
  background-color: #b6b6b641;
  padding: 3rem;
  border-radius: 0.6rem;
}
</style>