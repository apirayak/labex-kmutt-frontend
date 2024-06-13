<template>
  <div class="page-confirm">
    <div class="align-items-center justify-content-center">
            <p class="align-self-center">
        <select class="arrows">
          <option value="1">
            Robot 1
          </option>
          <option value="2">
            Robot 2
          </option>
          <option value="3">
            Robot 3
          </option>
        </select>
      </p>

      <div style="display: flex" class="container">
        <div class="margin-wrapper table-wrapper custom-scrollbar">
          <table>
            <tr>
              <th></th>
              <th
                style="color: rgb(255, 255, 255);  display;inline-table;/* border: 2px solid rgb(255, 255, 255); */"
                v-for="slot in time_slots"
                :key="slot.id"
                class="text-center"
              >
                {{ slot }}
              </th>
            </tr>
            <tr>
              <td class="text-center date-text">Mon</td>
              <td class="time-slot" v-for="slot in time_slots" :key="slot.id">
                <input
                  :value="slot"
                  v-model="mon_lists"
                  class="checkbox"
                  type="checkbox"
                  style="display: inline"
                />
              </td>
            </tr>
            <tr>
              <td class="text-center date-text">Tue</td>
              <td class="time-slot" v-for="slot in time_slots" :key="slot.id">
                <input
                  :value="slot"
                  v-model="tue_lists"
                  class="checkbox"
                  type="checkbox"
                  style="display: inline"
                />
              </td>
            </tr>
            <tr>
              <td class="text-center date-text">Wed</td>
              <td class="time-slot" v-for="slot in time_slots" :key="slot.id">
                <input
                  :value="slot"
                  v-model="wed_lists"
                  class="checkbox"
                  type="checkbox"
                  style="display: inline"
                />
              </td>
            </tr>
            <tr>
              <td class="text-center date-text">Thus</td>
              <td class="time-slot" v-for="slot in time_slots" :key="slot.id">
                <input
                  :value="slot"
                  v-model="thus_lists"
                  class="checkbox"
                  type="checkbox"
                  style="display: inline"
                />
              </td>
            </tr>
            <tr>
              <td class="text-center date-text">Fri</td>
              <td class="time-slot" v-for="slot in time_slots" :key="slot.id">
                <input
                  :value="slot"
                  v-model="fri_lists"
                  class="checkbox"
                  type="checkbox"
                  style="display: inline"
                />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>

    <div class="control text-center">
      <!-- Button trigger modal -->
      <button
        style="width: 170px"
        @click="randomCode()"
        type="done"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Confirm Time
      </button>
      <button style="width: 170px" @click="goToLabCode()" type="submit">
        Attend Lab
      </button>
    </div>
  </div>
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h6 style="color: #0880e8" class="modal-title" id="exampleModalLabel">
            Confirmation
          </h6>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div style="background-color: #0880e8" class="modal-body">
          <form>
            <div class="mb-3">
              <h6 for="exampleInputEmail1" class="modal-body-title form-label">
                Date : {{ new Date().toLocaleDateString() }}
              </h6>
            </div>
            <div class="mb-3">
              <h6 for="exampleInputEmail1" class="modal-body-title form-label">
                Time : {{ day }} {{ lists }}
              </h6>
            </div>
            <div class="mb-3">
              <h6 for="exampleInputEmail1" class="modal-body-title form-label">
                <div class="col padding-0">Lab Code : {{ code }}</div>
              </h6>
            </div>

            <div class="control text-center">
              <button
                @click="confirmTime()"
                type="button"
                class="btn btn-primary"
                data-dismiss="modal"
              >
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DateComponent",
  data: () => ({
    start_time: "09:00:00",
    end_time: "17:00:00",
    x: 15,
    result: "",
    code: "",
    day: "",
    lists: [],
    mon_lists: [],
    tue_lists: [],
    wed_lists: [],
    thus_lists: [],
    fri_lists: [],
    time_slots: [
      "08.30-08.45",
      "08.45-09.00",
      "09.00-09.15",
      "09.15-09.30",
      "09.30-09.45",
      "09.45-10.00",
      "10.00-10.15",
      "10.15-10.30",
      "10.30-10.45",
      "10.45-11.00",
      "11.00-11.15",
      "11.30-11.45",
      "11.45-12.00",
      "13.00-13.15",
      "13.15-13.30",
      "13.30-13.45",
      "13.45-14.00",
      "14.00-14.15",
      "14.15-14.30",
      "14.15-14.45",
      "14.45-15.00",
      "15.00-15.15",
      "15.15-15.30",
      "15.15-15.45",
      "15.45-16.00",
      "16.00-16.15",
      "16.15-16.30",
      "16.15-16.45",
      "16.45-17.00",
    ],
    weekly_date: [
      "Mon",
      "Tue",
      "Wed",
      "Thus",
      "Fri"
    ],
    test: true,
  }),
  methods: {
    goToLabCode() {
      this.$router.push({ path: "/lab" });
    },
    getTimeSlot() {
      if (this.mon_lists.length > 0) {
        this.day = "Mon";
        this.lists = this.mon_lists;
      } else if (this.tue_lists.length > 0) {
        this.day = "Tue";
        this.lists = this.tue_lists;
      } else if (this.wed_lists.length > 0) {
        this.day = "Wed";
        this.lists = this.wed_lists;
      } else if (this.thus_lists.length > 0) {
        this.day = "Thus";
        this.lists = this.thus_lists;
      } else if (this.fri_lists.length > 0) {
        this.day = "Fri";
        this.lists = this.fri_lists;
      }
    },
    randomCode() {
      console.log("test");
      this.getTimeSlot();
      var val = Math.floor(1000 + Math.random() * 9000);
      this.code = val;
    },
    async confirmTime() {
      const formData = {
        user: this.$store.state.user.email,
        code: this.code.toString(),
        // time: this.lists,
        day: this.day,
      };

      console.log(formData);
      await axios
        .post(`api/v1/labs/`, formData)
        .then((res) => {
          alert("จองตารางสำเร็จแล้ว");
        })
        .catch((e) => {
          console.log(e);
          alert("จองตารางผิดพลาด");
        });
    },
  },
};
</script>

