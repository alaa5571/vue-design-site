<template>
  <v-container class="">
    <v-layout row wrap>
      <v-col offset-sm="3" sm="6" class="mt-4">
        <v-card flat>
          <h1
            class="headline text-center font-weight-bold py-4 mainColor--text"
          >
            Sign In
          </h1>
          <CustomForm :fields="fields" :formBtn="formBtn" title="Sign In" />
        </v-card>
      </v-col>
    </v-layout>
  </v-container>
</template>

<script>
import CustomForm from "@/components/CustomForm.vue";

export default {
  components: {
    CustomForm
  },
  data: () => ({
    showPass: false,
    val: "HEoll"
  }),
  computed: {
    formBtn() {
      return {
        text: "Sign In",
        center: true,
        bindOptions: {
          type: "submit",
          color: "mainColor"
        }
      };
    },
    fields() {
      return [
        {
          component: "v-text-field",
          label: "Email",
          key: "email",
          value: "",
          bindOptions: {
            type: "email",
            rules: [],
            required: true,
            placeholder: "Write Your Email",
            counter: 20
          },
          width: { xs: 12, sm: 12, lg: 6 }
        },
        {
          component: "password",
          label: "Password",
          key: "password",
          value: "",
          bindOptions: {
            type: "password",
            rules: [],
            required: true,
            placeholder: "Write Your Password",
            counter: 20
          },
          width: { xs: 12, sm: 12, lg: 4 }
        }
      ];
    }
  },
  methods: {}
};
</script>
