<template>
  <div>
   <v-col
         cols="12"
         sm="12"
         md="12"
       >
              <div class="text-center">
                 <p class="text-left" :style="{'text-align' : 'left','margin-bottom':'3%','margin-left':'1%'}" > {{label_concact}}  <pre>

                 </pre></p>
                 <div v-if="inputdata.user_answer == 'date'">
                   <v-date-picker locale="fr" color="#e91e63" v-model="value_input"></v-date-picker>
                 </div>
                 <div v-if="inputdata.user_answer == 'time'">
                   <v-time-picker v-model="value_input"  color="#e91e63"   format="24hr" ></v-time-picker>
                 </div>
            </div>

    </v-col>
  </div>
</template>
<script>
export default {
  props: {
    inputdata: Object,
    before: Number,
    currentval:Object,
    yone: String
  },
  data: () => ({
    value_input : '',
    valid: true,
    picker :(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),

    show1: false,
    show2: true,
    show3: false,
    show4: false,
    disablation_next: 'disabled',
    is_numeric : 'pas numeric',
    password: 'Password',
    rules: {
     required: value => !!value || 'Required.',
     is_numeric: value => this._isNumeric( value ) || 'Seuls les caractères numériques sont autorisés.',
     min: v => v.length >= 8 || 'Min 8 characters',
     emailMatch: () => (`The email and password you entered don't match`),
    }
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
    value_input : function(v){
       if (!_.isEmpty( this.value_input )) {
         this.disablation_next =null
       }else{
         this.disablation_next ='disabled'
       }
       //this.$emit('upvalueinput', this.value_input)
       this.$emit('upvalueinput', {
         value:this.value_input,
         dn:this.disablation_next
       });
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
    disablation_before :function(){
      return  ((this.before) ? null : 'disabled')
    },

    rule_numeric: function(){
      return () => (this._isNumeric(this.value_input)) || 'Seuls les caractères numériques sont autorisés.'
    },
    rule_requise: function(){
      return () => !!this.value_input || 'Information requise'
    },
    rule_alphnum : function(){

      return () => /^[a-zA-Z0-9 àâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ\,\.\']*$/.test(this.value_input) || "Caractère non autorisé"

    }
  },
  mounted() {
    if (this.currentval.hasOwnProperty("value"))
    {
       if (this.yone=='backwards' || this.yone=='back_and_forth') {
        this.value_input=this.currentval.value
      }else{
      this.value_input=''}}
  },
  methods : {
    gotopreview(){
      this.$emit('previewelement',true)
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
    validate () {
         if(this.$refs.form.validate())
        {
            this.$emit('getValueInput', this.value_input)
        }

    },

  }
}
</script>
