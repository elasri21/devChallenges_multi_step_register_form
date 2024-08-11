const main = document.querySelector("main");

document.addEventListener("DOMContentLoaded", function() {
    main.innerHTML = `
        <form class="form signup-form" action="index.html">
            <legend><h1>Register</h1></legend>
            <div class="form-control">
                <label for="name">name</label>
                <input class="field" type="text" name="name" id="name" placeholder="enter your name">
            </div>
            <div class="form-control">
                <label for="email">email</label>
                <input class="field" type="email" name="email" id="email" placeholder="example@gmail.com">
            </div>
            <button type="submit" class="continue">continue</button>
        </form>
        <div class="steps">
            <span>step 1 of 3</span>
            <div class="btns">
                <button class="bullet active"></button>
                <button class="bullet"></button>
                <button class="bullet"></button>
            </div>
        </div>
    `;
    const continueSignup = document.querySelector(".signup-form");
    continueSignup.addEventListener("submit", function(e) {
        e.preventDefault()
        const username = document.querySelector("#name").value.trim();
        const userEmail = document.querySelector("#email").value.trim();
        if (username && userEmail) {
            main.innerHTML = `
            <form class="form check-form" action="index.html">
                <legend><h1>Which topics you are interested in?</h1></legend>
                <div class="form-control">
                    <input class="check-box" type="checkbox" id="software" name="software" value="Software Development">
                    <label for="software">
                        Software Development
                    </label>
                </div>
                <div class="form-control">
                    <input class="check-box" type="checkbox" id="experience" name="experience" value="User Experience">
                    <label for="experience">
                        User Experience
                    </label>
                </div>
                <div class="form-control">
                    <input class="check-box" type="checkbox" id="design" name="design" value="Graphic Design">
                    <label for="design">
                        Graphic Design
                    </label>
                </div>
                <button type="submit" class="continue">continue</button>
            </form>
            <div class="steps">
                <span>step 1 of 3</span>
                <div class="btns">
                    <button class="bullet"></button>
                    <button class="bullet active"></button>
                    <button class="bullet"></button>
                </div>
            </div>
        `;
        const confirmSignup = document.querySelector(".check-form");
        confirmSignup.addEventListener("submit", function(e) {
            e.preventDefault();
            const checkBoxes = document.querySelectorAll("input[type=checkbox]:checked");
            if (checkBoxes.length >= 1) {
                main.innerHTML = `
                <form class="form confirm-form" action="index.html">
                    <legend><h1>summury</h1></legend>
                    <div class="name">
                        <span class="grey">name: </span>
                        <span>${username}</span>
                    </div>
                    <div class="email">
                        <span class="grey">email: </span>
                        <span>${userEmail}</span>
                    </div>
                    <div class="topics">
                        <h3>topics</h3>
                        ${checkBoxes[0] ?
                            `<div class="topic">
                                <div class="dot"></div>
                                <span>${checkBoxes[0].value}</span>
                            </div>` : ''
                        }
                        ${checkBoxes[1] ?
                            `<div class="topic">
                                <div class="dot"></div>
                                <span>${checkBoxes[1].value}</span>
                            </div>` : ''
                        }
                        ${checkBoxes[2] ?
                            `<div class="topic">
                                <div class="dot"></div>
                                <span>${checkBoxes[2].value}</span>
                            </div>` : ''
                        }
                    </div>
                    <button type="submit" class="continue">continue</button>
                </form>
                <div class="steps">
                    <span>step 1 of 3</span>
                    <div class="btns">
                        <button class="bullet"></button>
                        <button class="bullet"></button>
                        <button class="bullet active"></button>
                    </div>
                </div>
            `;
            } else {
                return;
            }

        });
        } else {
            return;
        }
    });
});