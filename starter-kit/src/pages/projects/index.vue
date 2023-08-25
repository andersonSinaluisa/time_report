<script setup lang="ts">
const tableData = [
  {
    action: 'Collapse', icon: 'tabler-chevron-up', details: 'Collapse card content using collapse action.',
  },
  {
    action: 'Refresh Content', icon: 'tabler-refresh', details: 'Refresh your card content using refresh action.',
  },
  {
    action: 'Remove Card', icon: 'tabler-x', details: 'Remove card from page using remove card action',
  },
]

const refetchData = (hideOverlay: () => void) => {
  setTimeout(hideOverlay, 3000)
}
</script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 Slots -->
      <AppCardActions
        title="Slots"
        @refresh="refetchData"
      >
        <template #before-actions>
          <VChip
            class="me-3"
            color="primary"
            size="small"
          >
            3 Updates
          </VChip>
        </template>

        <VCardText>
          <p><code>app-card-actions</code> also provides <code>before-actions</code> and <code>after-actions</code> slot</p>
          <span>You can find more details in our documentation</span>
        </VCardText>
      </AppCardActions>
    </VCol>
  </VRow>
</template>