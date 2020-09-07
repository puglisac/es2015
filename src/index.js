import { choice, remove } from "./helpers";
import fruit from "./foods";

const pickedFruit = choice(fruit);
console.log(` I'd like one ${pickedFruit}, please`);
console.log(`Here you go: ${pickedFruit}`);
console.log(`Deleicious! May I have another?`);
const remaining = remove(fruit, pickedFruit);
console.log(`I'm sorry, we're all out. We have ${remaining.length} left.`);
