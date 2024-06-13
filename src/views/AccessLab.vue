<template>
    <div class="page-accesslab">
      <div class="container-fluid">
          <div style="display:flex;" class="row align-items-center justify-content-center">
            
              <div style="display:block;" class="text-center col col-md-6">
              
                <div class="text-center mb-3"><h1 style="color:#06499b;">Explore the Lab!</h1></div>
                  <button v-on:click="goToReserve()" type="reserve">Reserve Lab</button><br><br>
                  <button v-on:click="goToAttent()" type="attend">Attend Lab</button><br><br>
              </div>
              <div style="display:block;" class="text-center col col-md-6">
                <video  class="margin-wrapper" width="700" height="500"  autoplay loop>
                  <source src="../assets/home.mp4" type="video/mp4">
                </video>
              </div>
            
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'AccessLab',
    methods: {
      goToReserve() {
        this.$router.push({ path: "/lab-type" });
      },
      goToAttent(){
        this.$router.push({ path: "/lab" });
      }
    }
}
</script>

<style>
.margin-wrapper {
  margin-top: 100px;
  margin-bottom: 100px;
}

.page-accesslab {
  font-family: 'IBM Plex Sans Thai', sans-serif;
  background-position: center!important;
  background-repeat: no-repeat!important;
  background-size: cover!important;
  width:100%!important;
  flex-direction: column;
  background-size: cover;
  background: url("../assets/signin/Image1.png") no-repeat 100% 100%, #4077b8;
  background-blend-mode: screen;
}

.page-accesslab button[type="reserve"] {
  width: 250px;
  text-decoration: none;
  border: 0;
  padding: 10px 32px;
  color: #316eb7;
  transition: 0.4s;
  border-radius: 10px;
  /* border: 2px solid #0880e8; */
  background: #852B48;
  margin-top: 0.5em;
  font-weight: 700;
}

.page-accesslab button[type="reserve"]:hover {
  text-decoration: none;
  background: #db4d4d;
  color: #ffffff;
}

.page-accesslab button[type="attend"] {
  width: 250px;
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

.page-accesslab button[type="attend"]:hover {
  text-decoration: none;
  background: #db4d4d;
  color: #ffffff;
}

@media (max-width: 1000px) {
  .row {
    display: block!important;
  }
}
</style>