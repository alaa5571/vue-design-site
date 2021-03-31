<template>
  <div>
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12 sm3 fixed app>
          <v-card class="mb-6" fixed app>
            <CustomForm
              :fields="fields"
              :formBtn="formBtn"
              :formBindOptions="formBindOptions"
            />
          </v-card>
        </v-flex>
        <v-flex xs12 sm9 px-2>
          <v-card
            router
            to="/job/view"
            class="pa-4 mb-4"
            v-for="(n, index) in 10"
            :key="index"
          >
            <div class="head mb-2">
              <h1
                class="d-inline-block headline font-weight-bold mainColor--text"
              >
                Job Title
              </h1>
              <span class="float-right">
                <v-chip outlined class="mr-3 mainColor" small>
                  Full Time
                </v-chip>
                <span class="mr-3 overline">2 : 7 Experience Years</span>
                <span class="caption">25th Des 2020</span>
              </span>
            </div>
            <div class="caption">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
                vel asperiores itaque atque at vero iste cumque! Similique minus
                dignissimos corporis, excepturi laborum quia placeat, nobis, sit
                velit ad fuga?
              </p>
              <p class="mt-n3">
                <span class="mainColor--text mr-2  caption">Company Name</span>
                <span>Company Country</span>
              </p>
            </div>
            <p class="subtitle-1" truncate-length="10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              necessitatibus repudiandae officiis expedita, id, rem quos
              explicabo sint cupiditate voluptatibus earum voluptates
              exercitationem. Vel est ullam provident dolor dignissimos placeat.
            </p>
            <div>
              <v-chip
                v-for="(n, index) in 15"
                :key="index"
                outlined
                small
                class="mr-2 mainColor"
              >
                text
              </v-chip>
            </div>
          </v-card>
        </v-flex>
      </v-layout>

      <v-card
        class="my-2 py-4 float-right"
        :min-width="$vuetify.breakpoint.xs ? '100%' : '75%'"
      >
        <v-pagination
          flat
          color="mainColor"
          outlined
          v-model="page"
          :length="50"
          :total-visible="10"
        ></v-pagination
      ></v-card>
    </v-container>
  </div>
</template>

<script>
import CustomForm from "@/components/CustomForm.vue";

export default {
  components: {
    CustomForm
  },
  data() {
    return {
      drawer: true,
      links: [
        { name: "Home", icon: "mdi-home", route: "/" },
        { name: "Jobs", icon: "mdi-folder-open", route: "/jobs" },
        { name: "Create Job", icon: "mdi-folder-plus", route: "/job/create" },
        { name: "Profile", icon: "mdi-account", route: "/profile" }
      ],
      props: ["html", "css", "js"],
      page: 1
    };
  },
  computed: {
    formBtn() {
      return {
        text: "Search",
        bindOptions: {
          type: "submit"
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
            placeholder: "Search By Job's Name",
            counter: 20
          },
          width: { xs: 12, sm: 12, lg: 12 }
        },
        {
          component: "v-select",
          label: " Job Country",
          key: "jobCountry",
          value: "",
          bindOptions: {
            items: ["html", "css", "js"],
            placeholder: "Search By Job's Country",
            menuProps: { offsetY: true },
            multiple: true,
            deletableChips: true,
            chips: true
          },
          width: { xs: 12, sm: 12, lg: 12 }
        },
        {
          component: "v-select",
          label: "Experience",
          key: "experience",
          value: "",
          bindOptions: {
            items: ["html", "css", "js"],
            placeholder: "Search By Experience",
            menuProps: { offsetY: true },
            multiple: true,
            deletableChips: true,
            chips: true
          },
          width: { xs: 12, sm: 12, lg: 12 }
        }
      ];
    },
    formBindOptions: {
      get() {
        return {
          color: "mainColor",
          class: "BaZoka",
          href: "www.facebook.com"
        };
      }
    }
  }
};
</script>
