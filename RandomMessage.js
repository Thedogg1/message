function retrieveData(){
let jokes=["Obvious:         Excuse me.  Is that your nose or did a bus park on your face. \n",
"Meteorological:  Everybody take cover.  She's going to blow.\n",
"Fashionable:     You know, you could de-emphasize your nose if you wore something larger.  Like ... Wyoming.\n",
"Personal:        Well, here we are.  Just the three of us.",
"Punctual:        Alright gentlemen.  Your nose was on time but you were fifteen minutes late.\n",
"Envious:         Oooo, I wish I were you.  Gosh.  To be able to smell your own ear.\n",
"Naughty:         Pardon me, Sir.  Some of the ladies have asked if you wouldn't mind putting that thing away.\n",
"Philosophical:   You know.  It's not the size of a nose thats important. It's what's in it that matters.\n",
"Humorous:        Laugh and the world laughs with you.  Sneeze and its goodbye Seattle.\n",
"Commercial:      Hi, I'm Earl Schibe and I can paint that nose for $39.95.\n", 
"Polite:          Ah.  Would you mind not bobbing your head.  The orchestra keeps changing tempo.\n",
"Melodic:         Everybody! 'He's got the whole world in his nose'\n",
"Sympathetic:     Oh, What happened?  Did your parents lose a bet with God?\n",
"Complememtary:   You must love the little birdies to give them this to perch on.\n",
"Scientific:      Say, does that thing there influence the tides.\n",
"Obscure:         Oh, I'd hate to see the grindstone.\n",
"Inquiry:         When you stop to smell the flowers, are they afraid?\n",
"French:          Say, the pigs have refused to find any more truffles until you leave.\n",
"Pornographic:    Finally, a man who can satisfy two women at once.\n",
"Religious:       The Lord giveth and He just kept on giving, didn't He.",
"Disgusting:      Say, who mows your nose hair.\n",
"Paranoid:        Keep that guy away from my cocaine!\n",
"Aromatic:        It must be wonderful to wake up in the morning and smell the coffee ... in Brazil.\n",
"Appreciative:    Oooo, how original.  Most people just have their teeth capped.\n"];
i=  jokes[Math.floor(Math.random() * jokes.length)];
document.getElementById('t1').innerHTML=i;
}