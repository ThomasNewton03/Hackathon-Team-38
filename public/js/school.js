function showNext(currentButtonId, nextButtonId, contentId) {
    document.getElementById(currentButtonId).style.display = 'none';

    if (nextButtonId) {
        document.getElementById(nextButtonId).style.display = 'inline-block';
    }

    const contentMap = {
        'day1.1': `
            <div class="text-box">
                <p>
                    Welcome to your first day in your new school! Glad to see you’ve got your best outfit on. By the end of the week your goal is to have a full cool meter! I’m sure everything will be absolutely fine...
                </p>
            </div>
            <img class="cool-meter" src="imgs/cool-meter/cool-meter-3.png" />
        `,
        'day1.2': `
            <div class="text-box">
                <p>
                    You meet all your new classmates for the first time and all seem lovely! Unfortunately Tina does not see you and accidentally spills her water on you. Everyone thinks you peed yourself, your cool meter goes down.
                </p>
            </div>
            <img class="cool-meter" src="imgs/cool-meter/cool-meter-4.png" />
        `,
        'day1.3': `
            <div class="text-box">
                <p>
                    What an awful first day!!! Tomorrow can only get better, right???
                </p>
            </div>
            <img class="cool-meter" src="imgs/cool-meter/cool-meter-4.png" />
        `,
        'day2.1': `
            <div class="text-box">
                <p>
                    Glad to see you’re all ready for your second day. Yesterday was not the best but it can’t get any worse right? One of the girls in your class complemented your outfit so things are definitely looking up!
                </p>
            </div>
            <img class="cool-meter" src="imgs/cool-meter/cool-meter-4.png" />
        `,
        'day2.2': `
            <div class="text-box">
                <p>
                    After getting closer to your new classmates they start to question a weird smell. Turns out the smell is coming from you. Instantly you realise your mum never washed your clothes! Not a great choice of outfit today...
                </p>
            </div>
            <img class="cool-meter" src="imgs/cool-meter/cool-meter-4.png" />
        `,
        'day2.3': `
            <div class="text-box">
                <p>
                    Yet another disappointing day, I must have the worst luck. Third time’s a charm I guess?
                </p>
            </div>
            <img class="cool-meter" src="imgs/cool-meter/cool-meter-5.png" />
        `,
        'day3.1': `
            <div class="text-box">
                <p>
                    Okay you’ve not had the best start at school but today must be the day right? Right???
                </p>
            </div>
            <img class="cool-meter" src="imgs/cool-meter/cool-meter-5.png" />
        `,
        'day3.2': `
            <div class="text-box">
                <p>
                    Yet again fate is not on your side. Whilst in the canteen for lunch someone spills their pasta right down the front of your outfit.
                </p>
            </div>
            <img class="cool-meter" src="imgs/cool-meter/cool-meter-5.png" />
        `,
        'day3.3': `
            <div class="text-box">
                <p>
                    After a full day of being called “pasta girl” it is finally time to go home. The cool meter is not looking too good...
                </p>
            </div>
            <img class="cool-meter" src="imgs/cool-meter/cool-meter-6.png" />
        `,
        'day4.1': `
            <div class="text-box">
                <p>
                    After three bad days you can’t possibly have another one. Today will be the day!
                </p>
            </div>
            <img class="cool-meter" src="imgs/cool-meter/cool-meter-6.png" />
        `,
        'day4.2': `
            <div class="text-box">
                <p>
                    It is finally your moment, you’ve chosen a super cool outfit and everyone wants to be your friend. They love your twist on the uniform (even if you are breaking some rules)
                </p>
            </div>
            <img class="cool-meter" src="imgs/cool-meter/cool-meter-6.png" />
        `,
        'day4.3': `
            <div class="text-box">
                <p>
                    Your cool meter finally goes up! Maybe this new school isn’t that bad after all! With Halloween dress up day tomorrow, you’re so ready to be the coolest kid in town. 
                </p>
            </div>
            <img class="cool-meter" src="imgs/cool-meter/cool-meter-2.png" />
        `,
        'day5.1': `
            <div class="text-box">
                <p>
                    You think you’re Halloween outfit is the best one ever seen! Then you look around and realise your worst nightmare has come true...
                </p>
            </div>
            <img class="cool-meter" src="imgs/cool-meter/cool-meter-2.png" />
        `,
        'day5.2': `
            <div class="text-box">
                <p>
                    No one else is in fancy dress... you have come to school dressed up for Halloween and no one else has. This is the WORST day ever!
                </p>
            </div>
            <img class="cool-meter" src="imgs/cool-meter/cool-meter-2.png" />
        `,
        'day5.3': `
            <div class="text-box">
                <p>
                    Your cool meter drops right to the bottom, you are forced to leave school and never return out of embarrassment.
                </p>
            </div>
            <img class="cool-meter" src="imgs/cool-meter/cool-meter-8.png" />
        `
    };

    // <div class="model">
    //     <img class="jemima" src="imgs/jemima/Jemima.png" />
    // </div>

    // Ensure the 'content' element exists before updating its content
    if (document.getElementById('content')) {
        document.getElementById('content').innerHTML = contentMap[contentId];
    }
}
