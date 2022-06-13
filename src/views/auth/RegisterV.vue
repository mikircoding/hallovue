<template>
  <div class="register">
    <!-- component -->
    <div class="relative py-16 bg-gradient-to-br from-sky-50 to-gray-200">
      <div
        class="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40"
      >
        <div class="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
          <div class="rounded-xl bg-white shadow-xl">
            <div class="p-6 sm:p-16">
              <div class="space-y-2">
                <h2 class="mb-8 text-2xl text-cyan-900 font-bold">Register</h2>
              </div>
              <form @submit.prevent="register">
                <div class="mb-6">
                  <input
                    type="text"
                    v-model="user.name"
                    placeholder="nama lengkap"
                    class="
                      shadow-sm
                      bg-gray-50
                      border border-gray-300
                      text-gray-900 text-sm
                      rounded-lg
                      focus:ring-blue-500 focus:border-blue-500
                      block
                      w-full
                      p-2.5
                      dark:bg-gray-700
                      dark:border-gray-600
                      dark:placeholder-gray-400
                      dark:text-white
                      dark:focus:ring-blue-500
                      dark:focus:border-blue-500
                      dark:shadow-sm-light
                    "
                  />
                </div>
                <div class="mb-6">
                  <input
                    type="text"
                    v-model="user.email"
                    placeholder="email"
                    class="
                      shadow-sm
                      bg-gray-50
                      border border-gray-300
                      text-gray-900 text-sm
                      rounded-lg
                      focus:ring-blue-500 focus:border-blue-500
                      block
                      w-full
                      p-2.5
                      dark:bg-gray-700
                      dark:border-gray-600
                      dark:placeholder-gray-400
                      dark:text-white
                      dark:focus:ring-blue-500
                      dark:focus:border-blue-500
                      dark:shadow-sm-light
                    "
                  />
                </div>
                <div class="mb-6">
                  <input
                    type="password"
                    v-model="user.password"
                    placeholder="password"
                    class="
                      shadow-sm
                      bg-gray-50
                      border border-gray-300
                      text-gray-900 text-sm
                      rounded-lg
                      focus:ring-blue-500 focus:border-blue-500
                      block
                      w-full
                      p-2.5
                      dark:bg-gray-700
                      dark:border-gray-600
                      dark:placeholder-gray-400
                      dark:text-white
                      dark:focus:ring-blue-500
                      dark:focus:border-blue-500
                      dark:shadow-sm-light
                    "
                  />
                </div>
                <div class="mb-6">
                  <input
                    type="password"
                    v-model="user.password_confirmation"
                    placeholder="password confirm"
                    class="
                      shadow-sm
                      bg-gray-50
                      border border-gray-300
                      text-gray-900 text-sm
                      rounded-lg
                      focus:ring-blue-500 focus:border-blue-500
                      block
                      w-full
                      p-2.5
                      dark:bg-gray-700
                      dark:border-gray-600
                      dark:placeholder-gray-400
                      dark:text-white
                      dark:focus:ring-blue-500
                      dark:focus:border-blue-500
                      dark:shadow-sm-light
                    "
                  />
                </div>
                <div class="mb-6">
                  <button
                    class="
                      text-white
                      bg-gradient-to-br
                      from-green-400
                      to-blue-600
                      hover:bg-gradient-to-bl
                      focus:ring-4 focus:outline-none focus:ring-green-200
                      dark:focus:ring-green-800
                      font-medium
                      rounded-lg
                      text-sm
                      px-5
                      py-2.5
                      text-center
                      mr-2
                      mb-2
                    "
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  name: "RegisterComponent",

  setup() {
    const user = reactive({
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    });
    const validation = ref([]);

    const store = useStore();

    const router = useRouter();

    function register() {
      let name = user.name;
      let email = user.email;
      let password = user.password;
      let password_confirmation = user.password_confirmation;

      //panggil action register dari modul auth
      store
        .dispatch("auth/register", {
          name,
          email,
          password,
          password_confirmation,
        })
        .then(() => {
          //redirect ke dashboard
          router.push({
            name: "dashboard",
          });
          //sweetalert disini
        })
        .catch((error) => {
          validation.value = error;
        });
    }

    //return state dan function
    return {
      user,
      validation,
      register,
    };
  },
};
</script>

<style>
</style>
