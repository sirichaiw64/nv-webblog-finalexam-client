import UsersService from "@/services/UserService";

export default (await import('vue')).defineComponent({
data() {
return {
user: {
name: "",
brand: "",
watt: "",
power_input: "",
status: "active",
type: "",
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
});
