const characters = [
    {
        id: 0001,
        name: 'Garnet',
        img: 'https://static.wikia.nocookie.net/steven-universe/images/2/27/Garnet_With_Rings.png/revision/latest/scale-to-width-down/1000?cb=20201009220822',
        species: 'Gem',
        gem_type: 'Fusion',
        weapon: 'Gauntlets',
        age: '~ 5,752',
        first_appearance: 'Pilot',
        voiced_by: 'Estelle'
    },
    {
        id: 0002,
        name: 'Stevonnie',
        img: 'https://static.wikia.nocookie.net/steven-universe/images/4/49/Stevonnie_BC.png',
        species: '25% Gem | 75% Human',
        gem_type: 'Diamond',
        weapon: 'Shield',
        age: '~ 28',
        first_appearance: 'Alone Together',
        voiced_by: 'AJ Michalka'
    },
    {
        id: 0003,
        name: 'Smoky Quartz',
        img: 'https://static.wikia.nocookie.net/steven-universe/images/6/60/Smoky_Quartz_3.png',
        species: '75% Gem | 25% Human',
        gem_type: 'Fusion',
        weapon: 'Yo-yo',
        age: 'unknown',
        first_appearance: 'Earthlings',
        voiced_by: 'Natasha Lyonne'
    },
    {
        id: 0004,
        name: 'Rose Quartz',
        img: 'https://static.wikia.nocookie.net/steven-universe/images/f/f9/Rose_Quartz_-_Weaponized.png',
        species: 'Gem',
        gem_type: 'Diamond',
        weapon: 'Shield & Sword',
        age: '+ 6,000',
        first_appearance: 'Gem Glow',
        voiced_by: 'Susan Egan'
    },
    {
        id: 0005,
        name: 'Pearl',
        img: 'https://steven-universe.fandom.com/wiki/Pearl?file=CYM+Pearl+Request+by+RylerGamerDBS.png',
        species: 'Gem',
        gem_type: 'Pearl',
        weapon: 'Spear | Many Swords',
        age: '+ 6,000',
        first_appearance: 'Pilot',
        voiced_by: 'Deedee Magno Hall'
    },
    {
        id: 0006,
        name: 'Amethyst',
        img: 'https://steven-universe.fandom.com/wiki/Amethyst?file=Amethyst+CYM+Outfit.png',
        species: 'Gem',
        gem_type: 'Quartz',
        weapon: 'Whip',
        age: 'unknown',
        first_appearance: 'Pilot',
        voiced_by: 'Michaela Dietz'
    },
    {
        id: 0007,
        name: 'Ruby',
        img: 'https://steven-universe.fandom.com/wiki/Ruby?file=RubyRegen2+By+TheOffColors.png',
        species: 'Gem',
        gem_type: 'Ruby',
        weapon: 'Gauntlet',
        age: 'unknown',
        first_appearance: 'Fusion Cuisine',
        voiced_by: 'Charlyne Yi'
    },
    {
        id: 0017,
        name: 'Sapphire',
        img: 'https://steven-universe.fandom.com/wiki/Sapphire?file=SappAltExpression2.png',
        species: 'Gem',
        gem_type: 'Sapphire',
        weapon: 'n/a',
        age: 'unknown',
        first_appearance: 'Jail Break',
        voiced_by: 'Erica Luttrell'
    },
    {
        id: 0010,
        name: 'Peridot',
        img: 'https://steven-universe.fandom.com/wiki/Peridot?file=PeridotS6Render+By+TheOffColors.png',
        species: 'Gem',
        gem_type: 'Peridot',
        weapon: 'Limb enhancers',
        age: '~ 3,000',
        first_appearance: 'Warp Tour',
        voiced_by: 'Shelby Rabara'
    },
    {
        id: 0011,
        name: 'Lapis Lazuli',
        img: 'https://steven-universe.fandom.com/wiki/Lapis_Lazuli?file=Lapis+S6+By+TheOffColors.png',
        species: 'Gem',
        gem_type: 'Lapis Lazuli',
        weapon: 'Hydrokinesis',
        age: '+ 6,000',
        first_appearance: 'Mirror Gem',
        voiced_by: 'Jennifer Paz'
    },
    {
        id: 0012,
        name: 'Steven Universe',
        img: 'https://steven-universe.fandom.com/wiki/Steven_Universe_(character)?file=StevenUniverse16+-2-+By+TheOffColors.png',
        species: '50% Gem | 50% Human',
        gem_type: 'Diamond',
        weapon: 'Shield',
        age: '16',
        first_appearance: 'Pilot',
        voiced_by: 'Zach Callison'
    },
    {
        id: 0013,
        name: 'Greg Universe',
        img: 'https://steven-universe.fandom.com/wiki/Greg_Universe?file=Greg+Future.PNG',
        species: 'Human',
        gem_type: 'n/a',
        weapon: 'Guitar | Waffle Iron',
        age: '42',
        first_appearance: 'Laser Light Cannon',
        voiced_by: 'Tom Scharpling'
    },
    {
        id: 0014,
        name: 'Lars Barriga',
        img: 'https://steven-universe.fandom.com/wiki/Lars_Barriga?file=Lars+Barriga+-Work+Clothes-.png',
        species: 'Human (*)',
        gem_type: 'n/a',
        weapon: 'none',
        age: 'unknown',
        first_appearance: 'Pilot',
        voiced_by: 'Matthew Moy | Mason Cook'
    },
    {
        id: 0015,
        name: 'Sadie Miller',
        img: 'https://steven-universe.fandom.com/wiki/Sadie_Miller?file=Sadie+Miller.png',
        species: 'Human',
        gem_type: 'n/a',
        weapon: 'none',
        age: '~ 20',
        first_appearance: 'Pilot',
        voiced_by: 'Kate Micucci'
    },
    {
        id: 0016,
        name: 'Connie Maheswaran',
        img: 'https://steven-universe.fandom.com/wiki/Connie_Maheswaran?file=Connie+%28SUF2%29.png',
        species: 'Human',
        gem_type: 'n/a',
        weapon: `Pearl's Sword | Rose's Sword | Connie's Sword`,
        age: '~ 15',
        first_appearance: 'Bubble Buddies',
        voiced_by: 'Grace Rolek'
    },
]

