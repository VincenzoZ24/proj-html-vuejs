<template>
  <div class="card">
    <div class="contents">
      <img class="img_card" :src="img" alt="" />
      <h2>{{ title }}</h2>
      <div class="border"></div>
      <p>{{paragrafo}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardPage',
  props: {
    img: {
      type: String,
    },
    title: {
      type: String,
    },
    paragrafo: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.contents{
    width: calc((1100px - 2rem) / 3);
    margin-bottom: 2rem;
    color: black;
}
img{
    width: 100%;
}
</style>
