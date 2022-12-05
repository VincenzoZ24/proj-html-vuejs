<!-- eslint-disable vue/no-parsing-error -->
<template>

<div class="header_menu">
    <div class="background"></div>
    <div class="logo">
        <img src="../assets/images/author-logo-round.png" alt="">
    </div>

<ul>
<li v-for="link in arrLinkMenu" :key="link">{{link}}</li>
</ul>
<div class="img_book">
    <img src="../assets/images/book-widget.png" alt="">
    <div>

        <h3>Latest Book Release</h3>
        <p>D. VAUGHN AUTOBIOGRAPHY</p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Aliquam exercitationem eaque perspiciatis eos ratione nemo
    </div>

</div>

</div>
</template>

<script>
export default {
  name: 'HeaderPage',
  data() {
    return {
      arrLinkMenu: ['Home', 'About Me', 'Testimonials', 'My BLog', 'Meetups', 'Shop', 'Contact Me'],
    };
  },
};
</script>

<style lang="scss" scoped>
.logo{
    width: 200px;
    position: absolute;
    top: 0;
    img{
        width: 100%;
    }
}
.background{
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center;
    background-image: url('../assets/images/hero-07-2x.jpg');
    position: relative;
    filter: brightness(50%);
}
.header_menu{
    height: 70vh;
position: relative;
    ul{
        position: absolute;
        top: 0;
        right: 0;
        color: white;
        padding: 2rem;
        display: flex;
        justify-content: flex-end;
        li{
            margin-right: 1.5rem;
            list-style: none;

        }
    }
}
li:hover {
    color:rgba(244, 180, 41, 1);
    cursor: pointer;
}
.img_book{
    display: flex;
    position: absolute;
    bottom: 0;
    right: 0;
    max-width: 35%;
    background-color: white;
    padding: 2rem;
    img{
        width:200px ;
    }
    h3{
        margin-bottom: .5rem;
    }
    p{
        margin-bottom: 0.5rem;
        color:rgba(244, 180, 41, 1) ;
    }
}
</style>
