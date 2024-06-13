<template>
<img style="width:100%" class="step" src="../assets/step-a/C.png">
  <div class="page-learn-2">
    <div style="display: grid !important" class="container">
      <div class="margin-wrapper">
        <div class="scrollbar">
          <div style="display: grid !important" class="container-wrapper">
            <div class="left-content">
              <div style="border-bottom:2px solid black;" class="text-center mt-3">
                <h5>Control Panel</h5>
                <br />
              </div>
              <div class="control mt-2">
                <button type="api">Home</button><br /><br />
                <button type="api" v-on:click="changeCommand('Pos 1')">Pos 1</button
                ><button type="api" v-on:click="changeCommand('Pos 2')">Pos 2</button
                ><button type="api" v-on:click="changeCommand('Pos 3')">Pos 3</button
                ><button type="api" v-on:click="changeCommand('Pos E')">Pos E</button><br />
                <button type="api" v-on:click="changeCommand('ICU')">ICU</button><br /><br />
                <button type="api" v-on:click="changeCommand('Pos E')">Pos E</button
                ><button type="api" v-on:click="changeCommand('Pos 1')">Pos 1</button
                ><button type="api" v-on:click="changeCommand('Pos 2')">Pos 2</button
                ><button type="api" v-on:click="changeCommand('Pos 3')">Pos 3</button
                ><br /><br />
                <button type="api" v-on:click="changeCommand('Pos E')">Pos E</button
                ><button type="api" v-on:click="changeCommand('Pos 1')">Pos 1</button
                ><button type="api" v-on:click="changeCommand('Pos 2')">Pos 2</button
                ><button type="api" v-on:click="changeCommand('Pos 3')">Pos 3</button>
              </div>
            </div>
            <div class="middle-content">
              <!-- <img class="set-img " style="-webkit-user-select: none;margin: auto;background-color: hsl(0, 0%, 25%);" src="http://labex2021.trueddns.com:30834/videostream.cgi?user=admin&pwd=123456789"> -->
              <img class="set-img" src="../assets/labex_logo.png" />
            </div>
            <div class="right-content">
              <div         data-bs-toggle="modal"
        data-bs-target="#Tutorial" class="item">
                <input type="checkbox" id="A" />
                <img src="../assets/Arrow.png" class="arrow" /><label for=""
                  style="border-bottom:2px solid black">Tutorial</label
                >
              </div>
              <div class="item">
                <input type="checkbox" id="B" />
                <img src="../assets/Arrow.png" class="arrow" /><label for="B"
                  style="border-bottom:2px solid black">Choose Sheet</label
                >
                <div class="btn-item">
                  <button type="sheet" class="inside-arrow btn">Blank</button>
                  <button type="sheet" class="inside-arrow btn">
                    Lab Sheet<br />Template
                  </button>
                  <div class="text-center">
                    <button type="next" class="inside-arrow btn">next</button>
                  </div>
                </div>
              </div>

                <div class="text-center">
                  <button type="done" class="inside-arrow btn" v-on:click="goToLabSum()">Done</button>
                </div>
            </div>
            <div class="bottom-content">
              <div class="item">
                <input type="checkbox" id="C" />
                <img src="../assets/Arrow.png" class="arrow" /><label class="text-center" for="C"
                  >Chat box</label
                >
                <div
                  style="
                    background: #0880e8;
                    border-bottom-left-radius: 25px;
                    border-bottom-right-radius: 25px;
                  "
                  class="btn-item"
                >
                  <div class="row">
                    <div class="col-9">
                      <div class="msger control">
                        <header class="msger-header">
                          <div class="msger-header-title"></div>
                        </header>
                        <main class="msger-chat">
                        <p class="message" v-for="message in list_message"  :key="message.id">{{this.$store.state.user.email}} : {{ message }}</p>
                        </main>
                        <input
                          v-model="msg"
                          type="text"
                          class="msger-input"
                          placeholder="Enter your message..."
                        />
                        <button
                          v-on:click="sendMessage()"
                          type="submit"
                          class="msger-send-btn"
                          style="margin-left: 10px"
                        >
                          Send
                        </button>
                      </div>
                    </div>
                    <div
                      style="border-left: 2px solid white"
                      class="col-3"
                    >
                      <div style ="color:white;" class="text-center mt-3">
                        <h3>Member</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

    <!-- Modal -->
  <div
  style="border:none;"
    class="modal fade"
    id="Tutorial"
    tabindex="-1"
    aria-labelledby="TutorialLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" >
      <div class="modal-content">
        <div class="modal-header">
          <h6 style="color:#0880e8;" class="modal-title" id="TutorialLabel">Tutorial</h6>
          <button
            type="close"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div style="background-color: #0880e8 ;" class="modal-body">
          <video  class="rounded-3" width="600" height="400" controls>
              <source src="../assets/home.mp4" type="video/mp4">
            </video>
              <h6 class="modal-body-title">Lab Name</h6>
              <h6 class="modal-body-title">Tools</h6>
              <h6 class="modal-body-title">Procedure</h6>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      controller_id: "1",
      controller_name: this.$store.state.user.email,
      msg: "",
      list_message: []
    };
  },
  methods: {
    async changeController() {
      const fromDataControl = {
        robot_id: this.controller_id,
        username: this.controller_name,
      };

      await axios
        .post(`api/robots/change_controller_user/`, fromDataControl)
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

    sendMessage() {
      this.list_message.push(this.msg)
    },

    goToLabSum() {
        this.$router.push({ path: "/lab-sum" });
    },

    async changeCommand(command) {
      const fromDataControl = {
        robot_id: this.controller_id,
        username: this.controller_name,
        command: command,
      };
      this.changeController();

      await axios
        .post(`api/robots/change_command/`, fromDataControl)
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
.margin-wrapper {
  margin-top: 200px;
  margin-bottom: 200px;
}
.message {
  width: 45%;
  border-radius: 10px;
  padding: .5em;
/*   margin-bottom: .5em; */
  font-size: .8em;
}
.left-content {
  border-left: 2px solid rgb(0, 0, 0);
  border-top: 2px solid rgb(0, 0, 0);
  border-top-left-radius: 25px;
  grid-area: left-content;
}
.left-content .control {
  margin-left: 30px;
}
.middle-content {
  border-top: 2px solid rgb(0, 0, 0);
  border-left: 2px solid rgb(0, 0, 0);
  border-right: 2px solid rgb(0, 0, 0);
  grid-area: middle-content;
}
.right-content {
  border-right: 2px solid rgb(0, 0, 0) !important;
  border-top: 2px solid rgb(0, 0, 0) !important;
  border-top-right-radius: 25px;
  grid-area: right-content;
}
.bottom-content {
  border: 2px solid rgb(0, 0, 0);
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  grid-area: bottom-content;
}

.bottom-content .control {
  margin-left: 30px;
}
.container-wrapper {
  background-color: white;
  overflow: scroll;
  overflow: auto;
  border-radius: 25px;
  display: block;
  grid-template-columns: 400px 520px 400px !important;
  grid-template-rows: auto;
  grid-template-areas:
    "left-content middle-content right-content"
    "left-content middle-content right-content"
    "bottom-content bottom-content bottom-content";
}

.left-content button {
  padding: 10px;
  width: 70px;
  border: 2px solid rgb(128, 126, 126);
}
img {
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.middle-content .set-img {
  margin: 0 auto;
  width: 700px;
  height: 500px;
  display: flex;
  align-items: center;
}

.modal-body-title {
  color: #ffffff;
  font-weight: 10px;
}
/*Func*/

.multi-level,
.item .btn-item,
input[type="checkbox"] {
  display: none;
}
#menu:checked ~ .multi-level,
.item input:checked ~ .btn-item {
  display: block;
}

/*Arrow*/

.arrow {
  width: 12px;
  height: 12px;
  vertical-align: middle;
  float: right;
  z-index: 0;
  margin: 17px 1em 0 2em;
}
.item input + .arrow {
  transform: rotate(-90deg);
  transition: 0.1s;
}
.item input:checked + .arrow {
  transform: rotate(0deg);
  transition: 0.1s;
}

.inside-arrow {
  margin-left: 20px;
  color: white;
}

/*Styles*/

label:hover {
  cursor: pointer;
}
label {
  width: 100%;
  /* display: block; */
  z-index: 3;
  position: relative;
}

label {
  line-height: 50px;
  margin: 0;
  padding: 0 2em;
  list-style: none;
  text-decoration: none;
  color: #90a4ae;
  font-weight: 100;
  width: 100%;
}

.page-learn-2 {
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

.page-learn-2 label {
  display: block;
  font-size: 1.2em;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  border: 1pm solid black;
}

.page-learn-2 button[type="next"],
button[type="done"],
button[type="submit"] {
  width: 140px;
  border: 0;
  padding: 10px 32px;
  color: #0880e8;
  transition: 0.4s;
  border-radius: 10px;
  /* border: 2px solid #0880e8; */
  background: #fec061;
  margin-top: 0.5em;
  margin-bottom: 1em;
  font-weight: 700;
}

.page-learn-2 button[type="api"]:hover {
  background: #fec061;
  color: #ffffff;
}

.page-learn-2 button[type="next"]:hover {
  background: #db4d4d;
  color: #ffffff;
}
.page-learn-2 button[type="done"]:hover {
  background: #db4d4d;
  color: #ffffff;
}
.page-learn-2 button[type="submit"]:hover {
  background: #db4d4d;
  color: #ffffff;
}
.page-learn-2 button[type="sheet"] {
  height: 100px;
  border: 0;
  padding: 10px 32px;
  color: white;
  transition: 0.4s;
  border-radius: 10px;
  /* border: 2px solid #0880e8; */
  background: #0880e8;
  margin-top: 0.5em;
  margin-bottom: 1em;
  font-weight: 700;
}
.page-learn-2 button[type="sheet"]:hover {
  background: #db4d4d;
  color: #ffffff;
}

.msger-chat {
    /* overflow: scroll;
  overflow: auto; */
  margin-top: 10px;
  border: 2px solid white;
  background-color: #ffffff;
  flex: 1;
  overflow-y: auto;
  padding: 10px;
  width: 100%;
  height: 300px;
}
.msger-chat::-webkit-scrollbar {
  width: 6px;
}
.msger-chat::-webkit-scrollbar-track {
  background: #ddd;
}
.msger-chat::-webkit-scrollbar-thumb {
  background: #bdbdbd;
}
.msger-input {
  width: 800px;
  flex: 1;
  background: rgb(255, 255, 255);
}

@media (max-width: 1112px) {
  .scrollbar {
    display: grid !important;
    width: 100% !important;
    height: inherit !important;
  }
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
</style>
