import { writeable } from "svelte";

const PollStore = writeable([
  {
    id: 1,
    question: "Javascript or Python",
    answerA: "Javascript",
    answerB: "Python",
    voteA: 9,
    voteB: 15,
  },
]);

export default PollStore;
