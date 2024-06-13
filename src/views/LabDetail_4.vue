<template>
     <div class="lab-image">
            <img
              src="../assets/lab-detail/Image1.png"
              alt=""
              class="img-fluid"
            />
            <div class="lab-name">
                <h3>สมบัติกรด - เบสของสารละลายเกลือ</h3>
            </div>            
        </div>
    <div class="lab-detail-4">
        <div class="container">
            <div class="lab-obj">
                <div class="text-obj">
                    <h6>จุดประสงค์การทดลอง</h6>
                </div>
                        1.ทดลองเพื่อศึกษาสมบัติกรด-เบสของสารละลายเกลือ <br>
                        2.ระบุสมบัติของกรด - เบสของสารละลายเกลือจากอินดิเคเตอร์ <br>
                        3.ระบุชนิดของไอออนที่ส่งผลต่อสมบัติกรด - เบสของสารละลายเกลือ <br>
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
                        1. โซเดียมคลอไรด์ (NaCl) <br>
                        2. แอมโมเนียมคลอไรด์ (NH<sub>4</sub>Cl)<br>
                        3. โซเดียมแอซิเตต (CH<sub>3</sub>COONa) <br>
                        4. ยูนิเวอร์ซัลอินดิเคเตอร์ <br>
                        5. ช้อนตักสารเบอร์ 1 <br>
                        6. หลอดลดลองขนาดกลาง <br>
                        7. แท่งแก้วคน <br>
                        8. กระบอกตวงขนาด 10 mL <br>
                        9. หลอดหยด<br>
                        </div>

                    </div>
                </div>
            </div>
            <div class="lab-test">
                <div class="text-obj">
                    <h6>วิธีทดลอง</h6>
                </div>
                1. นำ NaCl NH<sub>4</sub>Cl และ CH<sub>3</sub>COONa ใส่ลงในหลอดทดลอง หลอดละ 1 ชนิดประมาณ 1 ช้อนเบอร์ 1 จากนั้นเติมน้ำ <br>
                ปริมาตร 5 mL ลงในแต่ละหลอด คนสารด้วยแท่งแก้วคนจนได้เป็นสารละลายเนื้อเดียว <br>
                2. หยดยูนิเวอร์ซัลอินดิเคเตอร์ลงไปหลอดละ 1 หยด เขย่า สังเกตสีของสารละลายแล้วเปรียบเทียบกับแถบสีของยูนิ <br>
                เวอร์ซัลอินดิเคเตอร์ที่ pH ต่างๆดังรูป พร้อมบันทึก pH ของสารละลายเกลือแต่ละชนิด <br>
            </div>
            <div class="lab-question">
                <div class="text-obj">
                    <h6>คำถามท้ายการทดลอง</h6>
                </div>
                1.สารละลายเกลือแต่ละชนิดมีสมบัติกรด-เบสเป็นอย่างไร <br>
                2.เกลือทั้ง 3 ชนิดเมื่อละลายน้ำให้ไอออนใดบ้าง <br>
                3.ไอออนใดทำให้สมบัติกรด-เบสของสารละลายเกลือ NaCl กับ NH<sub>4</sub>Cl <br>
                4.ไอออนใดทำให้สมบัติกรด-เบสของสารละลายเกลือ NaCl กับ CH<sub>3</sub>COONa แตกต่างกัน<br>
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
.lab-detail-4 {
    font-family: 'IBM Plex Sans Thai', sans-serif;
    max-width: 1000px;
    margin: auto;
}

.lab-image, .lab-objective, .lab-material, .lab-test , .lab-question, .lab-reserve{
    margin-bottom: 40px;
}

.lab-detail-4 h6 {
    color: black;
}

.lab-detail-4 .lab-obj{
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

.lab-detail-4 .lab-reserve button[type="back"] {
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

.lab-detail-4 .lab-reserve button[type="back"]:hover {
  background: #db4d4d;
  color: #ffffff;
}

.lab-detail-4 .lab-reserve button[type="reserve"] {
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
.lab-detail-4 .lab-reserve button[type="reserve"]:hover {
  background: #db4d4d;
  color: #ffffff;
}
</style>