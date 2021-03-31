<template>
  <v-form @submit.prevent="send">
    <v-container>
      <v-layout row wrap pb-4>
        <v-col
          v-for="(field, index) in fields"
          :key="index"
          :sm="field.width.sm"
          :cols="field.width.xs"
        >
          <component
            :is="field.component"
            :label="field.label"
            v-model="field.value"
            v-bind="[field.bindOptions, formBindOptions]"
            color="mainColor"
          />
        </v-col>
        <v-col :class="['d-flex', { 'justify-center': formBtn.center }]">
          <v-btn v-bind="formBtn.bindOptions" color="mainColor" outlined
            ><span
              :class="
                `${$vuetify.theme.dark ? 'white--text' : 'black--text'} ${
                  formBtn.color
                }--text`
              "
              >{{ formBtn.text }}</span
            ></v-btn
          >
        </v-col>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
import {
  VTextField,
  VSwitch,
  VSelect,
  VTextarea,
  VFileInput
} from "vuetify/es5/components";
import Password from "./password";

export default {
  components: {
    VTextField,
    VSwitch,
    VSelect,
    VTextarea,
    VFileInput,
    Password
  },
  props: {
    fields: {
      type: Array,
      required: true
    },
    formBtn: {
      type: Object,
      required: true
    },
    formBindOptions: {
      type: Object
    }
  },
  data: () => ({}),
  computed: {},
  methods: {
    send() {
      this.fields.forEach(field => {
        field;
        return console.log(field.key + " => " + field.value);
      });
    }
  }
};
</script>
