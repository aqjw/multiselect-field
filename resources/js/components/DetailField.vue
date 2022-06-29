<template>
  <PanelItem :index="index" :field="field">
    <template #value>
      <Link
        v-if="field.belongsToResourceName && field.viewable && field.value"
        :href="$url(`/resources/${field.belongsToResourceName}/${field.value}`)"
        class="link-default no-underline font-bold dim"
      >
        {{ field.belongsToDisplayValue }}
      </Link>

      <template v-else-if="isMultiselect">
        <badge v-for="label in values" :label="label" extra-classes="bg-gray-100 text-gray-600 dark:bg-gray-300 dark:text-gray-800 mr-2 mb-2" />
      </template>

      <div v-else>{{ (value && value.label) || '—' }}</div>
    </template>
  </PanelItem>
</template>

<script>
import HandlesFieldValue from '../mixins/HandlesFieldValue';

export default {
  mixins: [HandlesFieldValue],

  props: ['index', 'resource', 'resourceName', 'resourceId', 'field'],

  computed: {
    values() {
      const valuesArray = this.getInitialFieldValuesArray();
      if (!valuesArray || !valuesArray.length) return;

      return valuesArray
        .map(this.getValueFromOptions)
        .filter(Boolean)
        .map(val => `${this.isOptionGroups ? `[${val.group}] ` : ''}${val.label}`);
    },

    value() {
      return this.getValueFromOptions(this.field.value);
    },
  },
};
</script>
