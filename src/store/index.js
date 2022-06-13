import { createStore } from "vuex";

//load daro modules
import auth from "./module/auth";
import product from "./module/product";

export default createStore({
  //modules, yaitu digunakan untuk memecah/membagi beberapa state ke dalam module-module kecil.
  modules: {
    auth, //panggil module auth
    product,
  },
});
