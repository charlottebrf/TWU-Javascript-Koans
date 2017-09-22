# Requirements:

Here are the problem statements for the 5 problems solved:

## Problem 5:

Background:
India is a nation of many languages. Hindi is spoken, or at least understood, in many regions. English is spoken in many cities as well. In Bangalore, Kannada is the local language. Urdu is another language spoken in some parts of India. What is interesting about Urdu is that, unlike most languages, it is written right to left.
http://en.wikipedia.org/wiki/Urdu#Urdu_script

Problem statement:
A company released a newspaper advertisement containing text in Hindi, Urdu, and English. However it made a mistake in writing the Urdu words left to right instead of right to left. Write a program to correct the mistake and restructure the input into one line, and also to count the total words in the advertisement. Note that the words are provided in the form of a nested array. The Urdu words are in the second array.

Example:

Given an input of
[
 ["zara", "dhyaan", "dein"],
 ["mazarat", "chahenge"], // reverse this line
 ["attention", "please"]
]
When the code executes
Then the output should be
{
   words: ["zara", "dhyaan", "dein", "chahenge", "mazarat", "attention", "please"],
   count: 7
}

## Problem 4:

Background:
At present, currency notes in India are issued in the denomination of Rs.5, Rs.10, Rs.20, Rs.50, Rs.100, Rs.500 and Rs.1000.
http://www.rbi.org.in/currency/faqs.html

Problem statement:
Write a program that will enable counting of money given in the form of Indian currency notes. The program must take a variable number of arguments. These arguments must be summed and the total must be displayed. For any input number that does not match a valid currency denomination, ignore the value and stop counting further, displaying the sum counted so far.

Examples:

Given an input of 10, 20, 100
When the code is executed
Then display 130

Given an input of 20, 50, 10, 20, 13, 500
When the code is executed
Then display 100


## Problem 3:

Background:
Auto rickshaws are a very common mode of transportation in India. They are typically fitted with a meter that tracks the auto fare, based on distance traveled and waiting time (eg: when stuck in traffic jam). If it is night time, an extra charge of 50% is levied.
http://en.wikipedia.org/wiki/Auto_rickshaw#India

Problem statement:
Write a program that will compute the auto fare: it should take as arguments the distance traveled in kilometers (d), the waiting time in minutes (w), and whether it is night time (n). The assumed auto fare formula is:
20 + 8 * (d-1) + 4 * w
Add 50%, if n=true

(Please note that the above formula is make-belief! Please don't get into a fight with an auto-walla over this formula!)

Examples:

Given the kilometers traveled is 6
And the minutes spent waiting in a traffic jam is 8
And it was day time
When the end of the journey is reached
Then the meter displays the total fare as Rs 92

Given the kilometers traveled is 3.5
And the minutes spent waiting in a traffic jam is 4
And it was night time
When the end of the journey is reached
Then the meter displays the total fare as Rs 84


## Problem 2:

Background:
Bangalore has heavy traffic. One common cause is slow-moving vehicles using the same lanes as fast-moving vehicles. Auto rickshaws form a majority of these slow-moving vehicles.
http://bit.ly/oz3969

Problem statement:
The Indian government traffic jam analysis department has done some research and has found that traffic jams will occur when the number of auto rickshaws on the road is more than 40. Unless it is after 8pm in which case there are no traffic jams because the daytime traffic has finished.

Examples:
Given there are 30 auto rickshaws in the road
And the time is 3pm
When the traffic jam system is queried
Then no traffic jam is predicted

Given there are 41 auto rickshaws in the road
And the time is 3pm
When the traffic jam system is queried
Then a traffic jam is predicted

Given there are 60 auto rickshaws in the road
And the time is 10pm
When the traffic jam system is queried
Then no traffic jam is predicted


## Problem 1

Background:
India has a kite flying/fighting tradition. Each kite is tied to a thread that has ground glass rubbed onto it. This means one kite can cut another kite's thread, leaving the losing kite drifting down for someone to catch. When a kite fight starts, everyone shouts "Peche!", and when a kite wins, they shout "Ipo kaate!"
http://fighterkitecentral.com/pdfs/KitesinIndia.pdf

Problem statement:
We will assume that every 3rd kite that flies will end up starting a kite fight, every 5th kite ends up losing a kite fight. So print the numbers from 1 to 100; but for multiples of 3, print "Peche!" instead of the number; and for multiples of 5, print "Ipo kaate!"; and for numbers which are multiples of both 3 and 5, print "Peche! Ipo kaate!"

Examples:
Given there are 100 kites
When the game begins
Then the output should be
   1 2 Peche! 4 Ipo kaate! Peche! 7 8
...and so on
