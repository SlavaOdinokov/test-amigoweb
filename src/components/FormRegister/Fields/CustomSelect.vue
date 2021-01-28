<template>
  <div class="input-group">
    <select
      name="lang"
      v-model="selected"
      @change="$emit('handleSelect', selected)"
    >
      <option disabled selected>Язык</option>
      <option value="Русский">Русский</option>
      <option value="Английский">Английский</option>
      <option value="Китайский">Китайский</option>
      <option value="Испанский">Испанский</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "CustomSelect",
  data: () => ({
    selected: ""
  })
};
</script>
