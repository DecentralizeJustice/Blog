<template>
  <v-container fill-height fluid v-bind:style="{ background: backColor }">
    <v-row
      no-gutters
      justify='center'
      align='center'
      style="width:100vw;min-height:90vh;"
    >
      <v-col
      cols='12'
      md='7'
      >
      <v-card
    class="mx-auto mb-5"
  >
    <v-card-text justify='center' align='center'>
      <div class="display-1 text--primary">Crypto Amount (USD):</div>
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
      <v-card style="">
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

        <v-tabs-items v-model="tab" black--text>
          <v-tab-item
            value="tab-1"
            black--text
            align='center'
            justify='center'
            class="pa-2"
          >
            <div class="display-1 mt-3 mb-3">Use App On Phone or Laptop</div>
            <v-row
                no-gutters
                style=""
                class="mt-2"
                justify='center'
              >
                <v-col
                cols='12'
                md='4'
                >
                  <v-card
                    class="text-center"
                    tile flat
                  >
                  <v-card-title class="justify-center display-1">Phone</v-card-title>
                    <v-btn :color="backColor1" href="https://www.exodus.io/mobile/" target="_blank">Exodus Mobile</v-btn>
                  </v-card>
                </v-col>
                <v-col
                cols='12'
                md='4'
                >
                  <v-card
                    class=""
                    flat
                    tile
                  >
                  <v-card-title class="justify-center display-1">Computer</v-card-title>
                    <v-btn :color="backColor1" href="https://www.exodus.io/desktop/" target="_blank">Exodus Desktop</v-btn>
                  </v-card>
                </v-col>
                <v-col
                cols='12'
                md='6'
                class="pa-4"
                >
                <v-img src="https://res.cloudinary.com/dylevfpbl/image/upload/v1584341868/decenblog/limits/Exodus_logo_dark.svg" ></v-img>
                </v-col>
              </v-row>
          </v-tab-item>

          <v-tab-item
            value="tab-2"
            black--text
            align='center'
            justify='center'
            class="pa-2"
          >
            <div class="display-1 mt-3 mb-3">Use Hardware Wallet</div>
            <v-row
                no-gutters
                style=""
                class="mt-2"
                justify='center'
              >
                <v-col
                cols='12'
                md='4'
                >
                  <v-card
                    class="text-center"
                    tile flat
                  >
                  <v-card-title class="justify-center headline">Budget (40 USD)</v-card-title>
                    <v-btn :color="backColor1" href="https://www.amazon.com/Trezor-One-Cryptocurrency-Protection-including/dp/B00R6MKDDE"
                    target="_blank">Trezor One</v-btn>
                  </v-card>
                </v-col>
                <v-col
                cols='12'
                md='4'
                >
                  <v-card
                    class=""
                    flat
                    tile
                  >
                  <v-card-title class="justify-center headline" >Luxury (152 USD)</v-card-title>
                    <v-btn :color="backColor1" href="https://www.amazon.com/Trezor-T-Model/dp/B07B8Q2G3K"
                    target="_blank">Trezor Model T</v-btn>
                  </v-card>
                </v-col>
                <v-col
                cols='8'
                md='6'
                class="pa-4"
                >
                <v-img src="https://res.cloudinary.com/dylevfpbl/image/upload/v1584342984/decenblog/limits/trezor.svg" ></v-img>
                </v-col>
              </v-row>
          </v-tab-item>
          <v-tab-item
            value="tab-3"
            black--text
            align='center'
            justify='center'
            class="pa-2"
          >
            <div class="display-1 mt-3">Hardware Wallet Multisig</div>
            <div class="subtitle-1 mb-3">Electrum (Bitcoin Only)</div>
            <div class="body-1">Rules:</div>
            <div class="body-1">2 of 3 Multisig</div>
            <div class="body-1">3 Different Devices from Different Places</div>
            <v-row
                no-gutters
                style=""
                class="mt-2"
                justify='center'
              >
                <v-col
                cols='12'
                md='4'
                >
                  <v-card
                    class="text-center"
                    tile flat
                  >
                  <v-card-title class="justify-center headline">Trezor One</v-card-title>
                    <v-btn :color="backColor1" href="https://www.amazon.com/Trezor-One-Cryptocurrency-Protection-including/dp/B00R6MKDDE"
                    target="_blank">Trezor One</v-btn>
                  </v-card>
                </v-col>
                <v-col
                cols='12'
                md='4'
                >
                  <v-card
                    class=""
                    flat
                    tile
                  >
                  <v-card-title class="justify-center headline">Trezor Model T</v-card-title>
                    <v-btn :color="backColor1" href="https://www.amazon.com/Trezor-T-Model/dp/B07B8Q2G3K"
                    target="_blank">Trezor Model T</v-btn>
                  </v-card>
                </v-col>
                <v-col
                cols='8'
                md='4'
                >
                  <v-card
                    class=""
                    flat
                    tile
                  >
                  <v-card-title class="justify-center headline">Cold Card</v-card-title>
                    <v-btn :color="backColor1" href="https://coldcardwallet.com/"
                    target="_blank">Cold Card</v-btn>
                  </v-card>
                </v-col>
                <v-col
                cols='12'
                md='8'
                class="pa-4"
                >
                <a href="https://electrum.readthedocs.io/en/latest/multisig.html"
                target="_blank"><div  :class="{'display-3 mb-3': $vuetify.breakpoint.smAndDown,
                'display-4 mb-3': $vuetify.breakpoint.mdAndUp}" >
                  Electrum</div></a>
                </v-col>
              </v-row>
          </v-tab-item>
          <v-tab-item
            value="tab-4"
            black--text
            align='center'
            justify='center'
          >
            <div class="display-1 mt-3">Multisig Multi-Location</div>
            <v-row
                no-gutters
                style=""
                class="mt-2"
                justify='center'
              >
                <v-col
                cols='12'
                class="pa-4"
                >
                <a href="https://keys.casa/keymaster/"
                target="_blank"><div :class="{'display-3 mb-3': $vuetify.breakpoint.smAndDown,
                'display-4 mb-3': $vuetify.breakpoint.mdAndUp}"
                >Casa Keymaster</div></a>
                </v-col>
              </v-row>
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
      amount: null
    }
  },
  methods: {
    update: function (val) {
      if (val < 130) {
        this.tab = 'tab-1'
        return
      }
      if (val < 1000) {
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
<style scoped>
a {
  color: #1976D2;
  text-decoration: none; /* no underline */
}
</style>
