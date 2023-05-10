import { cardMemory } from "../../components/cardMemory/cardmemory";
import "./memorygame"

const template = () => `
<div class="gameMemory">
<section></section>
</div>
`;

const addListeners = () => {};

export const printTemplate = () => {
  document.querySelector("main").innerHTML = template();
  cardMemory();
};