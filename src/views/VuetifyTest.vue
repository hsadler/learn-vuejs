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

          <!--
              bottom navigation
              (https://vuetifyjs.com/en/components/bottom-navigation)
            -->
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

          <!--
            bottom sheet
            (https://vuetifyjs.com/en/components/bottom-sheets)
          -->
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

          <!--
            data iterator
            (https://vuetifyjs.com/en/components/data-iterator)
          -->
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
                v-model="dialog_2"
                fullscreen transition="dialog-bottom-transition"
                :overlay="false"
              >
                <v-btn color="primary" slot="activator">Open Dialog</v-btn>
                <v-card>
                  <v-toolbar dark color="primary">
                    <v-btn icon @click.native="dialog_2 = false" dark>
                      <v-icon>close</v-icon>
                    </v-btn>
                    <v-toolbar-title>Settings</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                      <v-btn
                        dark
                        flat
                        @click.native="dialog_2 = false"
                      >
                        Save
                      </v-btn>
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
            <v-layout row wrap>
              <v-flex
                v-for="(item, index) in [1,2,3]"
                :key="item"
                xs4
                offset-xs4
              >
                <v-subheader>Hello: {{ index }}</v-subheader>
                <v-divider></v-divider>
              </v-flex>
            </v-layout>
          </v-flex>

          <v-divider></v-divider>

          <!--
            expansion panel
            (https://vuetifyjs.com/en/components/expansion-panels)
          -->
          <v-flex class="pa-2">
            <p>Expansion Panel:</p>
            <v-flex xs4 offset-xs4>
              <v-expansion-panel>
                <v-expansion-panel-content v-for="(item,i) in 5" :key="i">
                  <div slot="header">Item: {{ i }}</div>
                  <v-card>
                    <v-card-text>{{ cardText }}</v-card-text>
                  </v-card>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-flex>
          </v-flex>

          <v-divider></v-divider>

          <!-- footer (https://vuetifyjs.com/en/components/footer) -->
          <v-flex class="pa-2">
            <p>Footer:</p>
            <v-footer height="auto" class="indigo lighten-1">
              <v-layout row wrap justify-center>
                <v-btn
                  color="white"
                  flat
                  v-for="link in footerLinks"
                  :key="link"
                >
                  {{ link }}
                </v-btn>
                <v-flex xs12 py-3 text-xs-center white--text>
                  &copy;{{ new Date().getFullYear() }}
                </v-flex>
              </v-layout>
            </v-footer>
          </v-flex>

          <v-divider></v-divider>

          <!-- form (https://vuetifyjs.com/en/components/forms) -->
          <v-flex class="pa-2">
            <p>Form:</p>
            <v-flex xs4 offset-xs4>
              <v-form v-model="form.valid">
                <v-text-field
                  label="Name"
                  v-model="form.name"
                  :rules="form.nameRules"
                  :counter="10"
                  required
                ></v-text-field>
                <v-text-field
                  label="E-mail"
                  v-model="form.email"
                  :rules="form.emailRules"
                  required
                ></v-text-field>
              </v-form>
            </v-flex>
          </v-flex>

          <v-divider></v-divider>

          <!-- selects (https://vuetifyjs.com/en/components/selects) -->
          <v-flex class="pa-2">
            <p>Selects:</p>
            <v-flex xs8 offset-xs2>
              <v-container fluid>
                <v-layout row wrap>
                  <v-flex xs6>
                    <v-subheader>Standard</v-subheader>
                  </v-flex>
                  <v-flex xs6>
                    <v-select
                      :items="selects.items"
                      v-model="selects.e1"
                      label="Select"
                      single-line
                    ></v-select>
                  </v-flex>
                  <v-flex xs6>
                    <v-subheader>Standard with focus</v-subheader>
                  </v-flex>
                  <v-flex xs6>
                    <v-select
                      :items="selects.items"
                      v-model="selects.e2"
                      label="Select"
                      class="input-group--focused"
                      item-value="text"
                    ></v-select>
                  </v-flex>
                  <v-flex xs6>
                    <v-subheader>Error</v-subheader>
                  </v-flex>
                  <v-flex xs6>
                    <v-select
                      label="Select"
                      :items="selects.items"
                      v-model="selects.e3"
                      :error-messages="['Please select an option']"
                      item-value="text"
                    ></v-select>
                  </v-flex>
                  <v-flex xs6>
                    <v-subheader>Disabled</v-subheader>
                  </v-flex>
                  <v-flex xs6>
                    <v-select
                      label="Select"
                      :items="selects.items"
                      v-model="selects.e4"
                      disabled
                    ></v-select>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-flex>
          </v-flex>

          <v-divider></v-divider>

          <!--
            selection controls
            (https://vuetifyjs.com/en/components/selection-controls)
          -->
          <v-flex class="pa-2">
            <p>Selection Controls:</p>
            <v-flex xs7 offset-xs5>
              <v-container>
                <v-checkbox
                  :label="`Checkbox 1: ${selectionControls.checkbox.toString()}`"
                  v-model="selectionControls.checkbox"
                  color="blue-grey"
                ></v-checkbox>
                <v-radio-group v-model="selectionControls.radioGroup">
                  <v-radio
                    v-for="n in 3"
                    :key="n"
                    :label="`Radio ${n}`"
                    :value="n"
                    color="green"
                  ></v-radio>
                </v-radio-group>
                <v-switch
                  :label="`Switch 1: ${selectionControls.switch1.toString()}`"
                  v-model="selectionControls.switch1"
                  color="orange"
                ></v-switch>
              </v-container>
            </v-flex>
          </v-flex>

          <v-divider></v-divider>

          <!-- text fields (https://vuetifyjs.com/en/components/text-fields) -->
          <v-flex class="pa-2">
            <p>Text Fields:</p>
            <v-flex xs8 offset-xs2>

              <v-layout row>
                <v-flex xs4>
                  <v-subheader>Normal with hint text/label</v-subheader>
                </v-flex>
                <v-flex xs8>
                  <v-text-field
                    name="input-1"
                    label="Label Text"
                    id="testing"
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row>
                <v-flex xs4>
                  <v-subheader>Focus</v-subheader>
                </v-flex>
                <v-flex xs8>
                  <v-text-field
                    name="input-2"
                    label="Label Text"
                    value="Input text"
                    class="input-group--focused"
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row>
                <v-flex xs4>
                  <v-subheader>Disabled</v-subheader>
                </v-flex>
                <v-flex xs8>
                  <v-text-field
                    name="input-3"
                    label="Label Text"
                    value="Input text"
                    disabled
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row wrap>
                <v-flex xs12>
                  <v-text-field
                    label="Title"
                    :rules="[(v) => v.length <= 25 || 'Max 25 characters']"
                    :counter="25"
                    v-model="textFields.title"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                    label="Description"
                    :rules="[(v) => v.length <= 50 || 'Max 50 characters']"
                    :counter="50"
                    v-model="textFields.description"
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    name="input-1"
                    label="Label Text"
                    textarea
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-container fluid>
                <v-checkbox
                  label="Custom progress bar"
                  v-model="textFieldProgress.custom"
                ></v-checkbox>
                <v-text-field
                  color="cyan darken"
                  label="Text field"
                  placeholder="Start typing..."
                  v-model="textFieldProgress.value"
                  loading
                >
                  <v-progress-linear
                    v-if="textFieldProgress.custom"
                    slot="progress"
                    :value="progress"
                    height="7"
                    :color="color"
                  ></v-progress-linear>
                </v-text-field>
              </v-container>

            </v-flex>
          </v-flex>

          <v-divider></v-divider>

          <!-- icons (https://vuetifyjs.com/en/components/icons) -->
          <v-flex class="pa-2">
            <p>Icons:</p>
            <v-flex xs4 offset-xs4>
              <v-layout justify-space-around class="mb-2">
                <span class="group pa-2">
                  <v-icon>home</v-icon>
                  <v-icon>event</v-icon>
                  <v-icon>info</v-icon>
                </span>

                <span class="group pa-2 teal">
                  <v-icon dark>folder_open</v-icon>
                  <v-icon dark>widgets</v-icon>
                  <v-icon dark>gavel</v-icon>
                </span>
              </v-layout>

              <v-layout justify-space-around class="mb-2">
                <span class="group pa-2">
                  <v-icon medium>home</v-icon>
                  <v-icon medium>event</v-icon>
                  <v-icon medium>info</v-icon>
                </span>

                <span class="group pa-2 teal">
                  <v-icon medium dark>folder_open</v-icon>
                  <v-icon medium dark>widgets</v-icon>
                  <v-icon medium dark>gavel</v-icon>
                </span>
              </v-layout>

              <v-layout justify-space-around class="mb-2">
                <span class="group pa-2">
                  <v-icon large>home</v-icon>
                  <v-icon large>event</v-icon>
                  <v-icon large>info</v-icon>
                </span>

                <span class="group pa-2 teal">
                  <v-icon large dark>folder_open</v-icon>
                  <v-icon large dark>widgets</v-icon>
                  <v-icon large dark>gavel</v-icon>
                </span>
              </v-layout>

              <v-layout justify-space-around>
                <span class="group pa-2">
                  <v-icon x-large>home</v-icon>
                  <v-icon x-large>event</v-icon>
                  <v-icon x-large>info</v-icon>
                </span>

                <span class="group pa-2 teal">
                  <v-icon x-large dark>folder_open</v-icon>
                  <v-icon x-large dark>widgets</v-icon>
                  <v-icon x-large dark>gavel</v-icon>
                </span>
              </v-layout>
            </v-flex>
          </v-flex>

          <v-divider></v-divider>

          <!-- lists (https://vuetifyjs.com/en/components/lists) -->
          <v-flex class="pa-2">
            <p>Lists:</p>
            <v-flex xs6 offset-xs3>
              <v-list two-line>
                <template v-for="(item, index) in listItems.items">
                  <v-subheader
                    v-if="item.header"
                    :key="item.header"
                  >
                    {{ item.header }}
                  </v-subheader>
                  <v-divider
                    v-else-if="item.divider"
                    :inset="item.inset"
                    :key="index"
                  ></v-divider>
                  <v-list-tile avatar v-else :key="item.title">
                    <v-list-tile-avatar>
                      <img :src="item.avatar">
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                      <v-list-tile-title
                        v-html="item.title"
                      ></v-list-tile-title>
                      <v-list-tile-sub-title
                        v-html="item.subtitle"
                      ></v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </template>
              </v-list>
            </v-flex>
          </v-flex>

          <v-divider></v-divider>

          <!-- jumbotron (https://vuetifyjs.com/en/components/jumbotrons) -->
          <v-flex class="pa-2">
            <p>Jumbotrons:</p>
            <v-jumbotron color="brown darken-2" dark>
              <v-container fill-height>
                <v-layout align-center>
                  <v-flex class="text-xs-left">
                    <h3 class="display-3">Welcome to the site</h3>
                    <span class="subheading">{{ cardText }}</span>
                    <v-divider class="my-3"></v-divider>
                    <div class="title mb-3">Check out our newest features!</div>
                    <v-btn large color="primary" class="mx-0">See more</v-btn>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-jumbotron>
          </v-flex>

          <v-divider></v-divider>

          <!-- menu (https://vuetifyjs.com/en/components/menus) -->
          <v-flex class="pa-2">
            <p>Menus:</p>
            <v-flex>

              <v-menu
                origin="center center"
                transition="scale-transition"
                bottom
              >
                <v-btn color="primary" slot="activator">
                  Scale Transition
                </v-btn>
                <v-list>
                  <v-list-tile v-for="(item, i) in menu.items" :key="i">
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  </v-list-tile>
                </v-list>
              </v-menu>

              <v-menu
                transition="slide-x-transition"
                bottom
                right
              >
                <v-btn class="deep-orange" dark slot="activator">
                  Slide X Transition
                </v-btn>
                <v-list>
                  <v-list-tile v-for="(item, i) in menu.items" :key="i">
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  </v-list-tile>
                </v-list>
              </v-menu>

              <v-menu
                transition="slide-y-transition"
                bottom
              >
                <v-btn class="purple" dark slot="activator">
                  Slide Y Transition
                </v-btn>
                <v-list>
                  <v-list-tile v-for="(item, i) in menu.items" :key="i">
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  </v-list-tile>
                </v-list>
              </v-menu>

              <v-menu bottom left>
                <v-btn icon slot="activator" dark>
                  <v-icon>more_vert</v-icon>
                </v-btn>
                <v-list>
                  <v-list-tile v-for="(item, i) in menu.items" :key="i">
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  </v-list-tile>
                </v-list>
              </v-menu>

            </v-flex>
          </v-flex>

          <v-divider></v-divider>

          <!--
            navigation drawers
            (https://vuetifyjs.com/en/components/navigation-drawers)
          -->
          <v-flex class="pa-2">
            <p>Navigation Drawers:</p>

            <v-flex class="navDrawerContainer" xs6 offset-xs3>
              <v-navigation-drawer permanent>
                <v-toolbar flat>
                  <v-list>
                    <v-list-tile>
                      <v-list-tile-title class="title">
                        Application
                      </v-list-tile-title>
                    </v-list-tile>
                  </v-list>
                </v-toolbar>
                <v-divider></v-divider>
                <v-list dense class="pt-0">
                  <v-list-tile
                    v-for="item in navDrawer.items"
                    :key="item.title"
                  >
                    <v-list-tile-action>
                      <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-navigation-drawer>
            </v-flex>

            <v-flex class="navDrawerContainer" xs6 offset-xs3>
              <v-layout class="tempNavDrawer" row wrap>
                <v-container fluid>
                  <v-layout justify-center>
                    <v-btn
                      @click.stop="navDrawer.drawer = !navDrawer.drawer"
                      dark
                      color="pink"
                    >
                      Toggle
                    </v-btn>
                  </v-layout>
                </v-container>
                <v-navigation-drawer
                  temporary
                  v-model="navDrawer.drawer"
                  absolute
                >
                  <v-list class="pa-1">
                    <v-list-tile avatar>
                      <v-list-tile-avatar>
                        <img :src="require('@/assets/logo.png')">
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title>Vue.js</v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>
                  </v-list>
                  <v-list class="pt-0" dense>
                    <v-divider></v-divider>
                    <v-list-tile
                      v-for="item in navDrawer.items"
                      :key="item.title"
                    >
                      <v-list-tile-action>
                        <v-icon>{{ item.icon }}</v-icon>
                      </v-list-tile-action>
                      <v-list-tile-content>
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>
                  </v-list>
                </v-navigation-drawer>
              </v-layout>
            </v-flex>

          </v-flex>

          <v-divider></v-divider>

          <!-- pagination (https://vuetifyjs.com/en/components/paginations) -->
          <v-flex class="pa-2">
            <p>Pagination:</p>
            <v-flex>
              <p class="title">Page: {{ paginationComponent.page }}</p>
              <div class="text-xs-center">
                <v-pagination
                  :length="6"
                  v-model="paginationComponent.page"
                ></v-pagination>
              </div>
            </v-flex>
          </v-flex>

          <v-divider></v-divider>

          <!-- parallax (https://vuetifyjs.com/en/components/parallax) -->
          <v-flex class="pa-2">
            <p>Parallax:</p>
            <v-flex>
              <v-parallax
                :src="require('@/assets/vue.png')"
                height="300"
              ></v-parallax>
            </v-flex>
          </v-flex>

          <v-divider></v-divider>

          <!-- date picker (https://vuetifyjs.com/en/components/date-pickers) -->
          <v-flex class="pa-2">
            <p>Date Picker:</p>
            <v-flex>
              <v-date-picker
                full-width
                landscape
                class="mt-3"
                v-model="datePicker.date"
              ></v-date-picker>
            </v-flex>
          </v-flex>

          <v-divider></v-divider>

          <!-- time picker (https://vuetifyjs.com/en/components/time-pickers) -->
          <v-flex class="pa-2">
            <p>Time Picker:</p>
            <v-flex>
              <v-time-picker
                full-width
                landscape
                type="month"
                class="mt-3"
                v-model="timePicker.time"
              ></v-time-picker>
            </v-flex>
          </v-flex>

          <v-divider></v-divider>

          <!-- progress (https://vuetifyjs.com/en/components/progress) -->
          <v-flex class="pa-2">
            <p>Progress:</p>
            <v-flex>

              <v-progress-circular
                indeterminate :size="50"
                color="primary"
              ></v-progress-circular>

              <v-progress-circular
                indeterminate
                :width="3"
                color="red"
              ></v-progress-circular>

              <v-progress-circular
                indeterminate
                :size="70"
                :width="7"
                color="purple"
              ></v-progress-circular>

              <v-progress-circular
                indeterminate
                :width="3"
                color="green"
              ></v-progress-circular>

              <v-progress-circular
                indeterminate
                :size="50"
                color="amber"
              ></v-progress-circular>

            </v-flex>

            <v-flex>

              <v-progress-linear :indeterminate="true"></v-progress-linear>

              <v-progress-linear
                value="15"
                height="2"
                color="secondary"
              ></v-progress-linear>

              <v-progress-linear
                value="30"
                height="5"
                color="success"
              ></v-progress-linear>

              <v-progress-linear
                value="45"
                height="10"
                color="info"
              ></v-progress-linear>

              <v-progress-linear
                value="60"
                height="15"
                color="warning"
              ></v-progress-linear>

              <v-progress-linear
                value="75"
                height="20"
                color="error"
              ></v-progress-linear>

            </v-flex>

          </v-flex>

          <v-divider></v-divider>

          <!-- sliders (https://vuetifyjs.com/en/components/sliders) -->
          <v-flex class="pa-2">
            <p>Sliders:</p>
            <v-flex>
              <v-slider v-model="sliders.value1" step="0"></v-slider>
              <v-slider v-model="sliders.value2" step="0" disabled></v-slider>
            </v-flex>
          </v-flex>

          <v-divider></v-divider>

          <!-- snackbar (https://vuetifyjs.com/en/components/snackbars) -->
          <v-flex class="pa-2">
            <p>Snackbar:</p>
            <v-flex>

              <v-btn
                block
                color="primary"
                @click.native="snackbar.snackbar = true"
                dark
              >
                Show Snackbar
              </v-btn>

              <v-snackbar
                :timeout="snackbar.timeout"
                :top="snackbar.y === 'top'"
                :bottom="snackbar.y === 'bottom'"
                :right="snackbar.x === 'right'"
                :left="snackbar.x === 'left'"
                :multi-line="snackbar.mode === 'multi-line'"
                :vertical="snackbar.mode === 'vertical'"
                v-model="snackbar.snackbar"
              >
                {{ snackbar.text }}
                <v-btn
                  flat
                  color="pink"
                  @click.native="snackbar.snackbar = false"
                >
                  Close
                </v-btn>
              </v-snackbar>

            </v-flex>
          </v-flex>

          <v-divider></v-divider>

          <!-- stepper (https://vuetifyjs.com/en/components/steppers) -->
          <v-flex class="pa-2">
            <p>Stepper:</p>
            <v-flex>

              <v-stepper v-model="stepper.e1">

                <v-stepper-header>
                  <v-stepper-step
                    step="1"
                    :complete="stepper.e1 > 1"
                  >
                    Name of step 1
                  </v-stepper-step>
                  <v-divider></v-divider>
                  <v-stepper-step
                    step="2"
                    :complete="stepper.e1 > 2"
                  >
                    Name of step 2
                  </v-stepper-step>
                  <v-divider></v-divider>
                  <v-stepper-step step="3">Name of step 3</v-stepper-step>
                </v-stepper-header>

                <v-stepper-items>

                  <v-stepper-content step="1">
                    <v-card
                      color="grey lighten-1"
                      class="mb-5"
                      height="200px"
                    ></v-card>
                    <v-btn
                      color="primary"
                      @click.native="stepper.e1 = 2"
                    >
                      Continue
                    </v-btn>
                    <v-btn flat>Cancel</v-btn>
                  </v-stepper-content>

                  <v-stepper-content step="2">
                    <v-card
                      color="grey lighten-1"
                      class="mb-5"
                      height="200px"
                    ></v-card>
                    <v-btn
                      color="primary"
                      @click.native="stepper.e1 = 3"
                    >
                      Continue
                    </v-btn>
                    <v-btn flat>Cancel</v-btn>
                  </v-stepper-content>

                  <v-stepper-content step="3">
                    <v-card
                      color="grey lighten-1"
                      class="mb-5"
                      height="200px"
                    ></v-card>
                    <v-btn
                      color="primary"
                      @click.native="stepper.e1 = 1"
                    >
                      Continue
                    </v-btn>
                    <v-btn flat>Cancel</v-btn>
                  </v-stepper-content>

                </v-stepper-items>

              </v-stepper>

            </v-flex>
          </v-flex>

          <v-divider></v-divider>

          <!-- subheaders (https://vuetifyjs.com/en/components/subheaders) -->
          <v-flex class="pa-2">
            <p>Subheaders:</p>
            <v-flex xs6 offset-xs3>

              <v-list two-line>
                <template v-for="(item, index) in subheader.items">
                  <v-subheader
                    v-if="item.header"
                    :key="item.header"
                  >
                    {{ item.header }}
                  </v-subheader>
                  <v-divider
                    v-else-if="item.divider"
                    :inset="item.inset"
                    :key="index"
                  ></v-divider>
                  <v-list-tile avatar v-else :key="item.title">
                    <v-list-tile-avatar>
                      <img :src="item.avatar">
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                      <v-list-tile-title
                        v-html="item.title"
                      ></v-list-tile-title>
                      <v-list-tile-sub-title
                        v-html="item.subtitle"
                      ></v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </template>
              </v-list>

            </v-flex>
          </v-flex>

          <v-divider></v-divider>

          <!-- tabs () -->
          <v-flex class="pa-2">
            <p>Tabs:</p>
            <v-flex xs6 offset-xs3>
              <v-tabs
                v-model="tabs.active"
                color="cyan"
                dark
                slider-color="yellow"
              >
                <v-tab
                  v-for="n in 3"
                  :key="n"
                  ripple
                >
                  Item {{ n }}
                </v-tab>
                <v-tab-item
                  v-for="n in 3"
                  :key="n"
                >
                  <v-card flat>
                    <v-card-text>{{ cardText }}</v-card-text>
                  </v-card>
                </v-tab-item>
              </v-tabs>

              <div class="text-xs-center mt-3">
                <v-btn color="green" dark @click.native="next">next tab</v-btn>
              </div>
            </v-flex>
          </v-flex>

          <v-divider></v-divider>

          <!-- toolbars (https://vuetifyjs.com/en/components/toolbars) -->
          <v-flex class="pa-2">

            <p>Toolbars:</p>

            <v-flex class="my-2">
              <v-toolbar>
                <v-toolbar-side-icon></v-toolbar-side-icon>
                <v-toolbar-title>Title</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items class="hidden-sm-and-down">
                  <v-btn flat>Link One</v-btn>
                  <v-btn flat>Link Two</v-btn>
                  <v-btn flat>Link Three</v-btn>
                </v-toolbar-items>
              </v-toolbar>
            </v-flex>

            <v-flex class="my-2">
              <v-toolbar dark color="primary">
                <v-toolbar-side-icon></v-toolbar-side-icon>
                <v-toolbar-title class="white--text">Title</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>search</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>apps</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>refresh</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>more_vert</v-icon>
                </v-btn>
              </v-toolbar>
            </v-flex>

          </v-flex>

          <v-divider></v-divider>

          <!-- tooltips (https://vuetifyjs.com/en/components/tooltips) -->
          <v-flex class="pa-2 mb-5">
            <p>Tooltips:</p>
            <v-flex>
              <div class="text-xs-center d-flex align-center">
                <v-tooltip bottom>
                  <v-btn dark color="primary" slot="activator">Button</v-btn>
                  <span>Tooltip</span>
                </v-tooltip>
                <v-tooltip bottom>
                  <v-icon dark color="primary" slot="activator">home</v-icon>
                  <span>Tooltip</span>
                </v-tooltip>
                <v-tooltip bottom>
                  <span slot="activator">This text has a tooltip</span>
                  <span>Tooltip</span>
                </v-tooltip>
              </div>
            </v-flex>
          </v-flex>

        </v-layout>

      </v-container>
    </v-content>

    <v-footer app fixed>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>

  </v-app>

</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    darkTheme: true,
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
    dialog_2: false,
    footerLinks: ['Home', 'About Us', 'Team', 'Services', 'Blog', 'Contact Us'],
    selects: {
      e1: null,
      e2: null,
      e3: null,
      e4: null,
      items: [
        { text: 'State 1' },
        { text: 'State 2' },
        { text: 'State 3' },
        { text: 'State 4' },
        { text: 'State 5' },
        { text: 'State 6' },
        { text: 'State 7' }
      ]
    },
    form: {
      valid: false,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ]
    },
    selectionControls: {
      checkbox: true,
      radioGroup: 1,
      switch1: true
    },
    textFields: {
      title: 'Preliminary report',
      description: 'Report describing the state of California'
    },
    textFieldProgress: {
      value: '',
      custom: true
    },
    listItems: {
      items: [
        {
          header: 'Today'
        },
        {
          avatar: require('@/assets/logo.png'),
          title: 'Brunch this weekend?',
          // eslint-disable-next-line
          subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; \
           I'll be in your neighborhood doing errands this weekend. Do you \
            want to hang out?"
        },
        {
          divider: true,
          inset: true
        },
        {
          avatar: require('@/assets/logo.png'),
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          // eslint-disable-next-line
          subtitle: "<span class='text--primary'>to Alex, Scott, \
            Jennifer</span> &mdash; Wish I could come, but I'm out of town \
            this weekend."
        },
        {
          divider: true,
          inset: true
        },
        {
          avatar: require('@/assets/logo.png'),
          title: 'Oui oui',
          // eslint-disable-next-line
          subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; \
            Do you have Paris recommendations? Have you ever been?"
        }
      ]
    },
    menu: {
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' }
      ]
    },
    navDrawer: {
      drawer: false,
      items: [
        { title: 'Home', icon: 'dashboard' },
        { title: 'About', icon: 'question_answer' }
      ]
    },
    paginationComponent: {
      page: 1
    },
    datePicker: {
      date: '2018-03-02'
    },
    timePicker: {
      time: '11:15'
    },
    sliders: {
      value1: 0,
      value2: 50
    },
    snackbar: {
      snackbar: false,
      y: null,
      x: null,
      mode: '',
      timeout: 1000,
      text: 'Hello, I\'m a snackbar'
    },
    stepper: {
      e1: 0
    },
    subheader: {
      items: [
        { header: 'Today' },
        {
          avatar: require('@/assets/logo.png'),
          title: 'Brunch this weekend?',
          // eslint-disable-next-line
          subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; \
            I'll be in your neighborhood doing errands this weekend. Do you \
            want to hang out?"
        },
        { divider: true, inset: true },
        {
          avatar: require('@/assets/logo.png'),
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          // eslint-disable-next-line
          subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer\
            </span> &mdash; Wish I could come, but I'm out of town this weekend."
        },
        { divider: true, inset: true },
        {
          avatar: require('@/assets/logo.png'),
          title: 'Oui oui',
          // eslint-disable-next-line
          subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do \
            you have Paris recommendations? Have you ever been?"
        },
        { divider: true, inset: true },
        {
          avatar: require('@/assets/logo.png'),
          title: 'Birthday gift',
          // eslint-disable-next-line
          subtitle: "<span class='text--primary'>Trevor Hansen</span> &mdash; \
            Have any ideas about what we should get Heidi for her birthday?"
        },
        { divider: true, inset: true },
        {
          avatar: require('@/assets/logo.png'),
          title: 'Recipe to try',
          // eslint-disable-next-line
          subtitle: "<span class='text--primary'>Britta Holt</span> &mdash; We \
            should eat this: Grate, Squash, Corn, and tomatillo Tacos."
        }
      ]
    },
    tabs: {
      active: null
    }
  }),
  computed: {
    progress () {
      return Math.min(100, this.textFieldProgress.value.length * 10)
    },
    color () {
      return [
        'error',
        'warning',
        'success'
      ][Math.floor(this.progress / 40)]
    }
  },
  methods: {
    handleCustomButtonClick () {
      this.customButtonLoading = true
      setTimeout(() => {
        this.customButtonLoading = false
      }, 2000)
    },
    next () {
      const active = parseInt(this.tabs.active)
      this.tabs.active = (active < 2 ? active + 1 : 0).toString()
    }
  }
}
</script>

<style scoped lang="scss">
  .inspect {
    * {border: 1px dotted orange;}
  }
  .navDrawerContainer {
    height: 300px;
    border: 1px solid gray;
    .tempNavDrawer {
      height: 300px;
      position: relative;
      overflow: hidden;
    }
  }
</style>