<style>
.margin-wrapper {
  margin-top: 130px !important;
  margin-bottom: 60px !important;
}

table {
  width: 1000px;
  height: 500px;
  border-left: #ffffff;
}

table,
th,
td {
  /* border: 2px solid rgb(0, 0, 0); */
  border-collapse: collapse;
}

th,
td {
  padding: 30px;
}

tr:nth-child(odd) {
  color: white;
  background-color: #63afd5;
}

tr:nth-child(even) {
  color: #0d4479;
  background-color: #b0e5fb;
}

.table-wrapper {
  border: 2px solid #ccc;
  border-radius: 15px;
  width: 100%;
  overflow: scroll;
  overflow: auto;
}

.date-text {
  font-size: 20px;
  font-weight: bold;
}
.modal-body-title {
  color: #ffffff;
  font-weight: 10px;
}
.wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 20px;
  margin-top: 50px;
  margin-bottom: 10px;
}

.page-confirm {
  font-family: "IBM Plex Sans Thai", sans-serif;
  background-position: center !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  width: 100% !important;
  flex-direction: column;
  background-size: cover;
  background: url("../assets/signin/Image1.png") no-repeat 100% 100%, #4077b8;
  background-blend-mode: screen;
}

.modal-body button[type="confirm"] {
  margin-left: 15px;
  margin-right: 15px;
  border: 0;
  padding: 10px 32px;
  color: #316eb7;
  transition: 0.4s;
  border-radius: 10px;
  /* border: 2px solid #0880e8; */
  background: #fec061;
  margin-bottom: 20px;
  font-weight: 700;
}
.modal-body .control button[type="confirm"]:hover {
  background: #db4d4d;
  color: #ffffff;
}

.page-confirm button[type="done"] {
  margin-left: 15px;
  margin-right: 15px;
  border: 0;
  padding: 10px 32px;
  color: #316eb7;
  transition: 0.4s;
  border-radius: 10px;
  /* border: 2px solid #0880e8; */
  background: #fec061;
  margin-bottom: 20px;
  font-weight: 700;
}
.page-confirm .control button[type="done"]:hover {
  background: #db4d4d;
  color: #ffffff;
}
/* custom scrollbar */
::-webkit-scrollbar {
  width: 20px;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
  border-radius: 20px;
  border: 6px solid transparent;
  background-clip: content-box;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #a8bbbf;
}

@media (max-width: 1412px) {
  .scrollbar {
    display: grid !important;
    width: 100% !important;
    height: inherit !important;
  }
}
</style>
