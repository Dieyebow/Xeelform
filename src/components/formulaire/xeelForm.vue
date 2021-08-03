<template>
   <div>

     <validation-observer ref="observer">
       <v-form ref="form" v-model="valid" lazy-validation >
         <v-progress-linear v-if="isintro"
         buffer-value="100"
          :value="levelbar" style="height:20px"
          color="#ff214f"
        >
         <strong>{{timing}}</strong>
      </v-progress-linear>
          <div style="margin-top:10%;margin-bottom:10%;padding:12px">

          <transition  name="fade">
            <div v-if="end">
              <v-subheader class="text-center v-header">Merci d'avoir répondu <br> à très bientôt  </v-subheader>
            </div>
            <div v-else>
             <div v-if="!isintro">
               <div v-if="presentation">
             <v-img
               height="250" width="100%" v-if="presentation.image == null"
               src="https://datas-impact.com//Public/assets/logos/white-logo-xeel.png"
             ></v-img>
             <v-img
                 style="width:100%" v-else
               :src="presentation.image"
             ></v-img>
           </div>
             <div v-if="presentation !== undefined">
               <v-card-title :style="{'text-align':'left'}">{{presentation.title}}</v-card-title>
               <v-card-text :style="{'text-align':'left'}">
                 <div >{{presentation.description}}.</div>
               </v-card-text>

               <v-divider class="mx-4"></v-divider>
               <v-card-actions>
                 <v-btn
                 class="ma-2"
                 color="#ff214f"
                 dark  @click.prevent="start_form"
               >
               COMMENCER&nbsp;&nbsp;
                 <v-icon
                   dark
                   left
                 >
                    mdi-arrow-right
                 </v-icon>
               </v-btn>

               </v-card-actions>
             </div>

            </div>
            <div v-else>

         <transition :name="transition_type" mode="out-in">

           <div v-if="the_element.type=='text'">
             <text-form :currentval="the_element_before" :yone="direction" :inputdata="the_element" @upvalueinput="getbackvalue" :before="cles" @previewelement="gotoprecedant" @getValueInput="getAnswer" > </text-form>
           </div>
         </transition>


           <transition :name="transition_type" mode="out-in">
           <div v-if="the_element.type=='checkbox'">
             <select-checkbox :currentval="the_element_before" :yone="direction" :inputdata="the_element" @upvalueinput="getbackvalue" :before="cles" @previewelement="gotoprecedant" @getValueInput="getAnswer">   </select-checkbox>
           </div>
         </transition>


           <transition :name="transition_type" mode="out-in">
           <div v-if="the_element.type=='textarea'">
             <text-area :currentval="the_element_before" :yone="direction" :inputdata="the_element" @upvalueinput="getbackvalue" :before="cles" @previewelement="gotoprecedant" @getValueInput="getAnswer"> </text-area>
           </div>
         </transition>

           <transition :name="transition_type" mode="out-in">
           <div v-if="the_element.type=='quickreply'">
             <radio  :currentval="the_element_before" :yone="direction" :inputdata="the_element" @upvalueinput="getbackvalue" :before="cles" @previewelement="gotoprecedant" @getValueInput="getAnswer"> </radio>
           </div>
         </transition>

           <transition :name="transition_type" mode="out-in">
             <div v-if="the_element.type=='score'">
               <star-rating  :currentval="the_element_before" :yone="direction" :inputdata="the_element" @upvalueinput="getbackvalue" :before="cles" @previewelement="gotoprecedant" @getValueInput="getAnswer"> </star-rating>
             </div>
           </transition>

           <transition :name="transition_type" mode="out-in">
             <div v-if="the_element.type=='calendar'">
               <calendar-date  :currentval="the_element_before" :yone="direction" :inputdata="the_element" @upvalueinput="getbackvalue" :before="cles" @previewelement="gotoprecedant" @getValueInput="getAnswer"> </calendar-date>
             </div>
           </transition>

           <transition :name="transition_type" mode="out-in">
             <div v-if="the_element.type=='signature'">
               <h1>On a bien une signature</h1>
            </div>
           </transition>




             <v-row >
               <v-col
                    cols="6"
                    sm="6"
                    md="6"
                  >
               <v-btn class="mx-2" :style="{'color':'#ffffff'}" fab medium color="#ff214f"  :disabled="disablation_before" @click.prevent="gotoprecedant" > <v-icon dark>
            mdi-arrow-left
          </v-icon>
          </v-btn>
             </v-col>
             <v-col
                  cols="6"
                  sm="6"
                  md="6"
                >
             <v-btn class="mx-2" :style="{'color':'#ffffff'}" fab medium color="#ff214f" type="submit" @click.prevent="validate"  :disabled="disablation_next" > <v-icon dark>
          mdi-arrow-right
        </v-icon> </v-btn>
           </v-col>
        </v-row >
      </div>
    </div>

    </transition>

    </div>

     </v-form>
 </validation-observer>
  </div>
