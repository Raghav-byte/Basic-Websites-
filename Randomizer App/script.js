var lyrics = [
    'You don’t get another chance, life is no Nintendo game',
    'You only get one shot, do not miss your chance to blow ,This opportunity comes once in a lifetime yo!',
    'I just can\’t sit back and wallow, in my own sorrow, but I know one fact: I\’ll be one tough act to follow',
    'You’ve got enemies? Good, that means you actually stood up for something',
    'Straighten up little soldier, stiffen up that upper lip. What are you crying about? You got me',
    'I’d do whatever it takes, when I’m with you I get the shakes. My body aches when I ain’t with you I have zero strength',
    'We’ll walk this road together, through the storm. Whatever weather, cold or warm',
    'Maybe one day we’ll all wake up and this will just be a dream',
    'My confidence is up, this stage is my pedestal',
    'I’m unstoppable, Incredible Hulk You’re trapped in my medicine ball Drop the world',
    'Why be a king, when you can be a god?',
    'Trust is hard to come by. That’s why my circle is small and tight. I’m kind of funny about making new friends',
    ];

    var Name = prompt("Hey, What's your name ?") ;

    var RandomNumber = Math.floor(Math.random() *12 );
    
    document.write("<h1>Hello " + Name + " here's a random Eminem quote for you - " + lyrics[RandomNumber] + " !!</h1> ");
 
    


