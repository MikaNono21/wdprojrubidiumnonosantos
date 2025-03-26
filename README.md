# Mystwood Mysteries

Step into the shoes of a detective who is determined to solve cases in the gloomy town of Mystwood. You’ll embark on three challenging levels (Easy, Medium, & Difficult), each one will test your skills as a detective when you unravel the hidden secrets, piece together cryptic clues and solve the mystery while overcoming unexpected twists and turns.

Welcome, Detective. You’ve proven yourself capable of cracking a case. But this time, the stakes are becoming higher, the cases are more personal, and the series of mysteries are a bit…closer to the heart.

Are you ready to put your sleuthing skills to the test and embark on a mysterious and thrilling journey? 🔎🌲

## 4th Quarter Proj Update
← `profile.html`: This is already a pre-existing webpage, but we would like to update part of this to be able to save our information in our progress tracking part, along with the account log in details of the user. It will inform our player what levels they are done, in progress, or have not attempted yet, and will make the website more customized.

### Type of data: User Profile Data  
### Purpose: To store user details, track progress, and send updates  

### Structure in JSON format:  
profile {  
   username: text-string,  
   name: text-string,  
   preferred_pronouns: array of text-strings,  
   email: email-formatted-text-string,  
   profile_picture: text-link-to-the-uploaded-pix,  
   progress: {  
      level1: text-string,  // e.g., "completed", "in progress", "not attempted"  
      level2: text-string,  
      level3: text-string  
   }  
}  

← `Map.html`: Map of the Village - This webpage gives the user a more immersive overview on the overall town our characters’ mysteries revolve around. Hover on each one and it contains details and descriptions about this enchanting place, but not everything is so it seems. Take a closer look and you might find hints to help you solve the crimes. But beware, some secrets are meant to stay buried, and danger may lurk where u least expect it. Explore at your own risk, for every shadow in Mystwood holds a story waiting to be uncovered.

Our user will be able to see future possible locations as well, which will be unlocked as they continue to play the game. This webpage will incorporate both css and html for the layout and design, and js to save user information to the server, and further reflect their pending mysteries and those waiting to be unlocked. This dynamic website aims to make the experience more realistic and deep for our player. 

← `Characters.html`: Meet the Characters - This webpage is essential so that the players will get to know more about the roles and backgrounds of the people in the Mystwood kingdom. Once they understand the descriptions of each character, they will gain insights into each character’s personality and motives. This can be a great way to let them have easier decision making and solving the mysteries in the game. This page serves as a helpful guide throughout the player’s journey in playing the game. The Character Profiles webpage introduces the key characters of Mystwood Kingdom. With the king, and queen away on an important trip to England to visit King Charles III, the prince and princess have been left in charge of the palace. Alongside him are the castle guard, the housekeeper, and the lady-in-waiting. The royal family’s maid, the royal butler, a neighboring farmer, a townsperson, etc. With this webpage, the player will get to know each character and learn about their backgrounds.




### Wireframe (refer to page 7 & 8)
https://www.canva.com/design/DAGWpOdrw8w/EeTBHSk1ZaNpHlRQI9dK6Q/edit?ui=eyJEIjp7IlQiOnsiQSI6IlBCTDBIZnhYbTlLRHJUSEcifX19





## Outline:

← `index.hbs`: Home Screen - contains introduction to game, buttons to all levels, and account/progress tracker of player.

### Case File 1: The Robbery of a Family Heirloom

← `easy.html`: In this level, in the quiet town of Mystwood, a priceless and precious family heirloom-a necklace-has mysteriously disappeared from the castle’s basement. Only three people know about the necklace, adding to the suspense. An anonymous tip reaches the detective (player), who arrives at the scene to investigate and search for clues such as suspicious footprints around the castle. It’s all up to the detective to pick the right one in the three suspects. If the detective makes the correct choice, they’ll be rewarded with a cash prize.

### Case File 2: The Disappearance of the Little Prince

← `medium.html`: In this level, a shocking incident has occurred: the prince's little brother has mysteriously vanished from the castle grounds. Tension fills the air as the townsfolk whisper about the royal family's troubles. Only three individuals were last seen with the young prince, raising suspicions. An urgent message reaches the detective (player), urging them to investigate the castle and the town. As the detective arrives, they must gather evidence and question witnesses, uncovering clues like a torn piece of the prince's cloak found near the castle wall. The detective must carefully analyze the testimonies and piece together the puzzle. If they successfully identify the kidnapper among the four suspects, they will earn the gratitude of the royal family and a substantial reward.

### Case File 3: The Murder of the Loyal Gardener

← `hard.html`: In this level, the royal family's gardener has been found murdered in their front yard, sending shockwaves through the town. The scene reveals disturbing clues, including a blood-stained gardening tool, broken shards of glass, and strange footprints leading away. An urgent call reaches the detective (player), who arrives to investigate and interrogate potential witnesses. Tensions run high as the detective gathers evidence and analyzes motives. It’s all up to the detective to uncover the truth behind the gardener's death before someone else gets hurt. Will justice be served before it's too late?

### Well Done, Detective!

← `ending.html`: This webpage contains the well done message and appreciation of the characters to the detective as a congratulations for finishing the game.

## Usage of JS

---> Create variables to track the current level (easy, medium, hard).
	   Define the cash prize variable and initialize it to 0.
     
---> Using JS to switch between tabs within webpage

---> adding background music to make the game more immersive and engaging for the players

---> Create arrays or objects to store suspect data (e.g., names, clues, and whether they are the culprit)

---> Using alert to display messages to user during the game

---> Using switchcase to organize and display based on user's choices in the game


## Wireframe (please access canva link)

https://www.canva.com/design/DAGWpOdrw8w/EeTBHSk1ZaNpHlRQI9dK6Q/edit?utm_content=DAGWpOdrw8w&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton

