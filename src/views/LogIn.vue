<template>
  <div class="page-login">
    <div class="container-fluid">
      <div class="row">
        <div style="text-align: start" class="col">
          <div style="display: block; margin: auto" class="col-md-5">
            <form class="mt-5 mb-5" @submit.prevent="submitForm">
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
                Login
              </h1>
              <div class="field">
                <h6>Email</h6>
                <div class="control">
                  <input
                    type="email"
                    name="username"
                    class="input-id"
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
                    class="input-id"
                    v-model="password"
                  />
                </div>
              </div>
              <div class="field">
                <div class="row">
                  <div class="col-6">
                    <label>
                      <input
                        class="input-check"
                        type="checkbox"
                        checked="checked"
                        name="remember"
                      />
                      Remember me
                    </label>
                  </div>
                  <div style="text-align: end" class="col-6">
                    <a href="#" style="">
                      <label
                        ><span class="psw">Forgot password?</span></label
                      ></a
                    >
                  </div>
                </div>
              </div>

              <div class="notification is-danger" v-if="errors.lenght">
                <p v-for="error in errors" v-bind:key="error">
                  {{ error }}
                </p>
              </div>

              <div class="field" style="text-align: center">
                <div class="control">
                  <button type="signup" v-on:click="goToSignUp()">
                    Sign Up
                  </button>
                  <button v-on:click="login()" type="signin">Sign in</button>
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
  name: "LogIn",
  data() {
    return {
      email: "",
      password: "",
      errors: [],
    };
  },
  methods: {
    goToSignUp() {
      this.$router.push({ path: "/sign-up" });
    },
    login() {
      const formData = {
        username: this.email,
        password: this.password,
      };

      this.$store
        .dispatch("loginUser", formData)
        .then(() => {
          alert("เข้าสู่ระบบสำเร็จ");
          this.$router.push({ path: "/" });
        })
        .catch((error) => {
          //catch the error here
          alert("Email หรือ password ผิดพลาด");
        });

      //   axios
      //     .post("login/", formData)
      //     .then((response) => {
      //       console.log(response)
      //       const token = response.data.token;
      //       this.$store.commit("initializeStore");
      //       localStorage.setItem("accessToken", token);
      //       alert("เข้าสู่ระบบสำเร็จแล้ว");

      //       this.$router.push({ path: "/dashboard" });
      //     })
      //     .catch((error) => {
      //       localStorage.removeItem("accessToken");
      //       alert("ไม่สามารถเข้าสู่ระบบได้");
      //     });
    },
  },
  created() {
    this.token = this.$store.state.token;
  },
  // submitForm(e) {
  //   axios.defaults.headers.common["Authorization"] = "";

  //   localStorage.removeItem("token");

  //   axios
  //     .post("/api/v1/token/login/", formData)
  //     .then((response) => {
  //       const token = response.data.auth_token;

  //       this.$store.commit("setToken", token);

  //       axios.defaults.headers.common["Authorization"] = "Token :" + token;

  //       localStorage.setItem("token", token);

  // Show page after login
  // this.$router.push('/dashboard')
  //   this.$router.push({ path: "/dashboard" });
  // })
  // .catch((error) => {
  //   if (error.response) {
  //     for (const property in error.response.data) {
  //       this.errors.push(`${property}: ${error.response.data[property]}`);
  //     }

  //     console.log(JSON.stringify(error.response.data));
  //   } else if (error.message) {
  //     console.log(JSON.stringify(error.message));
  //   } else {
  //     console.log(JSON.stringify(error));
  //   }
  // });
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
  margin-top: 100px;
  margin-bottom: 100px;
}
img {
  align-items: center;
}
.page-login form {
  border: 2px solid #ccc;
  padding: 30px;
  background: #fff;
  border-radius: 15px;
}

.page-login {
  font-family: 'IBM Plex Sans Thai', sans-serif;
  min-height: 100%;
  display: flex;
  background-position: center !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  width: 100% !important;
  flex-direction: column;
  background-size: cover;
  background: url("../assets/signin/Image1.png") no-repeat 100% 100%, #4077b8;
  background-blend-mode: screen;
}

.page-login label {
  display: block;
  font-size: 1em;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  /* margin-right: 1.5em; */
  border: 1pm solid black;
}

.page-login .input-id {
  width: 100%;
  padding: 0.8em;
  margin-bottom: 1em;
  border-radius: 10px;
  border: 1px solid gray;
  box-sizing: border-box;
}
.page-login .input-check {
  width: 10%;
}

.page-login button[type="signup"] {
  margin-left: 15px;
  margin-right: 15px;
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

.page-login .control button[type="signup"]:hover {
  background: #db4d4d;
  color: #ffffff;
}

.page-login button[type="signin"] {
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
  margin-bottom: 1em;
  font-weight: 700;
}

.page-login .control button[type="signin"]:hover {
  background: #db4d4d;
  color: #ffffff;
}
</style>
