<template>
    <div>
        <VueSchedule v-model="schedule" />
    </div>
</template>

<script>
import 'vue-daily-scheduler/dist/vue-schedule.min.css'
import VueSchedule from 'vue-daily-scheduler'

export default {
  name: "",
  composnents: {
    VueSchedule,
  },
  data() {
    return {
      schedule: {
        0: [],
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
      },
    };
  },
};
</script>

<style>
</style>