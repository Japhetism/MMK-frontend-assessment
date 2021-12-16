export const nouns = ["bird", "clock", "boy", "plastic", "duck", "teacher", "old lady", "professor", "hamster", "dog"];
export const verbs = ["kicked", "ran", "flew", "dodged", "sliced", "rolled", "died", "breathed", "slept", "killed"];
export const adjectives = ["beautiful", "lazy", "professional", "lovely", "dumb", "rough", "soft", "hot", "vibrating", "slimy"];
export const adverbs = ["slowly", "elegantly", "precisely", "quickly", "sadly", "humbly", "proudly", "shockingly", "calmly", "passionately"];
export const preposition = ["down", "into", "up", "on", "upon", "below", "above", "through", "across", "towards"];

export const randGen = () => {
  return Math.floor(Math.random() * 5);
}

export const generateSentence  = () => {
  const rand1 = Math.floor(Math.random() * 10);
  const rand2 = Math.floor(Math.random() * 10);
  const rand3 = Math.floor(Math.random() * 10);
  const rand4 = Math.floor(Math.random() * 10);
  const rand5 = Math.floor(Math.random() * 10);
  const rand6 = Math.floor(Math.random() * 10);

  const rand7 = Math.floor(Math.random() * 10);
  const rand8 = Math.floor(Math.random() * 10);
  const rand9 = Math.floor(Math.random() * 10);
  const rand10 = Math.floor(Math.random() * 10);
  const rand11 = Math.floor(Math.random() * 10);
  const rand12 = Math.floor(Math.random() * 10);

  const content1 = "The " + adjectives[rand1] + " " + nouns[rand2] + " " + 
    adverbs[rand3] + " " + verbs[rand4] + " because some " + nouns[rand1] + 
    " " + adverbs[rand1] + " " + verbs[rand1] + " " + preposition[rand1] + " a " + 
    adjectives[rand2] + " " + nouns[rand5] + " which, became a " + adjectives[rand3] + 
    ", " + adjectives[rand4] + " " + nouns[rand6] + ".";

  const content2= "The " + adjectives[rand7] + " " + nouns[rand8] + " " + 
    adverbs[rand9] + " " + verbs[rand10] + " because some " + nouns[rand7] + 
    " " + adverbs[rand7] + " " + verbs[rand7] + " " + preposition[rand7] + " a " + 
    adjectives[rand8] + " " + nouns[rand11] + " which, became a " + adjectives[rand9] + 
    ", " + adjectives[rand10] + " " + nouns[rand12] + ".";

  return `${content1} ${content2}`;
}