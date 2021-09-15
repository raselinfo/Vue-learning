<template>
  <section class="login">
    <div
      class="container d-flex align-items-center justify-content-center"
    >
      <div class="login__inner">
        <h1 class="login__heading text-center mb-5">Login</h1>
        <form class="form">
          <input type="email" class="form-control" />
          <input type="password" class="form-control my-4" />
          <input type="submit" value="Login" class="btn my-3 mx-auto"/>
        </form>
        <p class="text-center text-info">Reset Password</p>
        <router-link class="text-center text-success d-block" to="/signup">Havan't an account?</router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>

</style>
