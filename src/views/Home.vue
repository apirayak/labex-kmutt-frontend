<template>
  <div class="page-home">
    <section class="home" id="home">
      <div class="container">
        
        <div class="row gx-5 align-items-center justify-content-center">
          <div class="col-lg-8 col-xl-6 col-xxl-6">
            <div class="my-5 text-center text-xl-start">
              <h1 class="display-5 text-center fw-bolder text-white mb-2">
                Increasing education opportunities
              </h1>
              <div
                class="text-center gap-3 justify-content-sm-center justify-content-xl-start"
              >
                <a v-on:click="goToAccessLab()" class="button">Get Start</a>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-xxl-6 d-none d-xl-block text-center">
            
            <video  class="rounded-3 my-5" width="700" height="500" autoplay loop>
              <source src="../assets/home.mp4" type="video/mp4">
            </video>
          </div>
        </div>
      </div>
      <section style="background-color:#DDD8D2; margin-top: 30px;" class="support" id="support">
      <div class="my-5 text-center">
        <h3 style="font-size:20px" class="display-7 mb-2">Supported by</h3>
      </div>
      <div class="container">
        <div class="row no-gutters align-items-center justify-content-center">
          <div class="col-1 col-md-1"></div>
          <div class="col-2 col-md-2 text-center">
            <img
              src="../assets/supported/Image1.png"
              alt=""
              class="img-fluid"
            />
          </div>
          <div class="col-2 col-md-2 text-center">
            <img
              src="../assets/supported/Image2.png"
              alt=""
              class="img-fluid"
            />
          </div>
          <div class="col-2 col-md-2 text-center">
            <img
              src="../assets/supported/Image3.png"
              alt=""
              class="img-fluid"
            />
          </div>
          <div class="col-2 col-md-2 text-center">
            <img
              src="../assets/supported/Image4.png"
              alt=""
              class="img-fluid"
            />
          </div>
          <div class="col-2 col-md-2 text-center">
            <img
              src="../assets/supported/Image5.png"
              alt=""
              class="img-fluid"
            />
          </div>
          <div class="col-1 col-md-1"></div>
        </div>
        <br>
      </div>
    </section>
    </section>

    


    <section class="features">
      <div class="my-5 text-center">
        <h3 class="display-7 text-black mb-2">FEATURE</h3>
      </div>
      <div class="container">
        <div class="row d-flex justify-content-center">
          <!-- <div class="col-lg-4 col-md-6 icon-box text-center">
            <div>
              <img
                src="../assets/features/Image1.png"
                alt=""
                class="img-fluid"
              />
            </div>
            <br />
            <h4 class="title text-center">Example and Tutorial</h4>
            <p class="description">
              Voluptatum deleniti atque corrupti quos dolores et quas molestias
              excepturi sint 
            </p>
            <button type="read-more">Read More</button>
          </div> -->

          <div class="col-lg-4 col-md-6 icon-box text-center">
            <div>
              <img
                src="../assets/features/Image2.png"
                alt=""
                class="img-fluid"
              />
            </div>
            <br />
            <h4 class="title text-center">Easy Control Panel</h4>
            <p class="description">
              ควบคุมง่ายผ่านปุ่มคำสั่งที่ออกแบบมาเพื่อสร้างประสบการณ์การเรียนรู้ที่แปลกใหม่ให้กับคุณ
            </p>
          </div>

          <div class="col-lg-4 col-md-6 icon-box text-center">
            <div>
              <img
                src="../assets/features/Image3.png"
                alt=""
                class="img-fluid"
              />
            </div>
            <br />
            <h4 class="title text-center">Laboratory Robot Arm</h4>
            <p class="description">
              ได้รับประสบการณ์ใกล้เคียงกับการทดลองในห้องแลป พร้อมได้ประสบการณ์การใช้งาน Robot 
            </p>
          </div>
        </div>
      </div>
    </section>

    <br /><br />

    <section class="aboutus"  id="aboutus">
      <div class="row">
        <div class="aboutus-left col">
              <div class="text-box">
              <h3 class="text-center fw-bolder text-white">การทำแลปรูปแบบใหม่ </h3>
              <h3 class="text-center fw-bolder text-white">
                ที่ไม่จำเป็นต้องทำให้ห้องเรียนอีกต่อไป 
              </h3>
              <p></p>
              <div class="d-flex justify-content-center">
                <p class="text-left description text-white">
                  Remote Lab คือการควบคุม Robot เพื่อใช้ในการทำแลปได้ <br> โดยไม่ถูกจำเป็นสถานที่ สามารถทำได้ทั้งที่บ้าน คาเฟ่ <br> หรือจะเป็นสวนสาธารณะก็ตาม นอกจากนี้ <br> คุณไม่จำเป็นต้องเขียน code เพื่อทำงานร่วมกับ Robot อีกต่อไป <br> ทาง LabEx ได้สร้างเครื่องมือในการควบคุม Robot <br> ที่ทำงานได้ใกล้เคียงกับการทำการทดลองจริงในห้องเรียน 
                </p>
              </div>
              <!-- <div

                class="text-center gap-3 justify-content-sm-center justify-content-xl-start"
              >
                <a class="button" href="#features">Get Start</a>
              </div> -->
            </div>

        </div>
        <div class="aboutus-right col">
          <img
            src="../assets/aboutus/Image3.png"
            class="img-fluid"
            style="height: 800px"
          />
        </div>
      </div>
    </section>

    <br /><br />

    <section class="contact" id="contact">
      <div class="container">
        <div class="row">
          <div class="contact-left col">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15508.42816013562!2d100.4964428!3d13.6512522!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf656e94ff13324ad!2sKing%20Mongkut%E2%80%99s%20University%20of%20Technology%20Thonburi(KMUTT)!5e0!3m2!1sen!2sth!4v1650769462338!5m2!1sen!2sth"
              width="600"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div
            class="contact-right col align-items-center justify-content-center"
          >
            <h2>Contact</h2>
            <form action="https://formsubmit.co/pasuk.phonsuphee@gmail.com" method="POST" >
              <label for="name">Name</label>
              <input type="text" id="name" name="name" />

              <label for="email">Email Address</label>
              <input type="text" id="email" name="email" />

              <label for="phone">Phone Number</label>
              <input type="text" id="phone" name="phone" />

              <label for="enquiry">Enquiry</label>
              <textarea
                type="text"
                id="enquiry"
                cols="30"
                rows="4"
                name="enquiry"
              ></textarea
              ><br />

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Dashboard from "./Dashboard.vue";
export default {
  name: "Home",
  components: { Dashboard },
  methods: {
    goToAccessLab() {
        this.$router.push({ path: "/access-lab" });
    }
  }
};


