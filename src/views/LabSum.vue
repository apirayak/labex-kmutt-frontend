<template>
  <img style="width: 100%" class="step" src="../assets/step-a/D.png" />
  <div class="page-lab-sum">
    <div class="container">
      <div class="row">
        <div style="margin-top: 40px; margin-bottom: 40px" class="col-8">
          <h6 style="font-weight: bold; color: #0880e8">
            Guide + Good Result Lab Example
          </h6>
          <div class="result-lab"></div>
        </div>
        <div style="margin-top: 40px; margin-bottom: 40px" class="col-4">
          <div class="video text-center">
            <video class="rounded-3 mt-5" width="300" height="300" controls>
              <source src="../assets/home.mp4" type="video/mp4" />
            </video>
                <div class="text-center">
              <button type="download" onclick="">Video</button>
            </div>
            <div class="text-center">
              <button type="download" onclick="">PDF</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style>
.page-lab-sum {
  font-family: "IBM Plex Sans Thai", sans-serif;
  background-position: center !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  width: 100% !important;
  flex-direction: column;
  background-size: cover;
  background: url("../assets/signin/Image1.png") no-repeat 100% 100%, #fec061;
  background-blend-mode: screen;
}

.result-lab {
  border-radius: 10px;
  border: 2px solid rgb(199, 197, 197);
  background-color: #ffffff;
  flex: 1;
  overflow-y: auto;
  padding: 10px;
  width: 90%;
  height: 350px;
  overflow: scroll;
  overflow: auto;
}

.page-lab-sum button[type="download"] {
  /* height: 100px; */
  border: 0;
  padding: 10px 32px;
  color: white;
  transition: 0.4s;
  border-radius: 10px;
  background: #0880e8;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  font-weight: 700;
}
.page-lab-sum button[type="download"]:hover {
  background: #db4d4d;
  color: #ffffff;
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
