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
        id: 0008,
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
        id: 0009,
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

module.exports = {
    characters
}