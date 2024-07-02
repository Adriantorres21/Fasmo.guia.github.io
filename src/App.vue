<template>
  <v-app>
    <v-main>                          
      <router-view/>
    </v-main>
  </v-app>
  <!-- <div>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div> -->
</template>

<script>
export default {
  data() {
    return {
      // No es necesario inicializar count aquí
    };
  },
  computed: {
    count() {
      return useCounterStore().count;
    },
  },
  methods: {
    increment() {
      useCounterStore().increment();
    },
    decrement() {
      useCounterStore().decrement();
    },
  },
};
</script>