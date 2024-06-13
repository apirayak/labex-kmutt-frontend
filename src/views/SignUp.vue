<template>
  <div class="page-signup">
    <div class="container-fluid">
      <div class="row">
        <div style="text-align: start" class="col">
          <div style="display: block; margin: auto" class="col-md-6">
            <form class="mt-5 mb-5" v-on:submit.prevent>
              <img
                src="../assets/labex_logo.png"
                alt="LabEx logo"
                class="img-fluid"
                style="
                  margin: 0 auto;
                  width: 100px;
                  display: flex;
                  align-items: center;
                "
              />
              <h1 class="title" style="text-align: center; margin-top: 15px">
                Sign up
              </h1>
              <div class="field">
                <div class="row">
                  <div class="col">
                    <h6>First Name</h6>
                    <div class="control">
                      <input
                        type="name"
                        name="name"
                        class="input"
                        v-model="name"
                      />
                    </div>
                  </div>
                  <div class="col">
                    <h6>Last Name</h6>
                    <div class="control">
                      <input
                        type="surename"
                        name="surename"
                        class="input"
                        v-model="surname"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="row">
                  <div class="col">
                    <h6>School</h6>
                    <div class="control">
                      <input
                        type="school"
                        name="school"
                        class="input"
                        v-model="school"
                      />
                    </div>
                  </div>
                  <div class="col">
                    <h6>Birthday (DD-MM-YYYY)</h6>
                    <div class="control">
                      <input
                        type="birth"
                        name="birth"
                        class="input"
                        v-model="birth"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="field">
                <h6>Email</h6>
                <div class="control">
                  <input
                    type="email"
                    name="email"
                    class="input"
                    v-model="email"
                  />
                </div>
              </div>
              <div class="field">
                <h6>Password</h6>
                <div class="control">
                  <input
                    type="password"
                    name="password"
                    class="input"
                    v-model="password"
                  />
                </div>
              </div>

              <div class="notification is-danger" v-if="errors.lenght">
                <p v-for="error in errors" v-bind:key="error">
                  {{ error }}
                </p>
              </div>

              <div class="field" style="text-align: center">
                <div class="control">
                  <button type="signup" v-on:click="submitForm()">
                    Sign Up
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "SignUp",
  data() {
    return {
      email: "",
      password: "",
      name: "",
      surname: "",
      school: "",
      DOB: "",
      role: "student",
      errors: [],
    };
  },
  methods: {
    submitForm(e) {
      const formData = {
        name: this.name,
        surname: this.surname,
        school: this.school,
        DOB: this.DOB,
        email: this.email,
        username: this.email,
        password: this.password,
        role: this.role,
      };
      console.log(formData)
      axios
        .post("/api/v1/users/", formData)
        .then((response) => {
          console.log(response);
          alert("สมัครสมาชิกสำเร็จแล้ว")
          this.$router.push("/log-in");
        })
        .catch((error) => {
          if (error.response) {
            // for (const property in error.response.data) {
            //   // this.errors.push(`${property}: ${error.response.data[property]}`);
            // }

            console.log(JSON.stringify(error.response.data));
          } else if (error.message) {
            console.log(JSON.stringify(error.message));
          } else {
            console.log(JSON.stringify(error));
          }
        });
    },
  },
};
</script>

<style>
img {
  align-items: center;
}
.page-signup form {
  width: 100%;
  border: 2px solid #ccc;
  padding: 30px;
  background: #fff;
  border-radius: 15px;
}

.page-signup {
  font-family: 'IBM Plex Sans Thai', sans-serif;
  background-position: center !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  width: 100% !important;
  flex-direction: column;
  background-size: cover;
  background: url("../assets/signin/Image1.png") no-repeat 100% 100%, #4077b8;
  background-blend-mode: screen;
}

.page-signup label {
  display: block;
  font-size: 1.2em;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  border: 1pm solid black;
}

.page-signup input {
  width: 100%;
  padding: 0.8em;
  margin-bottom: 1em;
  border-radius: 10px;
  border: 1px solid gray;
  box-sizing: border-box;
}

.page-signup button[type="signup"] {
  border: 0;
  padding: 10px 32px;
  color: #316eb7;
  transition: 0.4s;
  border-radius: 10px;
  /* border: 2px solid #0880e8; */
  background: #e4e4e4;
  margin-top: 0.5em;
  margin-bottom: 1em;
  font-weight: 700;
}
.page-signup .control button[type="signup"]:hover {
  background: #db4d4d;
  color: #ffffff;
}
</style>
