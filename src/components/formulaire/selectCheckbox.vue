<template>
  <div>


    <v-col
         cols="12"
         sm="12"
         md="12"
       >
        <v-subheader class="v-subheader">{{label_concact}}</v-subheader>

         <div data-app="true">
             <v-select
              v-model="value_input"
              :items="element_select"
              chips
               ref="element_input"
               
              multiple
              :rules="condition_submit()"
              solo
            ></v-select>
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
    value_input : [],
    valid: true,
    value :[],
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
       //this.$emit('upvalueinput', {value:this.value_input,disablation_next:this.disablation_next})
       this.$emit('upvalueinput', {
         value:this.value_input,
         dn:this.disablation_next
       })
    }
  },
  computed : {
    element_select: function(){
        let elements = []
        _.forEach(this.inputdata.quickreplies, function(value, key) {
             elements.push(value.name)
        });
      //elements.push('dfsd@dfdf{{}}')
      return (elements.length ? elements : [])
    },
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
      return () => /^[a-zA-Z0-9 àâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ\n\r\-\,\.\']*$/.test(this.value_input) || "Caractère non autorisé"
    },
    rule_empty: function(){
      //return () => (this.value_input).length >= 0 || 'Vous devez cocher une case'
      return () => (this.value_input.length != 0) ||'Vous devez cocher une case'
    }
  },
  mounted() {
    if (this.currentval.hasOwnProperty("value"))
    {
       if (this.yone=='backwards' || this.yone=='back_and_forth') {
        this.value_input=this.currentval.value
      }else{
      this.value_input=''}}  },
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
      condition_submit.push(this.rule_empty)
      return condition_submit
    },
    gotopreview(){
      this.$emit('previewelement',true)
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
