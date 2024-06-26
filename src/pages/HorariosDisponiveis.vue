<template>
  <q-page class="q-pa-md">
    <div class="q-gutter-md">
      <q-card>
        <q-card-section>
          <div class="form-row">
            <q-input
              v-model="patientName"
              label="Nome do Paciente"
              outlined
              class="form-item"
            />
            <q-input
              v-model="patientPhone"
              label="Telefone do Paciente"
              outlined
              mask="(##) #####-####"
              class="form-item"
            />
            <q-date
              v-model="selectedDate"
              :events="getEvents"
              :event-color="getEventColor"
              @change="onDateChange"
              class="form-item"
            />
            <q-time
              v-model="selectedTime"
              format24h
              @input="onTimeSelected"
              class="form-item"
            />
            <q-btn
              label="Confirmar Agendamento"
              @click="confirmAppointment"
              :disable="!selectedDate || !selectedTime || !patientName || !patientPhone"
              class="form-item"
            />
          </div>
        </q-card-section>
      </q-card>

      <q-list v-if="appointments.length">
        <q-item-label>Consultas Marcadas:</q-item-label>
        <q-item
          v-for="appointment in appointments"
          :key="appointment.id"
        >
          <q-item-section>
            <q-card>
              <q-card-section>
                <div>
                  <div><strong>Data:</strong> {{ appointment.date }}</div>
                  <div><strong>Hora:</strong> {{ appointment.time }}</div>
                  <div><strong>Nome:</strong> {{ appointment.name }}</div>
                  <div><strong>Telefone:</strong> {{ appointment.phone }}</div>
                </div>
              </q-card-section>
              <q-card-actions align="right">
                <q-btn
                  flat
                  icon="edit"
                  @click="editAppointment(appointment)"
                />
                <q-btn
                  flat
                  icon="delete"
                  @click="deleteAppointment(appointment.id)"
                />
              </q-card-actions>
            </q-card>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      selectedDate: '',
      selectedTime: '',
      patientName: '',
      patientPhone: '',
      appointments: [],
      editedAppointment: null,
      events: ['2024-06-14', '2024-06-18', '2024-06-21']
    }
  },
  methods: {
    getEvents (date) {
      return this.events.includes(date)
    },
    getEventColor (date) {
      return date[9] % 2 === 0 ? 'teal' : 'orange'
    },
    onDateChange (date) {
      this.selectedDate = date
    },
    onTimeSelected (time) {
      this.selectedTime = time
    },
    confirmAppointment () {
      if (this.editedAppointment) {
        this.editedAppointment.date = this.selectedDate
        this.editedAppointment.time = this.selectedTime
        this.editedAppointment.name = this.patientName
        this.editedAppointment.phone = this.patientPhone
        this.editedAppointment = null
      } else {
        this.appointments.push({
          id: this.appointments.length + 1,
          date: this.selectedDate,
          time: this.selectedTime,
          name: this.patientName,
          phone: this.patientPhone
        })
      }
      this.selectedDate = ''
      this.selectedTime = ''
      this.patientName = ''
      this.patientPhone = ''
    },
    editAppointment (appointment) {
      this.selectedDate = appointment.date
      this.selectedTime = appointment.time
      this.patientName = appointment.name
      this.patientPhone = appointment.phone
      this.editedAppointment = appointment
    },
    deleteAppointment (id) {
      this.appointments = this.appointments.filter(appointment => appointment.id !== id)
    }
  }
}
</script>

<style scoped>
.q-page {
  max-width: 600px;
  margin: auto;
}
.q-card {
  margin-bottom: 10px;
}
.q-card-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.form-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.form-item {
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>
