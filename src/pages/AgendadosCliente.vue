<template>
  <div class="q-pa-md">
    <q-table
      style
      flat bordered
      ref="tableRef"
      title="Agendados"
      :rows="rows"
      :columns="columns"
      :table-colspan="9"
      row-key="index"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="name" :props="props">
            {{ props.row.name }}
          </q-td>
          <q-td key="contatos" :props="props">
            {{ props.row.contatos }}
          </q-td>
          <q-td key="Data" :props="props">
            {{ props.row.Data }}
          </q-td>
          <q-td key="Hora" :props="props">
            {{ props.row.hora }}
          </q-td>
          <q-td key="Serviço" :props="props">
            {{ props.row.servico }}
          </q-td>
          <q-td >
            <q-checkbox v-model="right" label="Foi Pago" />
          </q-td>
          <q-td q-td class="my-custom-padding"   >
            <q-btn color="green" label="Confirmar" @click="handleButtonClick(props.row)" class="q-mr-xs" />
            <q-btn  color="negative" label="Cancelar" @click="handleButtonClick(props.row)" />
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
export default {
  setup () {
    const router = useRouter()

    const columns = [

      {
        name: 'name',
        required: true,
        label: ' Nome ',
        align: 'left',
        field: row => row.name,
        format: val => `${val}`,
        sortable: true
      },
      { name: 'contatos', align: 'center', label: 'Contato', field: 'contatos', sortable: true },
      { name: 'Data', label: 'Data', field: 'fat', sortable: true },
      { name: 'Hora', label: 'Hora', field: 'hora', sortable: true },
      { name: 'Serviço', label: 'Serviço', field: 'servico' }
    ]

    const rows = [
      {
        name: 'Igor',
        contatos: '9999-1212',
        Data: '06/05/2024',
        hora: '20:32',
        servico: 'Serviço A'
      },
      {
        name: 'Joana',
        contatos: '8888-3434',
        Data: '07/05/2024',
        hora: '15:45',
        servico: 'Serviço B'
      },
      {
        name: 'Pedro',
        contatos: '7777-5656',
        Data: '08/05/2024',
        hora: '09:00',
        servico: 'Serviço C'
      },
      {
        name: 'Mariana',
        contatos: '6666-7878',
        Data: '09/05/2024',
        hora: '14:30',
        servico: 'Serviço D'
      },
      {
        name: 'Lucas',
        contatos: '5555-9090',
        Data: '10/05/2024',
        hora: '11:15',
        servico: 'Serviço E'
      }
    ]
    const handleButtonClick = (row) => {
      row.pago = true
      router.push({ name: 'AgendarConsultas' })
    }

    return {
      columns,
      rows,
      handleButtonClick,
      right: ref(false)
    }
  }
}
</script>

<style>
.no-divider-table .q-table__container,
.no-divider-table .q-tr,
.no-divider-table .q-td,
.no-divider-table .q-th
.text-right {
  text-align: right;
}

button {
  display: block;
  width: 100%;
  height: 36px;
  border-radius: 30px;
  background-color: #26a69a;
  color: white;
  font-size: 15px;
  cursor: pointer;
}
.my-custom-padding {
  padding: 10%;
  text-align: r
  }
  .q-table{
    display: grid;

    flex-direction: column;
    gap: 30px;
  }
</style>
