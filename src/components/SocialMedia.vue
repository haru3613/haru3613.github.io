<template>
  <div>
    <v-btn
      v-for="(item, i) in items.slice(0, large ? items.length : 3)"
      :key="i"
      fab
      class="ma-2"
      color="info"
      :small="!large"
    >
      <v-icon
        dark
        @click="redirectURL(item.url)"
        v-text="item.icon"
      />
    </v-btn>
  </div>
</template>

<script>
  export default {
    props: {
      large: {
        type: Boolean,
        default: false,
      },
    },

    data: () => ({
      items: [
        {
          name: 'Home',
          icon: 'mdi-home',
          url: '/',
        },
        {
          name: 'Github',
          icon: 'mdi-github-circle',
          url: 'https://github.com/haru3613',
        },
        {
          name: 'Email',
          icon: 'mdi-email',
          url: 'mailto:qaw8975889@gmail.com',
        },
      ],
    }),

    methods: {
      redirectURL (url) {
        window.location.href = url
      },
    },
  }
</script>
