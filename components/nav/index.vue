<script setup>
import { IconPencil, IconUserCircle, IconDeviceFloppy } from '@tabler/icons-vue'
</script>
<template>
    <nav class="navbar bg-body-white">
      <div class="container p-0">
        <div class="navbar-brand ms-2">
          <strong>Judul Slide Kamuh</strong> &nbsp;&nbsp; | &nbsp;&nbsp; <IconPencil/> <strong>Lesson Details</strong>
        </div>
        <div class="right-side me-2">
          <button type="button" class="btn btn-dark btn-sm me-2">Preview</button>
          <IconDeviceFloppy class="me-2"/>
          <IconUserCircle/>
        </div>

      </div>
    </nav>
</template>