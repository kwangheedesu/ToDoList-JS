const quotes = [
    {
      quote: "Life is something that happens when you can't get to sleep.",
      author:  "Fran Lebowitz",
    },
    {
        quote: "It's not true that life is one damn thing after another; it is one damn thing over and over.",
        author:  "Edna St. Vincent Millay",
      },
   
      {
        quote: "A long life may not be good enough, but a good life is long enough.",
        author:  "Benjamin Franklin",
      },
   
      {
        quote: "Life is a moderately good play with a badly written third act.",
        author:  "Christopher Morley",
      },
   
      {
        quote: "Don't laugh at a youth for his affectations; he is only trying on one face after another to find his own.",
        author:  "Logan Pearsall Smith",
      },
   
      {
        quote: "Life is something that happens when you can't get to sleep.",
        author:  "Fran Lebowitz",
      },
   
      {
        quote: "Remember that there is nothing stable in human affairs; therefore avoid undue elation in prosperity, or undue depression in adversity.",
        author:  "Socrates",
      },
   
      {
        quote: "Life is a fatal complaint, and an eminently contagious one.",
        author:  "Oliver Wendell Holmes",
      },
   
      {
        quote: "Not a shred of evidence exists in favor of the idea that life is serious.",
        author:  "Brendan Gill",
      },
   
      {
        quote: "The dead might as well try to speak to the living as the old to the young.",
        author:  "Willa Cather",
      },
   
      {
        quote: "Life is tough, but it's tougher when you're stupid.",
        author:  "John Wayne",
      },
                        
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
