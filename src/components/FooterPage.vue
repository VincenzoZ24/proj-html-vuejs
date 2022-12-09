<template>
  <footer>
    <div class="container_footer">
      <img src="@/assets/images/author-logo-round-small.png" alt="" />
      <div class="text_footer">
        <div>
          <h6>ABOUT ME</h6>
          <P
            >Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Accusantium saepe quos ut unde odit ex quasi illo qui, quidem eum
            corporis inventore iste corrupti deserunt ipsam eos officia aliquam!
            Repellat.</P
          >
        </div>
        <div v-for=" obj in arrFooter" :key="obj.title">
          <h6>{{obj.title}}</h6>
          <ul class="list_stile">
            <li v-for="link in obj.paragraphs" :key="link.paragraphs">{{link}}</li>
          </ul>
        </div>

      </div>
    </div>
  </footer>
</template>

<script>

export default {
  name: 'FooterPage',
  data() {
    return {
      arrFooter: [
        {
          title: 'USEFULL LINKS',
          paragraphs: [
            'latest Book',
            'Events',
            'Business',
            'Visit My foundatin',
          ],
        },
        {
          title: 'CONTACT INFO',
          paragraphs: [
            'phone: (800)000 000',
            'mobile: (800)000 000',
            'email: info@gmail.com',
          ],
        },
      ],
    };
  },

};
</script>

<style lang="scss" scoped>
footer {
  background-image: url("../assets/images/footer-3.jpg");
  height: 50vh;
  background-position: center top;
  background-size: cover;
}
.container_footer {
  max-width: 1100px;
  margin: auto;
  color: white;
  display: flex;
  align-items: center;
  height: 100%;
}
.text_footer {
  display: flex;
}
img {
  width: 100px;
}
p {
  font-size: 10px;
  margin-top: 2rem;
  line-height: 1.5rem;
}
div {
  padding: 2rem;
  flex: 100% 1 1;
}
ul{
  margin-top: 2rem;
  font-size: 12px;
  line-height: 1.5rem;
}

  li{
    list-style-type: disclosure-closed;
}

</style>
