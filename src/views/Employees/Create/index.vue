<template>
  <v-container fluid>
    <v-row class="mt-0">
      <v-col>

        <v-form ref="form">

          <v-row>
            <v-col class="pa-5">
              <v-text-field
                v-model="name"
                label="Nome"
                required
              ></v-text-field>

              <v-text-field
                v-model="birth"
                label="Nascimento"
                required
              ></v-text-field>

              <v-text-field
                v-model="ctps"
                label="CTPS"
                required
              ></v-text-field>

              <v-text-field
                v-model="cpf"
                label="CPF"
                required
              ></v-text-field>

              <v-text-field
                v-model="rg"
                label="RG"
                required
              ></v-text-field>

              <v-select
                v-model="ssp"
                :items="sspItems"
                label="SSP"
                required
              ></v-select>

              <v-select
                v-model="employeeCategoryId"
                :items="employeesCategories"
                label="Categoria colaborativa"
                required
              ></v-select>
            </v-col>
          </v-row>

          <v-row>
            <v-col class="py-5">
               <v-btn
                small
                color="success"
                class="mr-4"
              >
                <v-icon dark>mdi-content-save</v-icon> Salvar
              </v-btn>

              <v-btn
                small
                color="default"
                @click="$router.push('/employees')"
              >
                <v-icon dark>mdi-arrow-left</v-icon> Voltar
              </v-btn>
            </v-col>
          </v-row>

        </v-form>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'EmployeesCreate',

    data: () => ({
      name: null,
      birth: null,
      ctps: null,
      cpf: null,
      rg: null,
      ssp: null,
      employeeCategoryId: null,
      sspItems: [],
      employeesCategories: []
    })
  }
</script>
