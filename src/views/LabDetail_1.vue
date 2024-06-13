<template>
     <div class="lab-image">
            <img
              src="../assets/lab-detail/Image1.png"
              alt=""
              class="img-fluid"
              width="1200"
            />
            <div class="lab-name">
                <h3>ปฏิกิริยาการฟอกจางสีของสารละลาย โพแทสเซียมเปอร์แมงกาเนต</h3>
            </div>            
        </div>
    <div class="lab-detail-1">
        <div class="container">
            <div class="lab-obj">
                <div class="text-obj">
                    <h6>จุดประสงค์การทดลอง</h6>
                </div>
                        1. ทดลองการเกิดปฏิกิริยาการฟอกจางสีสารละลายโพแทสเซียมเปอร์แมงกาเนตของไซโคลเฮกเซน ไซโคลเฮกซีน <br>
                        และเมทิลเบนซีน <br>
                        2. เปรียบเทียบการเกิดปฏิกิริยาการฟอกจางสีสารละลายโพแทสเซียมเปอร์แมงกาเนตของไซโคลเฮกเซน ไซโคลเฮก <br>
                        ซีนและเมทิลเบนซีน <br><br>
            </div>
            <div class="lab-material">
                <div class="text-obj">
                    <h6>วัสดุ อุปกรณ์ และสารเคมี</h6>
                </div>
                <div class="row">
                    <div class="col-md-6">
                         <img
                        class="img-fluid rounded-3 my-5"
                        src="../assets/lab-detail/Image1.png"
                        alt="..."
                        />
                    </div>
                    <div class="col-md-6">
                        <div class="rounded-3 my-5">
                        1. ไซโคลเฮกเซน <br>
                        2. ไซโคลเฮกซีน <br>
                        3. เมทิลเบนซีน <br>
                        4. สารละลายโพแทสเซียมเปอร์แมงกาเนต (KMnO<sub>4</sub>) 0.01% <br>โดยมวลต่อปริมาตร <br>
                        5. หลอดทดลองขนาดเล็ก <br>
                        6. หลอดหยด <br>
                        7. บีกเกอร์ขนาด 50 mL <br>
                        </div>

                    </div>
                </div>
            </div>
            <div class="lab-test">
                <div class="text-obj">
                    <h6>วิธีทดลอง</h6>
                </div>
                1. หยด KMnO<sub>4</sub> 5 หยด และไซโคลเฮกเซน 10 หยด ลงในหลอดทดลองขนาดเล็ก เขย่าและสังเกตการเปลี่ยนแปลง <br>
                2. ทดลองเช่นเดียวกับข้อ 1 แต่ใช้ไซโคลเฮกซีน และ เมทิลเบนซีนแทนไซโคลเฮกเซน <br>
            </div>
            <div class="lab-question">
                <div class="text-obj">
                    <h6>คำถามท้ายการทดลอง</h6>
                </div>
                สารใดเกิดปฏิกิริยาการฟอกจางสีกับสารละลายโพแทสเซียมเปอร์แมงกาเนต ทราบได้อย่างไร
            </div>
            <div class="lab-reserve" style="text-align:center;">
                <button v-on:click="goToLabType()" type="back">Back</button>
                <button v-on:click="goToReserve()" type="reserve">Reserve Lab</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AccessLab',
    methods: {
      goToLabType() {
        this.$router.push({ path: "/lab-type" });
      },
      goToReserve(){
        this.$router.push({ path: "/confirm" });
      }
    }
}
</script>

<style>
.lab-detail-1 {
    font-family: 'IBM Plex Sans Thai', sans-serif;
    max-width: 1000px;
    margin: auto;
}

.lab-image, .lab-objective, .lab-material, .lab-test , .lab-question, .lab-reserve{
    margin-bottom: 40px;
}

.lab-detail-1 h6 {
    color: black;
}

.lab-detail-1 .lab-obj{
    color: black;
}
.lab-image{
    text-align: center;
    background-size: 100% 100%!important;
    background-repeat: no-repeat;
    min-height: 100%;
    /* display: flex;
    flex-direction: column;   */
}

.lab-name{
    background-color: #316EB7;
    color: white;
    height: 100px;
    white-space: nowrap;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;    
}

.lab-detail-1 .lab-reserve button[type="back"] {
  margin-left: 15px;
  margin-right: 15px;
  border: 0;
  padding: 10px 32px;
  color: #316eb7;
  transition: 0.4s;
  border-radius: 10px;
  /* border: 2px solid #0880e8; */
  background: #E4E4E4;
  margin-top: 0.5em;
  margin-bottom: 1.0em;
  font-weight: 700;
}

.lab-detail-1 .lab-reserve button[type="back"]:hover {
  background: #db4d4d;
  color: #ffffff;
}

.lab-detail-1 .lab-reserve button[type="reserve"] {
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
  margin-bottom: 1.0em;
  font-weight: 700;
}
.lab-detail-1 .lab-reserve button[type="reserve"]:hover {
  background: #db4d4d;
  color: #ffffff;
}
</style>