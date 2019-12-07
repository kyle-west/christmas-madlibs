const vowels = [ 'a' , 'e', 'i', 'o', 'u' ]
const matchingArticle = (word) => vowels.includes(word.charAt(0)) ? 'an' : 'a'
let totalCount = 0;
let currentCount = 1;
const ask = (type, custom=false) => {
  let msg = (custom ? type : `Enter ${matchingArticle(type)} ${type}`)
  let progress = `  (${currentCount}/${totalCount})`
  let response = prompt(msg + progress)
  if (response === null) throw new Error("abort")
  if (!response) {
    let errMessage = 'Response required.'
    return ask(msg.startsWith(errMessage) ? msg : `${errMessage} ${msg}`, true)
  } else {
    ++currentCount
    return `<b><i>${response}</i></b>`
  }
}


const madLibs =  [
  ["Letter to Santa", 24, () => `
    Dear Santa,

    I have been a very ${ask('adjective')} ${ask('noun')}. This year I always help my
    ${ask('relative')} with chores around the ${ask('noun')}. It's my job to 
    ${ask('verb')} the ${ask('noun')} and take out the ${ask('noun')} every day.
    
    I really hope that I am on the ${ask('adjective')} list this year! I have done a lot
    of ${ask('adjective')} things, so I think I deserve it! I even helped 
    ${ask("person's name")} feed the ${ask('animal')} while they were on vacation in
    ${ask('location')}.

    I have a ${ask('adjective')} ${ask('holiday')} wishes this year, and would love
    to see a ${ask('adjective')} new ${ask('noun')} underneath the ${ask('noun')} with my name
    on it! It would make me the happiest ${ask('noun')} on the ${ask('noun')}!
    Oh and if you could put a ${ask('adjective')} ${ask('noun')} inside of my stocking,
    That would be ${ask('adjective')} too! 
    
    Merry ${ask('holiday')}!

    ${ask('peron\'s name')}
  `],


  ["Christmas Poem", 34, () => {
    let [_1, _2, _3] = [ask('verb'), ask('person\'s name'), ask('plural noun')]
    return `
    Twas the night before ${ask('popular event name')}, when all through the ${ask('noun')}
    Not a creature was stirring, not even a ${ask('animal')}.
    The stockings were hung by the chimney with care,
    In hopes that ${_2} soon would be there.
    
    The children were nestled all ${ask('adjective')} in their beds,
    While visions of sugar-plums danced in their heads.
    And mamma in her ‘kerchief, and I in my ${ask('noun')},
    Had just settled our brains for a long winter’s nap.
    
    When out on the lawn there arose such a clatter,
    I sprang from the bed to see what was the matter.
    Away to the window I ${ask('verb')} like a flash,
    Tore open the ${ask('noun')} and threw up the sash.
    
    The moon on the breast of the new-fallen ${ask('noun')}
    Gave the lustre of mid-day to objects below.
    When, what to my ${ask('noun')} eyes should appear,
    But a miniature sleigh, and eight tinny reindeer.
    
    With a little old driver, so ${ask('adjective')} and ${ask('adjective')},
    I knew in a moment it must be ${_2}.
    More rapid than eagles his coursers they came,
    And he whistled, and shouted, and called them by name!
    
    "Now Dasher! now, ${ask('good cat name')}! now, ${ask('odd dog name')} and Vixen!
    On, Comet! On, ${ask('sappy pet name')}! on, on Donner and Blitzen!
    To the top of the porch! to the top of the wall!
    Now ${_1} away! ${_1} away! ${_1} away all!"
    
    As dry leaves that before the wild ${ask('noun')} fly,
    When they meet with an obstacle, mount to the sky.
    So up to the house-top the coursers they flew,
    With the sleigh full of ${_3}, and ${_2} too.
    
    And then, in a twinkling, I heard on the roof
    The prancing and pawing of each ${ask('adjective')} hoof.
    As I drew in my head, and was turning around,
    Down the chimney ${_2} came with a bound.
    
    He was dressed all in ${ask('noun')}, from his head to his foot,
    And his clothes were all tarnished with ${ask('noun')} and soot.
    A bundle of ${_3} he had flung on his back,
    And he looked like a peddler, just opening his pack.
    
    His ${ask('body part (plural)')} - how they twinkled! his dimples how merry!
    His cheeks were like ${ask('plant (plural)')}, his nose like a ${ask('fruit')}!
    His droll little mouth was drawn up like a bow,
    And the beard of his chin was as ${ask('adjective')} as the ${ask('noun')}.
    
    The stump of a ${ask('noun')} he held tight in his teeth,
    And the smoke it encircled his head like a wreath.
    He had a broad face and a little ${ask('adjective')} belly,
    That shook when he laughed, like a bowlful of ${ask('plural noun')}!
    
    He was ${ask('adjective')} and ${ask('adjective')}, a right jolly old elf,
    And I laughed when I saw him, in spite of myself!
    A wink of his eye and a twist of his head,
    Soon gave me to know I had nothing to dread.
    
    He spoke not a word, but went straight to his work,
    And filled all the ${ask('container (plural)')}, then turned with a jerk.
    And laying his ${ask('body part')} aside of his nose,
    And giving a nod, up the chimney he rose!
    
    He sprang to his sleigh, to his team gave a whistle,
    And away they all flew like the down of a thistle.
    But I heard him exclaim, ‘ere he drove out of sight,
    "${ask('something you would say while leaving a party')}!"
  `}],


  ["Christmas Song 1", 13, () => {
    let [_place, _santa] = [ask('location'), ask('person\'s name')]
    return `
    <h1>"${_santa}" is coming to "${_place}"</h1>

    You better watch out
    You better not ${ask('verb')}
    Better not ${ask('verb')}
    I'm telling you why
    ${_santa} is coming to ${_place}
    
    He's making a ${ask('noun')}
    And ${ask('verb/ing')} it twice;
    Gonna find out Who's ${ask('adjective')} and ${ask('adjective')}
    ${_santa} is coming to ${_place}

    He sees you when you're ${ask('verb/ing')}
    He knows when you're ${ask('adjective')}
    He knows if you've been ${ask('adjective')} or ${ask('adjective')}
    So ${ask('phrase you would tell a child')}!
  `}],

  ["Christmas Song 2", 16, () => {
    let [_part, _name, _animal, _1] = [ask('body part'), ask('person\'s name'), ask('animal'), ask('adjective')]
    return `
    <h1>${_name} the ${_1}-${_part} ${_animal}</h1>

    ${_name} the ${_1}-${_part} ${_animal}
    Had a very ${ask('adjective')} ${_part}
    And if you ever ${ask('action to an object')} it
    You would even say it ${ask('verb/s')}

    All of the other ${_animal}s
    Used to ${ask('verb')} and call him ${ask('mean nickname')}
    They never let poor ${_name}
    Join in any ${_animal} games

    Then one ${ask('adjective')} ${ask('event name')} Eve
    ${ask('person\'s name')} came to say
    "${_name}, with your ${_part} so ${ask('adjective')}
    Won't you ${ask('something you would ask a neighbor to do for you')} ${ask('time/date')}?"

    Then how the ${_animal}s loved him
    As they shouted out with ${ask('emotion')}
    "${_name} the ${_1}-${_part} ${_animal}
    You'll go down in history"
  `}],
]


function play(index) {
  const [, count, template] = madLibs[index]
  currentCount = 1
  totalCount = count
  document.getElementById('display').innerHTML = '<div></div>' // reset the form
  try {
    document.getElementById('display').innerHTML = template() + `
    
  
  
      <a href="#" onclick="menu()">Menu</a>
    `
  } catch (err) {
    menu()
  }
}

function menu() {
  document.getElementById('display').innerHTML = `
    <h1>Christmas MadLibs</h1>
    

${madLibs.map(([title, count], index) => `<a href="#" onclick="play(${index})">${title} (${count} blanks)</a>`).join('\n\n')}
  `
}

menu() // start us off