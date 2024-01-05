// Cabria.js

const cabria = {
  name: 'Cabría Dionis',
  profileImg: './Images/Cabriaicon.png',
  bioImg: './Images/Cabbio.png',
  borderInitialColor: '#331215', // Set initial border color for Cabria
  borderFocusedColor: '#260D10', // Set focused border color for Cabria
  backgroundImage: 'url(\'./Images/Backgrounds/AmaSkull.png\')', // Add this line and set the desired background color
  borderColor: '#331215', // Add this line and set the desired border color
  scrollbar: {
    thumbColor: '#260D10',
    trackColor: '#331215',
    buttonColor: '#260D10',
  },

  bio: {
    etymology:
      `<h1>Name</h1>
      <p>
      <strong>Cabria</strong><br> 
      <i>/ka.bree.ah/ [kəˈbri.ə]</i><br><br>

      The name "Cabría" comes from the Spanish word for "goat," which is "cabro" (masculine) and "cabra" (feminine). To fit the six letter rule I added an accent mark "í" to it making it "Cabrío," and "Cabría," and while Cabrío translates to "goatish,"  doing the same to "cabra" doesn't create a feminine form; instead, "Cabría" translates to "would fit." Despite this, I quite liked the sound of "Cabría," so that's what I chose to stick with as her first name.

      <strong>Dionis</strong><br>
      <i>/dye.oh.niss/ [daɪˈoʊnɪs]</i><br><br>

      Dionis comes  from a brand of goat milk skincare products. The founder named the brand after Dionis Beach in Nantucket, which, in turn, was named after Dionis Coffin, the wife of its original proprietor, Tristram Coffin, but the name Dionis itself is derived from Latin "Dionysus," A Greek deity associated with wine-making, orchards and fruit, vegetation, fertility, festivity, insanity, ritual madness, religious ecstasy, and theatre. Notably, the worship of Dionysus often involved the sacrifice of goats.
    </p>`,
    biography: '<p>bio</p>',
    personality: '<p>personality</p>',
    inventory: '<p>stuff</p>',
    relationships: '<p>relationships</p>',
    lusus: '<p>lusus</p>'
  },
  gallery: [
    { path: 'Images/Cab1.png', info: 'Info for Cab1', artist: 'Artist X' },
    { path: 'Images/Cab2.png', info: 'Info for Cab2', artist: 'Artist Y' },
    { path: 'Images/Cab3.png', info: 'Info for Cab3', artist: 'Artist Z' }
  ]
};