import { defineStore } from "pinia";

export const useTaskStore = defineStore("task-store", {
  state: () => ({
    name: "Pinia Tasks",
    tasks: [
      { id: 1, title: "Buy Some Milk", isFav: false },
      { id: 2, title: "Play Guitar", isFav: true },
    ],
  }),
});
