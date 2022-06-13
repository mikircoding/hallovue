<template>
  <div class="login">
    <!-- component -->
    <div class="relative py-16 bg-gradient-to-br from-sky-50 to-gray-200">
      <div
        class="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40"
      >
        <div class="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
          <div class="rounded-xl bg-white shadow-xl">
            <div class="p-6 sm:p-16">
              <div class="space-y-2">
                <h2 class="mb-8 text-2xl text-cyan-900 font-bold">
                  Login dulu yuk
                </h2>
              </div>
              <form @submit.prevent="login">
                <div class="mb-6">
                  <div class="relative">
                    <div
                      class="
                        absolute
                        inset-y-0
                        left-0
                        flex
                        items-center
                        pl-3
                        pointer-events-none
                      "
                    >
                      <svg
                        class="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                        ></path>
                        <path
                          d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                        ></path>
                      </svg>
                    </div>
                    <input
                      type="text"
                      placeholder="email"
                      v-model="user.email"
                      class="
                        bg-gray-50
                        border border-gray-300
                        text-gray-900 text-sm
                        rounded-lg
                        focus:ring-blue-500 focus:border-blue-500
                        block
                        w-full
                        pl-10
                        p-2.5
                        dark:bg-gray-700
                        dark:border-gray-600
                        dark:placeholder-gray-400
                        dark:text-white
                        dark:focus:ring-blue-500
                        dark:focus:border-blue-500
                      "
                    />
                  </div>
                </div>
                <div class="mb-6">
                  <input
                    type="password"
                    placeholder="password"
                    v-model="user.password"
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
                      from-purple-600
                      to-blue-500
                      hover:bg-gradient-to-bl
                      focus:ring-4 focus:outline-none focus:ring-blue-300
                      dark:focus:ring-blue-800
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
                    Login
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
import { ref, reactive, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";

export default {
  name: "LoginComponent",

  setup() {
    const user = reactive({
      email: "",
      password: "",
    });

    const validation = ref([]);
    const store = useStore();
    const router = useRouter();
    const toast = useToast();

    //method login
    function login() {
      let email = user.email;
      let password = user.password;

      store
        .dispatch("auth/login", {
          email,
          password,
        })
        .then(() => {
          //direct ke dashboard
          router.push({ name: "dashboard" });
          toast.success("login berhasil");
        })
        .catch((error) => {
          validation.value = error;
          if (validation.value.email) {
            toast.error(`${validation.value.email[0]}`);
          }

          if (validation.value.password) {
            toast.error(`${validation.value.password[0]}`);
          }

          if (validation.value.message) {
            toast.error(`${validation.value.message}`);
          }
        });
    }

    onMounted(() => {
      if (store.getters["auth/isLoggedIn"]) {
        router.push({ name: "dashboard" });
      }
    });

    return {
      user,
      validation,
      login,
    };
  },
};
</script>

<style>
</style>
