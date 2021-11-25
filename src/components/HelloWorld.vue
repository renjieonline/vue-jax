<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    {{ count }}
  </div>
</template>

<script>
import { ref } from 'vue';
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onActivated,
  onDeactivated,
  onErrorCaptured,
} from 'vue';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  onRenderTriggered(e) {
    console.log(e);
  },
  onRenderTracked(e) {
    console.log(e);
  },
  setup(props) {
    const count = ref(0);
    onBeforeMount(() => {
      console.log('onBeforeMount!');
    });
    onMounted(() => {
      console.log('mounted!');
    });
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate!');
    });
    onUpdated(() => {
      console.log('updated!');
    });
    onBeforeUnmount(() => {
      console.log('unmounted!');
    });
    onUnmounted(() => {
      console.log('unmounted!');
    });
    onActivated(() => {
      console.log('onActivated!');
    });
    onDeactivated(() => {
      console.log('onDeactivated!');
    });
    onErrorCaptured(() => {
      console.log('onErrorCaptured!');
    });
    return {
      count,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
