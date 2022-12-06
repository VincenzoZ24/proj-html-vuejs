<template>
  <main>
    <div class="author">
    <h1>More About Damon Vaughn</h1>
    <div>
      Damon Vaughn is a professor of psychology at University of Toronto,
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </div>

    <button>Meet The Author</button>
  </div>
  <section class="sponsor">
    <div>
      <img src="@/assets/images/ebay-logotan-2x-400x132.png" alt="">
      <img src="@/assets/images/audible-logotan-2x-400x132.png" alt="">
      <img src="@/assets/images/bb-logotan-2x-400x132.png" alt="">
      <img src="@/assets/images/kindlefire-logotan-2x-400x132.png" alt="">
    </div>
  </section>
  <section class="audiobook">
    <div>
      <img src="@/assets/images/audible-app-2x-200x209.png" alt="">
      <div class="new_audio_book">

        <h2>New Audiobook</h2>
         <p>NO TIME TO READ? NO PROBLEM. LISTEN TO IT</p>
         <p class="tex_audio">Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Nulla numquam reiciendis possimus corporis aut quas porro tempore, explicabo eaque,
          mollitia pariatur </p>
          <div class="container_img">
            <img class="img" src="@/assets/images/audible-logo.png" alt="">
          <img class="img" src="@/assets/images/bn-logo-tall.png" alt="">
          <img class="img" src="@/assets/images/kindle-logo-tall.png" alt="">
          </div>

      </div>
    </div>
  </section>
  </main>

</template>

<script>
export default {
  name: 'MainPage',
};
</script>

<style lang="scss" scoped>
.author{
  max-width: 1000px ;
  margin: auto;
  text-align: center;
  line-height: 2rem;
  font-size: 20px;
  margin-bottom: 6rem;
  h1{
    margin-bottom: 2rem;
    font-family: "La Belle Aurore", cursive;
    font-size: 50px;
    color:  rgba(244, 180, 41, 1);;
  }
  div{
    margin-bottom: 1rem;
  }
  button{
    color: white;
    padding: .5rem 1rem;
    border: none;
    background-color: rgba(73, 169, 135, 1);
    cursor: pointer;
  }

}
.sponsor{
  background-color: rgba(254, 247, 233, 1);
  padding: 3rem;
  div{
    max-width: 1000px;
    margin: auto;

    img{
      width: 200px;
      margin-right: 2rem;
    }
  }

}
.audiobook{
  background-image: url('@/assets/images/banner.jpg');
  background-size: cover;
  height: 40vh;
  position: relative;
  div{
    width: 1000px;
    display: flex;

    margin: auto;
    padding-top: 2.5rem;
    img{
      width: 250px;
    }
  }
}
.new_audio_book{
  flex-direction: column;
  text-align: center;
  max-width: 332px;
    h2{
    color: white;
    margin-bottom: 1rem;
  }
  p{
    color: rgba(243, 179, 41, 1);
  }
  .tex_audio{
    color: rgba(121, 121, 121, 1);
  }

}
.img{
    max-width: 100px;
    margin-right: 1rem;
  }
</style>
