<template>
  <section class="search my-5 py-5 d-flex align-items-center justify-content-center">
      <form class="form">
        <div class="row offset-2">
          <div class="col-md-4">
            <select class="blood__select">
              <option value="No Blood">Select Your Blood </option>
              <option
                v-for="(blood, index) in bloodList"
                :key="index"
                value="A+"
                >{{ blood }}</option
              >
            </select>
          </div>
          <div class="col-md-4">
            <div class="districs">
              <input
                placeholder="Your Distric"
                class="form-control"
                list="distric"
              />
              <datalist id="distric" class="bg-primary">
                <option
                  v-for="(distric, index) in districtsList"
                  :key="index"
                  :value="distric.district"
                >
                </option>
              </datalist>
            </div>
          </div>
          <div class="col-md-4">
            <input type="submit" value="Login" class="btn" />
          </div>
        </div>
      </form>
 
  </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      bloodList: ["A+", "B-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
      districtsList: [],
    };
  },
  async mounted() {
    let result = await axios.get(
      `https://bdapis.herokuapp.com/api/v1.1/districts`
    );
    this.districtsList = result.data.data;
  },
};
</script>

<style scoped>
.container {
  height: 100vh !important;
}
</style>
