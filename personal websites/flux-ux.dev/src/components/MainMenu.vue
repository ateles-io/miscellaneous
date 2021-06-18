<template>
    <ul class="centrallist">
    	<li v-for="page in menu">
          <a v-bind:href="page.path">{{page.name}}</a>
    	</li>
    </ul>
</template>

<script>
    export default {
        name: 'MainMenu',
        props: {
            menu: null
        }
    }
</script>

<style scoped>
    .centrallist
    {
        text-align:center;
        margin:0px;
        margin-top:0px;
        padding:0px;
        position:absolute;
        margin: '0 auto';
        left: 0;
        right: 0;
    }
    .centrallist > li
    {
    	margin-bottom: 20px;
    	list-style-type: none;
    	font-size:18px;
    }
</style>
