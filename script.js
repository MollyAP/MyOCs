// script.js

document.addEventListener('DOMContentLoaded', () => {
  const characterListContainer = document.getElementById('characterList');
  const introBox = document.getElementById('introBox');
  const characterName = document.getElementById('characterName');
  const characterDetails = document.getElementById('characterDetails');
  const imageGalleryContainer = document.getElementById('imageGallery');
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

  // Initialization
  function initialize() {
    createCharacterCircles();
  }

// Create character circles
function createCharacterCircles() {
  characters.forEach((character, index) => {
    // Create a container for each character circle
    const characterContainer = document.createElement('div');
    characterContainer.className = 'character-container';

    // Set the size of the character container
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

    // Append that container to the character list container
    characterListContainer.appendChild(characterContainer);
  });
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

  // Handle character circle leave
  function handleCharacterLeave() {
    if (!focusedCharacter) {
      characterName.textContent = '';
    } else {
      // Set character name to focused character's name when leaving the hovered character
      characterName.textContent = focusedCharacter.name;
    }
  }

  // Handle character circle click
  function handleCharacterClick(character, characterCircle) {
    if (characterCircle.classList.contains('focused')) {
      characterCircle.classList.remove('focused'); // Unfocus the clicked character if it's already focused
      characterCircle.style.borderColor = character.borderInitialColor;
      focusedCharacter = null;
      document.body.style.backgroundImage = 'url(\'Images/background.png\')'; // Reset background image
      characterListContainer.style.borderColor = ''; // Reset border color
      introBox.style.borderColor = ''; // Reset other border color
      characterName.textContent = ''; // Clear character name when focused
      introBox.innerHTML = `
      <div class="author">
      <img src="./Images/pfp.png">
    </div>
      <p style>
        Hi, I'm Molly! The owner of all of these trolls and programmer behind the look and functionality of this
        website. This is eventually meant to be a comprehensive ctalogue of all of my trolls and their stories so I
        will try to keep this as up to date with the current lore as possible for people that would like to know
        about them. <br><br>

        Troll's that aren't mine but maintain relationships with them may get entries as well, though at some later
        date but those entries will only be accessible through clicking on their names through the related character
        of mine or possibly through a seperate "Extended Universe" section.<br><br>

        Please keep in mind that since I coded this website myself, there might be occasional bugs or unintended
        behaviors. If you'd like to report one or to just get in contact with me you can do so 
        <a href="./contact.html">here</a>. I hope you enjoy my OC's :),<br><br>

        Circle icons drawn by <a href="https://twitter.com/octolingles">
          <img src="./Images/Assets/lina.png" class="lingles" id="linglesBounce" alt="Description of the image">
        </a>
      </p>
      `;
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
      document.getElementById('characterImage').src = character.bioImg;
      document.getElementById('etymology').innerHTML = character.bio.etymology;
      document.getElementById('biography').innerHTML = character.bio.biography;
      document.getElementById('personality').innerHTML = character.bio.personality;
      document.getElementById('inventory').innerHTML = character.bio.inventory;
      document.getElementById('relationships').innerHTML = character.bio.relationships;
      document.getElementById('lusus').innerHTML = character.bio.lusus;

      // Create and show the image gallery
      createImageGallery(character);

      // Set background image and border color
      document.body.style.backgroundImage = character.backgroundImage || 'none'; // Set custom background image
      characterListContainer.style.borderColor = character.borderColor || ''; // Set custom border color
      introBox.style.borderColor = character.borderColor || ''; // Set other custom border color
      updateScrollbarColors(character); // Set custom scrollbar colors 

    }
    
  }

  // Update scrollbar colors based on character's properties
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

  // Clear image gallery
  function clearImageGallery() {
    imageGalleryContainer.innerHTML = '';
    currentImageIndex = 0;
  }

  // Modal handling
  function openModal(imagePath, imageData) {
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

  // Gallery handling
  function createImageGallery(character) {
    clearImageGallery(); // Clear previous gallery if any

    character.gallery.forEach((imageData, index) => {
      const galleryImage = document.createElement('img');
      galleryImage.src = imageData.path;
      galleryImage.alt = `Image ${index + 1}`;

      galleryImage.addEventListener('click', () => openModal(imageData.path, imageData));

      imageGalleryContainer.appendChild(galleryImage);
    });
  }

  // Navigation handling
  function updateNavigationButtons() {
    modalNextButton.style.display = 'block';
    modalPrevButton.style.display = 'block';
  }

  function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % focusedCharacter.gallery.length;
    updateModalImage();
  }

  function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + focusedCharacter.gallery.length) % focusedCharacter.gallery.length;
    updateModalImage();
  }

  function updateModalImage() {
    const imageData = focusedCharacter.gallery[currentImageIndex];
    modalImage.src = imageData.path;
    modalInfo.innerHTML = imageData.info;
    modalArtist.innerHTML = `Artist: ${imageData.artist}`;
    modalFileName.innerHTML = `File: ${imageData.path}`;
    updateNavigationButtons();
  }

  // Event listeners for navigation buttons
  modalNextButton.addEventListener('click', showNextImage);
  modalPrevButton.addEventListener('click', showPrevImage);
  modalCloseButton.addEventListener('click', closeModal);

  // Initialize the script
  initialize();
});