</template>
<script>
import text from './text.vue'
import selectCheckbox from './selectCheckbox.vue'
import textArea from './textArea.vue'
import radio from './radio.vue'
import starRating from './starRating.vue'
import calendar   from './calendar.vue'

export default {
  components: {
  'text-form': text,
  'select-checkbox' :selectCheckbox,
  'text-area': textArea,
  'radio':radio,
  'star-rating':starRating,
  'calendar-date':calendar,
   },
  props: {
    timing: String,
    the_element: Object,
    before : Object,
    levelbar : Number,
    cles: Number,
    the_element_before : Object,
    direction: String,
    presentation : Object,
    isintro: Boolean,
    end:Boolean
  },
  data: () => ({
    value_input : null,
    valid: true,
    disablation_next: 'disabled',
    is_numeric : 'pas numeric',
    password: 'Password',
    answers: [],
    input:null,
    current_value:'',
    transition_type:'show'

  }),
  watch : {
    before: function(v){
       if (this.currentval.hasOwnProperty("value"))
      {
        if (this.yone=='backwards') {
          this.value_input=this.currentval.value
        }else{
          if (this.yone == 'back_and_forth')
          {
            this.value_input = this.currentval.value
          }else{
            if (this.value_input == this.currentval.value)
            {
                this.value_input = '';
            }
          }
        }
      }
    },
    input : function(v){
      //  console.log('disablation_next with input',document.getElementById('element_input').valid);
        //this.disablation_next = (this.$el.element_input.validate() ? null : 'disabled')
    }
  },
  computed : {

    label_concact: function(){
      if (this.inputdata.required == "true" ){
        return this.inputdata.question +' *'
      }else{
         return this.inputdata.question
      }
    },
    disablation_before :function() {
      return  ((this.cles) ? null : 'disabled')
    },

    rule_numeric: function(){
      return () => (this._isNumeric(this.value_input)) || 'Seuls les caractères numériques sont autorisés.'
    },
    rule_requise: function(){
      return () => !!this.value_input || 'Information requise'
    },
    rule_alphnum : function(){

      return () => /^[a-zA-Z0-9 àâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ\n\r\-\,\.\']*$/.test(this.value_input) || "Caractère non autorisé"

    }
  },
  mounted() {

      if (this.the_element_before.length)
      {
        this.current_value = this.the_element_before.value
      }

  },
  methods : {
      start_form(){
           //this.isintro = true
          this.$emit('start_the_form', true)
      },
      getAnswer(input){
      let q = 'Q'+'1';
       //this.answers.push({question : q, value : input})
       this.transition_type = 'show';

      this.$emit('getBacktoRoot', input)
     },
     getbackvalue(v){
         console.log('get_back_value',v);
         this.input = v.value ;
        this.disablation_next = v.dn;
      },
    _isNumeric(value){
      return _.isNumber(value) || (!_.isEmpty(value) && !_.isNaN(parseFloat(value)));
    },
    condition_submit(){
      let condition_submit = [];
      if (this.inputdata.user_answer == "alphnum"){
          condition_submit.push(this.rule_alphnum)
      }
      if (this.inputdata.user_answer == "num"){
          condition_submit.push(this.rule_numeric)
      }
      if (this.inputdata.required == "true" ){
        condition_submit.push(this.rule_requise)
      }
       return condition_submit
    },
    validate() {
         if(this.$refs.form.validate())
        {
            //this.$emit('getValueInput', this.value_input)
            let plus = this.cles+1;
            this.getAnswer({value:this.input,key:this.cles,question:'Q'+plus});
        }
    },
    gotoprecedant(go_precedant){
         this.transition_type = 'back';
        this.$emit('precedant', true)
    }

  }
}
</script>
<style>
.buy{
   font-family: 'Roboto', sans-serif;  -webkit-font-smoothing: antialiased;
  }
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.show-enter-active,
.show-leave-enter {
    transform: translateX(0);
    transition: all .3s linear;
}
.show-enter,
.show-leave-to {
    transform: translateX(100%);
}


.back-enter-active,
.back-leave-enter {
    transform: translateX(100%);
    transition: all .3s linear;
}
.back-enter,
.back-leave-to {
  transform: translateX(0);
}
</style>
