import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        "bg-dark": "#090412",
        primary: "#6546ED",
        secondary: "#7A5BFF",
        accent: "#957CFF",
        light: "#C0B1FF",
        dark: "#090412",
        dark2: "#0F0A22",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
      },
    },
  },
});
