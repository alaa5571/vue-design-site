<template>
  <v-app>
    <nav>
      <Navbar />
    </nav>
    <ChangeColor />
    <v-main class="my-4 mx-2">
      <transition name="slide-fade" mode="out-in">
        <router-view />
      </transition>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ChangeColor from "./components/ChangeColor";

export default {
  name: "App",

  components: {
    Navbar,
    Footer,
    ChangeColor
  },
  created() {
    var token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImFlYTc1OGFiODEzMTlmM2VjNjQyYmJhYjZmNDA0MWNhMjViZjgwMGUwNjQwNjY1NTRjODM1MDk5ZDdmNzFmZGZhNmVlZTYzY2Q4M2M2MzQ1In0.eyJhdWQiOiIyIiwianRpIjoiYWVhNzU4YWI4MTMxOWYzZWM2NDJiYmFiNmY0MDQxY2EyNWJmODAwZTA2NDA2NjU1NGM4MzUwOTlkN2Y3MWZkZmE2ZWVlNjNjZDgzYzYzNDUiLCJpYXQiOjE2MTU2MzUwMDcsIm5iZiI6MTYxNTYzNTAwNywiZXhwIjoxNjQ3MTcxMDA3LCJzdWIiOiI5OCIsInNjb3BlcyI6W119.glcaqeYCNoiS7fnPPjwA9JWCDsoLLOlV52l9sc7g66ddJVEXzaFqu15hYtbvBHfqpHlJICbOPKZe0wYs1RTeph414Wj180rbF95xZyEKG7iMJJhQsbW6aNWtFUh56sB2IcxmwtGwlR7jYdE4Gr6z9256MdF9x7O6AITAOfjny8WhMFQPT2sFYYn8kbokg4MnjCtlFPmLUOGC1gp_eTTVn2WPGnuhyR08J1Jk2UhzM-5lYZGzwg_cNo2VVUeGCEq5Om9QZ5hSx3ZTmzh0NxTel_IAj2voe9nePGJojF7knClgbcVLEKJcaYnk6l1qw5aZ-rO5_DKwr-GXRh9CMNyNrdKFVVjcENfSOpFR_fH_udB1DksMFhg4-fiX7LRUWCgdEya2cCKVfK_21xmJxHuJ-yWG696D57IoPCAHOyX0SGxdlpfrnzcBSo_IDl_6qPfCqzWrUrJy6KJSeu_2hmXlwbe607V1rCeZyUQDY8NrItoZbfiap3BNsIIWOOvRrzOhwiBavjlhDASq0ybM62xsimFv61E6euPB7VJY2Rw3WBwXdhSxhB2ezmTP6e_u9HdU_-IuDmIENkYtiqCwkBaMzX3g9Zp7N96qmInXO7H9CE37T2po7UxMx39dQma58JdabWnJt8ziVwvzkaoGJqakh25vxBXgePIVNLSO_q15bdc`;
    this.axios.defaults.headers.common["Accept"] = "application/json";
    this.axios.defaults.headers.common["Authorization"] = "Bearer " + token;

    window.Echo.channel(`test`).listen("test", e => {
      console.log("Hello from socket" + e);
    });
    // this.axios
    //   .get("http://127.0.0.1:8000/api/userData")
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => console.log(err));
  }
};
</script>

<style>
@import "./assets/css/main.css";

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.8s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
