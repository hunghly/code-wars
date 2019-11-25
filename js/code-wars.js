"use strict"
/*

It's bonus time in the big city! The fat cats are rubbing their paws in anticipation... but who is going to make the most money?
Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.
If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.
Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS and Java), "$" (C#, C++, Ruby, Clojure, Elixir, PHP and Python, Haskell, Lua) or "¥" (Rust).*/
function bonusTime(salary, bonus) {
    return (bonus) ? `£${salary * 10}` : `£${salary}`;
}
bonusTime(10000, true);

/*Welcome. In this kata, you are asked to square every digit of a number.
For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
Note: The function accepts an integer and returns an integer*/
function squareDigits(num){
    let newNum = "";
    let numArray = num.toString().split("");

    for (let i = 0; i < numArray.length; i++) {
        newNum += Number(numArray[i]) * Number(numArray[i]);
    }
    return Number(newNum);
}
squareDigits(9119);

/*
* If we alternate the vowels and consonants in the string "have", we get the following list, arranged alphabetically: ['ahev', 'aveh', 'ehav', 'evah', 'vahe', 'veha']. These are the only possibilities in which vowels and consonants are alternated. The first element, ahev, is alphabetically lowest.

Given a string:

alternate the vowels and consonants and return the lexicographically lowest element in the list
If any two or more vowels or consonants must follow each other, return "failed"
if the number of vowels and consonants are equal, the first letter of the result must be a vowel.
Examples:

solve("codewars") = "failed". However you alternate vowels and consonants, two consonants must follow each other
solve("oruder") = "edorur"
solve("orudere") = "ederoru". This is the only option that allows you to alternate vowels & consonants.
In C, return an allocated string even if the response is "failed".
Vowels will be any of "aeiou". Input will be a lowercase string, no spaces. See test cases for more examples.
* */
// function solve(s) {
//
// }

/*
* In this Kata, you will be given a string and your task is to return the most valuable character. The value of a character is the difference between the index of its last occurrence and the index of its first occurrence. Return the character that has the highest value. If there is a tie, return the lexicographically lowest character.

All inputs will be lower case.

For example:
solve('a') = 'a'
solve('ab') = 'a'. Last occurrence is equal to first occurrence of each character. Return lexicographically lowest.
solve("axyzxyz") = 'x'
* */
function solve(st) {
    let mostValuable = st[0];
    let value = 0;

    for (let i = 0; i < st.length; i++) {
        if ((st.lastIndexOf(st[i]) - st.indexOf(st[i]) > value)) {
            mostValuable = st[i];
            value = st.lastIndexOf(st[i]) - st.indexOf(st[i]);
        } else if (st.lastIndexOf(st[i]) - st.indexOf(st[i]) === value) {
            if (st[i] < mostValuable) {
                mostValuable = st[i];
            }
        }
    }
    return mostValuable;
}

console.log(solve("axyzxyz"));