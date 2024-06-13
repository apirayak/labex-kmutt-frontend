<template>
<img style="width:100%" class="step" src="../assets/step-a/A.png">
  <div class="page-lab">
    <div class="container">
      <div class="row">
        <div class="wrapper">
        <div class="lab-code-box">
        <lab-code></lab-code>
      </div></div>
      </div>
    </div>
    </div>
</template>

<script>
import LabCode from "./LabCode.vue";
export default {
  name: "LabMain",
  components: {
    LabCode,
  },
};
</script>

<style>

.wrapper {
  display: flex;
  align-items: center;
  flex-direction: column; 
  justify-content: center;
  width: 100%;
  padding: 20px;
}


.page-lab {
  font-family: 'IBM Plex Sans Thai', sans-serif;
  background-position: center !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  width: 100% !important;
  flex-direction: column;
  background-size: cover;
  background: url("../assets/signin/Image1.png") no-repeat 100% 100%, #fec061;
  background-blend-mode: screen;
}

.lab-code-box {
  background-color: #0d4479;
  top: 220px;
  left: 370px;
  width: 500px;
  height: 496px;
  border-radius: 15px;
  opacity: 1;
  margin-top: 100px!important;
  margin-bottom: 100px!important;
}
@media (min-width: 1412px) {
  .step {
    display: none;
  }
}
@media (max-width: 1000px) {
  .step {
    display: none;
  }
}
@media (max-width: 600px) {
  .lab-code-box {
    width: 100% !important;
  }
  .code-form {
  width: 100px;
  border: 1px solid #707070;
  border-radius: 15px;
  display: block;
  text-align: center;
  margin-left: 30px;
  margin-bottom: 30px;
}
}

</style>
