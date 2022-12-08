<template>
    <div class="card">
      <div class="contents">
        <img class="img_card" :src= "img" alt="" />
        <div class="text">
          <h2>{{ title }}</h2>
          <div class="container_border">
            <div class="border"></div>
          </div>

          <p>{{ paragrafo }}</p>
        </div>
      </div>
    </div>
  </template>

<script>
export default {
  name: 'CardPage2',
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
    position: relative;
  }
  img {
    width: 100%;
    filter: brightness(0.5);
    border-bottom-right-radius: 2rem;
  }
  .contents:hover img{
      filter: brightness(1);
  }
  .text {
    padding: 2rem;
    position: absolute;
    bottom: 0;
    h2{
        color: white
    };
    p{
        color: rgba(244, 180, 41, 1);
    }
  }
  .border{
    width: 4rem;
      border: 0.5px solid lightgray;
      margin-bottom: 1rem;
      margin-top: 1rem;
      display: flex;
      justify-content: center;
  }
  .container_border{
    display: flex;
    justify-content: center;
  }
  </style>
