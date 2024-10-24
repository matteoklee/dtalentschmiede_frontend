<template>
  <section class="flex justify-center items-center">
    <div class="py-8 px-4 mx-auto lg:py-32 lg:px-6">
      <div class="mx-auto max-w-screen-sm text-center">
        <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-700">
          404
        </h1>
        <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
          Seite nicht gefunden.
        </p>
        <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
          Diese Seite konnte nicht gefunden werden. Gehe zurück auf die Startseite oder navigiere
          über das Menü, um zu existierenden Unterseiten zu gelangen.
        </p>
        <RouterLink
          to="/"
          class="inline-flex text-white rounded-lg bg-primary-700 hover:bg-white hover:text-primary-700 hover:border-2 hover:border-primary-700 font-medium px-5 py-2.5 text-center my-4"
        >
          Zurück zur Startseite
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NotFoundView'
};
</script>

<style scoped></style>
