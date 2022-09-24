<template>
    <div class="home">
       <router-link to="/">
         <h1>View rankings</h1>
       </router-link>
       <v-col
             cols="12"
             sm="6"
           ></v-col>
       </div>
       <v-card v-if="dataLoaded === true" v-scroll.self="onScroll" max-height="400" class="overflow-y-auto">
       <li v-for="item in data" :key="item.score">
       #{{count++}} {{ item.name }}: {{ item.score }}
           </li>
   </v-card>
   </template>

   <script>
       import {supabase} from '../supabase';
       import {ref} from 'vue'
       export default {
           setup(){
           const data = ref([])
           const dataLoaded = ref(null)
           let count =1;
           const display = async () => {
               try{
                   const { data: values, error } = await supabase.from('Scores').select('name, score').order('score', { ascending: false })
                   if(error) throw error;
                   data.value = values;
                   dataLoaded.value = true;
               }
               catch(error){
                   alert(error.message)
               }
   
           }
           display();
           return {count,data,dataLoaded};
       },
       }
       </script>