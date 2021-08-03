<template>
  <div>
     <v-card

      elevation="2" width="96%" style="position:absolute;transform:translateY(-50%);left:50%;transform:translateX(-50%); background:#fbfafa!important"
    >
    <xeel-form :end="end" :timing="num_element+'/'+size_form" :isintro="intro_done" :presentation="infos_form" :the_element="element" :direction="direction" :the_element_before="element_back" :cles="i" @start_the_form="Startform" @getBacktoRoot="backdata" :levelbar="bar_level" @precedant="go_previews"> </xeel-form>
</v-card>
  </div>
</template>
<script>

import xeelForm from './formulaire/xeelForm.vue'
import elementStore from './formulaire/elementStore'

export default {
  title: 'Formulaire',

  props: ["id_form"],

  components: {
    'xeel-form': xeelForm
  },
  data(){
    return{
      original : null,
      i:0,
      answers: [],
      element_back:{},
      formulaire: null,

      redirect: 'https://datas-impact.com/',
      direction: 'forward',
      intro_done : false,
      end: false,
      id_register:null
    }
  },
  mounted(){
      this.getInfosForm();
  },
  computed:{
      infos_form: function(){
        if (!_.isNull(this.original)) {
          return {title :this.original.title, image: this.original.image, description: this.original.description, code:this.original.link, id: this.original.idformulaire}
        }
      },
      num_element: function(){
        if (!_.isNull(this.original)) {
            if ( this.original.champs.length == (this.i+1) ) {
              return this.original.champs.length
            }
        }
        return this.i
      },
      size_form: function(){
        if (!_.isNull(this.original)) {
          return this.original.champs.length
        }
      },
      element: function(){
        if (!_.isNull(this.original)) {
          return this.original.champs[this.i]
        }
      },
      element_before : function(){
        if (!_.isNull(this.original)) {
          let minus = this.i-1;
          return  this.original.champs[minus]
        }
      },
      bar_level: function(){
        if (!_.isNull(this.original)) {
        return (100/this.original.champs.length)*(this.num_element);
      }
    }
  },
  methods: {
      Startform(value){
           this.intro_done = value
      },
      getInfosForm(){
        let Oldthis = this
        this.$http.get(Oldthis.redirect+'formular/'+Oldthis.id_form+'/fulldatas').then(response => {
             if (response.body.idformulaire)
            {
              Oldthis.original = response.body
              Oldthis.$title = response.body.title
            }
           }, error => {
          });
      },
      postSubmitData(obj){
          let dataobj = {'code' : this.id_form ,'datas' : obj,'idrecord':this.id_register};
         let Oldthis = this;
          let link = this.redirect+'xeelform/post/answer/survey/'+dataobj.code

        this.$http.post(link,dataobj).then(function (response) {
          console.log('postSubmitData',response);
             if (response.data.line)
            {
              this.id_register = response.data.line.id
            }
        },function (error) {
         })
      },
      getAnswer(element){
          let q = 'Q'+'1';
           let datapost = {question : element.key, value : element.value};
           this.answers.push(datapost)
          this.element_back  = datapost
      },
      backdata(input_value){

           if (this.answers[input_value.key] !== undefined)
          {
             this.answers[input_value.key] = input_value;
          }else{
             this.answers.push(input_value)
          }
          this.postSubmitData(input_value)

          if (this.i+1 < this.size_form)
          {
            this.i+=1;
          }else{
            this.end = true
          }
          //si le prochain existe déjà et a déjà été enregistré on le transfère dans element_back pour l'afficher
          if (this.answers[this.i] !== undefined) {
              this.element_back  = this.answers[this.i]
              this.direction = 'back_and_forth';
          }else{
              this.element_back  = input_value
              this.direction ='forward';
          }
       },
      go_previews(){
         this.i-=1;
          this.element_back  = this.answers[this.i]
         this.direction = 'backwards';
       }
  }
}
</script>

<style>

.v-messages__message__ {
    color: red;
}
</style>
