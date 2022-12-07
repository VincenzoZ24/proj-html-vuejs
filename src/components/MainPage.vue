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
        <img src="@/assets/images/ebay-logotan-2x-400x132.png" alt="" />
        <img src="@/assets/images/audible-logotan-2x-400x132.png" alt="" />
        <img src="@/assets/images/bb-logotan-2x-400x132.png" alt="" />
        <img src="@/assets/images/kindlefire-logotan-2x-400x132.png" alt="" />
      </div>
    </section>
    <section class="audiobook">
      <div>
        <img
          class="ml"
          src="@/assets/images/audible-app-2x-200x209.png"
          alt=""
        />
        <div class="new_audio_book">
          <h2>New Audiobook</h2>
          <p>NO TIME TO READ? NO PROBLEM. LISTEN TO IT</p>
          <p class="tex_audio">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            numquam reiciendis possimus corporis aut quas porro tempore,
            explicabo eaque, mollitia pariatur
          </p>
          <div class="container_img">
            <img class="img" src="@/assets/images/audible-logo.png" alt="" />
            <img class="img" src="@/assets/images/bn-logo-tall.png" alt="" />
            <img
              class="img"
              src="@/assets/images/kindle-logo-tall.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
    <section class="critics">
      <div class="container_critics">
        <div class="critics_left">
          <div>
            <h2>What The Critics Say</h2>
            <p>TESTIMONIALS FROM AROUND THE WORLD</p>
          </div>
          <button>Read All Testimonials</button>
        </div>
        <div class="best_author">
          <div class="best_author_left">
            <img src="@/assets/images/testimonial2-2x.jpg" alt="" />
            <div>
              <h1>Best Author Of His Generation</h1>
              <hr />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                corrupti sit, recusandae mollitia expedita error molestiae esse
                distinctio quo placeat animi cupiditate sunt nemo. Deserunt
                veritatis fugit reiciendis labore nostrum.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita quo vel, magnam facere est dolor aliquid fuga error aut
                incidunt hic fugit sit natus
              </p>
              <p class="end_left">
                <img class="img_end_left"
                src="@/assets/images/nytimes-logo-white-xsmall.png" alt="">
              Justin Kilpatrik, <span>The New York Times</span>
              </p>

            </div>
          </div>
          <div class="best_author_right">
            <div class="first">
              <h3>A True Masterpice, Bravo</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolores explicabo nesciunt
                quibusdam distinctio at soluta repellendus reprehenderit
                repudiandae delectus ipsum pariatur</p>
            </div>
            <div class="the_guardian">
              <img src="@/assets/images/theguardian-xsmall.png" alt="">
              Gerald Hendlay, The Guardian
            </div>
            <div class="first">
              <h3>A Unique View On The world</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolores explicabo nesciunt
                quibusdam distinctio at soluta repellendus reprehenderit
                repudiandae delectus ipsum pariatur</p>
            </div>
            <div class="the_globe">
              <img src="@/assets/images/globe-xsmall.png" alt="">
              Mary Maxey, The Globe And Main
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="events">
      <h2>Upcoming Events</h2>
      <div>MEET THE AUTHOR IN PERSON</div>
      <div class="container_cards">
        <CardPage class="card_page" v-for="card in arrCards" :key="card.title"
        :img="card.img"
        :title="card.title"
        :paragrafo="card.paragrafo"
        />
      </div>
    </section>
  </main>
</template>

<script>
import CardPage from '@/components/CardPage.vue';

