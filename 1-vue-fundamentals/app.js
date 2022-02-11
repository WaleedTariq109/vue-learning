const vm = Vue.createApp({
  data() {
    return {
      firstName: "Waleed",
      lastName: "Tariq",
      styleName: {
        color: "red",
      },

      url: "https://www.google.com",
    };
  },
}).mount("#app");
