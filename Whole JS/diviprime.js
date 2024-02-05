document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("sum").onclick = function() {
        var userInput = document.getElementById("q1").value;
        var keyword = '12 * 10 - 1';

        if (userInput.toLowerCase().includes(keyword.toLowerCase())) {
            alert('Exactly, you have been paying attention!');
            document.getElementById("A1").textContent = "Congrats! now, lets move on, find if 1728 is divisible or not ! Now in the first case, the number that got multiplied by 10 is 5. So, is 5 the seed of 17? actually, no, if the ending digit is 1, we revert the sign of the number multiplied with 10 and then call it a seed of that number. So the seed of 17 is -5. Do remember, a prime number has 2 seeds not only one. If the ending digit is 9, then we leave the sign as it is and then call it the seed. Can you tell me the other seed of 17 in this input box (using 9 at the end)";
        } else {
            alert('Wrong, try again.');
        }
    };

    document.getElementById("bro").onclick = function() {
        var userInpt = document.getElementById("q2").value;
        var key2 = '12';

        if (userInpt.toLowerCase().includes(key2.toLowerCase())) {
            alert('Good Job');
            document.getElementById("A2").textContent = "Congrat! Two questions correct, its not an easy job. Let's move on! now the we understood that the seeds of 17 are -5 and 12, let's breakdown, 1728 as 172 and 8. Multiply 8 with -5, to get -40. You add -40 to 172 to get 132. Repeat the same step, break 132 to 13 and 2, multipy 2 with -5 to get -10 add -10 to 13 and get 3. Now we know that 3 is not a divisible by 17. Hence we confirm that 1728 cannot be divided by 17. Now what is the other methond? with the seed as 12? let's see......  172 and 8 as it was. Multiply 8 with 12 to get 96. Add 96 to 172 to get 268. Multiply 8 with 12 again after breaking 268 into 26 and 8. You will get 96 again. Add 96 to 26 to get 122. break that down into 12 and 2. Multiply 2 with 8 and get 16. add 12 and 16 to get 28. We know that 28 is not a multiple of 17. Hence, 1728 is not a multiple of 17. Which method do you think is better for this case, 1 or 2. I liked method 1. (P.S. this trick wont work with 2 or 5)";
        } else {
            alert('Wrong, try again.');
        }
    };
});
