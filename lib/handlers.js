import { fetchJoke } from './index.js';
import {
  jokeButtonSpan,
  jokeHolder,
  loader,
  jokeButton,
} from '../data/elements.js';
import { randomItemFromArray } from '../lib/utils.js';
import buttonText from '../data/buttonText.js';

export async function handleClick() {
  const { joke } = await fetchJoke(loader);
  jokeHolder.textContent = joke;
  jokeButtonSpan.textContent = randomItemFromArray(
    buttonText,
    jokeButtonSpan.textContent
  );
}
