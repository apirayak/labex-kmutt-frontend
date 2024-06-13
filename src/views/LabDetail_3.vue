<template>
     <div class="lab-image">
            <img
              src="../assets/lab-detail/Image1.png"
              alt=""
              class="img-fluid"
            />
            <div class="lab-name">
                <h3>การเปลี่ยนแปลง pH ของน้ำและสารละลายผสม<br>ระหว่างกรดแอซิติกและโซเดียมแอซิเตต</h3>
            </div>            
        </div>
    <div class="lab-detail-3">
        <div class="container">
            <div class="lab-obj">
                <div class="text-obj">
                    <h6>จุดประสงค์การทดลอง</h6>
                </div>
                        1.ทดลองเพื่อศึกษาการเปลี่ยนแปลง pH ของน้ำและสารละลายผสมระหว่างกรดแอซิติกและโซเดียมแอซิเตต<br>
                        2.เปรียบเทียบการเปลี่ยนแปลง pH ของน้ำและสารละลายผสมระหว่างกรดแอซิเตตและโซเดียมแอซิเตต
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
                        1. น้ำกลั่น<br>
                        2. สารละลายกรดแอซิติก (CH<sub>3</sub>COOH) 0.1 mol/L<br>
                        3. สารละลายโซเดียมแอซีเตต (CH<sub>3</sub>COONa) 0.1 mol/L<br>
                        4. ยูนิเวอร์ซํลอินดิเคเตอร์<br>
                        5. สารละลายกรดไฮโดรคลอริก (HCL) 0.1 mol/L1<br>
                        6. สารละลายโซเดียมไฮดรอกไซด์ (NaOH) 0.1 mol/L <br>
                        7. หลอดทดลองขนาดเล็ก <br>
                        8. หลอดหยด <br>
                        9. กระบอกตวงขนาด 10 mL<br>
                        </div>

                    </div>
                </div>
            </div>
            <div class="lab-test">
                <div class="text-obj">
                    <h6>วิธีทดลอง</h6>
                </div>
                1. ใส่สารละลายลงในหลอดทดลอง 4 หลอด ดังนี้ <br>
                    หลอดที่ 1 และ 2 ใส่น้ำกลั่นหลอดละ 2 mL <br>
                    หลอดที่ 3 และ 4 ใส่สารละลายผสมของ CH3COOH 0.1 mol/L ปริมาตร 1 mL และ CH3COONa 0.1 mol/L <br>
                    ปริมาตร 1 mL ลงไปทั้ง 2 หลอด <br>
                2. หยดยูนิเวอร์ซัลอินดิเคเตอร์ลงไปทุกหลอด หลอดละ 1 หยด เขย่าและสังเกตสีของสารละลายและค่า pH ในแต่ละ <br>
                    หลอด <br>
                3. หยด HCl 0.1 mol/L ลงในหลอดที่ 1 และ 3 หลอดละ 1 หยด บันทึกสีของสารละลายและค่า pH ในแต่ละหลอด <br>
                4. หยด NaOH 0.1 mol/L ลงในหลอดที่ 2 และ 4 หลอดละ 1 หยด บันทึกสีของสารละลายและค่า pH ในแต่ละหลอด<br>
            </div>
            <div class="lab-question">
                <div class="text-obj">
                    <h6>คำถามท้ายการทดลอง</h6>
                </div>
                1. เมื่อเติม HCl ค่า pH ของสารละลายหลอดที่ 1 และ 3 เปลี่ยนแปลงเหมือนหรือต่างกันอย่างไร <br>
                2. เมื่อเติม NaOH ค่า pH ของสารละลายหลอดที่ 2 และ 4 เปลี่ยนแปลงเหมือนหรือต่างกันอย่างไร<br>
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
.lab-detail-3 {
    font-family: 'IBM Plex Sans Thai', sans-serif;
    max-width: 1000px;
    margin: auto;
}

.lab-image, .lab-objective, .lab-material, .lab-test , .lab-question, .lab-reserve{
    margin-bottom: 40px;
}

.lab-detail-3 h6 {
    color: black;
}

.lab-detail-3 .lab-obj{
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

.lab-detail-3 .lab-reserve button[type="back"] {
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

.lab-detail-3 .lab-reserve button[type="back"]:hover {
  background: #db4d4d;
  color: #ffffff;
}

.lab-detail-3 .lab-reserve button[type="reserve"] {
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
.lab-detail-3 .lab-reserve button[type="reserve"]:hover {
  background: #db4d4d;
  color: #ffffff;
}
</style>