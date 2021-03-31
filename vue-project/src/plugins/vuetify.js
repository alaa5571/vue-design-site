import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: "#999",
        success: "#858",
        secondary: "#158",
        accent: "#000",
        error: "#415",
        mainColor: localStorage.mainColor ? localStorage.mainColor : "#edc307"
      },
      dark: {
        primary: "#999",
        success: "#858",
        secondary: "#158",
        accent: "#000",
        error: "#415",
        mainColor: localStorage.mainColor ? localStorage.mainColor : "#edc307"
      }
    }
  }
});
