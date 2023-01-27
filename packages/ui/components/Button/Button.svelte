<script context="module" lang="ts">
  import { cva } from "class-variance-authority";
  import type { VariantProps } from "class-variance-authority";

  export const buttonCva = cva("rounded-md disabled:cursor-not-allowed", {
    variants: {
      intent: {
        primary: "bg-blue-500 hover:bg-blue-400",
        secondary: "bg-orange-500 hover:bg-orange-400",
      },
      size: {
        md: "px-3 py-1",
        lg: "px-4 py-2 text-lg",
        xl: "px-5 py-3 text-xl",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "md",
    },
  });

  export type ButtonProps = VariantProps<typeof buttonCva>;
</script>

<script lang="ts">
  import type { HTMLButtonAttributes } from "svelte/elements";
  interface $$Props extends HTMLButtonAttributes, ButtonProps {}

  export let intent: ButtonProps["intent"] = "primary";
  export let size: ButtonProps["size"] = "md";
</script>

<button on:click class={buttonCva({ intent, size })} {...$$props}
  ><slot /></button
>
