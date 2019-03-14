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
      <div class="categories d-none d-md-block">
        <div class="filter">
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
          <div class="list-grid-layout d-none d-md-block float-right">
            <a class="nav-item" href="#grid" >
              <svgicon
                name="gridView"
                id="grid-view"
                @click="switchToGrid(1)" :class="{activeView : active_view == 1}"

              ></svgicon>
            </a>
            <a class="nav-item" href="#list" >
              <svgicon
                name="listView"
                id="list-view"
                @click="switchToList(2)" :class="{activeView : active_view == 2}"
              ></svgicon>
            </a>
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
      active_el: 1,
      active_view: 1,
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
    switchToGrid:function(view){
      let portfolioClass = document.getElementById('portfolio').classList;
      if(portfolioClass.contains('list-layout')){
        portfolioClass.remove('list-layout');
        portfolioClass.add('grid-layout')
      }
      return this.active_view = view
    },
    switchToList:function(view){
      let portfolioClass = document.getElementById('portfolio').classList;
      if(portfolioClass.contains('grid-layout')){
        portfolioClass.remove('grid-layout');
        portfolioClass.add('list-layout')
      }
      return this.active_view = view
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
  display: inline;            
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
  margin-top: 10px;
  color: #7f7f7f ;
}
.activeView{
  color: #2ecc71 !important;
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
@media(max-width: 768px){
  .margin-bottom {
    margin-bottom: 190px;
  }
}
@media(max-width: 425px){
  .list-layout{
    text-align: center;
  }
  .margin-bottom {
    margin-bottom: 120px !important;
  }
  label{
    margin-left: 5px;
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
