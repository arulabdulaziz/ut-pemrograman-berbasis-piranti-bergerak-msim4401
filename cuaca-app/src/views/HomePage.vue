<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Cuaca App</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Cuaca App</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <div v-if="loading">
          <ion-spinner name="dots"></ion-spinner>
          <p>Memuat data cuaca...</p>
        </div>

        <ion-list v-else>
          <ion-item v-for="(w, i) in wheatherData" :key="i">
            <ion-label>
              <h2>{{ w.time }}</h2>
              <p>Suhu: {{ w.temp }}</p>
            </ion-label>
          </ion-item>
        </ion-list>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSpinner, IonList, IonItem, IonLabel } from '@ionic/vue';
import { ref, onMounted } from 'vue';
import axios from 'axios'

const loading = ref(false)
const wheatherData = ref([])

const fetchData = async () => {
  try {
    loading.value = true
    
    const response = await axios("https://api.open-meteo.com/v1/forecast?latitude=-6.2&longitude=106.8&hourly=temperature_2m")

    const times = response.data.hourly.time
    const temps = response.data.hourly.temperature_2m

    wheatherData.value = times.map((t: string, i: number) => ({
      time: t,
      temp: temps[i]
    }))
  } catch (error) {
    console.log("Error fetch data", error)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchData()
})
</script>

<style scoped>
#container {
  text-align: center;
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
