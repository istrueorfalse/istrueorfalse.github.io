// Define an array of random facts
const facts = [
{ statement: 'The shortest war in history lasted only 38 minutes.', isTrue: true },
{ statement: 'Vatican City is the smallest country in the world.', isTrue: true },
{ statement: 'The Great Wall of China is not visible from space with the naked eye.', isTrue: false },
{ statement: 'Humans have more than five senses.', isTrue: true },
{ statement: 'Dolphins sleep with one eye open.', isTrue: true },
{ statement: 'The Eiffel Tower was originally built as a temporary structure.', isTrue: true },
{ statement: 'There are more possible iterations of a game of chess than there are atoms in the known universe.', isTrue: true },
{ statement: 'Kangaroos can only walk and hop forward.', isTrue: true },
{ statement: 'The shortest commercial flight in the world is only 2 minutes long.', isTrue: true },
{ statement: 'Mount Everest is not the tallest mountain in the world.', isTrue: false },
{ statement: 'The Great Barrier Reef is the largest living structure on Earth.', isTrue: true },
{ statement: 'You can see the Great Wall of China from space.', isTrue: false },
{ statement: 'The human body has more than 600 muscles.', isTrue: true },
{ statement: 'Bats are not blind.', isTrue: true },
{ statement: 'The first person to reach the North Pole was not Robert Peary.', isTrue: true },
{ statement: 'The largest desert in the world is not the Sahara.', isTrue: true },
{ statement: 'Octopuses have three hearts.', isTrue: true },
{ statement: 'Polar bears are not white.', isTrue: false },
{ statement: 'The longest river in the world is not the Nile.', isTrue: true },
{ statement: 'A shark can hear a fish swimming over a mile away.', isTrue: true },
{ statement: 'Venus is the closest planet to Earth.', isTrue: false },
{ statement: 'The heaviest snowfall ever recorded was in Canada.', isTrue: true },
{ statement: 'An ostrich eye is bigger than its brain.', isTrue: true },
{ statement: 'Siberia is the coldest place on Earth.', isTrue: false },
{ statement: 'The largest tree in the world is not the Redwood.', isTrue: true },
{ statement: 'The first computer mouse was made of wood.', isTrue: true },
{ statement: 'The first person to walk on the moon was not Neil Armstrong.', isTrue: false },
{ statement: 'The shortest war in history was fought between Britain and Zanzibar.', isTrue: true },
{ statement: 'The Earth is more spherical than any manmade object.', isTrue: true },
{ statement: 'There are more possible iterations of a game of Go than there are atoms in the known universe.', isTrue: true },
{ statement: 'The human brain is the largest brain relative to body size of all mammals.', isTrue: true },
{ statement: 'There are no green stars in the universe.', isTrue: true },
{ statement: 'The longest word in the English language has 189,819 letters.', isTrue: false },
  { statement: 'Cats can jump up to six times their own length.', isTrue: true },
  { statement: 'The Atlantic Ocean is the saltiest ocean in the world.', isTrue: false },
  { statement: 'The Great Wall of China is the longest wall in the world.', isTrue: true },
  { statement: 'Goldfish can live up to 40 years in captivity.', isTrue: true },
  { statement: 'The Statue of Liberty was a gift from France to the United States.', isTrue: true },
  { statement: 'You can charge your phone faster by putting it in airplane mode.', isTrue: true },
{ statement: 'You can use a banana to charge your phone.', isTrue: false },
{ statement: 'If you forget your phone charger, you can charge your phone using a USB port on a TV.', isTrue: true },
{ statement: 'You can use a hair dryer to remove dust from your computer.', isTrue: false },
{ statement: 'You can save your wet phone by putting it in rice.', isTrue: true },
{ statement: 'If you drop your phone in water, you can use a hair dryer to dry it out.', isTrue: false },
{ statement: 'You can speed up your computer by deleting temporary files.', isTrue: true },
{ statement: 'You can use a magnet to damage a computer hard drive.', isTrue: true },
{ statement: 'You can boost your Wi-Fi signal by putting your router in the microwave.', isTrue: false },
{ statement: 'You can clean your computer keyboard with a toothbrush.', isTrue: true },
{ statement: 'You can use vinegar to clean your computer screen.', isTrue: false },
{ statement: 'You can use toothpaste to remove scratches from a CD or DVD.', isTrue: true },
{ statement: 'You can use a paperclip to eject a CD or DVD.', isTrue: true },
{ statement: 'You can use a microwave to dry a wet book.', isTrue: false },
{ statement: 'You can use a rubber band to fix a stripped screw.', isTrue: true },
{ statement: 'You can use a magnet to fix a hard drive.', isTrue: false },
{ statement: 'You can use compressed air to clean your computer\'s fans.', isTrue: true },
{ statement: 'You can use a vacuum cleaner to clean your computer\'s fans.', isTrue: false },
{ statement: 'You can use a pencil eraser to clean electrical contacts.', isTrue: true },
{ statement: 'You can use a microwave to disinfect a kitchen sponge.', isTrue: false },
{ statement: 'You can use aluminum foil to boost your Wi-Fi signal.', isTrue: false },
{ statement: 'You can put a wooden spoon over a boiling pot to prevent it from boiling over.', isTrue: true },
{ statement: 'You can put your phone in a plastic bag to protect it from dust.', isTrue: true },
{ statement: 'You can keep your razor in a cup of oil to make it last longer.', isTrue: true },
{ statement: 'You can use a lint roller to clean lampshades.', isTrue: true },
{ statement: 'You can use a coffee filter to clean your monitor screen.', isTrue: true },
{ statement: 'You can use a shower cap to cover your shoes when packing.', isTrue: true },
{ statement: 'You can use a rubber band to keep your cutting board from slipping.', isTrue: true },
{ statement: 'You can keep a clothespin on your sponge to prevent mildew.', isTrue: true },
{ statement: 'You can use a paperclip to fix a broken zipper.', isTrue: true },
{ statement: 'You can put a dry towel in the dryer with your wet clothes to dry them faster.', isTrue: true },
{ statement: 'You can put your earrings through a button to keep them together when traveling.', isTrue: true },
{ statement: 'You can use a potato to remove rust from iron.', isTrue: true },
{ statement: 'You can put a wooden spoon over a pot to prevent boiling over.', isTrue: true },
{ statement: 'You can use a piece of bread to pick up broken glass.', isTrue: true },
{ statement: 'You can use a binder clip to hold your phone up while watching a video.', isTrue: true },
{ statement: 'You can put your phone in a glass to amplify the sound.', isTrue: true },
{ statement: 'You can use a rubber band to keep your dish soap from slipping off the counter.', isTrue: true },
{ statement: 'You can use a piece of duct tape to remove a splinter.', isTrue: true },
{ statement: 'You can microwave your phone to charge it.', isTrue: false },
{ statement: 'You can use a banana peel to clean your shoes.', isTrue: false },
{ statement: 'You can cook a raw egg on toast in a toaster.', isTrue: false },
{ statement: 'You can put your phone in the oven to dry it if it gets wet.', isTrue: false },
{ statement: 'You can use a fork to comb your hair.', isTrue: false },
{ statement: 'You can wash your clothes in the dishwasher.', isTrue: false },
{ statement: 'You can use a hairdryer to defrost your freezer.', isTrue: false },
{ statement: 'You can use your oven to dry your clothes.', isTrue: false },
{ statement: 'You can use a stapler to fix a broken flip-flop.', isTrue: false },
{ statement: 'You can put a rubber band around your head to improve your memory.', isTrue: false },
{ statement: 'You can use a vacuum cleaner to blow up a balloon.', isTrue: false },
{ statement: 'You can put your laptop in the fridge to cool it down.', isTrue: false },
{ statement: 'You can use a blow dryer to dust your house.', isTrue: false },
{ statement: 'You can use a spoon to remove a splinter.', isTrue: false },
{ statement: 'You can use a can opener to open a bottle of wine.', isTrue: false },
{ statement: 'You can use a sock as a coffee filter.', isTrue: false },
{ statement: 'You can use a water bottle to cook your pasta.', isTrue: false }
];

