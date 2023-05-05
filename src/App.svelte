<script>
  import CreatePollForm from "./Components/CreatePollForm.svelte";
  import Footer from "./Components/Footer.svelte";
  import Header from "./Components/Header.svelte";
  import PollList from "./Components/PollList.svelte";
  import Tabs from "./shared/Tabs.svelte";

  let items = ["Current Polls", "Add New Poll"];
  let activeItem = "Current Polls";

  const tabChange = (e) => {
    activeItem = e.detail;
  };

  let polls = [
    {
      id: 1,
      question: "Javascript or Python",
      answerA: "Javascript",
      answerB: "Python",
      voteA: 9,
      voteB: 15,
    },
  ];

  const handleAddPoll = (e) => {
    let newPoll = e.detail;
    polls = [...polls, newPoll];
    console.log(polls);
    activeItem = "Current Polls";
  };

  const handleVote = (e) => {
    const { option, id } = e.detail;

    let copyPolls = [...polls];

    let updatedPolls = copyPolls.find((poll) => poll.id === id);

    if (option === "a") {
      updatedPolls.voteA++;
    }

    if (option === "b") {
      updatedPolls.voteB++;
    }

    polls = copyPolls;
  };
</script>

<Header />
<main>
  <Tabs {items} {activeItem} on:tabChange={tabChange} />
  {#if activeItem === "Current Polls"}
    <PollList {polls} on:vote={handleVote} />
  {:else if activeItem === "Add New Poll"}
    <CreatePollForm on:add={handleAddPoll} />
  {/if}
</main>

<Footer />

<style>
  main {
    max-width: 960px;
    margin: 40px auto;
  }
</style>