const quotes = [
    {
        id: 7899,
        character: 'Garnet',
        character_id: 0001,
        quote:`Yes... Or, you can link your mind with the energy of all existing matter, channeling the collective power of the universe through your gem! Which results in.. *summons her weapon* At least that's my way of doing it.`,
    },
    {
        id: 7898,
        character: 'Garnet',
        character_id: 0001,
        quote:`Love at first sight doesn't exist. Love takes time and love takes work.`,
    },
    {
        id: 7897,
        character: 'Garnet',
        character_id: 0001,
        quote:`You are not two people, and you are not one person. You… are an experience, and make sure you’re a good experience! Now, Go. Have. FUN.`
    },
    {
        id: 7896,
        character: 'Garnet',
        character_id: 0001,
        quote:`Steven: Woah. We made it? Garnet: I carried you while you took a nap.`
    },
    {
        id: 7895,
        character: 'Stevonnie',
        character_id: 0002,
        quote:`I wish you were here. If we were together, it would be okay. But we are together, and it's not. I'm alone.`
    },
    {
        id: 7894,
        character: 'Stevonnie',
        character_id: 0002,
        quote:`You wanna dance? Let's go. And it's Stevonnie; I am not your baby.`
    },
    {
        id: 7893,
        character: 'Stevonnie',
        character_id: 0002,
        quote:`You have so many worlds and I don't even have one! It's not fair! I. Want. ONE! I want my own army! I want my own planet! I deserve it! I'm just as important as you!`
    },
    {
        id: 7892,
        character: 'Smokey Quartz',
        character_id: 0003,
        quote:`Don't bother putting your socks back on, 'cause I'm about to knock 'em off again!`
    },
    {
        id: 7891,
        character: 'Smokey Quartz',
        character_id: 0003,
        quote:`Holy smokes! I'm Smoky! Steven, you beautiful genius! You pulled Amethyst out of her gem through fusion?!`
    },
    {
        id: 7890,
        character: 'Smokey Quartz',
        character_id: 0003,
        quote:`Well, sometimes you save all the people, but the roller coaster still crashes into the ocean.
        (The roller coaster explodes in the water.)
        And that's okay.`
    },
    {
        id: 7890,
        character: 'Rose Quartz',
        character_id: 0004,
        quote:`Isn't it remarkable, Steven? This world is full of so many possibilities. Each living thing has an entirely unique experience. The sights they see, the sounds they hear. The lives they live are so complicated... and so simple. I can't wait for you to join them.`
    },
    {
        id: 7889,
        character: 'Rose Quartz',
        character_id: 0004,
        quote:`Who cares about how I feel? How you feel is bound to be much more interesting.`
    },
    {
        id: 7888,
        character: 'Rose Quartz',
        character_id: 0004,
        quote:`No more questions. Don't ever question this. You already are the answer.`
    },
    {
        id: 7887,
        character: 'Rose Quartz',
        character_id: 0004,
        quote:`When a Gem is made, it's for a reason. They burst out of the ground already knowing what they're supposed to be, and then... that's what they are. Forever. But you, you're supposed to change. You're never the same even moment to moment -- you're allowed and expected to invent who you are. What an incredible power -- the ability to "grow up."`
    },
    {
        id: 7886,
        character: 'Pearl',
        character_id: 0005,
        quote:`Steven, until you learn to control the powers in your gem, *snaps Centipeetle’s neck* we’ll take care of protecting humanity, okay?`
    },
    {
        id: 7885,
        character: 'Pearl',
        character_id: 0005,
        quote:`They don't just look like her, they are like her. She made them. I thought I'd be more ready for this...`
    },
    {
        id: 7884,
        character: 'Amethyst',
        character_id: 0006,
        quote:`In the ring, nobody can tell me what to do! And if they try, I HIT 'EM IN THE FACE WITH A CHAIR!`
    },
    {
        id: 7883,
        character: 'Amethyst',
        character_id: 0006,
        quote:`I only feel how I wanna feel.`
    },
    {
        id: 7882,
        character: 'Ruby',
        character_id: 0007,
        quote:`You're not, as above this as you think you are! *groans angrily*`
    },
    {
        id: 7881,
        character: 'Ruby',
        character_id: 0007,
        quote:`Why does she always act like I'm being ridiculous? Just because she *mumbles underwater*`
    },
    {
        id: 7880,
        character: 'Sapphire',
        character_id: 0017,
        quote:`	
        Ruby: How am I gonna save you?
        You already did.
        Ruby: What!?
        You already saved me.`
    },
    {
        id: 7879,
        character: 'Sapphire',
        character_id: 0017,
        quote:`We won't stand out if we play the roles we were made for.`
    },
    {
        id: 7878,
        character: 'Peridot',
        character_id: 0010,
        quote:`You Gems really are as dull as dirt.`
    },
    {
        id: 7877,
        character: 'Peridot',
        character_id: 0010,
        quote:`Steven! You never gave up on me for reasons I don't understand! I'll do the same for you!`
    },
    {
        id: 7876,
        character: 'Lapis Lazuli',
        character_id: 0011,
        quote:`Can't you see? I can't stop, not for a second. Don't look for me. I don't want your help!`
    },
    {
        id: 7875,
        character: 'Lapis Lazuli',
        character_id: 0011,
        quote:`For a moment, I really felt like things were different, but they're not. No matter where I go, I'm trapped.`
    },
    {
        id: 7874,
        character: 'Steven Universe',
        character_id: 0012,
        quote:`Sleep is a curse, and yet a curse I need to live.`
    },
    {
        id: 7873,
        character: 'Greg Universe',
        character_id: 0013,
        quote:`If every pork-chop were perfect, we wouldn't have hotdogs.`
    },
    {
        id: 7872,
        character: 'Lars Barriga',
        character_id: 0014,
        quote:`Do you ever get lonely? Even when you're around people?`
    },
    {
        id: 7871,
        character: 'Sadie Miller',
        character_id: 0015,
        quote:`Yeah, you know what? Yeah! Who cares, right? What am I afraid of? This could be fun!`
    },
    {
        id: 7870,
        character: 'Connie Maheswaran',
        character_id: 0016,
        quote:`Of course it is. I like you just the way you are.`
    },

]

module.exports = {
    characters,
    quotes
}