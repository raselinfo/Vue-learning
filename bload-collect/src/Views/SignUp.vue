<template>
  <section class="login">
    <div class="container d-flex align-items-center justify-content-center">
      <div class="login__inner">
        <h1 class="login__heading text-center mb-5">Sign UP</h1>
        <form class="form">
          <input placeholder="Full Name" type="text" class="form-control" />
          <input placeholder="Email" type="email" class="form-control" />
          <input placeholder="Password" type="password" class="form-control" />
          <input
            placeholder="Confirm Password"
            type="password"
            class="form-control"
          />
          <input placeholder="Phone" type="text" class="form-control" />

          <select class="blood__select">
            <option value="No Blood">Select Your Blood </option>

            <option
              v-for="(blood, index) in bloodList"
              :key="index"
              value="A+"
              >{{ blood }}</option
            >
          </select>

          <div class="gender">
            <label for="male">Male</label>
            <input name="gender" type="radio" id="male" />
            <label for="femal">Female</label>
            <input name="gender" type="radio" id="femal" />
          </div>
          <div class="districs">
            <input placeholder="Your Distric" class="form-control" list="distric" />
            <datalist  id="distric" class="bg-primary">
              <option v-for="(distric,index) in districtsList" :key="index" :value="distric.district"> </option>              
            </datalist>
          </div>

          <input placeholder="Facebook URL" type="url" class="form-control" />

          <input type="submit" value="Sign UP" class="btn my-3 mx-auto" />
        </form>
        <router-link class="text-center text-success d-block" to="/login"
          >Login</router-link
        >
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      bloodList: ["A+", "B-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
      districtsList:[]
    };
  },
async mounted (){
   let result= await axios.get(`https://bdapis.herokuapp.com/api/v1.1/districts`)
   this.districtsList=result.data.data
   console.log(result.data.data)

  }
};
</script>

<style>

</style>
