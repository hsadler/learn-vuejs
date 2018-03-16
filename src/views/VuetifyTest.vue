<template>

  <!-- tweaked from the Vuetify "dark layout example" -->
  <v-app id="inspire" dark>

    <v-navigation-drawer
      clipped
      fixed
      :value="drawer"
      app
    >
      <v-list dense>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Settings</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>

    <v-content>
      <v-container fluid>

        <v-layout column>

          <!-- icons -->
          <v-layout class="pa-2" justify-center align-start>
            <v-flex shrink>
              <v-tooltip right>
                <v-btn
                  icon
                  large
                  :href="source"
                  target="_blank"
                  slot="activator"
                >
                  <v-icon large>code</v-icon>
                </v-btn>
                <span>Source</span>
              </v-tooltip>
              <v-tooltip right>
                <v-btn
                  icon
                  large
                  href="https://codepen.io/johnjleider/pen/qxQWda"
                  target="_blank"
                  slot="activator"
                >
                  <v-icon large>mdi-codepen</v-icon>
                </v-btn>
                <span>Codepen</span>
              </v-tooltip>
            </v-flex>
          </v-layout>

          <v-divider dark></v-divider>

          <!-- alert -->
          <v-flex class="pa-2">
            <v-alert type="info" :value="true" :dismissible="true">
             This is an info alert.
            </v-alert>
          </v-flex>

          <v-divider dark></v-divider>

          <!-- avatar -->
          <v-flex class="pa-2">
            <p>Avatar:</p>
            <v-avatar
              :tile="false"
              :size="50"
              class="grey lighten-4"
            >
              <img src="@/assets/logo.png" alt="avatar">
            </v-avatar>
          </v-flex>

          <v-divider dark></v-divider>

          <!-- badge -->
          <v-flex class="pa-2">
            <p>Badge:</p>
            <v-badge left>
              <span slot="badge">6</span>
              <v-icon large color="grey lighten-1">shopping_cart</v-icon>
            </v-badge>
          </v-flex>

          <v-divider dark></v-divider>

          <!-- bottom nav -->
          <v-flex class="pa-2">
            <p>Bottom Nav:</p>
            <div
              class="headline text-xs-center blue-grey darken-1 pa-5"
            >
              Active: {{ e1 }}
            </div>
            <v-bottom-nav :value="true" :active.sync="e1" color="white">
              <v-btn flat color="teal" value="recent">
                <span>Recent</span>
                <v-icon>history</v-icon>
              </v-btn>
              <v-btn flat color="teal" value="favorites">
                <span>Favorites</span>
                <v-icon>favorite</v-icon>
              </v-btn>
              <v-btn flat color="teal" value="nearby">
                <span>Nearby</span>
                <v-icon>place</v-icon>
              </v-btn>
            </v-bottom-nav>
          </v-flex>

          <!-- buttons -->
          <v-flex class="pa-2">
            <v-btn>Hi!</v-btn>
          </v-flex>

          <!-- buttons -->
          <v-flex class="pa-2">
            <v-btn>Hi!</v-btn>
          </v-flex>

          <!-- buttons -->
          <v-flex class="pa-2">
            <v-btn>Hi!</v-btn>
          </v-flex>

          <!-- buttons -->
          <v-flex class="pa-2">
            <v-btn>Hi!</v-btn>
          </v-flex>

          <!-- buttons -->
          <v-flex class="pa-2">
            <v-btn>Hi!</v-btn>
          </v-flex>

        </v-layout>

      </v-container>
    </v-content>

    <v-footer app fixed>
      <span>&copy; 2017</span>
    </v-footer>

  </v-app>

</template>

<script>
export default {
  data: () => ({
    drawer: false,
    e1: 'recent'
  }),
  props: {
    source: String
  }
}
</script>

<style scoped lang="scss">
  .inspect {
    * {border: 1px dotted orange;}
  }
</style>
