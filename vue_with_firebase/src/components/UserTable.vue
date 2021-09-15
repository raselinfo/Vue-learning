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
        <td>
          <span v-if="!isUserUpdate">{{ uerInfo.name }}</span>
          <input type="text" v-if="isUserUpdate" v-model="userName" />
        </td>
        <td>
          <span v-if="!isUserUpdate">{{ uerInfo.email }}</span>
          <input v-if="isUserUpdate" type="text" v-model="email" />
        </td>
        <td>
          <div v-if="!isUserUpdate">
            <img
              class="avater"
              v-if="uerInfo.photo"
              :src="uerInfo.photo"
              alt=""
            />
            <img
              class="avater"
              v-else
              src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
              alt=""
            />
          </div>
          <input v-if="isUserUpdate" @input="updateImage" type="file" />
        </td>
        <td>
          <button
            v-if="!isUserUpdate"
            @click="updateUserInfo"
            class="btn btn-danger"
          >
            Edit
          </button>
          <button
            v-if="isUserUpdate"
            @click="updateUserInfo"
            class="btn btn-danger"
            :disabled="!imageURL"
          >
            Update
          </button>
        </td>
      </tr>
    </tbody>
    <hr>
    <br>
    <img style="width:200px" v-if="!imageURL && isUserUpdate" src="https://www.theinsurancecenter.net/wp-content/uploads/2019/05/0_4Gzjgh9Y7Gu8KEtZ.gif" alt="">
  </table>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { getAuth, updateProfile } from "firebase/auth";
import axios from "axios";
export default {
  setup() {
    let store = useStore();
    let uerInfo = computed(() => {
      return store.state.userInfo;
    });
    const auth = getAuth();
    let isUserUpdate = ref(false);
    let userName = ref("");
    let email = ref("");
    let imageURL = ref("");
    const updateUserInfo = async () => {
      if (isUserUpdate.value) {
        updateProfile(auth.currentUser, {
          displayName: userName.value,
          photoURL:imageURL.value,
        })
          .then(() => {
            isUserUpdate.value = false;            
            let { displayName, photoURL, uid } = auth.currentUser;
            store.dispatch("getUserInfo", {
              name: displayName,
              photo: photoURL,
              email: email.value,
              id: uid,
            });
           

          })
          .catch((error) => {
            console.log(error.message);
          });
      }
      isUserUpdate.value = true;
    };

    const updateImage = async (e) => {
      let image = e.target.files[0];
      let data = new FormData();
      data.set("key", `7212937294734cb589f710c7551dc642`);
      data.append("image", image);
      let result = await axios({
        method: "post",
        url: `https://api.imgbb.com/1/upload`,
        data: data,
      });
     imageURL.value = result.data.data.display_url;
     console.log("Image",imageURL.value)
    };
    return {
      uerInfo,
      updateUserInfo,
      isUserUpdate,
      userName,
      email,
      updateImage,
      imageURL
    };
  },
};
</script>

<style scoped>
table {
  width: 100%;
}
.avater {
  width: 50px;
}
</style>
