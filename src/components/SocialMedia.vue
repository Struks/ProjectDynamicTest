<template>
    <div class="social-media d-none d-md-block">
                <a v-for="(media,index) in socialMedia" :key="index" :href="media.href" target="_blank">
                    <svg 
                        :xmlns='xmlns' 
                        xmlns:xlink="http://www.w3.org/1999/xlink" 
                        width="35"
                        height="35" 
                        :viewBox='media.viewBox'>
                        <defs>
                            <path
                                :id="media.id" 
                                :d="media.d" 
                                />
                        </defs>
                        <g>
                            <g :transform="media.transform">
                                <use fill="#dadada" :xlink:href="'#' + media.id" />
                            </g>
                        </g>
                    </svg>
                </a>
               
            </div>
</template>

<script>
export default {
    props:{
        socialMedia:{
            type:Array,
            required: true
        },
        xmlns:{type: String},
        
        
        
    }
    
}
</script>


<style scoped>    
    a svg:hover #twitter {
    fill: #55acee;
    transition: 100ms;
    transition-timing-function: ease-out;
    }
    a svg:hover #facebook {
        fill: #3b5998;
        transition: 1500ms;
        transition-timing-function: ease-out;
    }
    a svg:hover #rss {
        fill: #e79411;
        transition: 100ms;
        transition-timing-function: ease-out;
    }
    a svg:hover #pinterest {
        fill: #bd081c;
        transition: 100ms;
        animation-timing-function: ease-out;
    }
    a svg:hover #google {
        fill: #ea6558;
        transition: 100ms;
        animation-timing-function: ease-out;
    }
    a svg:hover #tribbble {
        fill: #ea4c89;
        transition: 100ms;
        animation-timing-function: ease-out;
    }
    .social-media a{
        padding-right: 7px;
    }
</style>


