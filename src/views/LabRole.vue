<template>
  <div class="page-lab">
    <div class="wrapper">
      <div class="lab-role-box">
        <div class="lab-code">
          <label class="text-title text-center">Hi {{ this.$store.state.user.email.split("@")[0] }}</label>
          <label class="text-content text-center"
            >Please choose your role in the lab!</label
          >
          <div class="row mb-1">
            <div class="col">
              <button v-on:click="goToLabLearning()" type="button" class="btn btn-warning">
                <div class="hover-image">
                  <img
                    src="../assets/labrole/remote-control.png"
                    alt="Control"
                    class="img-fluid"
                  />
                  <img
                    src="../assets/labrole/remote-control-hover.png"
                    alt="Control-Hover"
                    class="img-fluid"
                  />
                </div>
                <p class="text-role">Control</p>
              </button>
            </div>

            <div class="col">
              <button v-on:click="goToLabLearning()" type="button" class="btn btn-warning">
                <div class="hover-image">
                  <img
                    src="../assets/labrole/observation.png"
                    alt="Observer"
                    class="img-fluid"
                  />
                  <img
                    src="../assets/labrole/observation-hover.png"
                    alt="Observer-Hover"
                    class="img-fluid"
                  />
                </div>
                <p class="text-role">Observer</p>
              </button>
            </div>
            <div class="col">
              <button v-on:click="goToLabLearning()" type="button" class="btn btn-warning">
                <div class="hover-image">
                  <img
                    src="../assets/labrole/school.png"
                    alt="Teacher"
                    class="img-fluid"
                  />
                  <img
                    src="../assets/labrole/school-hover.png"
                    alt="Teacher-Hover"
                    class="img-fluid"
                  />
                </div>
                <p class="text-role">Teacher</p>
              </button>
            </div>
          </div>
        </div>
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
methods: {
    async goToLabLearning() {
      this.$router.push({ path: "/learn-1" });
    },
}
};
</script>

<style>
p{
  font-size: 14px;
}
.wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 20px;
  margin-top: 50px;
  margin-bottom: 50px;
}

.page-lab {
  background-image: url("../assets/signin/Image1.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

.lab-role-box {
  background-color: #0d4479;
  top: 220px;
  left: 370px;
  width: 800px;
  height: 600px;
  border-radius: 15px;
  opacity: 1;
  /* Center vertically and horizontally */
}

.lab-code {
  margin-top: 20%;
}

.text-title {
  display: block;
  color: white;
  font-size: 42px;
  text-align: center;
  margin-bottom: 10px;
}

.text-content {
  display: block;
  color: white;
  font-size: 20px;
  text-align: center;
  margin-bottom: 30px;
}

.text-role{
  margin-top: 10px;
  margin-bottom: 0px;
}
.role {
  margin-left: 10px;
  margin-bottom: 30px;
}

button img:last-child {
  display: none;
}
button:hover img:last-child {
  display: block;
}
button:hover img:first-child {
  display: none;
}
.lab-code .btn {
  align-items: center;
  text-align: center;
  margin-left: 15px;
  margin-right: 15px;
  border: 0;
  padding: 10px 32px;
  color: #316eb7;
  transition: 0.4s;
  border-radius: 10px;
  background: #fec061;
  margin-top: 0.5em;
  margin-bottom: 1em;
  font-weight: 700;
}
button[type="icon"]:hover {
  background: #db4d4d;
  /* color: #ffffff; */
}
</style>
