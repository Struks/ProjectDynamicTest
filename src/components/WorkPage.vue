<template>
  <div class="margin-bottom">
    <hero-banner v-bind:headline="headline"></hero-banner>
    <div class="container">
      <!-- categories for mobile view -->
      <div class="content d-md-none" id="search-header">
        <div class="row">
          <div class="col-6" id="filters content-category">
            <nav class="nav-bar navbar-expand-sm navbar-light" id="navbar-work">
              <a href="#" class="nav-link dropdown-toggle" id="navbarDropdown selected" role="button" data-toggle='dropdown' aria-haspopup='true' aria-expanded="false"></a>
              <div class="portfolioFilter navbar-collapse mt-md-5 pb-md-5 dropdown-menu" aria-labelledby="navbarDropdown">
                <ul class="sort-nav navbar-nav main-navigation">
                 <label @click="active(1)" :class="{active : active_el == 1}">
                  <input type="radio" checked v-model="selectedCategory" value="All">ALL
                </label>
                <label @click="active(2)" :class="{active : active_el == 2}">
                  <input type="radio" v-model="selectedCategory" value="Print">PRINT
                </label>
                <label @click="active(3)" :class="{active : active_el == 3}">
                  <input type="radio" v-model="selectedCategory" value="Photography">PHOTOGRAPHY
                </label>
                <label @click="active(4)" :class="{active : active_el == 4}">
                  <input type="radio" v-model="selectedCategory" value="Web">WEB
                </label>
                <label @click="active(5)" :class="{active : active_el == 5}">
                  <input type="radio" v-model="selectedCategory" value="Applications">APPLICATIONS</label>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div><!-- /categories for mobile view -->

      <!-- categories for dekstop view-->
      <div class="row categories d-none d-md-block">
        <div class="col filter">
          <label @click="active(1)" :class="{active : active_el == 1}">
            <input type="radio" checked v-model="selectedCategory" value="All">ALL
          </label>
          <label @click="active(2)" :class="{active : active_el == 2}">
            <input type="radio" v-model="selectedCategory" value="Print">PRINT
          </label>
          <label @click="active(3)" :class="{active : active_el == 3}">
            <input type="radio" v-model="selectedCategory" value="Photography">PHOTOGRAPHY
          </label>
          <label @click="active(4)" :class="{active : active_el == 4}">
            <input type="radio" v-model="selectedCategory" value="Web">WEB
          </label>
          <label @click="active(5)" :class="{active : active_el == 5}">
            <input type="radio" v-model="selectedCategory" value="Applications">APPLICATIONS</label>
        </div>
          
          <!-- list/grid icons -->
          <div class="col-auto list-grid-layout d-none d-md-block">
            <router-link class="nav-item" to="#grid" >
              <svg
                @click="switchToGrid()"
                enable-background="new 0 0 52 51"
                height="51px"
                id="grid-view"
                version="1.1"
                viewBox="0 0 52 51"
                width="52px"
                xml:space="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <g>
                  <rect id="grid-view" fill="#737373" height="23" width="23"></rect>
                  <rect id="grid-view" fill="#737373" height="23" width="23" x="29"></rect>
                  <rect id="grid-view" fill="#737373" height="23" width="23" y="28"></rect>
                  <rect id="grid-view" fill="#737373" height="23" width="23" x="29" y="28"></rect>
                </g>
              </svg>
            </router-link>
            <router-link class="nav-item" to="#list" >
              <svg
                @click="switchToList()"
                height="14px"
                version="1.1"
                viewBox="0 0 19 14"
                width="19px"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <title></title>
                <desc></desc>
                <defs></defs>
                <g fill="none" fill-rule="evenodd" id="list-view" stroke="none" stroke-width="1">
                  <g fill="#737373" id="list-view" transform="translate(-45.000000, -509.000000)">
                    <g id="list-view" transform="translate(45.500000, 509.000000)">
                      <path
                        d="M0,10 L17,10 L17,8 L0,8 L0,10 L0,10 Z M0,14 L17,14 L17,12 L0,12 L0,14 L0,14 Z M0,6 L17,6 L17,4 L0,4 L0,6 L0,6 Z M0,0 L0,2 L17,2 L17,0 L0,0 L0,0 Z"
                        id="list-view"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </router-link>
          </div>
      </div>

      <div style="clear: both;"></div>

      <div class="row portfolioContainer grid-layout" id="portfolio">
        <div v-for="image in filteredImages" :key="image.id" class=" col-lg-4 col-md-6 col-sm-12 z-hovr" >
          <a href="#">
            <img width="300px" :src="image.src" :alt="image.alt" class="group list-group-image">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "./Banner.vue";
