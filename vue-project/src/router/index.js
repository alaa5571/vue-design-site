import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home";
import SignIn from "../views/sign/sign-in";
import SignUp from "../views/sign/sign-up";

import Jobs from "../views/jobs/index";
import ViewJob from "../views/jobs/view";
import CreateJob from "../views/jobs/create";

import Profile from "../views/profile/index";
import profileEdit from "../views/profile/edit";
import UserJobs from "../views/profile/jobs";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/sign-in",
    name: "signIn",
    component: SignIn
  },
  {
    path: "/sign-up",
    name: "signUp",
    component: SignUp
  },
  {
    path: "/jobs",
    name: "jobs",
    component: Jobs
  },
  {
    path: "/job/view/:id?",
    name: "job/view",
    component: ViewJob
  },
  {
    path: "/job/create",
    name: "job/create",
    component: CreateJob
  },
  {
    path: "/profile/view/:id?",
    name: "profile/view",
    component: Profile
  },
  {
    path: "/profile/edit/:id?",
    name: "profile/edit",
    component: profileEdit
  },
  {
    path: "/profile/jobs",
    name: "profile/jobs",
    component: UserJobs
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
