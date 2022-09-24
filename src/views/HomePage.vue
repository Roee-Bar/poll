<template>
  <v-form @submit.prevent="send">
    <div class="home">
     <h1 class="text-center">D&D quiz!</h1>
     <v-col
           cols="12"
           sm="6"
         ></v-col>
    </div>
    <v-form v-if="nametaken === false" class="px-3">
      <v-text-field label="Enter your name to enter the quiz"
        v-model="name" 
        color="purple"
        clearable>
      </v-text-field>
    </v-form>
    <v-btn class="mx-3" color="purple" v-if="nametaken === false" @click="nametaken = true">
       submit <v-icon left>mdi-plus</v-icon>
    </v-btn>
    <v-container
    class="px-0"
    fluid
    
  >
  <v-banner class="mx-3" v-if="nametaken === true"
  elevation="1"
  outlined
  rounded
  color="purple"
  
  >
    <h2>Which of the following is a third level spell?</h2>
  </v-banner>
<v-col
           cols="12"
           sm="6"
         ></v-col>
    <v-radio-group v-if="nametaken === true" v-model="radioGroup1">
      <v-radio
        label="Eldritch blast"
        value="1"
        color="purple"
        v-model="radioGroup1"
      ></v-radio>
      <v-radio
        label="Fireball"
        value="2"
        color="purple"
        v-model="radioGroup1"
      ></v-radio>
      <v-radio
        label="Cure wounds"
        value="3"
        color="purple"
        v-model="radioGroup1"
      ></v-radio>
    </v-radio-group>
    <v-banner class="mx-3" v-if="nametaken === true"
  elevation="1"
  outlined
  rounded
  color="purple">
    <h2>From the following classes, who is the tallest?</h2>
  </v-banner>
<v-col
           cols="12"
           sm="6"
         ></v-col>
    <v-radio-group v-if="nametaken === true" v-model="radioGroup2">
      <v-radio
        label="gnome"
        value="1"
        color="purple"
        v-model="radioGroup2"
      ></v-radio>
      <v-radio
        label="halfling"
        value="2"
        color="purple"
        v-model="radioGroup2"
      ></v-radio>
      <v-radio
        label="goliath"
        value="3"
        color="purple"
        v-model="radioGroup2"
      ></v-radio>
    </v-radio-group>
    <v-banner class="mx-3" v-if="nametaken === true"
  elevation="1"
  outlined
  rounded
  color="purple">
    <h2>Which weapon has the highest damage die?</h2>
  </v-banner>
<v-col
           cols="12"
           sm="6"
         ></v-col>
    <v-radio-group v-if="nametaken === true" v-model="radioGroup3">
      <v-radio
        label="dagger"
        value="1"
        color="purple"
        v-model="radioGroup3"
      ></v-radio>
      <v-radio
        label="shortbow"
        value="2"
        color="purple"
        v-model="radioGroup3"
      ></v-radio>
      <v-radio
        label="two handed axe"
        value="3"
        color="purple"
        v-model="radioGroup3"
      ></v-radio>
    </v-radio-group>
    <v-banner class="mx-3" v-if="nametaken === true"
  elevation="1"
  outlined
  rounded
  color="purple">
    <h2>From the following classes, who cant cast spells?</h2>
  </v-banner>
<v-col
           cols="12"
           sm="6"
         ></v-col>
    <v-radio-group v-if="nametaken === true"  v-model="radioGroup4">
      <v-radio
        label="barbarian"
        value="1"
        color="purple"
        v-model="radioGroup4"
      ></v-radio>
      <v-radio
        label="sorcerer"
        value="2"
        color="purple"
        v-model="radioGroup4"
      ></v-radio>
      <v-radio
        label="warlock"
        value="3"
        color="purple"
        v-model="radioGroup4"
      ></v-radio>
    </v-radio-group>
    <v-col
           cols="12"
           sm="6"
         ></v-col>
    <v-btn class="mx-3" color="purple" v-if="nametaken === true" type="submit">
      submit <v-icon left>mdi-plus</v-icon>
    </v-btn>
  </v-container>
</v-form>
</template>




<script>
    import { defineComponent } from 'vue';
    import {ref} from 'vue';
    import {supabase} from '../supabase';
    import {useRouter} from 'vue-router';
    // Components
    
    export default defineComponent({
      name: 'HomePageView',
        data(){
          return{
            nametaken: false,
          }
        },
        setup(){
          const router = useRouter();
            let score = 0;
            const radioGroup1 = ref('');
            const radioGroup2 = ref('');
            const radioGroup3 = ref('');
            const radioGroup4 = ref('');
            const name = ref('');
            const send =  async () => {
            if(radioGroup1.value === "2")
              score = score + 1;
           if(radioGroup2.value === "3")
              score = score + 1;
            if(radioGroup3.value === "3")
             score = score + 1;
            if(radioGroup4.value === "1")
             score = score + 1;
              try{
              const {error} = await supabase.from('Scores').insert([{name: name.value, score: score}])
             if(error) throw error;
             router.push("/ranking")
          }
          catch(error){
            alert(error.message)
          }
        }
          return {name,send,radioGroup1,radioGroup4,radioGroup3,radioGroup2}
        },
        
    });
    </script>
