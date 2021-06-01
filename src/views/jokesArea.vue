<template>
    <base-layout :page-title="loadedMemory ? loadedMemory.title : 'Loading...' "></base-layout>
</template>

<script lang='js'>
export default {
    data(){
        return{
            buttonId: this.$route.params.id
        }
    },
    computed: {
        loadedMemory(){
            return this.$store.getters.button(this.buttonId)
        }
    },
    watch: {
        '$route'(currentRoute){
            this.buttonId = currentRoute.params.id
        }
    }
};
</script>
