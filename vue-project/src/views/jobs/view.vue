<template>
  <v-container>
    <v-layout row wrap>
      <v-col md="9" sm="9" xs="12" class="md-9 sm-9 xs-12" order="5">
        <v-card class="pa-3">
          <div class="head">
            <div class="jobName">
              <v-btn
                small
                class="float-right  white--text"
                color="mainColor"
                outlined
                >Apply Now</v-btn
              >
              <h1 class="headline  mainColor--text">Web Developer</h1>
              <p class="caption">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div class="datails">
            <v-row>
              <v-col class="text-center" sm="4" v-for="n in 9" :key="n">
                <h3 class="caption font-weight-bold">
                  <v-icon small class="mr-2">mdi-information-outline</v-icon>
                  <span>Eduacation</span>
                </h3>
                <p class="caption">Becolar Of Bussinss</p>
              </v-col>
            </v-row>
          </div>
          <div class="jobDesc">
            <h1 class="headline  mainColor--text">Job Description</h1>
            <p class="caption">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic porro
              blanditiis repellendus odio sapiente nihil expedita totam
              repellat. Tenetur similique sunt nesciunt dolor repellat eos velit
              odio officiis illo voluptatum! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Hic porro blanditiis repellendus
              odio sapiente nihil expedita totam repellat. Tenetur similique
              sunt nesciunt dolor repellat eos velit odio officiis illo
              voluptatum!Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Hic porro blanditiis repellendus odio sapiente nihil
              expedita totam repellat. Tenetur similique sunt nesciunt dolor
              repellat eos velit odio officiis illo voluptatum!Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Hic porro blanditiis
              repellendus odio sapiente nihil expedita totam repellat. Tenetur
              similique sunt nesciunt dolor repellat eos velit odio officiis
              illo voluptatum! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Hic porro blanditiis repellendus odio sapiente
              nihil expedita totam repellat. Tenetur similique sunt nesciunt
              dolor repellat eos velit odio officiis illo voluptatum!Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Hic porro blanditiis
              repellendus odio sapiente nihil expedita totam repellat. Tenetur
              similique sunt nesciunt dolor repellat eos velit odio officiis
              illo voluptatum!Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Hic porro blanditiis repellendus odio sapiente nihil
              expedita totam repellat. Tenetur similique sunt nesciunt dolor
              repellat eos velit odio officiis illo voluptatum!Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Hic porro blanditiis
              repellendus odio sapiente nihil expedita totam repellat. Tenetur
              similique sunt nesciunt dolor repellat eos velit odio officiis
              illo voluptatum!
            </p>
          </div>
          <div class="skills mb-4">
            <h1 class="headline mb-2  mainColor--text">Skills</h1>
            <v-chip
              color="mainColor"
              outlined
              class="ma-1"
              v-for="n in 30"
              :key="n"
            >
              <span :class="$vuetify.theme.dark ? 'white--text' : 'black--text'"
                >Skill</span
              >
            </v-chip>
          </div>
        </v-card>
        <v-card class="mt-4 pa-4">
          <div class="smilarJobs">
            <h1 class="headline mb-2 mainColor--text">Smilar Jobs</h1>
            <v-chip
              color="mainColor"
              outlined
              class="ma-1"
              v-for="n in 30"
              :key="n"
            >
              <span :class="$vuetify.theme.dark ? 'white--text' : 'black--text'"
                >Smilar Job</span
              >
            </v-chip>
          </div>
        </v-card>
      </v-col>
      <v-col md="3" sm="3" xs="12" order="1">
        <v-card class="pa-3 pb-7 postedBy">
          <div class="name">
            <span>Job Posted By : </span>
            <span class="font-weight-bold mainColor--text">John Doe</span>
          </div>
          <div class="userInfo mt-3">
            <v-img class="mt-2" src="@/assets/images/profile-pic.jpg"></v-img>
            <div class="job">
              <span class="caption mainColor--text">Web Devloper</span><br />
              <span class="caption"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Beatae,
              </span>
            </div>
            <div class="buttons mt-10">
              <v-btn small color="mainColor" outlined>Follow</v-btn>
              <v-btn small class="float-right" outlined>Bookmark</v-btn>
            </div>
          </div>
        </v-card>
        <v-card class="mt-10 pa-4 companyInfo">
          <h3 class="headline ml-4  mainColor--text">About Company</h3>
          <v-img
            class="ma-4"
            aspect-ratio="1.7"
            src="@/assets/images/cover.jpg"
          ></v-img>
          <p class="caption ml-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            tempore, tenetur error illum, ducimus quibusdam vel voluptas soluta
            laboriosam voluptatibus, laborum ipsam facilis corporis molestiae
            unde non autem quae. Ea!
          </p>
        </v-card>
      </v-col>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      //
    };
  }
};
</script>

<style scoped>
.userInfo .v-image {
  height: 70px;
  width: 70px;
  display: inline-block;
}

.userInfo .job {
  float: right;
  width: calc(100% - 80px);
}

.headline {
  font-weight: bold;
}
/* .companyInfo .v-image {
  width: 200px;
  height: 200px;
  margin: auto;
} */
</style>
