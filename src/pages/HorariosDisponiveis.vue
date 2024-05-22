<template>
  <q-page padding>
    <q-card>
      <q-card-section>
        <div class="text-h6" style="color: #3fa6b8  ">Horários Disponíveis</div>
      </q-card-section>

      <q-card-section class="q-gutter-md">
        <div class="row justify-start">
          <q-btn
            v-for="hour in hours"
            :key="hour.time"
            :label="hour.time"
            :style="{ backgroundColor: hour.available ? '#21BA45' : 'red', color: 'white' }"
            @click="toggleAvailability(hour)"
            class="q-btn-square q-mr-sm q-mb-sm"
            outlined
          >
            <q-icon name="close" @click.stop="removeHour(hour)" class="q-ml-xs cursor-pointer" style="color: white" />
          </q-btn>
        </div>
      </q-card-section>

      <q-card-section>
        <div class="text-h6" style="color: #3fa6b8">Adicionar Novo Horário</div>
        <q-icon name="event" id="icon-calendario" @click="toggleCalendar" style="cursor: pointer; color: #3fa6b8; font-size: 50px;" />
        <div v-if="showDateTimePickers" class="row q-col-gutter-md justify-end">
          <q-btn @click="addEvent" label="Adicionar" :style="{ backgroundColor: '#3fa6b8', color: 'white' }" class="q-mt-md" />
        </div>
        <div v-if="showDateTimePickers" class="row q-col-gutter-md">
          <q-input v-model="newEventDate" type="date" label="Data" :color="'#21BA45'" class="q-col-6" />
          <q-input v-model="newEventTime" type="time" label="Hora" :color="'#21BA45'" class="q-col-6" />
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { QCardSection, QBtn, QCard, QInput, QIcon, QPage } from 'quasar'

export default {
  name: 'HorariosDisponiveis',
  components: {
    QCardSection,
    QBtn,
    QCard,
    QInput,
    QIcon,
    QPage
  },
  data () {
    return {
      hours: [
        { time: '08:00', available: true },
        { time: '09:00', available: true },
        { time: '10:00', available: true },
        { time: '11:00', available: true },
        { time: '12:00', available: true },
        { time: '13:00', available: true },
        { time: '14:00', available: true },
        { time: '15:00', available: true },
        { time: '16:00', available: true },
        { time: '17:00', available: true }
      ],
      newEventTitle: '',
      newEventDate: '',
      newEventTime: '',
      showDateTimePickers: true
    }
  },
  methods: {
    toggleAvailability (hour) {
      hour.available = !hour.available
    },
    addEvent () {
      this.hours.push({
        time: this.newEventTime,
        available: true
      })
      this.newEventTitle = ''
      this.newEventDate = ''
      this.newEventTime = ''
      this.showDateTimePickers = false
    },
    toggleCalendar () {
      this.showDateTimePickers = !this.showDateTimePickers
    },
    removeHour (hour) {
      const index = this.hours.findIndex(h => h.time === hour.time)
      if (index !== -1) {
        this.hours.splice(index, 1)
      }
    }
  }
}
</script>

<style>
.q-btn-square {
  width: 100px;
  height: 100px;
}
.q-mr-sm {
  margin-right: 10px; /* Ajuste o valor conforme necessário */
}
.q-mb-sm {
  margin-bottom: 10px; /* Ajuste o valor conforme necessário */
}

</style>
