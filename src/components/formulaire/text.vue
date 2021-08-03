<template>
  <div>
    <v-col
         cols="12"
         sm="12"
         md="12"
       >
        <div v-if="inputdata.user_answer == 'telsen'"  >
         <v-row>
           <v-subheader class="v-subheader">{{label_concact}}</v-subheader>
         <div v-if="inputdata.user_answer == 'telsen'" cols="1"
       sm="1"
       md="1">
         <v-img style="margin-top:15px!important" src="https://flagcdn.com/32x24/sn.png" max-height="32" max-width="24"></v-img>
       </div>
          <v-text-field ref="element_input" cols="10"
          sm="10"
          md="10"
                 v-model="value_input" solo
                 :rules="condition_submit()" :required="inputdata.required == 'true'"

             ></v-text-field>
           </v-row>
         </div>
         <div v-else>
            <v-subheader class="v-subheader">{{label_concact}}</v-subheader>
           <v-text-field ref="element_input"
                  v-model="value_input" solo
                  :rules="condition_submit()" :required="inputdata.required == 'true'"

              ></v-text-field>
         </div>

    </v-col>
  </div>
</template>
<script>

export default {
  props: {
    inputdata: Object,
    before: Number,
    currentval: Object,
    yone: String
  },
  data: () => ({
    value_input : '',
    valid: true,

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
         this.disablation_next = (this.$refs.element_input.validate() ? null : 'disabled')
        this.$emit('upvalueinput', {
          value:this.value_input,
          dn:this.disablation_next})
    },
    yone : function(v){
       if (this.yone=='foward')
       {
         this.value_input=''
       }
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
    rule_minimun_tel: function(){
      return () => (this.value_input.length == 9) || 'Le numéro de téléphone doit contenir 9 chiffres'
    },
    rule_numeric: function(){
      return () => (this._isNumeric(this.value_input)) || 'Seuls les caractères numériques sont autorisés.'
    },
    rule_requise: function(){
      return () => !!this.value_input || 'Information requise'
    },
    rule_alphnum : function(){
      return () => /^[a-zA-Z0-9 àâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ\n\r\-\,\.\']*$/.test(this.value_input) || "Caractère non autorisé"
    },
    rule_email: function(){
      return () => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))*$/.test(this.value_input) || "Caractère non autorisé"
    }
  },
  mounted() {
     if (this.currentval.hasOwnProperty("value"))
    {
       if (this.yone=='backwards'  || this.yone=='back_and_forth') {
        this.value_input=this.currentval.value
      }else{
      this.value_input=''}}
  },
  methods : {
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
      if (this.inputdata.user_answer == "email" ){
        condition_submit.push(this.rule_email)
      }
      if (this.inputdata.user_answer == "email" ){
        condition_submit.push(this.rule_email)
      }
      if (this.inputdata.user_answer == "telsen" ){
        condition_submit.push(this.rule_numeric)
        condition_submit.push(this.rule_minimun_tel)

      }
       return condition_submit
    },
    gotopreview(){
      this.$emit('previewelement',true)
    },
    validate () {
        let submitter = this.value_input;
        if(this.$refs.form.validate())
        {
            this.value_input= ''
            this.$emit('getValueInput', submitter)
        }
    },

  }
}
</script>
<style src="vue-tel-input/dist/vue-tel-input.css"></style>
