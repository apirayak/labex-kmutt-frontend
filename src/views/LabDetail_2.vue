<template>
     <div class="lab-image">
            <img
              src="../assets/lab-detail/Image1.png"
              alt=""
              class="img-fluid"
            />
            <div class="lab-name">
                <h3>การเกิดปฏิกริยาของสารประกอบไอออนิก</h3>
            </div>            
        </div>
    <div class="lab-detail-2">
        <div class="container">
            <div class="lab-obj">
                <div class="text-obj">
                    <h6>จุดประสงค์การทดลอง</h6>
                </div>
                        1. ทดลองการเกิดปฏิกิริยาระหว่างสารละลายของสารประกอบไอออนิก<br> 
                        2. ระบุสารละลายคู่ที่เกิดปฏิกิริยาแล้วได้ตะกอน<br>
                        3. ระบุไอออนที่ทำปฏิกิริยาแล้วได้ตะกอน และเขียนสูตรเคมีของตะกอน<br><br>
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
                        1.สารละลายแคมเซียมคลอไรด์ ( CaCI<sub>2</sub> ) <br>
                        2. สารละลายโซเดียมคาร์บอเนต ( Na<sub>2</sub>CO<sub>3</sub>) <br>
                        3. สารละลายโซเดียมซัลเฟต ( Na<sub>2</sub>SO<sub>4</sub> ) <br>
                        4. สารละลายโซเดียมไนเทรต ( NaNO<sub>3</sub> ) <br>
                        5. สารละลายแอมโมเนียมคลอไรด์ ( NH<sub>4</sub>CI ) <br>
                        6. สารละลายแมกนีเซียมคลอไรด์ ( MgCI<sub>2</sub> ) <br>
                        7. แผ่นพลาสติกใส <br>
                        8. กระดาษสี <br>
                        9. หลอดหยด <br>
                        </div>

                    </div>
                </div>
            </div>
            <div class="lab-test">
                <div class="text-obj">
                    <h6>วิธีทดลอง</h6>
                </div>
                1. เขียนตารางขนาด 3X3 ตารางเซนติเมตร จำนวน 9 ช่อง ลงบนกระดาษสี และนำแผ่นพลาสติกใสวางบนกระดาษสี <br>
                2. หยด CaCI<sub>2</sub> ลงบนแผ่นพลาสติกใส 3 ช่อง ช่องละ 1 หยด กำหนดให้เป็นช่องที่ 1 2 และ 3 ตามลำดับ <br>
                3. หยด Na2NO3 Na<sub>2</sub>SO<sub>4</sub> และ NaNO<sub>3</sub> อย่างละ 1 หยด ลงบน CaCI<sub>2</sub> ในช่องที่ 1 2 และ 3 <br>
                4. ทำซ้ำโดยเปลี่ยนสารละลายในข้อ 1 จาก CaCI<sub>2</sub> เป็น NH<sub>4</sub>CI และ MgCI<sub>2</sub><br>
            </div>
            <div class="lab-question">
                <div class="text-obj">
                    <h6>คำถามท้ายการทดลอง</h6>
                </div>
                1. ตัวต้นและตัวแปรตามของของการทดลองนี้คืออะไร <br>
                2. สารละลายคู่ใดบ้างที่ทำให้เกิดตะกอน <br>
                3. ไอออนใดที่ทำปฏิกิริยาแล้วได้ตะกอน และตะกอนที่เกิดขึ้นเป็นสารใด<br>
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
.lab-detail-2 {
    font-family: 'IBM Plex Sans Thai', sans-serif;
    max-width: 1000px;
    margin: auto;
}

.lab-image, .lab-objective, .lab-material, .lab-test , .lab-question, .lab-reserve{
    margin-bottom: 40px;
}

.lab-detail-2 h6 {
    color: black;
}

.lab-detail-2 .lab-obj{
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
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;    
}

.lab-detail-2 .lab-reserve button[type="back"] {
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

.lab-detail-2 .lab-reserve button[type="back"]:hover {
  background: #db4d4d;
  color: #ffffff;
}

.lab-detail-2 .lab-reserve button[type="reserve"] {
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
.lab-detail-2 .lab-reserve button[type="reserve"]:hover {
  background: #db4d4d;
  color: #ffffff;
}
</style>