<template>
  <div>
    <v-toolbar dense>
      <v-app-bar-nav-icon
        class="d-sm-none"
        @click="drawer = true"
      ></v-app-bar-nav-icon>
      <router-link to="/" class="text-decoration-none mainColor--text">
        <v-toolbar-title left>Wuzzufny</v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <v-btn
        class="d-none d-sm-flex font-weight-light py-6 rounded-0"
        text
        v-for="(link, index) in links"
        :key="index"
        router
        :to="link.route"
      >
        <span v-if="!link.dropdown">
          <v-icon left>{{ link.icon }}</v-icon>
          <span>{{ link.name }}</span>
        </span>
        <v-menu v-else open-on-hover offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              :color="$vuetify.theme.dark ? 'balck' : 'white'"
              depressed
              class="rounded-0 ma-n4 py-6"
            >
              <v-icon left>{{ link.icon }}</v-icon>
              <span>{{ link.name }}</span>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in link.dropdown.items"
              :key="index"
              router
              :to="item.route"
            >
              <v-list-item-title>
                <v-icon left>{{ item.icon }}</v-icon>
                <span>{{ item.name }}</span></v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-menu>
      </v-btn>

      <div class="text-center"></div>
    </v-toolbar>

    <v-navigation-drawer dark v-model="drawer" absolute temporary>
      <v-list>
        <v-list-item-group>
          <v-list-item
            v-for="(link, index) in links"
            :key="index"
            router
            :to="link.route"
            no-action
          >
            <v-list-item-icon>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ link.name }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <!-- <v-list>
        <v-list-group
          v-for="item in links"
          :key="item.name"
          v-model="item.active"
          :prepend-icon="item.icon"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="item.name"></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="(item, index) in item.dropdown.items"
            :key="index"
          >
            <v-list-item-content>
              <v-list-item-title v-text="child"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list> -->
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Navbar",

  data: () => ({
    drawer: false,
    group: null
  }),
  computed: {
    links() {
      return [
        { name: "Home", icon: "mdi-home", route: "/" },
        { name: "Jobs", icon: "mdi-folder-open", route: "/jobs" },
        { name: "Create Job", icon: "mdi-folder-plus", route: "/job/create" },
        {
          name: "Profile",
          icon: "mdi-arrow-down-drop-circle-outline",
          route: "/profile/view",
          dropdown: {
            items: [
              {
                name: "User Jobs",
                icon: "mdi-home",
                route: "/profile/jobs"
              },
              { name: "Sign In", icon: "mdi-login", route: "/sign-in" },
              { name: "Sign Up", icon: "mdi-account-plus", route: "/sign-up" }
            ]
          }
        }
      ];
    }
  }
};
</script>
