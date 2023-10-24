<template>
    <div>
      <v-btn @click="fetchClasses">Consultar API</v-btn>
      <v-container>
        <v-row>
          <v-col
            v-for="classData in classesData"
            :key="classData.index"
            cols="12"
            md="4"
          >
            <class-card :classData="classData" />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import ClassCard from "@/components/ClassCard.vue";
  
  export default {
    data() {
      return {
        classesData: [], 
      };
    },
    components: {
      ClassCard,
    },
    methods: {
      fetchClasses() {
        axios
          .get("https://www.dnd5eapi.co/api/classes")
          .then((response) => {
            this.classesData = response.data.results;
          })
          .catch((error) => {
            console.error("Error al consultar la API:", error);
          });
      },
    },
  };
  </script>
  