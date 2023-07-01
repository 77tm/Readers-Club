window.onload=function(){
    const quote = document.getElementById('quote');         //quote generator
    const quoteButton = document.getElementById('quoteButton');
    const quotesArray = ["“So many books, so little time.”",
                        "“A room without books is like a body without a soul.”",
                        "“The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.”",
                        "“Good friends, good books, and a sleepy conscience: this is the ideal life.”",
                        "“Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.”",
                        "“Outside of a dog, a book is man's best friend. Inside of a dog it's too dark to read.”",
                        "“If you only read the books that everyone else is reading, you can only think what everyone else is thinking.”",
                        "“I have always imagined that Paradise will be a kind of library.”",
                        "“Never trust anyone who has not brought a book with them.”",
                        "“You can never get a cup of tea large enough or a book long enough to suit me.”",
                        "“If one cannot enjoy reading a book over and over again, there is no use in reading it at all.”"
    ];

    const generateNewQuote = () => {
        const randomNumber = Math.floor(Math.random() * 10 + 1);
        quote.textContent = quotesArray[randomNumber];
    }

    quoteButton.addEventListener('click', generateNewQuote);

// ...              ...             ...             ...

    document.getElementById("form-button").addEventListener('click', (e) => {    //form validation
        var errorMsg = new Array();

        let fName = document.getElementById('first-name');
        let lName = document.getElementById('last-name');
        let letters = /[a-z]/gi;
        let numbers = /[0-9]/g;
        let email = document.getElementById('email');
        let validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let age = document.getElementById('age');
        let length = document.getElementById('length');
        let validData = true;
    
        if(!fName.value || fName.value === " "){
            errorMsg.push("Please enter first name");
            validData = false;
        }else if(!fName.value.match(letters) || fName.value.match(numbers)) {
            errorMsg.push("Your first name should consist of letters");
            validData = false;
        }
    
        if(!lName.value || lName.value === " "){
            errorMsg.push("Please enter last name");
            validData = false;
        }else if (!lName.value.match(letters) || lName.value.match(numbers)){
            errorMsg.push("Your last name should consist of letters");
            validData = false;
        }
        
        if(!email.value || email.value === " " || !email.value.match(validEmail)){
            errorMsg.push("Please enter your email address");
            validData = false;
        }
        
        if(!age.value || age.value === " "){
            errorMsg.push("Please enter your age");
            validData = false;
        }else if(!age.value.match(numbers) || age.value.match(letters)){
            errorMsg.push("Age should consist of digits");
            validData = false;
        }else if(age.value < 1 || age.value > 150){
            errorMsg.push("Age should be 1 - 150");
            validData = false
        }

        if(!length.value || length.value === " "){
            errorMsg.push("Please enter your membership length");
            validData = false;
        }else if(!length.value.match(numbers) || length.value.match(letters)){
            errorMsg.push("Membership length should consist of digits");
            validData = false;
        }else if(length.value < 1 || length.value > 12){
            errorMsg.push("Membership length should be 1 - 12 months");
            validData = false
        }

        if(validData == false){
            e.preventDefault();
        }
    
        var messageHtml = "";
        
        errorMsg.forEach(function (message) {
            messageHtml += "<li>" + message + "</li>";
        });
        
        document.getElementById("validation-message").innerHTML = messageHtml;
    });

    // ...  ... ... ... ...

    $("#list-heading").click(function() {       //jquery to hide/show 7 reasons
        $("#reason-list").slideToggle();
    })

}