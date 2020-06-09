<template>
  <div>
    <welcome />

    <recent-projects />

    <services />

    <about-me />

    <get-in-touch />
  </div>
</template>

<script>
  export default {
    name: 'CoreView',

    components: {
      AboutMe: () => import('@/components/AboutMe'),
      RecentProjects: () => import('@/components/RecentProjects'),
      Services: () => import('@/components/Experience'),
      Welcome: () => import('@/components/Welcome'),
    },
  }
</script>
