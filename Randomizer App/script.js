var lyrics = [
    'Sometimes I’ll start a sentence and I don’t even know where it’s going. I just hope I find it along the way – Michael Scott, Season 5',
    'Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me – Michael Scott, Season 2',
    'I’m not superstitious, but I am a little stitious – Michael Scott, Season 4',
    'If I don’t have some cake soon, I might die – Stanley Hudson, Season 4',
    'Today, smoking is going to save lives – Dwight Schrute, Season 5',
    'I just want to lie on the beach and eat hot dogs. That’s all I’ve ever wanted – Kevin Malone, Season 3',
    'If I were buying my coffin, I would get one with thicker walls so you couldn’t hear the other dead people – Dwight Schrute, Season 2',
    'And I knew exactly what to do. But in a much more real sense, I had no idea what to do – Michael Scott, Season 5',
    'I am Beyonce always — Michael Scott',
    'Should have burned this place down when I had the chance — Michael Scott',
    'Mini cupcakes? As in the mini version of regular cupcakes? Which is already a mini version of cake? Honestly, where does it end with you people? — Kevin Malone',
    'I don\'t care what they say about me. I just want to eat — Pam Beesly',
    'I stopped caring a long time ago — Creed Bratton',
    ];

    var Name = prompt("Hey, What's your name ?") ;

    var RandomNumber = Math.floor(Math.random() *12 );
    
    document.write("<h1>Hey " + Name + " ! Here's a random The Office quote for you - " + lyrics[RandomNumber] + " !!</h1> ");
 
    


