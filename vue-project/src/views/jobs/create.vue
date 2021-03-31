<template>
  <v-card>
    <h1 class="headline text-center font-weight-bold py-4 mainColor--text">
      Create New Job
    </h1>
    <CustomForm :fields="fields" :formBtn="formBtn" />
  </v-card>
</template>

<script>
import CustomForm from "@/components/CustomForm.vue";

export default {
  components: {
    CustomForm
  },
  data: () => ({
    //
  }),
  computed: {
    formBtn() {
      return {
        text: "Create",
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
          label: "Job Name",
          key: "name",
          value: "",
          bindOptions: {
            rules: [],
            required: true,
            placeholder: "Write Job's Name",
            counter: 20
          },
          width: { xs: 12, sm: 6, lg: 4 }
        },
        {
          component: "v-text-field",
          label: "Job Title",
          key: "title",
          value: "",
          bindOptions: {
            rules: [],
            required: true,
            placeholder: "Write Job's Title",
            counter: 20
          },
          width: { xs: 12, sm: 6, lg: 4 }
        },
        {
          component: "v-textarea",
          label: "Job Description",
          key: "jobDescription",
          value: "",
          bindOptions: {
            rules: [],
            required: true,
            placeholder: "Write job Description",
            counter: 200
          },
          width: { xs: 12, sm: 12, lg: 12 }
        },
        {
          component: "v-text-field",
          label: "Job Address",
          key: "jobAddress",
          value: "",
          bindOptions: {
            rules: [],
            placeholder: "Write Job's Address",
            counter: 20
          },
          width: { xs: 12, sm: 6, lg: 4 }
        },
        {
          component: "v-text-field",
          label: "Educations",
          key: "education",
          value: "",
          bindOptions: {
            rules: [],
            placeholder: "Education",
            counter: 40
          },
          width: { xs: 12, sm: 6, lg: 4 }
        },
        {
          component: "v-select",
          label: " Job Country",
          key: "jobCountry",
          value: "",
          bindOptions: {
            items: ["html", "css", "js"],
            menuProps: { offsetY: true },
            chips: true
          },
          width: { xs: 12, sm: 6, lg: 4 }
        },
        {
          component: "v-select",
          label: "Experience",
          key: "experience",
          value: "",
          bindOptions: {
            items: ["html", "css", "js"],
            menuProps: { offsetY: true },
            chips: true
          },
          width: { xs: 12, sm: 6, lg: 4 }
        },
        {
          component: "v-select",
          label: "job Skills",
          key: "jobSkills",
          value: "",
          bindOptions: {
            items: ["html", "css", "js"],
            menuProps: { offsetY: true },
            deletableChips: true,
            multiple: true,
            chips: true
          },
          width: { xs: 12, sm: 6, lg: 4 }
        },
        {
          component: "v-select",
          label: "Job Type",
          key: "jobType",
          value: "",
          bindOptions: {
            items: ["html", "css", "js"],
            menuProps: { offsetY: true },
            chips: true
          },
          width: { xs: 12, sm: 6, lg: 4 }
        },

        {
          component: "v-text-field",
          label: "Company Name",
          key: "companyName",
          value: "",
          bindOptions: {
            rules: [],
            placeholder: "Write Company Name",
            counter: 40
          },
          width: { xs: 12, sm: 6, lg: 4 }
        },
        {
          component: "v-text-field",
          label: "Salary",
          key: "salary",
          value: "",
          bindOptions: {
            rules: [],
            placeholder: "Write Salary In Dollars",
            counter: 40,
            type: "number",
            prependIcon: "$"
          },
          width: { xs: 12, sm: 6, lg: 4 }
        },
        {
          component: "v-textarea",
          label: "About Company",
          key: "aboutCompany",
          value: "",
          bindOptions: {
            rules: [],
            required: true,
            placeholder: "Write Brief About Company",
            counter: 200,
            rows: "5"
          },
          width: { xs: 12, sm: 12, lg: 12 }
        },
        {
          component: "v-file-input",
          label: "Company Logo",
          key: "companyLogo",
          value: null,
          bindOptions: {
            rules: [],
            placeholder: "Insert Company Logo",
            counter: 40,
            type: "file",
            prependIcon: "mdi-camera",
            chips: true
          },
          width: { xs: 12, sm: 12, lg: 12 }
        },
        {
          component: "v-switch",
          label: "Switch",
          key: "Switch",
          value: true,
          bindOptions: {
            rules: [],
            required: true,
            placeholder: "Write Job Description",
            counter: 10
          },
          width: { xs: 12, sm: 12, lg: 12 }
        }
      ];
    }
  }
};
</script>
