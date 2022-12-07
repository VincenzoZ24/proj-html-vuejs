<template>
  <div class="card">
    <div class="contents">
      <img class="img_card" :src= "img" alt="" />
      <div class="text">
        <h2>{{ title }}</h2>
        <div class="border"></div>
        <p>{{ paragrafo }}</p>
      </div>
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
.contents {
  width: calc((1100px - 2rem) / 3);
  margin-bottom: 2rem;
  color: black;
}
img {
  width: 100%;
  filter: brightness(0.5);
}
.contents:hover img{
    filter: brightness(1);
}
.text {
  background-color: white;
  padding: 2rem;
}
.border{
    border: 0.5px solid lightgray;
    margin-bottom: 1rem;
    margin-top: 1rem;
}
</style>
