<template>
  <v-card>
    <h1 class="headline text-center font-weight-bold py-4 mainColor--text">
      Edit Your Profile
    </h1>
    <CustomForm :fields="fields" :formBtn="formBtn" />
  </v-card>
</template>

<script>
import CustomForm from "@/components/CustomForm.vue";

export default {
  components: {
    CustomForm,
  },
  data: () => ({
    //
  }),
  computed: {
    formBtn() {
      return {
        text: "Edit",
        bindOptions: {
          type: "submit",
          color: "mainColor",
        },
      };
    },
    fields() {
      return [
        {
          component: "v-text-field",
          label: "First Name",
          key: "firstName",
          value: "",
          bindOptions: {
            rules: [],
            required: true,
            placeholder: "Write Your First Name",
            counter: 20,
          },
          width: { xs: 12, sm: 6, lg: 4 },
        },
        {
          component: "v-text-field",
          label: "Last Name",
          key: "lastName",
          value: "",
          bindOptions: {
            rules: [],
            required: true,
            placeholder: "Write Your Last Name",
            counter: 20,
          },
          width: { xs: 12, sm: 6, lg: 4 },
        },
        {
          component: "v-text-field",
          label: "Your Email",
          key: "Email",
          value: "",
          bindOptions: {
            rules: [],
            placeholder: "Write Your Email",
            counter: 20,
          },
          width: { xs: 12, sm: 6, lg: 4 },
        },
        {
          component: "v-text-field",
          label: "Your Phone",
          key: "phone",
          value: "",
          bindOptions: {
            rules: [],
            placeholder: "Write Your Phone Number",
            counter: 20,
          },
          width: { xs: 12, sm: 6, lg: 4 },
        },
        {
          component: "v-text-field",
          label: "Your Job",
          key: "job",
          value: "",
          bindOptions: {
            rules: [],
            placeholder: "Write Your Job",
            counter: 20,
          },
          width: { xs: 12, sm: 6, lg: 4 },
        },
        {
          component: "v-select",
          label: "Your Gender",
          key: "gender",
          value: "",
          bindOptions: {
            items: ["male", "female"],
            menuProps: { offsetY: true },
            chips: true,
          },
          width: { xs: 12, sm: 6, lg: 4 },
        },
        {
          component: "v-select",
          label: "Your Country",
          key: "country",
          value: "",
          bindOptions: {
            items: ["html", "css", "js"],
            menuProps: { offsetY: true },
            chips: true,
          },
          width: { xs: 12, sm: 6, lg: 4 },
        },
        {
          component: "v-select",
          label: "Your Skills",
          key: "skills",
          value: "",
          bindOptions: {
            items: ["html", "css", "js"],
            menuProps: { offsetY: true },
            deletableChips: true,
            multiple: true,
            chips: true,
          },
          width: { xs: 12, sm: 6, lg: 4 },
        },
        {
          component: "v-textarea",
          label: "Public Info About Yourself",
          key: "info",
          value: "",
          bindOptions: {
            rules: [],
            required: true,
            placeholder: "Write Brief About Yourself",
            counter: 200,
            rows: "5",
          },
          width: { xs: 12, sm: 12, lg: 12 },
        },
        {
          component: "v-file-input",
          label: "Profile Picture",
          key: "avatar",
          value: null,
          bindOptions: {
            rules: [],
            placeholder: "Upload You Profile Picture",
            type: "file",
            prependIcon: "mdi-camera",
            chips: true,
          },
          width: { xs: 12, sm: 12, lg: 12 },
        },
        {
          component: "v-text-field",
          label: "Your Password",
          key: "password",
          value: "",
          bindOptions: {
            rules: [],
            required: true,
            placeholder: "Write Your Password To Confirm Your Editions",
            counter: 10,
          },
          width: { xs: 12, sm: 12, lg: 12 },
        },
      ];
    },
  },
};
</script>
