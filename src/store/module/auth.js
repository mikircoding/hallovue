import Api from "../../api/Api";

const auth = {
  namespaced: true,
  //State merupakan sebuah object yang digunakan untuk mendefinisikan dan menyimpan semua data yang ada di dalam aplikasi secara reaktif
  state: {
    //state untuk "token", pakai localStorage, untuk menyimpan informasi tentang token
    token: localStorage.getItem("token") || "",

    //state "user", pakai localStorage, untuk menyimpan data user yang sedang login
    user: JSON.parse(localStorage.getItem("user")) || {},
  },

  //Mutations merupakan salah satu store yang digunakan untuk melakukan perubahan nilai padat state secara reaktif
  mutations: {
    AUTH_SUCCESS(state, token, user) {
      state.token = token;
      state.user = user;
    },

    GET_USER(state, user) {
      state.user = user;
    },

    AUTH_LOGOUT(state) {
      state.token = "";
      state.user = {};
    },
  },

  //Actions bisa di ibaratkan sama dengan mutations, tapi tentu saja ada perbedaannya,
  //jadi konsepnya adalah actions akan memanggil mutation dan mutation yang akan mengubah state-nya
  actions: {
    //get user
    getUser({ commit }) {
      //ambil data token dari localStorage
      const token = localStorage.getItem("token");
      Api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      Api.get("account/profile").then((response) => {
        commit("GET_USER", response.data);
      });
    },

    //logout
    logout({ commit }) {
      return new Promise((resolve) => {
        commit("AUTH_LOGOUT");

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        //delete header axios
        delete Api.defaults.headers.common["Authorization"];
        resolve();
      });
    },

    //login
    //commit kedalam mutation
    //user adalh data dari component isinya email dan pass
    login({ commit }, user) {
      //define callback promise
      return new Promise((resolve, reject) => {
        //fetching ke dalam api
        Api.post("auth/login", {
          //data yg dikirim ke server
          email: user.email,
          password: user.password,
        })
          .then((response) => {
            //data dari rest
            const token = response.data.token;
            const user = response.data.data;

            //set localStorage untuk menyimpan token dan data user
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));

            //set default header axios dengan token
            Api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            //commit auth success ke mutation
            commit("AUTH_SUCCESS", token, user);

            //commit get user ke mutation
            commit("GET_USER", user);
            resolve(response); //jika berhasil
          })
          .catch((error) => {
            //jika gagal, remove localStorage dengan key token
            localStorage.removeItem("token");
            //reject ke component dengan hasil response
            reject(error.response.data); //jika gagal
          });
      });
    },
  },

  //Getters digunakan untuk mendapatkan data dari state
  getters: {
    currentUser(state) {
      return state.user; //data user
    },

    isLoggedIn(state) {
      return state.token; //data token
    },
  },
};

export default auth;
