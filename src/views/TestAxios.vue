<template>
  <div>
    <input type="text" class="input" v-model="name" />
    <input type="text" class="input" v-model="email"/>
    <input type="text" class="input" v-model="password" />
    <button v-on:click="changeCommander()">change commander</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      controller_id: "1",
      controller_name: "",
      command: '',

      name: 'test',
      email: 'test@gmil.com',
      password: 'test',
      DOB: '1998-07-09',
      school: 'test',
      surname: 'test',

    };
  },
  methods: {
    async changeCommander() {
      const formData = {
        name: 'test',
        email: 'test@gmil.com',
        password: 'test',
        DOB: '1998-07-09',
        school: 'test',
        surname: 'test',
      };
      const fromDataControl = {
        controller_id: "1",
        controller_name: "Yong",
        command: 'Test command',        
      }

      console.log(formData);
      await axios
        .post(`robot/change_command/`, fromDataControl)
        .then((res) => {
          console.log(res);
          if (res.data.success) {
            this.customer = res.data.data;
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style>
</style>