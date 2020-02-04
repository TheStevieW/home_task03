<template lang="pug">
  .root__wrapper
    admHeader()
    tabs()
    about()
</template>

<style lang="postcss" src="./styles/main.pcss">
</style>

<script>
import admHeader from "./components/header/header.vue";
import tabs from "./components/tabs/tabs.vue";
import about from "./pages/about/about.vue";

export default {
  components: {
    admHeader,
    tabs,
    about
  }
};
</script>