</script>
<style>
.page-home {
  font-family: 'IBM Plex Sans Thai', sans-serif;
  color: #444444;
}
.home {
  background-color:  #C3C3C3;
}
.home .button {
  text-decoration: none;
  border: 0;
  padding: 10px 32px;
  color: #316eb7;
  transition: 0.4s;
  border-radius: 10px;
  /* border: 2px solid #0880e8; */
  background: #fec061;
  margin-top: 0.5em;
  font-weight: 700;
}

.home .button:hover {
  text-decoration: none;
  background: #db4d4d;
  color: #ffffff;
}
.aboutus .button {
  text-decoration: none;
  border: 0;
  padding: 10px 32px;
  color: #316eb7;
  transition: 0.4s;
  border-radius: 10px;
  /* border: 2px solid #0880e8; */
  background: #fec061;
  margin-top: 0.5em;
  font-weight: 700;
}

.aboutus .button:hover {
  text-decoration: none;
  background: #db4d4d;
  color: #ffffff;
}

.aboutus .text-box {
  margin-top: 250px;
}
.aboutus .aboutus-left {
  background-image: url("../assets/aboutus/Image1.png");
}
.aboutus .aboutus-right {
  background-image: url("../assets/aboutus/Image2.png");
}

.features button[type="read-more"] {
  border: 0;
  padding: 10px 32px;
  color: #316eb7;
  transition: 0.4s;
  border-radius: 10px;
  /* border: 2px solid #0880e8; */
  background: #fec061;
  margin-top: 0.5em;
  font-weight: 700;
}
.features button[type="read-more"]:hover {
  background: #db4d4d;
  color: #ffffff;
}

.contact label {
  display: block;
  font-size: 1.2em;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  border: 1pm solid black;
}

input,
textarea {
  width: 50%;
  padding: 0.8em;
  margin-bottom: 1em;
  border-radius: 10px;
  border: 1px solid gray;
  box-sizing: border-box;
}

iframe {
  margin-top: 5.5em;
  width: 540px;
  border-radius: 50px;
}

.contact button[type="submit"] {
  border: 0;
  padding: 10px 32px;
  color: #316eb7;
  transition: 0.4s;
  border-radius: 10px;
  /* border: 2px solid #0880e8; */
  background: #fec061;
  margin-top: 0.5em;
  margin-bottom: 2.5em;
  font-weight: 700;
}
.contact button[type="submit"]:hover {
  background: #db4d4d;
  color: #ffffff;
}
</style>