export default {
  name: 'MainPage',
  components: {
    CardPage,

  },
  data() {
    return {
      arrCards: [
        {
          img: '/img/event-05-600x359.jpg',
          title: 'Chicago Book Signin',
          paragrafo: 'Lorem ipsum dolor sit amet consectetur adipisicing elite Lorem ipsum dolor sit amet consectetur adipisicing elit. ',

        },
        {
          img: '/img/event-04-600x359.jpg',
          title: 'Meet & Greet With Amadia',
          paragrafo: 'Lorem ipsum dolor sit amet consectetur adipisicing elite Lorem ipsum dolor sit amet consectetur adipisicing elit. ',

        },
        {
          img: 'img/event-07-600x359.jpg',
          title: 'Open Book: Dialogues',
          paragrafo: 'Lorem ipsum dolor sit amet consectetur adipisicing elite Lorem ipsum dolor sit amet consectetur adipisicing elit. ',

        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.author {
  max-width: 1000px;
  margin: auto;
  text-align: center;
  line-height: 2rem;
  font-size: 20px;
  margin-bottom: 6rem;
  h1 {
    margin-bottom: 2rem;
    font-family: "La Belle Aurore", cursive;
    font-size: 50px;
    color: rgba(244, 180, 41, 1);
  }
  div {
    margin-bottom: 1rem;
  }
  button {
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    background-color: rgba(73, 169, 135, 1);
    cursor: pointer;
  }
}
.sponsor {
  background-color: rgba(254, 247, 233, 1);
  padding: 3rem;
  div {
    max-width: 1000px;
    margin: auto;

    img {
      width: 200px;
      margin-right: 2rem;
    }
  }
}
.audiobook {
  background-image: url("@/assets/images/banner.jpg");
  background-size: cover;
  height: 40vh;
  position: relative;
  margin-bottom: 3rem;
  div {
    display: flex;

    margin: auto;
    padding-top: 2.5rem;
    img {
      width: 250px;
    }
  }
}
.new_audio_book {
  flex-direction: column;
  text-align: center;
  max-width: 332px;
  h2 {
    color: white;
    margin-bottom: 1rem;
  }
  p {
    color: rgba(243, 179, 41, 1);
  }
  .tex_audio {
    color: rgba(121, 121, 121, 1);
  }
}
.img {
  max-width: 100px;
  margin-right: 1rem;
}
.container_critics {
  max-width: 1000px;
  margin: auto;
}
.ml {
  margin-left: 13rem;
}
.critics_left {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  p {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    font-size: 12px;
    color: rgba(92, 181, 169, 1);
  }
  button {
    margin: 1rem;
    padding: 0 2rem;
    border: none;
    background-color: rgb(245, 195, 88);
    color: white;
    border-radius: 5px;
  }
  button:hover {
    cursor: pointer;
    background-color: rgba(244, 180, 41, 1);
  }
}
.critics {
  height: 75vh;
  margin-bottom: 4rem;
}
hr {
  color: rgb(100, 100, 100);
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.best_author {
  display: flex;
  justify-content: space-between;
  .best_author_left {
    position: relative;
    margin-right: 5rem;

    div {
      position: absolute;
      color: white;
      padding: 5rem;
      top: 0;
      left: 0;
      bottom: 0;
    }
    img {
      display: block;
      border-bottom-right-radius: 4rem;
      filter: brightness(65%);
      width: 500px;
      height: 500px;
    }
    p {
      margin-bottom: 1rem;
    }
  }
}
.end_left{

  height: 40px;
  display: flex;
  align-items: center;
  color: white;
  span{
    color: rgba(71, 163, 124, 1);
  }

}
.img_end_left{
  flex: 40px 0 1;
   max-width: 100%;
   max-height: 100%;
    object-fit: contain;
  }
  .best_author_right{
   .first{
    text-align: center;
    background-color: rgba(254, 247, 233, 1);
    padding: 1rem;
    p{
      margin-top: .5rem;
      color: gray;
      line-height: 2rem;
    }
   }
  }
  .the_guardian{
    display: flex;
    align-items: center;
    margin-top: .5rem;
    font-size: 14px;
    margin-bottom: 2rem;
    img{
      margin-right: .5rem;
    }
  }
  .the_globe{
    display: flex;
    align-items: center;
    margin-top: .5rem;
    font-size: 14px;
    img{
      margin-right: .5rem;

    }
  }
  .events{

    background-color: rgba(254, 247, 233, 1);
    text-align: center;
    h2{
      padding-top: 2rem;
    }
    div{
      color: rgba(246, 201, 137, 1);
      margin-top: 1rem;

    }
  }
  .container_cards{
  max-width: 1100px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  color: black;
}
</style>
