<script lang="ts">
  let count = 0;
  let src = "https://svelte.dev/tutorial/image.gif";
  let alt = "some random bullshit";

  const increase = () => count++;
</script>

<h1>Hello {count}</h1>
<button on:click={increase}>Count Up</button>
<img {src} {alt} />
<span class="tw-test">Hello</span>
