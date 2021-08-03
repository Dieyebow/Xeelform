<template>
  <div>
    <v-col cols="12" sm="12" md="12" >
    <VueSignaturePad width="500px" height="500px" ref="signaturePad" />
    <div>
      <button @click="save">Save</button>
      <button @click="undo">Undo</button>
    </div>
   </v-col>
  </div>
</template>
<script>
export default {
  name: 'MySignaturePad',
  props: {
    inputdata: Object,
    before: Number,
    currentval:Object,
    yone: String
  },
  data: () => ({
    value_input : null,
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
  methods: {
    undo() {
      this.$refs.signaturePad.undoSignature();
    },
    save() {
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
      console.log(isEmpty);
      console.log(data);
    }
  }
};
</script>
