<template>
  <table class="table table-dark table-striped">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Photo</th>
        <th>Edit</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{{uerInfo.name}}</td>
        <td>{{uerInfo.email}}</td>
        <td>
            <img class="avater" v-if="uerInfo.photo" :src="uerInfo.photo" alt="">
             <img class="avater" v-else src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="">
            
        </td>
        <td>
          <button class="btn btn-danger">Edit</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import axios from "axios"
import { onMounted ,ref} from 'vue';
export default {
    setup(){
        let uerInfo=ref({})
       onMounted(async ()=>{
            let result=await axios.get(`http://localhost:3000/userInfo`)
            uerInfo.value=result.data
        })

        return{
            uerInfo
        }
    }
};
</script>

<style scoped>
table {
  width: 100%;
}
.avater{
    width:50px;

}

</style>
