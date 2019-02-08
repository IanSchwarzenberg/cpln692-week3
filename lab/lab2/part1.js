/* =====================
# Lab 2, Part 1 — Underscore Selection

## Introduction

Set variables "query1" through "query8" by using an underscore function to answer the specified question. When you are finished, check your browser's console log to test the results.

For data, use the following two lists of board game collections.
===================== */

var rossGameList = ["catan", "hanabi", "code names", "chess", "candyland"];
console.log('ross\'s list', rossGameList);

var nathanGameList = ["chess", "dice", "catan", "pandemic"];
console.log('Nathan\'s list', nathanGameList);

/* =====================
What is the first game in Ross's list?
===================== */

var query1 = _.first(rossGameList);

console.log('What is the first game in Ross\'s list?', query1);

/* =====================
What are all of the games except for the first game in ross's list?
===================== */

var query2 = _.without(rossGameList, rossGameList[0]); //Prints the array without the first game ("zeroth" element) in the list

console.log('What are all of the games except for the first game in Ross\'s list?', query2);

/* =====================
What is the last game in Nathan's list?
===================== */

var query3 = _.last(nathanGameList);

console.log('What is the last game in Nathan\'s list?', query3);

/* =====================
What are all of the games in Nathan's list except for the last?
===================== */

var query4 = _.initial(nathanGameList);

console.log('What are all of the games in Nathan\'s list except for the last?', query4);

/* =====================
What would Nathan's game list look like if he sold "catan"?
===================== */

var query5 = _.without(nathanGameList, nathanGameList[2]); //Prints the array without the third game catan (the "second" element) in the list

console.log('What would Nathan\'s game list look like if he sold "catan"?', query5);

/* =====================
If Nathan and Ross play a board game, what are their options? This should be a list of all games owned by ross or Nathan, with no duplicates.
===================== */

var query6 = _.union(rossGameList, nathanGameList); //According to https://underscorejs.org/#arrays, _.union returns the "list of unique items" present among the two arrays

console.log('If Nathan and Ross play a board game, what are their options? This should be a list of all games owned by ross or Nathan, with no duplicates.', query6);

/* =====================
Which games are owned by both Ross and Nathan?
===================== */

var query7 = _.intersection(rossGameList, nathanGameList);

console.log('Which games are owned by both Ross and Nathan', query7);

/* =====================
Which games are exclusive to collections? In other words, only owned by either Ross or Nathan.
===================== */

var query8 = _.difference(rossGameList, nathanGameList); //_.difference shows only the games that are not duplicated in either array (in other words, only the games that Ross and Nathan own on their own but not in common)

console.log('Which games are exclusive to one collection? In other words, only owned by either Ross or Nathan (but not both!).', query8);
