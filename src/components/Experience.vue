<template>
  <section
    id="services"
    class="overflow-hidden"
  >
    <v-row
      class="accent"
      no-gutters
    >
      <v-col
        class="hidden-sm-and-down"
        md="6"
      >
        <v-img
          :src="require('@/assets/services.png')"
          height="100%"
        />
      </v-col>

      <v-col
        class="text-center pa-5"
        cols="12"
        md="6"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <v-col cols="12">
            <base-bubble-2
              style="transform: translateX(55%)"
            />
            <base-heading class="info--text">
              工作經歷
            </base-heading>

            <base-text class="mb-5">
              遠景科技股份有限公司 QA Engineer Intern<br>
              跨國物聯網軟體公司，<br>協助各大企業透過軟體技術與商務解決方案打造連網產品
            </base-text>
          </v-col>

          <v-col
            v-for="(service, i) in services"
            :key="i"
            class="text-center mb-3"
            md="6"
          >
            <v-avatar
              class="elevation-6 mb-2"
              color="#69A1BB"
              size="64"
              tile
            >
              <v-icon
                dark
                size="52"
                v-text="service.icon"
              />
            </v-avatar>

            <base-text>
              <div
                class="mb-2"
                v-text="service.name"
              />
              <div v-html="service.blurb" />
            </base-text>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </section>
</template>

<script>
  export default {
    name: 'Services',

    data: () => ({
      services: [
        {
          name: '程式語言',
          icon: ' mdi-language-python',
          blurb: 'Robotframework<br>Google App Script',
        },
        {
          name: '測試',
          icon: 'mdi-bug',
          blurb: 'Web testing<br>API testing',
        },
        {
          name: '工具',
          icon: 'mdi-server',
          blurb: 'Jenkins<br>Docker',
        },
        {
          name: '作業系統',
          icon: 'mdi-laptop-mac',
          blurb: 'Linux<br>MacOS',
        },
      ],
    }),
  }
</script>
