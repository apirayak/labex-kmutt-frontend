<template>
  <div class="lab-time">
      <daily-schedule></daily-schedule>
  </div>
</template>

<script>
import DailySchedule from "../components/DailySchedule.vue"

export default {
  name: "lab-time",
  components: {
      DailySchedule
  },
  data() {
    return {
      timeSlotTitles: [
        "08.30-09.30 น.",
        "09.30-10.30 น.",
        "10.30-11.30 น.",
        "11.30-12.30 น.",
        "12.30-13.30 น.",
        "13.30-14.30 น.",
        "14.30-15.30 น.",
        "15.30-16.30 น.",
        "16.30-17.30 น.",
      ],
      dateTitles: ["Mon", "Tue", "Wed", "Thus", "Fri", "Sat", "Sun"],
    };
  },
  methods: {},
};
</script>

<style>
</style>