// script.js

document.addEventListener('DOMContentLoaded', () => {
  const characterListContainer = document.getElementById('characterList');
  const introBox = document.getElementById('introBox');
  const characterName = document.getElementById('characterName');
  const characterDetails = document.getElementById('characterDetails');
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  const modalInfo = document.getElementById('modalInfo');
  const modalArtist = document.getElementById('modalArtist');
  const modalFileName = document.getElementById('modalFileName');
  const modalCloseButton = document.getElementById('modalCloseButton');
  const modalNextButton = document.getElementById('modalNextButton');
  const modalPrevButton = document.getElementById('modalPrevButton');

  let focusedCharacter = null;
  let currentImageIndex = 0;

  const characters = [amares, cabria, vittra, yercie, weepan, alcyon];

  // Saves the initial content of introBox
  const initialIntroBoxContent = introBox.innerHTML;

  function clearImageGallery() {
    const imageGallery = document.getElementById('imageGalleryScroll');

    if (imageGallery) {
      imageGallery.innerHTML = '';
    }
  }



  // Create character circles
  // Create character circles
  function createCharacterCircles() {
    // Create the character container container
    const characterContainerContainer = document.createElement('div');
    characterContainerContainer.className = 'character-container-container';

    characters.forEach((character, index) => {
      // Create a container for each character circle
      const characterContainer = document.createElement('div');
      characterContainer.className = 'character-container';

      // Set the size of those containers
      characterContainer.style.width = '20%';
      characterContainer.style.height = '30%';

      // Add a new row after every 4 characters
      if (index % 4 === 0 && index !== 0) {
        characterContainer.style.clear = 'left';
      }

      const characterCircle = document.createElement('div');
      characterCircle.className = 'character-circle';
      characterCircle.style.borderColor = character.borderInitialColor;

      // This makes the circle fill its container
      const circleSize = '100%';
      characterCircle.style.width = circleSize;
      characterCircle.style.height = circleSize;
      characterCircle.style.borderRadius = '50%';
      characterCircle.style.overflow = 'hidden';

      // This sets the custom background images
      characterCircle.style.backgroundImage = `url(${character.profileImg})`;
      characterCircle.style.backgroundSize = 'cover';
      characterCircle.style.backgroundPosition = 'center';

      // Event listeners for hover and leave
      characterCircle.addEventListener('mouseenter', () => handleCharacterHover(character));
      characterCircle.addEventListener('mouseleave', handleCharacterLeave);

      characterCircle.addEventListener('click', () => handleCharacterClick(character, characterCircle));

      // Append the character circle to its container
      characterContainer.appendChild(characterCircle);

      // Append the character container to the character container container
      characterContainerContainer.appendChild(characterContainer);
    });

    // Append the character container container to the character list container
    const characterListContainer = document.getElementById('characterList');
    characterListContainer.appendChild(characterContainerContainer);
  }


  // Initialization
  function initialize() {

    createCharacterCircles();
  }

  function handleCharacterHover(character) {
    if (focusedCharacter) {
      // If there is a focused character, update the name on hover
      characterName.textContent = character.name;
    } else {
      // If no character is focused, update the name only if not focused
      if (!focusedCharacter) {
        characterName.textContent = character.name;
      }
    }
  }

  // This handles character circle leave
  function handleCharacterLeave() {
    if (!focusedCharacter) {
      characterName.textContent = '';
      document.documentElement.style.removeProperty('--selection-color');
    } else {
      // Set character name to focused character's name when leaving the hovered character
      characterName.textContent = focusedCharacter.name;
    }
  }

  // Handle character circle click
  function handleCharacterClick(character, characterCircle) {
    if (characterCircle.classList.contains('focused')) {
      characterCircle.classList.remove('focused');
      characterCircle.style.borderColor = character.borderInitialColor;
      focusedCharacter = null;
      document.body.style.backgroundImage = 'url(\'./Images/Backgrounds/background.png\')';
      characterListContainer.style.borderColor = '';
      introBox.style.borderColor = '';
      characterName.textContent = '';
      introBox.innerHTML = introBox.innerHTML = initialIntroBoxContent;
      characterDetails.style.display = 'none';
      clearImageGallery();
    } else {
      // Unfocus the previously focused character
      if (focusedCharacter !== null) {
        const focusedCircle = document.querySelector('.character-circle.focused');
        if (focusedCircle) {
          focusedCircle.classList.remove('focused');
          focusedCircle.style.borderColor = focusedCharacter.borderInitialColor;
        }
      }

      // Focus the clicked character
      characterCircle.classList.add('focused');
      characterCircle.style.borderColor = character.borderFocusedColor;
      focusedCharacter = character;

      // Update introBox and characterListContainer based on focus state
      introBox.innerHTML = '';
      introBox.appendChild(characterDetails);
      characterDetails.style.display = 'block';
      document.getElementById('characterInfoName').textContent = character.characterInfo.name;
      document.getElementById('characterTitle').textContent = character.characterInfo.title;
      document.getElementById('characterAge').textContent = character.characterInfo.age;
      document.getElementById('characterScreenName').textContent = character.characterInfo.screenName;
      document.getElementById('characterTypingStyle').textContent = character.characterInfo.typingStyle;
      document.getElementById('characterStrifeSpecibi').textContent = character.characterInfo.strifeSpecibi;
      document.getElementById('characterFetchModus').textContent = character.characterInfo.fetchModus;
      document.getElementById('characterPlanet').textContent = character.characterInfo.planet;
      document.getElementById('characterImage').src = character.bioImg;
      document.getElementById('etymology').innerHTML = character.bio.etymology;
      document.getElementById('biography').innerHTML = character.bio.biography;
      document.getElementById('personality').innerHTML = character.bio.personality;
      document.getElementById('inventory').innerHTML = character.bio.inventory;
      document.getElementById('relationships').innerHTML = character.bio.relationships;
      document.getElementById('lusus').innerHTML = character.bio.lusus;

      // Extract the selectionColor from the character object
      const selectionColor = character.selectionColor || '#A282A2'; // Default to porphura purple if not specified

      // Apply the ::selection style to the entire page
      document.documentElement.style.setProperty('--selection-color', selectionColor);

      // Set background image and border color
      document.body.style.backgroundImage = character.backgroundImage || 'none'; // Sets custom background image
      characterListContainer.style.borderColor = character.borderColor || ''; // Sets custom border color
      introBox.style.borderColor = character.borderColor || ''; // Sets other custom border colors
      updateScrollbarColors(character); // Sets custom scrollbar colors

      // Sets styles based on infoboxColor
      const infobox = document.querySelector('.infobox');
      const infoboxImg = document.querySelector('.infobox img');
      const infoboxH2 = document.querySelector('.infobox h2');
      const infoboxP = document.querySelector('.infobox p');
      const topbox = document.querySelector('.topbox');

      infobox.style.width = '80%';
      infobox.style.margin = 'auto';
      infobox.style.marginTop = '7%';
      infobox.style.backgroundColor = '#0a0a0a';
      infobox.style.borderRadius = '10px';
      infobox.style.border = `solid 5px ${character.infoboxColor}`;
      infobox.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
      infobox.style.overflow = 'hidden';

      infoboxImg.style.width = '80%';
      infoboxImg.style.borderRadius = '5px';
      infoboxImg.style.margin = 'auto';
      infoboxImg.style.marginTop = '8%';
      infoboxImg.style.border = `solid 5px ${character.infoboxColor}`;

      infoboxH2.style.fontSize = '200%';
      infoboxH2.style.marginBottom = '10px';
      infoboxH2.style.marginTop = '0%';
      infoboxH2.style.color = '#0a0a0a';
      infoboxH2.style.padding = '5%';

      // Select all <p> elements within the infobox
      const infoboxParagraphs = document.querySelectorAll('.infobox p');

      infoboxParagraphs.forEach(paragraph => {
        paragraph.style.fontSize = '14px';
        paragraph.style.marginLeft = '10% auto';
        paragraph.style.color = character.infoboxColor;
        paragraph.style.padding = '2% !important';
      });

      topbox.style.backgroundColor = character.infoboxColor;

    }
    // Initialize the gallery after the character is clicked
    initializeGallery();
  }

  function updateScrollbarColors(character) {
    const style = document.createElement('style');
    style.textContent = `
    /* For Chrome, Edge, and Safari */
    ::-webkit-scrollbar {
      width: 15px;
    }
  
    ::-webkit-scrollbar-thumb {
      background-color: ${character.scrollbar.thumbColor};
    }
  
    ::-webkit-scrollbar-track {
      background-color: ${character.scrollbar.trackColor};
      box-shadow: inset 0 0 0 2px #000;
    }
  
    ::-webkit-scrollbar-button:start:decrement,
    ::-webkit-scrollbar-button:end:increment {
      background-color: ${character.scrollbar.buttonColor};
    }
  
    /* For Firefox */
    * {
      scrollbar-color: ${character.scrollbar.thumbColor} ${character.scrollbar.trackColor};
      scrollbar-width: thin;
    }
  
    *::-webkit-scrollbar {
      width: 15px;
    }
  
    *::-webkit-scrollbar-thumb {
      background-color: ${character.scrollbar.thumbColor};
    }
  
    *::-webkit-scrollbar-track {
      background-color: ${character.scrollbar.trackColor};
      box-shadow: inset 0 0 0 2px #000;
    }
  
    *::-webkit-scrollbar-button:start:decrement,
    *::-webkit-scrollbar-button:end:increment {
      background-color: ${character.scrollbar.buttonColor};
    }
  `;

    document.head.appendChild(style);
  }

  // Modal handling
  function openModal(imagePath, imageData) {
    modalImageIndex = focusedCharacter.gallery.findIndex(img => img.path === imagePath);
    modalImage.src = imagePath;
    modalInfo.innerHTML = imageData.info;
    modalArtist.innerHTML = `Artist: ${imageData.artist}`;
    modalFileName.innerHTML = `File: ${imageData.path}`;
    modal.style.display = 'block';
    updateNavigationButtons();
  }

  function closeModal() {
    modal.style.display = 'none';
  }

  // Stores the current character
  let currentCharacter = null;
  let currentGalleryIndex = 0;

  // Creates an image element
  function createImageElement(imagePath) {
    const img = document.createElement('img');
    img.src = imagePath;
    img.alt = 'Character Gallery Image';
    return img;
  }

  // Gets the current index of the gallery
  function getGalleryIndex(imageGallery) {
    const images = Array.from(imageGallery.children);
    const currentIndex = images.findIndex(img => img.classList.contains('active'));
    return currentIndex === -1 ? 0 : currentIndex;
  }

  // Initializes the gallery
  function initializeGallery() {
    const prevButton = document.getElementById('galleryPrevButton');
    const nextButton = document.getElementById('galleryNextButton');

    if (prevButton && nextButton) {
      prevButton.addEventListener('click', galleryPrevButton);
      nextButton.addEventListener('click', galleryNextButton);
    }

    // Load the first set of images
    updateGallery(0);
  }

  function updateGallery(startIndex) {
    const imageGallery = document.getElementById('imageGalleryScroll');

    if (imageGallery) {
      imageGallery.innerHTML = '';

      const currentCharacter = focusedCharacter;

      if (currentCharacter && currentCharacter.gallery) {
        for (let i = startIndex; i < startIndex + 3; i++) {
          const index = i % currentCharacter.gallery.length;
          const imageInfo = currentCharacter.gallery[index];
          const imageElement = createImageElement(imageInfo.path);

          imageElement.addEventListener('click', () => openModal(imageInfo.path, imageInfo));

          imageGallery.appendChild(imageElement);
        }
      }
    }
  }

  function galleryPrevButton() {
    const currentCharacter = focusedCharacter;
    if (currentCharacter) {
      currentGalleryIndex = (currentGalleryIndex - 1 + currentCharacter.gallery.length) % currentCharacter.gallery.length;
      updateGallery(currentGalleryIndex);
    }
  }

  function galleryNextButton() {
    const currentCharacter = focusedCharacter;
    if (currentCharacter) {
      currentGalleryIndex = (currentGalleryIndex + 1) % currentCharacter.gallery.length;
      updateGallery(currentGalleryIndex);
    }
  }

  // Modal Navigation handling
  function updateNavigationButtons() {
    modalNextButton.style.display = 'block';
    modalPrevButton.style.display = 'block';
  }

  function showNextImage() {
    const currentCharacter = focusedCharacter;
    modalImageIndex = (modalImageIndex + 1) % currentCharacter.gallery.length;
    updateModalImage();
  }

  function showPrevImage() {
    const currentCharacter = focusedCharacter;
    modalImageIndex = (modalImageIndex - 1 + currentCharacter.gallery.length) % currentCharacter.gallery.length;
    updateModalImage();
  }

  function updateModalImage() {
    const imageData = focusedCharacter.gallery[modalImageIndex];
    modalImage.src = imageData.path;
    modalInfo.innerHTML = imageData.info;
    modalArtist.innerHTML = `Artist: ${imageData.artist}`;
    modalFileName.innerHTML = `File: ${imageData.path}`;
    updateNavigationButtons();
  }

  // Event listeners for modal navigation buttons
  modalNextButton.addEventListener('click', showNextImage);
  modalPrevButton.addEventListener('click', showPrevImage);
  modalCloseButton.addEventListener('click', closeModal);

  // Initialize the script
  document.addEventListener('DOMContentLoaded', initializeGallery);
  initialize();
});