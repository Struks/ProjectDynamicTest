<template>
    <div class="margin-bottom">
        <anime-banner></anime-banner>
        <popup-video></popup-video>
        <carousel></carousel>
    </div>
</template>

<script>
import BannerAnime from './homeComponents/BannerAnimation.vue';
import Popup from './homeComponents/PopUpVideo.vue';
import Carousel from './homeComponents/Carousel.vue'

export default {
    components:{
        'anime-banner': BannerAnime,
        'popup-video': Popup,
        'carousel':Carousel
    }
}
</script>


<style scoped>
.margin-bottom{
    margin-bottom: 200px;
}
@media(max-width: 768px){
    .margin-bottom{
        margin-bottom: 150px;
    }
}
@media(max-width: 425px){
    .margin-bottom{
        margin-bottom: 80px;
    }
}
@media(max-width: 425px){
    .margin-bottom{
        margin-bottom: 90px;
    }
}

</style>





