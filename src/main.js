const { createApp } = require("vue");
import App from "./App.vue";
import { testb } from "./utils/b";
import { testc } from "./utils/c";

const { testb1 } = require("./utils/b1");
const { testc1 } = require("./utils/c1");

createApp(App).mount("#app");
testb();
testc();
testb1();
testc1();
