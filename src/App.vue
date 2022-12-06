<template>
<div class="container">
<HeaderPage/>
<MainPage/>
<FooterPage/>
</div>
</template>

<script>
import HeaderPage from '@/components/HeaderPage.vue';
import MainPage from '@/components/MainPage.vue';
import FooterPage from '@/components/FooterPage.vue';

export default {
  name: 'App',
  components: {
    HeaderPage,
    MainPage,
    FooterPage,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=La+Belle+Aurore&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>
