import { defineStore } from "pinia";

export const useTaskStore = defineStore("task-store", {
  state: () => ({
    name: "Pinia Tasks",
    tasks: [
      { id: 1, title: "Buy Some Milk", isFav: false },
      { id: 2, title: "Play Guitar", isFav: true },
    ],
  }),
  getters: {
    isFav: (state) => {
      return state.tasks.filter((t) => t.isFav);
    },
    favCount: (state) => {
      return state.tasks.reduce((p, c) => {
        return c.isFav ? p + 1 : p;
      }, 0);
    },
    totalCount: (state) => {
      return state.tasks.length;
    },
  },
  actions: {},
});
