<template>

  <!-- from a Vuetify layout example -->
  <v-app id="inspire" :dark="darkTheme">

    <v-navigation-drawer
      clipped
      fixed
      v-model="drawer"
      app
    >
      <v-list dense>

        <v-list-tile @click="$router.push('/')">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile @click="darkTheme = !darkTheme">
          <v-list-tile-action>
            <v-icon>invert_colors</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Invert Colors</v-list-tile-title>
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

          <v-flex class="pa-2">
            <h1 class="headline">Vuetify UI Components:</h1>
          </v-flex>

          <v-divider></v-divider>

          <!-- alert (https://vuetifyjs.com/en/components/alerts) -->
          <v-flex class="pa-2">
            <p>Alert:</p>
            <v-alert type="info" :value="true" :dismissible="true">
             This is an info alert.
            </v-alert>
          </v-flex>

          <v-divider></v-divider>

          <!-- avatar (https://vuetifyjs.com/en/components/avatars) -->
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

          <v-divider></v-divider>

          <!-- badge (https://vuetifyjs.com/en/components/badges) -->
          <v-flex class="pa-2">
            <p>Badge:</p>
            <v-badge left>
              <span slot="badge">6</span>
              <v-icon large color="grey lighten-1">shopping_cart</v-icon>
            </v-badge>
          </v-flex>

          <v-divider></v-divider>

          <!-- bottom nav (https://vuetifyjs.com/en/components/bottom-navigation) -->
          <v-flex class="pa-2">
            <p>Bottom Navigation:</p>
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

          <v-divider></v-divider>

          <!-- bottom sheet (https://vuetifyjs.com/en/components/bottom-sheets) -->
          <v-flex class="pa-2">
            <p>Bottom Sheet:</p>
            <v-bottom-sheet v-model="sheet">
              <v-btn slot="activator" color="purple">Click me</v-btn>
              <v-list>
                <v-subheader>Stuff goes in here...</v-subheader>
              </v-list>
            </v-bottom-sheet>
          </v-flex>

          <v-divider></v-divider>

          <!-- breadcrumbs (https://vuetifyjs.com/en/components/breadcrumbs) -->
          <v-flex class="pa-2">
            <p>Breadcrumbs:</p>
            <v-breadcrumbs divider="/" justify-center>
              <v-breadcrumbs-item
                v-for="item in ['Dashboard', 'Link 1', 'Link 2']"
                :key="item"
              >
                {{ item }}
              </v-breadcrumbs-item>
            </v-breadcrumbs>
          </v-flex>

          <v-divider></v-divider>

          <!-- buttons (https://vuetifyjs.com/en/components/buttons) -->
          <v-flex class="pa-2">
            <p>Buttons:</p>
            <v-btn color="success">Success</v-btn>
            <v-btn color="error">Error</v-btn>
            <v-btn
              color="blue-grey"
              large outline
              :loading="customButtonLoading"
              round
              @click="handleCustomButtonClick()"
            >
              Custom
            </v-btn>
            <v-btn color="warning">Warning</v-btn>
            <v-btn color="info">Info</v-btn>
          </v-flex>

          <v-divider></v-divider>

          <!-- cards (https://vuetifyjs.com/en/components/cards) -->
          <v-flex class="pa-2">

            <p>Cards:</p>

            <v-layout row>

              <v-flex xs8>
                <v-card>
                  <v-card-media
                    :src="require('@/assets/logo.png')"
                    contain
                    height="200px"
                  ></v-card-media>
                  <v-card-title primary-title>
                    <div class="text-xs-left">
                      <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                      <div>{{ cardText }}</div>
                    </div>
                  </v-card-title>
                  <v-card-actions>
                    <v-btn flat color="orange">Share</v-btn>
                    <v-btn flat color="orange">Explore</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>

              <v-flex>
                <v-card color="purple" class="white--text">
                  <v-container fluid grid-list-lg>
                    <v-layout row>
                      <v-flex xs7>
                        <div class="text-xs-left">
                          <div class="headline">Halycon Days</div>
                          <div>Ellie Goulding</div>
                        </div>
                      </v-flex>
                      <v-flex xs5>
                        <v-card-media
                          :src="require('@/assets/logo.png')"
                          height="125px"
                          contain
                        ></v-card-media>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card>
              </v-flex>

            </v-layout>

          </v-flex>

          <v-divider></v-divider>

          <!-- carousel (https://vuetifyjs.com/en/components/carousels) -->
          <v-flex class="pa-2">
            <p>Carousel:</p>
            <v-carousel>
              <v-carousel-item
                v-for="(item,i) in carouselItems"
                :src="item"
                :key="i"
                contain
              ></v-carousel-item>
            </v-carousel>
          </v-flex>

          <v-divider></v-divider>

          <!-- chips (https://vuetifyjs.com/en/components/chips) -->
          <v-flex class="pa-2">
              <p>Chips:</p>
              <v-layout row wrap>
                <v-flex md6 sm12>
                  <div class="text-xs-center">
                    <v-chip close>Example Chip</v-chip>
                  </div>
                  <div class="text-xs-center">
                    <v-chip>Example Chip</v-chip>
                  </div>
                </v-flex>
                <v-flex md6 sm12 xs12>
                  <div class="text-xs-center">
                    <v-chip close>
                      <v-avatar>
                        <img :src="require('@/assets/logo.png')">
                      </v-avatar>
                      Vue.js
                    </v-chip>
                  </div>
                  <div class="text-xs-center">
                    <v-chip>
                      <v-avatar class="teal">A</v-avatar>
                      ANZ Bank
                    </v-chip>
                  </div>
                </v-flex>
              </v-layout>
          </v-flex>

          <v-divider></v-divider>

          <!-- data iterator (https://vuetifyjs.com/en/components/data-iterator) -->
          <v-flex class="pa-2">
            <p>Data Iterator:</p>
            <v-container fluid grid-list-md>
              <v-data-iterator
                content-tag="v-layout"
                row
                wrap
                :items="items"
                :rows-per-page-items="rowsPerPageItems"
                :pagination.sync="pagination"
              >
                <v-flex
                  slot="item"
                  slot-scope="props"
                  xs12
                  sm6
                  md4
                  lg3
                >
                  <v-card>
                    <v-card-title><h4>{{ props.item.name }}</h4></v-card-title>
                    <v-divider></v-divider>
                    <v-list dense>
                      <v-list-tile>
                        <v-list-tile-content>Calories:</v-list-tile-content>
                        <v-list-tile-content
                          class="align-end"
                        >
                          {{ props.item.calories }}
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-list-tile>
                        <v-list-tile-content>Fat:</v-list-tile-content>
                        <v-list-tile-content
                          class="align-end"
                        >
                          {{ props.item.fat }}
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-list-tile>
                        <v-list-tile-content>Carbs:</v-list-tile-content>
                        <v-list-tile-content
                          class="align-end"
                        >
                          {{ props.item.carbs }}
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-list-tile>
                        <v-list-tile-content>Protein:</v-list-tile-content>
                        <v-list-tile-content
                          class="align-end"
                        >
                          {{ props.item.protein }}
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-list-tile>
                        <v-list-tile-content>Sodium:</v-list-tile-content>
                        <v-list-tile-content
                          class="align-end"
                        >
                          {{ props.item.sodium }}
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-list-tile>
                        <v-list-tile-content>Calcium:</v-list-tile-content>
                        <v-list-tile-content
                          class="align-end"
                        >
                          {{ props.item.calcium }}
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-list-tile>
                        <v-list-tile-content>Iron:</v-list-tile-content>
                        <v-list-tile-content
                          class="align-end"
                        >
                          {{ props.item.iron }}
                        </v-list-tile-content>
                      </v-list-tile>
                    </v-list>
                  </v-card>
                </v-flex>
              </v-data-iterator>
            </v-container>
          </v-flex>

          <v-divider></v-divider>

          <!-- data table (https://vuetifyjs.com/en/components/data-tables) -->
          <v-flex class="pa-2">
            <p>Data Table:</p>
            <v-data-table
              :headers="dtHeaders"
              :items="dtItems"
              hide-actions
              class="elevation-1"
            >
              <template slot="items" slot-scope="props">
                <td>{{ props.item.name }}</td>
                <td class="text-xs-left">{{ props.item.calories }}</td>
                <td class="text-xs-left">{{ props.item.fat }}</td>
                <td class="text-xs-left">{{ props.item.carbs }}</td>
                <td class="text-xs-left">{{ props.item.protein }}</td>
                <td class="text-xs-left">{{ props.item.iron }}</td>
              </template>
            </v-data-table>
          </v-flex>

          <v-divider></v-divider>

          <!-- dialogs (https://vuetifyjs.com/en/components/dialogs) -->
          <v-flex class="pa-2">
            <p>Dialogs:</p>
            <v-layout row justify-center>

              <v-btn
                color="primary"
                @click.native.stop="dialog_1 = true"
              >
                Open Dialog
              </v-btn>
              <v-dialog v-model="dialog_1" max-width="290">
                <v-card>
                  <v-card-title
                    class="headline text-xs-left"
                  >
                    Use Google's location service?
                  </v-card-title>
                  <v-card-text class="text-xs-left">{{ cardText }}</v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="green darken-1"
                      flat="flat"
                      @click.native="dialog_1 = false"
                    >
                      Disagree
                    </v-btn>
                    <v-btn
                      color="green darken-1"
                      flat="flat"
                      @click.native="dialog_1 = false"
                    >
                      Agree
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-dialog
                v-model="dialog_2" fullscreen transition="dialog-bottom-transition" :overlay="false">
                <v-btn color="primary" slot="activator">Open Dialog</v-btn>
                <v-card>
                  <v-toolbar dark color="primary">
                    <v-btn icon @click.native="dialog_2 = false" dark>
                      <v-icon>close</v-icon>
                    </v-btn>
                    <v-toolbar-title>Settings</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                      <v-btn dark flat @click.native="dialog_2 = false">Save</v-btn>
                    </v-toolbar-items>
                  </v-toolbar>
                  <p class="headline">Stuff goes here...</p>
                </v-card>
              </v-dialog>

            </v-layout>
          </v-flex>

          <v-divider></v-divider>

          <!-- dividers (https://vuetifyjs.com/en/components/dividers) -->
          <v-flex class="pa-2">
            <p>Dividers:</p>
            <layout column>
              <v-flex
                v-for="(item, index) in [1,2,3]"
                :key="item"
                xs4
                offset-xs4
              >
                <v-subheader>Hello: {{ index }}</v-subheader>
                <v-divider></v-divider>
              </v-flex>
            </layout>
          </v-flex>

          <v-divider></v-divider>

          <!-- buttons -->
          <v-flex class="pa-2">
            <v-btn>Hi!</v-btn>
          </v-flex>

          <v-divider></v-divider>

          <!-- buttons -->
          <v-flex class="pa-2">
            <v-btn>Hi!</v-btn>
          </v-flex>

          <v-divider></v-divider>

          <!-- buttons -->
          <v-flex class="pa-2">
            <v-btn>Hi!</v-btn>
          </v-flex>

          <v-divider></v-divider>

          <!-- buttons -->
          <v-flex class="pa-2">
            <v-btn>Hi!</v-btn>
          </v-flex>

          <v-divider></v-divider>

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
    darkTheme: false,
    drawer: false,
    e1: 'recent',
    sheet: false,
    customButtonLoading: false,
    // eslint-disable-next-line
    cardText: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. \
      Eos suavitate referrentur ad, te duo agam libris qualisque, utroque \
      quaestio accommodare no qui. Et percipit laboramus usu, no invidunt \
      verterem nominati mel. Dolorem ancillae an mei, ut putant invenire \
      splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in \
      sed, et per malis fuisset, qui id ludus appareat.',
    carouselItems: [
      require('@/assets/vue.png'),
      require('@/assets/vuesplash.png')
    ],
    rowsPerPageItems: [4, 8, 12],
    pagination: {
      rowsPerPage: 4
    },
    items: [
      {
        value: false,
        name: 'Frozen Yogurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        sodium: 87,
        calcium: '14%',
        iron: '1%'
      },
      {
        value: false,
        name: 'Ice cream sandwich',
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        sodium: 129,
        calcium: '8%',
        iron: '1%'
      },
      {
        value: false,
        name: 'Eclair',
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        sodium: 337,
        calcium: '6%',
        iron: '7%'
      },
      {
        value: false,
        name: 'Cupcake',
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        sodium: 413,
        calcium: '3%',
        iron: '8%'
      },
      {
        value: false,
        name: 'Gingerbread',
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        sodium: 327,
        calcium: '7%',
        iron: '16%'
      },
      {
        value: false,
        name: 'Jelly bean',
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
        sodium: 50,
        calcium: '0%',
        iron: '0%'
      },
      {
        value: false,
        name: 'Lollipop',
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        sodium: 38,
        calcium: '0%',
        iron: '2%'
      },
      {
        value: false,
        name: 'Honeycomb',
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        sodium: 562,
        calcium: '0%',
        iron: '45%'
      },
      {
        value: false,
        name: 'Donut',
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        sodium: 326,
        calcium: '2%',
        iron: '22%'
      },
      {
        value: false,
        name: 'KitKat',
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7,
        sodium: 54,
        calcium: '12%',
        iron: '6%'
      }
    ],
    dtHeaders: [
      {
        text: 'Dessert (100g serving)',
        align: 'left',
        sortable: false,
        value: 'name'
      },
      { text: 'Calories', value: 'calories' },
      { text: 'Fat (g)', value: 'fat' },
      { text: 'Carbs (g)', value: 'carbs' },
      { text: 'Protein (g)', value: 'protein' },
      { text: 'Iron (%)', value: 'iron' }
    ],
    dtItems: [
      {
        value: false,
        name: 'Frozen Yogurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: '1%'
      },
      {
        value: false,
        name: 'Ice cream sandwich',
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        iron: '1%'
      },
      {
        value: false,
        name: 'Eclair',
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        iron: '7%'
      },
      {
        value: false,
        name: 'Cupcake',
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        iron: '8%'
      },
      {
        value: false,
        name: 'Gingerbread',
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        iron: '16%'
      },
      {
        value: false,
        name: 'Jelly bean',
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
        iron: '0%'
      },
      {
        value: false,
        name: 'Lollipop',
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        iron: '2%'
      },
      {
        value: false,
        name: 'Honeycomb',
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        iron: '45%'
      },
      {
        value: false,
        name: 'Donut',
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        iron: '22%'
      },
      {
        value: false,
        name: 'KitKat',
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7,
        iron: '6%'
      }
    ],
    dialog_1: false,
    dialog_2: false
  }),
  props: {
    source: String
  },
  methods: {
    handleCustomButtonClick () {
      this.customButtonLoading = true
      setTimeout(() => {
        this.customButtonLoading = false
      }, 2000)
    }
  }
}
</script>

<style scoped lang="scss">
  .inspect {
    * {border: 1px dotted orange;}
  }
</style>
