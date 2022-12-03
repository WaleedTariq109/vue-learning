<template>
  <main>
    <header>
      <img src="@/assets/pinia-logo.svg" alt="pinia-logo" />
      <h1>{{ taskStore.name }}</h1>
    </header>

    <div class="filter">
      <button @click="filter = 'all'">All Tasks</button>
      <button @click="filter = 'favs'">Favorite Tasks</button>
    </div>

    <div class="task-list" v-if="filter === 'all'">
      <p>You have {{ taskStore.totalCount }} tasks to do</p>
      <div v-for="task in taskStore.tasks" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>

    <div class="task-list" v-if="filter === 'favs'">
      <p>You have {{ taskStore.favCount }} favs to do</p>
      <div v-for="task in taskStore.isFav" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>
  </main>
</template>

<script>
import { ref } from "vue";
import { useTaskStore } from "@/stores/TasksStore";
import TaskDetails from "@/components/TaskDetails.vue";

export default {
  components: { TaskDetails },
  setup() {
    const taskStore = useTaskStore();
    const filter = ref("all");

    return {
      taskStore,
      filter,
    };
  },
};
</script>
