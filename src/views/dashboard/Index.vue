<template>
  <div class="dashboard">
    <!-- component -->
    <div
      class="
        bg-gray-200
        font-sans
        h-screen
        w-full
        flex flex-row
        justify-center
        items-center
      "
    >
      <div class="card w-96 mx-auto bg-white shadow-xl hover:shadow">
        <img
          class="w-32 mx-auto rounded-full -mt-20 border-8 border-white"
          src="https://avatars.githubusercontent.com/u/67946056?v=4"
          alt=""
        />
        <div class="text-center mt-2 text-3xl font-medium">{{ user.name }}</div>
        <div class="text-center mt-2 font-light text-sm">{{ user.email }}</div>
        <div class="text-center font-normal text-lg">Kerala</div>
        <div class="px-6 text-center mt-2 font-light text-sm">
          <p>
            Front end Developer, avid reader. Love to take a long walk, swim
          </p>
        </div>
        <hr class="mt-8" />
        <div class="flex p-4">
          <div class="w-1/2 text-center">
            <span class="font-bold">1.8 k</span> Followers
          </div>
          <div class="w-0 border border-gray-300"></div>
          <div class="w-1/2 text-center">
            <span class="font-bold">
              <a @click="logout">Logout</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { computed, onMounted } from "vue";
import { useToast } from "vue-toastification";

export default {
  name: "DashboardComponent",

  setup() {
    const store = useStore();
    const router = useRouter();
    const toast = useToast();

    onMounted(() => {
      //fetching ke api
      store.dispatch("account/profile");
    });

    //data user login
    const user = computed(() => {
      return store.state.auth.user;
    });

    function logout() {
      store.dispatch("auth/logout").then(() => {
        router.push({
          name: "loginv",
        });
        toast.success("Logout berhasil");
      });
    }

    return {
      logout,
      user,
    };
  },
};
</script>

<style></style>