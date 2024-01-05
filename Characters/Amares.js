// Amares.js

const amares = {
  name: 'Amares Aelius',
  profileImg: './Images/Amaresicon.png',
  bioImg: './Images/Amabio.png',
  borderInitialColor: '#690000', // Unfocused character
  borderFocusedColor: '#300000', // Focused character
  backgroundImage: 'url(\'./Images/Backgrounds/AmaSkull.png\')', // Add this line and set the desired background color
  borderColor: '#690000', // Add this line and set the desired border color
  scrollbar: {
    thumbColor: '#300000',
    trackColor: '#690000',
    buttonColor: '#300000',
  },

  bio: {
    etymology:
      `<h1>Name</h1>
      <p>
      <strong>Amares</strong><br>
      <i>/'ah.mahr.ez/ [ɐˈmaɾɨʃ]</i><br><br>
    
      Originally, "Amares Ossium" was proposed by my friend Jojro. Her reasoning being that in Latin "Amares" could be translated as "loving," and "Ossium" as "bones." The combination "Love Bones" reminding her of the film "Lovely Bones" but also creating the phrase "loves your bones". Amares can also find roots in Spanish (Amares' language of choice), derived from the future subjunctive conjugation of the verb "amar," meaning "to love."  Amares' caring and loving nature paired with her hedonistic tendencies I feel like embodies the profound affection and love associated with both linguistic origins.<br><br>
    
      <strong>Aelius</strong><br>
      <i>/ˈae̯.li.us/ [ˈäe̯lʲiʊs̠]</i><br><br>
    
      This was initially considered as a potential first name for Amares but later found a more fitting place as her surname. This name originates from the Romans and possibly derived from the Greek word ἥλιος (helios), which means "sun." So the name Aelius is associated with Sunshine and brilliance, something that I believe her personality clearly demonstrates the more you speak to her.
      </p> `,
    biography: '<p>bio</p>',
    personality: '<p>personality</p>',
    inventory: '<p>other</p>',
    relationships: '<p>relationships</p>',
    lusus: '<p>lusus</p>'
  },
  gallery: [
    { path: 'Images/Ama1.png', info: 'One of her first references', artist: 'F1zh1e' },
    { path: 'Images/Ama2.png', info: 'Info for Ama2', artist: 'Artist B' },
    { path: 'Images/Ama3.png', info: 'Info for Ama3', artist: 'Artist C' }
  ]
};

// Set the innerHTML of the container to the formatted biography
document.getElementById('etymology').innerHTML = amares.bio.etymology;
