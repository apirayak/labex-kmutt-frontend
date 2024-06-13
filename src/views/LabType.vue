<template>
  <div class="page-type">
    <div class="wrapper">
      <p>
        <select class="arrows">
          <option value="Vancouver Island University">
            บทที่ 1 : การเกิดปฏิกิริยาเคมีของสารละลายที่แตกตัว
          </option>
        </select>
      </p>
      <div class="row">
        <div class="col">
          <button v-on:click="goToLabDetial()" type="button" class="btn">
            <div class="hover-image">
              <img
                src="../assets/labtype/Image1.png"
                alt="Control"
                class="img-fluid"
              />
              <img
                src="../assets/labtype/Image1-hover.png"
                alt="Control-Hover"
                class="img-fluid"
              />
            </div>
          </button>
        </div>
        <div class="col">
          <button type="button" class="btn" disabled>
            <div >
              <img
                src="../assets/labtype/Image2.png"
                alt="Control"
                class="unvailableimage img-fluid"
              />
              <img
                src="../assets/labtype/Image2-hover.png"
                alt="Control-Hover"
                class="img-fluid"
              />
            </div>
          </button>
        </div>
        <div class="col">
          <button type="button" class="btn" disabled>
            <div class="hover-image">
              <img
                src="../assets/labtype/Image3.png"
                alt="Control"
                class="unvailableimage img-fluid"
              />
              <img
                src="../assets/labtype/Image3-hover.png"
                alt="Control-Hover"
                class="img-fluid"
              />
            </div>
          </button>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <button type="button" class="btn" disabled>
            <div class="hover-image">
              <img
                src="../assets/labtype/Image4.png"
                alt="Control"
                class="unvailableimage img-fluid"
              />
              <img
                src="../assets/labtype/Image4-hover.png"
                alt="Control-Hover"
                class="img-fluid"
              />
            </div>
          </button>
        </div>
        <div class="col">
          <button type="button" class="btn" disabled>
            <div class="hover-image">
              <img
                src="../assets/labtype/Image5.png"
                alt="Control"
                class=" unvailableimage img-fluid"
              />
              <img
                src="../assets/labtype/Image5-hover.png"
                alt="Control-Hover"
                class="img-fluid"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'LabType',
    methods: {
      goToLabDetial() {
        this.$router.push({ path: "/lab-detail-1" });
      },
    }
}
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

.container-wrapper {
  border-radius: 25px;
  display: grid;
  grid-template-columns: 400px 400px 400px;
  grid-template-rows: auto;
  grid-template-areas:
    "left-content middle-content right-content"
    "left-content middle-content right-content"
    "bottom-content bottom-content bottom-content";
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

.page-type {
  font-family: 'IBM Plex Sans Thai', sans-serif;
  display: flex;
  background-position: center !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  width: 100% !important;
  flex-direction: column;
  background-size: cover;
  background: url("../assets/signin/Image1.png") no-repeat 100% 100%, #B0E5FB;
  background-blend-mode: screen;
}

select {
  width: 100%;
  height: 50px;
  background-color: #fec061;
  color: white;
  text-align: center;
  border: thin solid #fec061;
  border-radius: 4px;
  display: inline-block;
  font: inherit;
  line-height: 1.5em;
  padding: 0.5em 3.5em 0.5em 1em;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.unvailableimage {
  opacity: 0.5;
}

select.arrows {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAA3klEQVRIS+3VMU9CMRTF8d8zBL+aizoQFhx0kUk33RzdYMNFXUFnYeGrYYyaJiUxJHDLSxodbNKpfeffc9/pbaPyaCrr+3OA++z4rtT5Pg5GuMnCY9yWQEoBE1xhlUUP8YDrCBIB0vojLvGO0yz4hm4JJAKcYYoPHGOZAUdYoIMBXrc5iQAHeMlzviFygj7O8dkWEJU4XI8chALRhn9AVKHf70VRTHu4wFfbmKZLNKt50dLBnna0imcMd/2I0phWa3Y/D1e1Xa9BCZJG0VuQNpaWKMx72xS1Fl5/WN3BN+AgJhnZQlq4AAAAAElFTkSuQmCC");
  background-position: calc(100% - 0.5rem), 100% 0;
  background-size: 1.5em 1.5em;
  background-repeat: no-repeat;
}

select.arrows:focus {
  border-color: blue;
  outline: 0;
}

</style>
