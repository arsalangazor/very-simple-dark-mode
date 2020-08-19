import React from 'react';
import { useTheme } from './ThemeContext';
import styled from "@emotion/styled";
// import { css, jsx } from '@emotion/core';

// This is emotion-theming Syntax...
const MainWrapper = styled("div")`
  background: ${props => props.theme.background};
  margin: -5px;
  padding: 25px;
  width: 97vw;
  height: 95vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  h1, h3, p {
    color: ${props => props.theme.body};
    width: 35vw;
  }
`;

function App() {
  const themeState = useTheme();
  //Now we just throw everything inside wrapper JSX
  return (
    <MainWrapper>
      <h1>Dark Mode Is Here!</h1>
      <h3>Enjoy this button...</h3>
      <p>Cat ipsum dolor sit amet, leave buried treasure in the sandbox for the toddlers i am the
         best or morning beauty routine of licking self. Pose purrfectly to show my beauty hit 
         you unexpectedly so small kitty warm kitty little balls of fur so 𝕄𝔼𝕆𝕎. Attack like 
         a vicious monster meow and walk away so drink water out of the faucet. Swipe at 
         owner's legs i show my fluffy belly but it's a trap! if you pet it i will tear up your hand 
         pretend not to be evil, somehow manage to catch a bird but have no idea what to 
         do next, so play with it until it dies of shock, cats are cute so purr. Flop over 
         scamper always hungry carefully drink from water glass and then spill it 
         everywhere and proceed to lick the puddle so sleep on my human's head. Behind the couch. 
         Sit on human they not getting up ever stare at guinea pigs, kick up litter favor 
         packaging over toy. I hate cucumber pls dont throw it at me meow and walk away 
         eat prawns daintily with a claw then lick paws clean wash down prawns with a 
         lap of carnation milk then retire to the warmest spot on the couch to claw at the 
         fabric before taking a catnap chase mice, so sleep on keyboard catto munch salmono. </p>
    
         <p>Claw drapes sit and stare so make it to the carpet before i vomit mmmmmm yet put butt in owner's 
           face. Attack the child my cat stared at me he was sipping his tea, too. As lick i the shoes poop 
           in the plant pot cats go for world domination need to chase tail, so what the heck just happened, 
           something feels fishy. If human is on laptop sit on the keyboard cats go for world domination 
           chill on the couch table but jump launch to pounce upon little yarn mouse, bare fangs at toy run 
           hide in litter box until treats are fed. Paw at beetle and eat it before it gets away eat 
           grass, throw it back up bring your owner a dead bird but stick butt in face, or reward the 
           chosen human with a slow blink yet chew foot, soft kitty warm kitty little ball of furr. Walk 
           on car leaving trail of paw prints on hood and windshield thug cat or use lap as chair scratch 
           at the door then walk away. Stare at ceiling spend six hours per day washing, but still have a 
           crusty butthole yet wake up human for food at 4am so making sure that fluff gets into the owner's 
           eyes, yet cat slap dog in face. And sometimes switches in french and say "miaou" just because well 
           why not stare at guinea pigs so pet me pet me pet me pet me, bite, scratch, why are you petting me. 
           Knock over christmas tree eat the rubberband jump around on couch, meow constantly until given 
           food, mesmerizing birds but cat not kitten around but i like to spend my days sleeping 
           and eating fishes that my human fished for me we live on a luxurious yacht, sailing proudly 
           under the sun, i like to walk on the deck, watching the horizon, dreaming of a good 
           bowl of milk. Sit in box poop on floor and watch human clean up mew. </p>
      <div>
        <br/>
        <button onClick={() => themeState.toggle()}>
          {themeState.dark ? "Switch to Light Mode" : "Back to Dark Mode"}
        </button>
      </div>
    </MainWrapper>
  );
};

export default App;