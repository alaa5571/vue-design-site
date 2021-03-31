<template>
  <v-text-field
    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
    :type="show ? 'text' : 'password'"
    @click:append="show = !show"
    v-model="value"
    v-bind="$attrs"
  ></v-text-field>
</template>
<script>
export default {
  props: ["value"],
  data() {
    return {
      show: true
    };
  },
  computed: {
    localValue: {
      get() {
        return this.value;
      },
      set(x) {
        this.$emit("input", x);
      }
    }
  },
  methods: {
    update(value) {
      this.$emit("input", value);
      console.log(value);
    }
  }
};
</script>