// Generate a random fact
function generateFact() {
  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  return randomFact;
}

// Get the fact display and result elements
const factDisplay = document.querySelector('#fact-display');
const resultDisplay = document.querySelector('#result');

// Display a random fact on page load
let currentFact = generateFact();
factDisplay.textContent = currentFact.statement;

// Add event listener to the whole document
let documentListenerEnabled = true;
document.addEventListener('click', function(event) {
  // Check if the clicked element is not the fact or cap button, and if the listener is enabled
  if (documentListenerEnabled && event.target !== truebutton && event.target !== falsebutton) {
    // Disable the listener temporarily
    documentListenerEnabled = false;
    // Generate and display a new random fact
    const fact = generateFact();
    factDisplay.textContent = fact.statement;
    resultDisplay.textContent = '';
    // Re-enable the listener after a short delay
    setTimeout(function() {
      documentListenerEnabled = true;
    }, 3000);
  }
});

// Add event listeners to the fact and cap buttons
const truebutton = document.querySelector('#true-button');
truebutton.addEventListener('click', function() {
  if (currentFact.isTrue) {
    resultDisplay.textContent = 'Correct!';
  } else {
    resultDisplay.textContent = 'Wrong!';
  }
  setTimeout(function() {
    const fact = generateFact();
    factDisplay.textContent = fact.statement;
    resultDisplay.textContent = '';
    currentFact = fact;
  }, 5000);
});

const falsebutton = document.querySelector('#false-button');
falsebutton.addEventListener('click', function() {
  if (!currentFact.isTrue) {
    resultDisplay.textContent = 'Correct!';
  } else {
    resultDisplay.textContent = 'Wrong!';
  }
  setTimeout(function() {
    const fact = generateFact();
    factDisplay.textContent = fact.statement;
    resultDisplay.textContent = '';
    currentFact = fact;
  }, 5000);
});
