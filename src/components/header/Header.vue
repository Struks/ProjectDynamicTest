<template>
  <div class="container">
    <div class="row justify-content-between m-1 align-items-end">
      <div>
        <a href="/">
          <img src="/static/img/logo.svg" alt="logo">
        </a>
      </div>
      <social-media v-bind:socialMedia="socialMedia"></social-media>
      <!--hamburger menu-->
      <button
        type="button"
        class="navbar-toggler collapsed d-md-none"
        data-toggle="collapse"
        data-target="#navbarCollapse"
      >
        <span class="navbar-icon">
          <svg
            height="32px"
            id="Layer_1"
            style="fill:#737373"
            version="1.1"
            viewBox="0 0 32 32"
            width="32px"
            xml:space="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <path
              d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"
            ></path>
          </svg>
        </span>
      </button>
      <nav class="navbar navbar-expand-sm pl-0 d-md-none">
        <div class="main-menu collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav main-navigation pt-2">
            <li class="nav-item" v-for="(menu,index) in menues" :key="index">
              <router-link
                class="nav-link pl-md-0 pr-md-4"
                :to="menu.link"
                :exact="menu.exact"
              >{{menu.name}}</router-link>
            </li>

            <li class="hamburger-social-media nav-item d-md-none mt-2">
              <a
                v-for="(media,index) in socialMedia"
                :key="index"
                :href="media.href"
                target="_blank"
                class="mr-1"
              >
                <svgicon 
                  :name="media.name" 
                  width="35" 
                  height="35"
                  :class="media.class"
                ></svgicon>
              </a>
            </li>
            <!--social media hamburger-->
          </ul>
        </div>
      </nav>
    </div>

    <hr>
    <nav class="navbar navbar-expand-sm pl-0 d-none d-md-block">
      <div class="main-menu">
        <ul class="navbar-nav main-navigation pt-2">
          <li class="nav-item" v-for="(menu,index) in menues" :key="index">
            <router-link
              class="nav-link pl-md-0 pr-md-4"
              :to="menu.link"
              :exact="menu.exact"
            >{{menu.name}}</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import SocialMedia from "./SocialMedia.vue";

export default {
  components: {
    "social-media": SocialMedia
  },
  data() {
    return {
      menues: [
        { link: "/", name: "HOME", exact: true },
        { link: "/About", name: "ABOUT", exact: false },
        { link: "/Work", name: "WORK", exact: false },
        { link: "/Contact", name: "CONTACT", exact: false },
        { link: "/Link", name: "TEST", exact: false }
      ],
      xmlns: "http://www.w3.org/2000/svg",
      socialMedia: [
        {
          href: "http://www.twitter.com",
          name: "twitter",
          class: "twitter",
        },
        {
          href: "http://www.facebook.com",
          name: "facebook",
          class:'facebook'
        },
        {
          href: "http://www.rss.com",
          name: "rss",
          class: "rss"
        },
        {
          href: "http://www.pinterest.com",
          name: "pinterest",
          class: "pinterest",
        },
        {
          href: "https://plus.google.com",
          name: "google+",
          class: "google"
        },
        {
          href: "http://www.dribbble.com",
          name: "tribbble",
          class: "dribbble",
        }
      ]
    };
  }
};
</script>


<style scoped>
hr {
  margin-top: 30px;
}
.main-menu a {
  font-family: "Novecentosan", Arial, sans-serif;
  font-size: 18px;
  color: #7f7f7f;
}
.navbar {
  margin-top: -15px;
}
.router-link-active {
  color: #2ecc71 !important;
}
a svg{
  color: #dadada;
}
@media (max-width: 425px) {
  button {
    margin-left: 160px;
  }
}
@media (max-width: 375px) {
  button {
    margin-left: 110px;
  }
}
@media (max-width: 320px) {
  button {
    margin-left: 50px;
  }
}
</style>