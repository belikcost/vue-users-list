<template>
  <v-card
      max-width="450"
      class="mx-auto"
  >
    <v-list three-line>
      <v-subheader
          v-if="headerText"
          v-text="headerText"
      />
      <template v-for="(item, index) in users">
        <v-divider
            v-if="index !== 0 && index !== users.length - 1"
            :key="index"
            :inset="true"
        />
        <v-list-item :key="item.title">
          <v-list-item-avatar>
            <v-img :src="item.avatar"/>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }} <span class="grey--text text--lighten-1" v-if="item.score" title="Score">{{ item.score }}</span>
            </v-list-item-title>
            <div>
              <v-chip small>
                {{ item.country }}
              </v-chip>
            </div>
            <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: 'UsersList',
  props: { users: { required: true, type: Array }, headerText: { type: String }, },
}
</script>
