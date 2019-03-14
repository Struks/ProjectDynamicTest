<template>
  <div class="social-media d-none d-md-block">
    <a v-for="(media,index) in socialMedia" :key="index" :href="media.href" target="_blank">
      <svgicon :name="media.name" width="35" height="35"></svgicon>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    socialMedia: {
      type: Array,
      required: true
    },
    xmlns: { type: String }
  }
};
</script>


<style scoped>
svgicon use {
  fill: #55acee;
  transition: 100ms;
  transition-timing-function: ease-out;
}
a svgicon:hover #facebook {
  fill: #3b5998;
  transition: 100ms;
  transition-timing-function: ease-out;
}
a svgicon:hover #rss {
  fill: #e79411;
  transition: 100ms;
  transition-timing-function: ease-out;
}
a svgicon:hover #pinterest {
  fill: #bd081c;
  transition: 100ms;
  animation-timing-function: ease-out;
}
a svgicon:hover #google {
  fill: #ea6558;
  transition: 100ms;
  animation-timing-function: ease-out;
}
a svgicon:hover #tribbble {
  fill: #ea4c89;
  transition: 100ms;
  animation-timing-function: ease-out;
}
.social-media a {
  padding-right: 7px;
}
</style>


