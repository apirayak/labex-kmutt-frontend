<template>
  <div class="lab-code">
    <label class="text-title text-center">Enter Lab Code</label>
    <div class="row mb-1">
      <div class="col padding-0">
        <input type="text" class="code-form" id="first-digit" maxlength="1" v-model="firstdigit"/>
      </div>

      <div class="col padding-0">
        <input type="text" class="code-form" id="second-digit" maxlength="1" v-model="seconddigit"/>
      </div>
      <div class="col padding-0">
        <input type="text" class="code-form" id="third-digit" maxlength="1" v-model="thirddigit"/>
      </div>
      <div class="col padding-0">
        <input type="text" class="code-form" id="fourth-digit" maxlength="1" v-model="fourthdigit" />
      </div>
    </div>
    <div class ="control" style="text-align:center;">
      <button type="button" class="btn btn-warning" v-on:click="validateLabCode()">Attend Lab</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      firstdigit: "",
      seconddigit: "",
      thirddigit: '',
      fourthdigit: ''
    };
  },
methods: {
    async validateLabCode() {
      const formData = {
        lab_code: this.firstdigit + this.seconddigit + this.thirddigit + this.fourthdigit,
      };
      console.log(formData);
      await axios
        .post(`api/v1/labs/validate_labcode/`, formData)
        .then((res) => {
          console.log(res);
          alert('Code ถูกต้อง ยินดีต้อนรับสู่ Lab')
          this.$router.push({ path: "/lab-role" });
        })
        .catch((e) => {
          console.log(e);
          alert('Code ไม่ถูกต้อง')
        });
    },
  },    
};
</script>

<style>
.lab-code {
  font-family: 'IBM Plex Sans Thai', sans-serif;
  margin-top: 20%;
}
.text-title {
  display: block;
  color: white;
  font-size: 42px;
  text-align: center;
  margin-bottom: 30px;
}
.code-form {
  border: 1px solid #707070;
  border-radius: 15px;
  display: block;
  text-align: center;
  margin-left: 30px;
  margin-bottom: 30px;
}

.lab-code .btn {
  width: 200px;
  align-items: center;
  text-align: center;
  margin-left: 15px;
  margin-right: 15px;
  border: 0;
  padding: 10px 32px;
  color: #316eb7;
  transition: 0.4s;
  border-radius: 10px;
  /* border: 2px solid #0880e8; */
  background: #fec061;
  margin-top: 0.5em;
  margin-bottom: 1.0em;
  font-weight: 700;
}
.lab-code .btn:hover {
  background: #db4d4d;
  color: #ffffff;
}
</style>