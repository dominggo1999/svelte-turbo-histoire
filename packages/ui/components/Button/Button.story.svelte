<script lang="ts">
  import Button from "./Button.svelte";
  export let Hst;
  import type { ButtonProps } from "./Button.svelte";
  import { logEvent } from "histoire/client";

  export let size: ButtonProps["size"] = "md";
  const sizeOptions: Array<ButtonProps["size"]> = ["lg", "md", "xl"];

  export let intent: ButtonProps["intent"] = "primary";
  const intentOptions: Array<ButtonProps["intent"]> = ["primary", "secondary"];
</script>

<Hst.Story title="Button">
  <Hst.Variant title="Primary">
    <Button
      on:click={(event) => logEvent("click", event)}
      bind:size
      bind:intent
    >
      Primary</Button
    >
    <svelte:fragment slot="controls">
      <Hst.Select bind:value={size} options={sizeOptions} title="Size" />
      <Hst.Select bind:value={intent} options={intentOptions} title="Intent" />
    </svelte:fragment>
  </Hst.Variant>
  <Hst.Variant title="Secondary">
    <Button intent="secondary">Secondary</Button>
  </Hst.Variant>
  <Hst.Variant title="XL">
    <Button size="xl">Default</Button>
  </Hst.Variant>
</Hst.Story>
