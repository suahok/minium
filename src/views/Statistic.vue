<script setup lang="ts">
function toggleTheme() {
  const docEl = document.documentElement
  docEl.classList.toggle('dark')
}
</script>

<template>
  <div class="bg-white font-[roboto] h-screen p-sm transition box-border overflow-hidden dark:bg-slate-900">
    <button
      class="border-none rounded cursor-pointer my-sm outline-none bg-slate-300 py-2 px-4 transition text-slate-800 uppercase dark:bg-slate-700 dark:text-slate-200"
      @click="toggleTheme"
    >
      toggle
    </button>
    <table
      class="bg-white border border-separate border-solid border-spacing-2 border-slate-400 text-left w-full transition table-auto dark:bg-slate-800 dark:border-slate-500"
    >
      <caption class="p-4 transition text-slate-400 caption-bottom dark:text-slate-500">
        Table 3.1: Professional wrestlers and their signature moves.
      </caption>
      <thead class="bg-slate-100 transition text-slate-800 dark:bg-slate-700 dark:text-slate-200">
        <tr>
          <th class="border border-solid border-slate-300 p-4 transition dark:border-slate-600">Song</th>
          <th class="border border-solid border-slate-300 p-4 transition dark:border-slate-600">Artist</th>
          <th class="border border-solid border-slate-300 p-4 transition dark:border-slate-600">Year</th>
        </tr>
      </thead>
      <tbody class="transition text-slate-500 dark:text-slate-400">
        <tr>
          <td class="border border-solid border-slate-300 p-4 transition dark:border-slate-700">
            The Sliding Mr. Bones (Next Stop, Pottersville)
          </td>
          <td class="border border-solid border-slate-300 p-4 transition dark:border-slate-700">Malcolm Lockyer</td>
          <td class="border border-solid border-slate-300 p-4 transition dark:border-slate-700">1961</td>
        </tr>
        <tr>
          <td class="border border-solid border-slate-300 p-4 transition dark:border-slate-700">Witchy Woman</td>
          <td class="border border-solid border-slate-300 p-4 transition dark:border-slate-700">The Eagles</td>
          <td class="border border-solid border-slate-300 p-4 transition dark:border-slate-700">1972</td>
        </tr>
        <tr>
          <td class="border border-solid border-slate-300 p-4 transition dark:border-slate-700">Shining Star</td>
          <td class="border border-solid border-slate-300 p-4 transition dark:border-slate-700">
            Earth, Wind, and Fire
          </td>
          <td class="border border-solid border-slate-300 p-4 transition dark:border-slate-700">1975</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
