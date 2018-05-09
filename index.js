// Define a function getFirstSelector(selector), which accepts a selector and returns the first element that matches.

function getFirstSelector(sel) {
  return document.querySelector(sel)
}

// Define a function nestedTarget() that pulls a .target out of #nested (# is used for IDs in selectors — but you knew that because you read the docs, right? :) ). (Note that in index.html #nested and .target just happen to be divs. This method should work with arbitrary elements.)

function nestedTarget() {
  return document.querySelector('div#nested div div div div.target')
}

// Define a function increaseRankBy(n) that increases the ranks in all of the .ranked-lists by n. (You might need to make use of parseInt()

function increaseRankBy(n) {
  let num = document.getElementById('app').querySelectorAll('ul.unranked-list li')
  for (let i = 0; i < num.length; i++) {
    let theNum = num[i].innerHTML;
    
  }
}