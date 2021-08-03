class elementStore {
  constructor() {
      this.element = {
        textform : {
        "question":"Quel est votre prénom et nom ? ",
        "condition":"false",
        "conditionElement": {
          "question":"",
          "valeur":""
        },
        "type":"text",
        "user_answer":"alphnum",
        "required":"true",
        "quickreplies":""
      },
      selectcheckbox:{
        "question":"Quel type de gâteau vendez-vous ?",
        "condition":"false",
        "conditionElement": {
          "question":"",
          "valeur":""
        },
        "type":"checkbox",
        "user_answer":"alphnum",
        "required":"true",
        "quickreplies": [
          {
            "name":"gâteau préfabriqué ",
            "payload":""
          },
          {
            "name":"gâteau personnalisé ",
            "payload":""
          },
          {
            "name":"cupcakes",
            "payload":""
          }
        ]
      },
      textarea:{
        "question":"Combien coûte votre gâteau le moins chère ?",
        "condition":"false",
        "conditionElement": {
          "question":"",
          "valeur":""
        },
        "type":"textarea",
        "user_answer":"alphnum",
        "required":"false",
        "quickreplies":""
      },
      quickreply:{
        "question":"A quelle occasion vendez-vous plus de gâteau? ",
        "condition":"false",
        "conditionElement": {
          "question":"",
          "valeur":""
        },
        "type":"quickreply",
        "user_answer":"alphnum",
        "required":"true",
        "quickreplies": [
          {
            "name":"Pour les anniversaires",
            "payload":""
          },
          {
            "name":"Pendant les fêtes",
            "payload":""
          },
          {
            "name":"pas d'occasions spécifiques ",
            "payload":""
          }
        ]
      },
      score:{
    "question":" 1- Quelle note donneriez-vous sur une échelle de 1 à 10 pour le contenu de la formation ? ",
    "condition":"false",
    "conditionElement": {
      "question":"",
      "valeur":""
    },
    "type":"score",
    "user_answer":"alphnum",
    "required":"0",
    "quickreplies":"5"
  },
   concat_element: [
     {
       "question": "Quel es votre numéro ? ",
       "condition": "false",
       "conditionElement": {
         "question": "",
         "valeur": ""
       },
       "type": "text",
       "user_answer": "telsen",
       "required": "0",
       "quickreplies": ""
     },
    {
     "question":"Quel est votre prénom et nom ? ",
     "condition":"false",
     "conditionElement": {
       "question":"",
       "valeur":""
     },
     "type":"text",
     "user_answer":"alphnum",
     "required":"true",
     "quickreplies":""
   },
   {
    "question":"Quel type de gâteau vendez-vous premier ?",
    "condition":"false",
    "conditionElement": {
      "question":"",
      "valeur":""
    },
    "type":"checkbox",
    "user_answer":"alphnum",
    "required":"true",
    "quickreplies": [
      {
        "name":"gâteau préfabriqué ",
        "payload":""
      },
      {
        "name":"gâteau personnalisé ",
        "payload":""
      },
      {
        "name":"cupcakes",
        "payload":""
      }
    ]
  },
    {
     "question":"Quel type de gâteau vendez-vous ?",
     "condition":"false",
     "conditionElement": {
       "question":"",
       "valeur":""
     },
     "type":"checkbox",
     "user_answer":"alphnum",
     "required":"true",
     "quickreplies": [
       {
         "name":"gâteau préfabriqué ",
         "payload":""
       },
       {
         "name":"gâteau personnalisé ",
         "payload":""
       },
       {
         "name":"cupcakes",
         "payload":""
       }
     ]
   },
    {
     "question":"Combien coûte votre gâteau le moins chère ?",
     "condition":"false",
     "conditionElement": {
       "question":"",
       "valeur":""
     },
     "type":"textarea",
     "user_answer":"alphnum",
     "required":"false",
     "quickreplies":""
   },
    {
     "question":"A quelle occasion vendez-vous plus de gâteau? ",
     "condition":"false",
     "conditionElement": {
       "question":"",
       "valeur":""
     },
     "type":"quickreply",
     "user_answer":"alphnum",
     "required":"true",
     "quickreplies": [
       {
         "name":"Pour les anniversaires",
         "payload":""
       },
       {
         "name":"Pendant les fêtes",
         "payload":""
       },
       {
         "name":"pas d'occasions spécifiques ",
         "payload":""
       }
     ]
   },
  {
   "question":" 1- Quelle note donneriez-vous sur une échelle de 1 à 10 pour le contenu de la formation ? ",
   "condition":"false",
   "conditionElement":{
     "question":"",
     "valeur":""
   },
   "type":"score",
   "user_answer":"alphnum",
   "required":"0",
   "quickreplies":"5"
 },
 {
    "question":"Quel est votre email ?",
    "condition":"false",
    "conditionElement": {
     "question":"",
     "valeur":""
    },
    "type":"text",
    "user_answer":"email",
    "required":"0",
    "quickreplies":""
  }

],
original: {"idformulaire":"78","link":"OTg3NjU0MzIx_P1WFUJ38YSHO2TP86QDV6Y0","title":"Enqu\u00eate de satisfaction - BootCamp 2 - Incubation 5","description":"Enqu\u00eate de satisfaction - BootCamp 2 - Incubation 5","SMS":null,"date_end":null,"champs":[{"question":"Quel est votre nom et pr\u00e9nom ? ","condition":"false","conditionElement":{"question":"","valeur":""},"type":"text","user_answer":"alphnum","required":"true","quickreplies":""},{"question":"1- Comment avez-vous trouv\u00e9 la formation sur le recrutement Aziz ","condition":"false","conditionElement":{"question":"","valeur":""},"type":"textarea","user_answer":"alphnum","required":"true","quickreplies":""},{"question":" 1- Quelle note donneriez-vous sur une \u00e9chelle de 1 \u00e0 10 pour le contenu de la formation ? ","condition":"false","conditionElement":{"question":"","valeur":""},"type":"quickreply","user_answer":"alphnum","required":"0","quickreplies":[{"name":"1","payload":""},{"name":"2","payload":""},{"name":"3","payload":""},{"name":"4","payload":""},{"name":"5","payload":""},{"name":"6","payload":""},{"name":"7","payload":""},{"name":"8","payload":""},{"name":"9","payload":""},{"name":"10","payload":""}]},{"question":"1- Quelle note donneriez-vous sur une \u00e9chelle de 1 \u00e0 10 au formateur ? ","condition":"false","conditionElement":{"question":"","valeur":""},"type":"quickreply","user_answer":"alphnum","required":"true","quickreplies":[{"name":"1","payload":""},{"name":"2","payload":""},{"name":"3","payload":""},{"name":"4","payload":""},{"name":"5","payload":""},{"name":"6","payload":""},{"name":"7","payload":""},{"name":"8","payload":""},{"name":"9","payload":""},{"name":"10","payload":""}]},{"question":"2- Comment avez-vous trouv\u00e9 la formation sur le marketing - gestion de la client\u00e8le","condition":"false","conditionElement":{"question":"","valeur":""},"type":"textarea","user_answer":"alphnum","required":"true","quickreplies":""},{"question":"2 - Quelle note donneriez-vous sur une \u00e9chelle de 1 \u00e0 10 pour le contenu de la formation ? ","condition":"false","conditionElement":{"question":"","valeur":""},"type":"quickreply","user_answer":"alphnum","required":"true","quickreplies":[{"name":"1","payload":""},{"name":"2","payload":""},{"name":"3","payload":""},{"name":"4","payload":""},{"name":"5","payload":""},{"name":"6","payload":""},{"name":"7","payload":""},{"name":"8","payload":""},{"name":"9","payload":""},{"name":"10","payload":""}]},{"question":"2- Quelle note donneriez-vous sur une \u00e9chelle de 1 \u00e0 10 au formateur ? ","condition":"false","conditionElement":{"question":"","valeur":""},"type":"quickreply","user_answer":"alphnum","required":"true","quickreplies":[{"name":"1","payload":""},{"name":"2","payload":""},{"name":"3","payload":""},{"name":"4","payload":""},{"name":"5","payload":""},{"name":"6","payload":""},{"name":"7","payload":""},{"name":"8","payload":""},{"name":"9","payload":""},{"name":"10","payload":""}]},{"question":"3- Comment avez-vous trouv\u00e9 la formation sur le project management - execution des t\u00e2ches donn\u00e9e par Aziz","condition":"false","conditionElement":{"question":"","valeur":""},"type":"textarea","user_answer":"alphnum","required":"true","quickreplies":""},{"question":"3 - Quelle note donneriez-vous sur une \u00e9chelle de 1 \u00e0 10 pour contenu de la formation ? ","condition":"false","conditionElement":{"question":"","valeur":""},"type":"quickreply","user_answer":"alphnum","required":"true","quickreplies":[{"name":"1","payload":""},{"name":"2","payload":""},{"name":"3","payload":""},{"name":"4","payload":""},{"name":"5","payload":""},{"name":"6","payload":""},{"name":"7","payload":""},{"name":"8","payload":""},{"name":"9","payload":""},{"name":"10","payload":""}]},{"question":"3- Quelle note donneriez-vous sur une \u00e9chelle de 1 \u00e0 10 au formateur ? ","condition":"false","conditionElement":{"question":"","valeur":""},"type":"quickreply","user_answer":"alphnum","required":"true","quickreplies":[{"name":"1","payload":""},{"name":"2","payload":""},{"name":"3","payload":""},{"name":"4","payload":""},{"name":"5","payload":""},{"name":"6","payload":""},{"name":"7","payload":""},{"name":"8","payload":""},{"name":"9","payload":""},{"name":"10","payload":""}]},{"question":"4- Comment avez-vous trouv\u00e9 a formation sur l'introduction \u00e0 la comptabilit\u00e9 anim\u00e9 par Moustapha ","condition":"false","conditionElement":{"question":"","valeur":""},"type":"textarea","user_answer":"alphnum","required":"true","quickreplies":""},{"question":"4 - Quelle note donneriez-vous sur une \u00e9chelle de 1 \u00e0 10 pour contenu de la formation ? ","condition":"false","conditionElement":{"question":"","valeur":""},"type":"quickreply","user_answer":"alphnum","required":"true","quickreplies":[{"name":"1","payload":""},{"name":"2","payload":""},{"name":"3","payload":""},{"name":"4","payload":""},{"name":"5","payload":""},{"name":"6","payload":""},{"name":"7","payload":""},{"name":"8","payload":""},{"name":"9","payload":""},{"name":"10","payload":""}]},{"question":"4- Quelle note donneriez-vous sur une \u00e9chelle de 1 \u00e0 10 au formateur ? ","condition":"false","conditionElement":{"question":"","valeur":""},"type":"quickreply","user_answer":"alphnum","required":"true","quickreplies":[{"name":"1","payload":""},{"name":"2","payload":""},{"name":"3","payload":""},{"name":"4","payload":""},{"name":"5","payload":""},{"name":"6","payload":""},{"name":"7","payload":""},{"name":"8","payload":""},{"name":"9","payload":""},{"name":"10","payload":""}]},{"question":"5- Comment avez-vous trouv\u00e9 la formation sur le Marketing digital anim\u00e9 par Amath ?","condition":"false","conditionElement":{"question":"","valeur":""},"type":"textarea","user_answer":"alphnum","required":"true","quickreplies":""},{"question":"5 - Quelle note donneriez-vous sur une \u00e9chelle de 1 \u00e0 10 pour contenu de la formation ? ","condition":"false","conditionElement":{"question":"","valeur":""},"type":"quickreply","user_answer":"alphnum","required":"true","quickreplies":[{"name":"1","payload":""},{"name":"2","payload":""},{"name":"3","payload":""},{"name":"4","payload":""},{"name":"5","payload":""},{"name":"6","payload":""},{"name":"7","payload":""},{"name":"8","payload":""},{"name":"9","payload":""},{"name":"10","payload":""}]},{"question":"5- Quelle note donneriez-vous sur une \u00e9chelle de 1 \u00e0 10 au formateur ? ","condition":"false","conditionElement":{"question":"","valeur":""},"type":"quickreply","user_answer":"alphnum","required":"true","quickreplies":[{"name":"1","payload":""},{"name":"2","payload":""},{"name":"3","payload":""},{"name":"4","payload":""},{"name":"5","payload":""},{"name":"6","payload":""},{"name":"7","payload":""},{"name":"8","payload":""},{"name":"9","payload":""},{"name":"10","payload":""}]},{"question":"6- Comment avez-vous trouv\u00e9 la formation sur le Peer mentoring anim\u00e9e par Aziz","condition":"false","conditionElement":{"question":"","valeur":""},"type":"textarea","user_answer":"alphnum","required":"true","quickreplies":""},{"question":"6 - Quelle note donneriez-vous sur une \u00e9chelle de 1 \u00e0 10 pour contenu de la formation ? ","condition":"false","conditionElement":{"question":"","valeur":""},"type":"quickreply","user_answer":"alphnum","required":"true","quickreplies":[{"name":"1","payload":""},{"name":"2","payload":""},{"name":"3","payload":""},{"name":"4","payload":""},{"name":"5","payload":""},{"name":"6","payload":""},{"name":"7","payload":""},{"name":"8","payload":""},{"name":"9","payload":""},{"name":"10","payload":""}]},{"question":"6- Quelle note donneriez-vous sur une \u00e9chelle de 1 \u00e0 10 au formateur ? ","condition":"false","conditionElement":{"question":"","valeur":""},"type":"quickreply","user_answer":"alphnum","required":"true","quickreplies":[{"name":"1","payload":""},{"name":"2","payload":""},{"name":"3","payload":""},{"name":"4","payload":""},{"name":"5","payload":""},{"name":"6","payload":""},{"name":"7","payload":""},{"name":"8","payload":""},{"name":"9","payload":""},{"name":"10","payload":""}]},{"question":"7- Comment avez-vous trouv\u00e9 le CEO talk anim\u00e9 par Mara Ndiaye?","condition":"false","conditionElement":{"question":"","valeur":""},"type":"textarea","user_answer":"alphnum","required":"true","quickreplies":""},{"question":"7 - Quelle note donneriez-vous sur une \u00e9chelle de 1 \u00e0 10 \u00e0 cette intervention ? ","condition":"false","conditionElement":{"question":"","valeur":""},"type":"quickreply","user_answer":"alphnum","required":"true","quickreplies":[{"name":"1","payload":""},{"name":"2","payload":""},{"name":"3","payload":""},{"name":"4","payload":""},{"name":"5","payload":""},{"name":"6","payload":""},{"name":"7","payload":""},{"name":"8","payload":""},{"name":"9","payload":""},{"name":"10","payload":""}]}],"iduser":"987654321","nb_inscrit":null,"type":"standard","created_at":"2020-06-20 11:10:25","updated_at":"2020-06-20 23:39:22"}
   }
 }
}
export default new elementStore();
