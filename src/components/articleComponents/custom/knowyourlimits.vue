<template>
  <v-container fill-height fluid v-bind:style="{ background: backColor }">
    <v-row
      no-gutters
      justify='center'
      align='center'
      style="width:100vw;height:75vh;"
    >
      <v-col
      cols='12'
      md='7'
      >
      <v-card
    class="mx-auto mb-5"
    max-width="30vw"
  >
    <v-card-text justify='center' align='center'>
      <div class="display-1 text--primary">Crypto Amount(USD):</div>
      <v-text-field
        :rules="[rules.sign, rules.inScope]"
        type="number"
        placeholder="0 USD"
        class="mt-3"
        v-model="amount"
        v-on:focus="update(amount)"
      ></v-text-field>
    </v-card-text>
  </v-card>
      <v-card style="height:50vh;">
        <v-tabs
          v-model="tab"
          :background-color="backColor1"
          color='white'
          center-active
        >
          <v-tabs-slider></v-tabs-slider>

          <v-tab href="#tab-1" black--text>
            Tier 1
            <v-icon>mdi-cellphone-wireless</v-icon>
          </v-tab>

          <v-tab href="#tab-2" black--text>
            Tier 2
            <v-icon>mdi-cellphone-lock</v-icon>
          </v-tab>

          <v-tab href="#tab-3" black--text>
            Tier 3
            <v-icon>mdi-lock-check</v-icon>
          </v-tab>
          <v-tab href="#tab-4" black--text>
            Tier 4
            <v-icon>mdi-earth</v-icon>
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item
            v-for="i in 4"
            :key="i"
            :value="'tab-' + i"
          >
            <v-card flat>
              <v-card-text>{{ text }}</v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
      </v-col>
    </v-row>
</v-container>
</template>
<script>
export default {
  props: {
    backColor: String,
    backColor1: String
  },
  data () {
    return {
      rules: {
        sign: value => (Math.sign(value) >= 0 || 'Must Be Positive Amount'),
        inScope: value => (value <= 20000 || 'Seek Specialized Assistance for This Amount.')
      },
      tab: null,
      amount: null,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  },
  methods: {
    update: function (val) {
      if (val < 130) {
        this.tab = 'tab-1'
        return
      }
      if (val < 830) {
        this.tab = 'tab-2'
        return
      }
      if (val < 5000) {
        this.tab = 'tab-3'
        return
      }
      if (val < 20001) {
        this.tab = 'tab-4'
        return
      }
      this.tab = 'tab-1'
    }
  },
  watch: {
    amount: function (val, oldVal) {
      this.update(val)
    }
  }
}
</script>
