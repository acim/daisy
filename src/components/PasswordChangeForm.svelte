<script lang="ts">
  import { Field, Input, Button } from "svelte-chota"

  export let submit: () => void
  export let currentPassword: string
  export let newPassword: string
  let confirmNewPassword: string

  $: valid =
    currentPassword &&
    newPassword &&
    currentPassword !== newPassword &&
    confirmNewPassword &&
    newPassword === confirmNewPassword
</script>

<form on:submit|preventDefault={submit}>
  <Field grouped>
    <Input
      password
      placeholder="Current Password"
      bind:value={currentPassword}
      autocomplete="on"
      required />
    <Input
      password
      placeholder="New Password"
      bind:value={newPassword}
      autocomplete="off"
      required />
    <Input
      password
      placeholder="Confirm New Password"
      bind:value={confirmNewPassword}
      autocomplete="off"
      required />
    <Button primary disabled={!valid}>Change</Button>
  </Field>
</form>
