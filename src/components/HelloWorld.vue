<template>
  <div>{{ text | toUppercase }}</div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      text: "hello",
    };
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    },
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
