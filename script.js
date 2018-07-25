//Variables
var submitButton = document.getElementById("submitButton");
var ul = document.querySelector("ul");
var input = document.getElementById("userInput");
var headerThing = document.getElementById("header");

var twitterId = document.getElementById("twitter");
var githubId = document.getElementById("github");
var homepageId = document.getElementById("homepage");

//Helper functions
function addLinks(obj) {
  twitterId.href=hyperlinks.twitter;
  githubId.href=hyperlinks.github;
  homepageId.href=hyperlinks.homepage;
}
function checkInputLen() {
  return input.value.length;
}
function createLi() {
  let li = document.createElement("li");
  li.classList.add("listItem");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  li.addEventListener("click", function() {
    li.classList.toggle("done");
  });
  input.value = "";

  //Add delete button to item
  var deleteButton = document.createElement("button");
  deleteButton.classList.add("deleteButton");
  li.appendChild(deleteButton);
  deleteButton.innerHTML = "X";
  deleteButton.addEventListener("click", function() {
    li.remove();
    if (checkListLen() === 0) {
      headerThing.style.display = "block";
    }
  })
}

function disappearText() {
  words.style.display = "none";
}

//Add input to list on click/return
function addListItem() {
  if (checkInputLen() > 0) {
    createLi();
  }
}
function addListItemEnter(event) {
  if (checkInputLen() > 0 && event.keyCode === 13) {
    createLi();
  }
}

//'Empty list' disappearing functionality
function checkListLen() {
  return ul.children.length;
}

function removeHeaderThing() {
  if (checkListLen() > 0) {
    headerThing.style.display = "none";
  }
}

//If someone adds 'fireworks' do something fun
// function fireworksAdded() {
//
// }
//
// function fireworksResponse() {
//
// }

//--------engine ON----------//
//Add hyperlinks to footer items
var hyperlinks = {
  twitter: "http://www.twitter.com/crhudy",
  github: "http://github.com/santiagofish",
  homepage: "http://crhudy.com"
}
addLinks(hyperlinks);
submitButton.addEventListener("click", function() {
  addListItem();
  removeHeaderThing();
})

input.addEventListener("keypress", function() {
  addListItemEnter(event);
  removeHeaderThing();
});
input.addEventListener("keypress", removeHeaderThing);
