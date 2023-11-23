<script setup lang="ts">
const route = useRoute()

useSeoMeta({
  title: 'Playground Nuxt 3',
  ogTitle: 'My Nuxt 3 Play ground',
})
</script>

<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4 p-3">
          <h1>
            Platform Guru Demo
          </h1>
        </div>
        <div class="col-md-8 p-3">
          <ul class="list-group">
            <li class="list-group-item">
              <NuxtLink to="/editor">
                Editor 
              </NuxtLink>
            </li>
            <li class="list-group-item">Coming Soon</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
