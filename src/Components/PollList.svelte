<script>
  import { onDestroy, onMount } from "svelte";
  import PollStore from "../stores/PollStores.js";
  import PollDetails from "./PollDetails.svelte";
  export let polls = [];

  PollStore.subscribe((data) => {
    polls = data;
  });

  onMount(() => {
    console.log("mounted");
  });

  onDestroy(() => {
    console.log("destroy");
  });
</script>

<div class="poll-list">
  {#each polls as poll (poll.id)}
    <div>
      <PollDetails {poll} on:vote />
    </div>
  {/each}
</div>

<style>
  .poll-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
</style>
