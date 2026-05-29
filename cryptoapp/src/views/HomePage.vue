<template>
  <ion-page>
    <ion-content style="text-align: center">

      <ion-button
        @click="loadCryptos"
        :disabled="loading"
        style="color: #fff;"
      >
        {{ loading ? 'Loading...' : 'Refresh' }}
      </ion-button>

      <div v-if="loading" class="loading-container">
        <ion-spinner name="crescent"></ion-spinner>
        <p>Memuat data crypto...</p>
      </div>

      <!-- Data Crypto -->
      <div v-else class="crypto-container">
        <div
          v-for="crypto in cryptos"
          :key="crypto.id"
          class="crypto-row"
        >
          <div class="crypto-item">
            <div class="label">Rank</div>
            <div class="value">
              {{ crypto.rank }}
            </div>
          </div>

          <div class="crypto-item">
            <div class="label">
              {{ crypto.name }}
            </div>
            <div class="value">
              {{ crypto.symbol }}
            </div>
          </div>

          <div class="crypto-item">
            <div class="label">USD</div>
            <div class="value">
              $ {{ crypto.price_usd }}
            </div>
          </div>
        </div>
      </div>

    </ion-content>
  </ion-page>
</template>

<script setup>
import {
  IonContent,
  IonPage,
  IonSpinner,
  IonButton
} from '@ionic/vue';

import { ref, onMounted } from 'vue';
import axios from 'axios';

const cryptos = ref([]);
const loading = ref(false);

const loadCryptos = async () => {
  loading.value = true;

  try {
    const response = await axios.get(
      'https://api.coinlore.net/api/tickers/'
    );

    cryptos.value = response.data.data;

  } catch (error) {
    console.log(error);

  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  loadCryptos();
});
</script>

<style scoped>
ion-content {
  --background: #ffffff;
  --color: #000000;
  --padding-top: 16px;
}

ion-button {
  margin: 16px;
}

.crypto-container {
  width: 100%;
  padding: 10px;
}

.crypto-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fdf1ce;
  padding: 16px;
  border: 1px solid orange;
  margin-bottom: 10px;
  border-radius: 10px;
}

.crypto-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #000;
}

.label {
  font-weight: bold;
  margin-bottom: 8px;
  color: #000;
}

.value {
  font-size: 24px;
}

.loading-container {
  margin-top: 50px;
  color: #000;
}

.loading-container p {
  margin-top: 10px;
  font-size: 18px;
}
</style>