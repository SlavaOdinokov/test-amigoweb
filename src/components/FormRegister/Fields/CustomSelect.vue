<template>
  <div class="input-group">
    <select
      name="language"
      v-model="selected"
      @change="$emit('handleSelect', selected)"
    >
      <option selected disabled>Язык</option>
      <option v-for="(option, index) in options" :key="index">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "CustomSelect",
  data: () => ({
    selected: "Язык",
    options: ["Русский", "Английский", "Китайский", "Испанский"]
  })
};
</script>