export default {
  components: {
    "hero-banner": Banner
  },
  data() {
    return {
      headline: "check out what i can do",
      // available:false,
      images: [
        {
          id: 1,
          src: "/static/img/zirafa.png",
          alt: "zirafa",
          category: "Photography",
          title:'',
          about:''
        },
        {
          id: 2,
          src: "/static/img/mid.png",
          alt: "applications",
          category: "Applications"
        },
        {
          id: 3,
          src: "/static/img/left2.png",
          alt: "love",
          category: "Photography"
        },
        {
          id: 4,
          src: "/static/img/left1.png",
          alt: "smile",
          category: "Print"
        },
        {
          id: 5,
          src: "/static/img/Right2.png",
          alt: "media",
          category: "Web"
        },
        {
          id: 6,
          src: "/static/img/right1.png",
          alt: "words",
          category: "Print"
        },
        {
          id: 7,
          src: "/static/img/pingvininaocari.png",
          alt: "pingvin",
          category: "Web"
        },
        {
          id: 8,
          src: "/static/img/gun.png",
          alt: "gun",
          category: "Print"
        },
        {
          id: 9,
          src: "/static/img/band.png",
          alt: "band",
          category: "Photography"
        }
      ],
      selectedCategory: "All",
      active_el: 1
    };
  },
  computed: {
    filteredImages: function() {
      let vm = this;
      let category = vm.selectedCategory;
      let result = [];
      if(category !== "All"){
        result = vm.images.filter(function(image){
          return image.category === category;
        });
      }
      else{
        result = vm.images;
      }
      return result;
    }
  },
  methods:{
    //grid-list methods
    switchToGrid:function(){
      let portfolioClass = document.getElementById('portfolio').classList;
      if(portfolioClass.contains('list-layout')){
        portfolioClass.remove('list-layout');
        portfolioClass.add('grid-layout')
      }
    },
    switchToList:function(){
      let portfolioClass = document.getElementById('portfolio').classList;
      if(portfolioClass.contains('grid-layout')){
        portfolioClass.remove('grid-layout');
        portfolioClass.add('list-layout')
      }
    },
    //paint category list
    active:function(el) {
      return this.active_el = el
    }

  }
};
</script>

<style scoped>
.margin-bottom {
  margin-bottom: 240px;
}
.portfolioFilter {
  padding-left: 0px;
}
label {
  font-family: "Novecentosan", Arial, sans-serif;
  font-size: 18px;
  color: #7f7f7f;
  padding-left: 0px;
  cursor: pointer;
  margin-right: 5px;
  margin-bottom: 45px
}
@media(max-width:425px){
  label{
    margin-bottom: 10px;
  }
}
label input[type="radio"]{
  display: none;
}
.filter{
  width: 80%;             
}
.filter label::after{
  content: "/";
  margin-left: 5px;
  color: #7f7f7f ;
  
}
.filter label:last-child::after{
  content: ""
}
.categories{
  margin-top: 42px;
}
.categoryGreen{
  color: #2ecc71;
}
.active{
  color: #2ecc71;
}
/* grid-list view */
.list-grid-layout svg{
  width: 15px;
  height: 15px;
  margin-right: 5px;
}
.router-link-active svg #list-view{
  fill: #a5e4bb;
  transition: 100ms;
  transition-timing-function: ease-out;
} 
.router-link-active svg #grid-view{
  fill: #a5e4bb;
  transition: 100ms;
  transition-timing-function: ease-out;
}
.list-grid-layout {
  margin-left: 0px;
}
.grid-layout img{
  width: 100%;
  height: 100%;
  padding-bottom: 20px;
}

.list-layout{
  display: grid;
  grid-auto-columns: 1fr;
  grid-row-gap: 1.3em; 
}
@media(max-width: 425px){
  .list-layout{
    text-align: center;
  }
  .margin-bottom {
    margin-bottom: 120px !important;
  }
}
@media(max-width: 768px){
  .margin-bottom {
    margin-bottom: 190px;
  }
}
.z-hovr {
  opacity: 1;
  -webkit-transform: scale(1, 1);
  -webkit-transition-timing-function: ease-out;
  -webkit-transition-duration: 250ms;
  -moz-transition-timing-function: ease-out;
  -moz-transition-duration: 250ms;
  -moz-transform: scale(1, 1);
  transform: scale(1, 1);
  transition-timing-function: ease-out;
  transition-duration: 250ms;
}
.z-hovr:hover {
  opacity: 0.9;
  transform: scale(1.02, 1.02);
  -webkit-transform: scale(1.02, 1.02);
  transition-timing-function: ease-out;
  -webkit-transition-timing-function: ease-out;
  transition-duration: 250ms;
  -webkit-transition-duration: 250ms;
  -moz-transform: scale(1.02, 1.02);
  -moz-transition-timing-function: ease-out;
  -moz-transition-duration: 250ms;
  position: relative;
  z-index: 99;
}
</style>
