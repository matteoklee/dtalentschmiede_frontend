<template>
  <nav class="flex mx-6" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-1 md:space-x-2">
      <li class="inline-flex items-center">
        <a
          href="#"
          class="inline-flex items-center text-lg font-medium text-gray-700 hover:text-blue-600"
        >
          <IconHome class="w-4 h-4"></IconHome>
        </a>
      </li>
      <li v-for="(crumb, index) in breadcrumbs" :key="index">
        <div class="flex items-center">
          <IconRight class="w-4 h-4 text-gray-400 mx-1"></IconRight>
          <RouterLink
            :to="crumb.to"
            class="ms-1 text-lg font-medium text-gray-700 hover:text-primary-700 md:ms-2"
            >{{ crumb.label }}</RouterLink
          >
        </div>
      </li>
      <!--
        <li aria-current="page">
          <div class="flex items-center">
            <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Flowbite</span>
          </div>
        </li>
        -->
    </ol>
  </nav>
</template>

<script>
import IconHome from '@/components/navigation/breadcrumb/IconHome.vue'
import IconRight from '@/components/navigation/breadcrumb/IconRight.vue'

export default {
  name: 'BreadcrumbNav',
  components: { IconRight, IconHome },
  data() {
    return {}
  },
  computed: {
    breadcrumbs() {
      const route = this.$route
      const matchedRoutes = route.matched

      return matchedRoutes.map((routeItem) => ({
        label: routeItem.meta.breadcrumb || routeItem.name,
        to: this.getRoutePath(route, routeItem)
      }))
    }
  },
  methods: {
    getRoutePath(route, routeItem) {
      const matchedSegments = route.matched.slice(0, route.matched.indexOf(routeItem) + 1)
      return matchedSegments.map((segment) => segment.path).join('/')
    }
  }
}
</script>

<style scoped></style>
