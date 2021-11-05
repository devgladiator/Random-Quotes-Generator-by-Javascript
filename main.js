let btn = document.getElementById("btn");
let output = document.getElementById("output");
let quote = [
  "“The greatest glory in living lies not in never falling, but in rising every time we fall.” -Nelson Mandela",
  "“The way to get started is to quit talking and begin doing.” -Walt Disney",
  "“If life were predictable it would cease to be life, and be without flavor.” -Eleanor Roosevelt",
  "“Life is what happens when you are busy making other plans.” -John Lennon",
  "“Spread love everywhere you go. Let no one ever come to you without leaving happier.” -Mother Teresa",
  "“When you reach the end of your rope, tie a knot in it and hang on.” -Franklin D. Roosevelt",
  "“Always remember that you are absolutely unique. Just like everyone else.” -Margaret Mead",
  "“The future belongs to those who believe in the beauty of their dreams.” -Eleanor Roosevelt",
  "“Tell me and I forget. Teach me and I remember. Involve me and I learn.” -Benjamin Franklin",
  "“The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.” -Helen Keller",
  "“It is during our darkest moments that we must focus to see the light.” -Aristotle",
  "“Whoever is happy will make others happy too.” -Anne Frank",
  "“Do not go where the path may lead, go instead where there is no path and leave a trail.” -Ralph Waldo Emerson",
  "“Spread love everywhere you go. Let no one ever come to you without leaving happier.” -Mother Teresa",
  "“When you reach the end of your rope, tie a knot in it and hang on.” -Franklin D. Roosevelt",
  "“Be yourself; everyone else is already taken.” -Oscar Wilde",
  "“Two things are infinite: the universe and human stupidity; and I am not sure about the universe.” -Albert Einstein",
  "“So many books, so little time.” -Frank Zappa",
  "“A room without books is like a body without a soul.” -Marcus Tullius Cicero",
];
btn.addEventListener("click", function () {
  var randomQuote = quote[Math.floor(Math.random() * quote.length)];
  output.innerHTML = randomQuote;
  document.querySelector("#copy-btn").innerHTML = "Copy";
  document.querySelector("#copy-btn").style.color = "#ffffff";
});

function copyText(htmlElement) {
  if (!htmlElement) {
    return;
  }

  let elementText = htmlElement.innerText;

  let inputElement = document.createElement("input");
  inputElement.setAttribute("value", elementText);
  document.body.appendChild(inputElement);
  inputElement.select();
  document.execCommand("copy");
  inputElement.parentNode.removeChild(inputElement);
}

document.querySelector("#copy-btn").onclick = function () {
  copyText(output);
  document.querySelector("#copy-btn").innerHTML = "Copied";
  document.querySelector("#copy-btn").style.color = "#3E7C17";
};
