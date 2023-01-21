<template>
  <v-container>
    <v-row
        align="center"
        justify="center"
        class="ma-4"
    >
      <v-col cols="12">
        <v-img
            :src="require('../assets/logo.svg')"
            class="my-3"
            contain
            height="200"
        />
      </v-col>

      <v-col
          cols="12"
          md="4"
      >
        <v-select
            :value="filters.country"
            :items="countriesFilterOptions"
            @change="onChangeCountryFilter"
            clearable
            label="Filter by country"
        ></v-select>

        <v-select
            :value="filters.score"
            :items="scoresFilterOptions"
            @change="onChangeScoreFilter"
            clearable
            label="Filter by score"
        ></v-select>
      </v-col>

      <v-col
          cols="12"
          md="4"
      >
        <UsersList header-text="List" :users="users"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UsersList from "@/components/UsersList";

export default {
  name: 'ContentBlock',
  props: { users: { required: true, type: Array }, filters: { required: true, type: Object } },
  components: { UsersList },
  data: () => ({
    countriesFilterOptions: [
      'russia',
      'usa',
    ],
    scoresFilterOptions: [
      '> 20',
      '< 10',
    ]
  }),
  methods: {
    onChangeCountryFilter(value) {
      this.$emit('changeFilters', { ...this.filters, country: value });
    },
    onChangeScoreFilter(value) {
      this.$emit('changeFilters', { ...this.filters, score: value });
    }
  }
};
</script>
