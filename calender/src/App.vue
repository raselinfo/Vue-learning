<template>
  <div>
    <h1>Calender App</h1>
    <h3>{{ currentMonthInName }} {{ currentYear }}</h3>
    <section>
      <div class="days">
        <p v-for="(day, index) in days" :key="index">{{ day }}</p>
      </div>
    </section>
    <section>
      <div class="date">
        <p v-for="day in startDay()" :key="day"></p>
        <p
          v-for="date in daysInMonth(currentYear, currentMonthInNumber)"
          :key="date" ref="date" @click="getDate"
        >
          {{ date }}
        </p>
      </div>
    </section>
    <section class="button">
      <button @click="prev">Prev</button>
      <button @click="next">Next</button>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentMonthInNumber: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
      days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    };
  },
  methods: {
    daysInMonth(year, month) {
      return new Date(year, month + 1, 0).getDate();
    },
    startDay() {
      return new Date(this.currentYear, this.currentMonthInNumber, 1).getDay();
    },
    next() {
      if(this.currentMonthInNumber===11){
        this.currentYear++
        this.currentMonthInNumber=0
      }else{
        this.currentMonthInNumber++;
      }
    }, prev() {
      if(this.currentMonthInNumber===0){
        this.currentYear--;
        this.currentMonthInNumber=11
      }
      else{

        this.currentMonthInNumber--;
      }


      console.log(this.currentMonthInNumber)
    },
    getDate(){
      console.log(this.$refs.date)
      return
    }
  },
  computed:{
    currentMonthInName(){
      return new Date(this.currentYear,this.currentMonthInNumber).toLocaleString("default", {month: "long"})
    }
  }
};
</script>

<style>
.days,
.date {
  text-align: center;
  display: flex;
}
.date {
  flex-wrap: wrap;
}
.days p,
.date p {
  width: 14.28%;
}
h1 {
  text-align: center;
}
.button {
  display: flex;
  justify-content: space-between;
}
button {
  cursor: pointer;
}
</style>
