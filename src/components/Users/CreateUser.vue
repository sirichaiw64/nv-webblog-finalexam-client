<template>
  <div>
    <h1>Create Users</h1>
    <form v-on:submit.prevent="createUser">
      <p>name: <input type="text" v-model="user.name" /></p>
      <p>brand: <input type="text" v-model="user.brand" /></p>
      <p>watt: <input type="text" v-model="user.watt" /></p>
      <p>power_input: <input type="text" v-model="user.power_input" /></p>
      <p>status: <input type="text" v-model="user.power_input" /></p>
      <p>type: <input type="text" v-model="user.power_input" /></p>

      <p><button type="submit">create user</button></p>
    </form>
    <hr />
    <div>
      <p>name: {{ user.name }}</p>
      <p>brand: {{ user.brand }}</p>
      <p>watt: {{ user.watt }}</p>
      <p>power_input: {{ user.power_input }}</p>
      <p>status: {{ user.status }}</p>
      <p>type: {{ user.type }}</p>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      user: {
        name: "",
        brand: "",
        watt: "",
        power_input: "",
        status: "active"
       
      }
    };
  },
  methods: {
    async createUser() {
      try {
        await UsersService.post(this.user);
        this.$router.push({
          name: "users"
        });
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>
<style scoped></style>
