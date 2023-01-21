<template>
  <v-app>
    <v-main>
      <ContentBlock :users="users" :filters="filters" @changeFilters="changeFilters"/>
    </v-main>

    <v-footer app v-bind="localAttrs">
      <Footer/>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";

import ContentBlock from './components/ContentBlock';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    ContentBlock,
    Footer
  },
  computed: {
    ...mapGetters(['users', 'filters']),
    localAttrs() {
      const attrs = {};

      attrs.absolute = true;
      attrs.fixed = false;

      return attrs;
    },
  },
  created() {
    this.$store.dispatch('fetchUsers');
  },
  methods: {
    changeFilters(filters) {
      this.$store.dispatch('changeFilters', filters);
    }
  }
};
</script>
