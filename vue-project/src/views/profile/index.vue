<template>
  <div>
    <v-container>
      <v-layout row wrap>
        <!-- <v-col sm="4" md="4" xl="3" color="red">Hello</v-col> -->
        <v-col offset-sm="2" sm="8" offset-xl="3" xl="6" xs="12">
          <div class="text-center" style="position: relative">
            <v-btn
              class="mx-2  chatBtn"
              router
              to="/profile/edit"
              fab
              dark
              color="cyan"
            >
              <v-icon dark>
                mdi-pencil
              </v-icon>
            </v-btn>
            <div class="profile-pic mb-4">
              <img
                class="profile-pic round"
                src="@/assets/images/profile-pic.jpg"
              />
            </div>
            <h2 class="headline mainColor--text font-weight-bold">
              Alaa Abdallah
            </h2>
            <p class="overline mt-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem,
              minus libero fugiat earum quae, rerum quam debitis repellendus
              tempora voluptatem ea quod deleniti omnis! Facere tempora officiis
              veritatis commodi minima?
            </p>
          </div>
        </v-col>
      </v-layout>

      <v-layout row wrap>
        <v-col offset-xl="3" xl="4" md="5" offset-sm="1" sm="10" xs="12">
          <p
            class="overline contact"
            v-for="(info, index) in information"
            :key="index"
          >
            <v-icon color="mainColor" class="pr-2">{{ info.icon }}</v-icon>
            <span>{{ info.text }}</span>
          </p>
        </v-col>
        <v-col
          class=""
          offset-md="0"
          offset-sm="1"
          md="5"
          sm="10"
          xs="12"
          xl="4"
        >
          <div class="text-center skills">
            <h2 class="title mainColor--text">Skills</h2>
            <v-chip outlined class="ma-2 mainColor" v-for="n in 5" :key="n"
              >PHP</v-chip
            >
          </div>
        </v-col>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      information: [
        {
          icon: "mdi-email-check-outline",
          text: "Alaa.Abdallah.A97@Gmail.Com"
        },
        {
          icon: "mdi-folder-open",
          text: "Full-Stack Web Developer"
        },
        {
          icon: "mdi-cellphone-android",
          text: "+2 0111 4134 482"
        },
        {
          icon: "mdi-location-enter",
          text: "Egypt"
        },
        {
          icon: "mdi-gender-female",
          text: "Male"
        }
      ]
    };
  }
};
</script>
<style scoped>
.profile-pic img {
  width: 150px;
  height: 150px;
  /* position: relative; */

  border: 0.5px solid #eee;
  border-radius: 50%;
}
@media screen and (max-width: 500px) {
  .contact {
    text-align: center;
  }
}
.chatBtn {
  position: absolute;
  right: 0;
  /* top: -54%; */
}
</style>
*/
