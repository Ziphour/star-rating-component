
//  src="src/script.js"
// write your JavaScript here
let starRatings = [...document.querySelectorAll('.card__star')]


starRatings.forEach(element => {

    element.addEventListener('click', e => {

        // need to learn how to grab whole element at once without all this change //
        let className = e.target.className;
        let clickedElement = document.getElementsByClassName(className)
        clickedElement = clickedElement[0]
        let targetIndexforsplice = starRatings.indexOf(clickedElement)
        // Grabs class name of e through click, moves it into an array, takes it out and finds index within 
        // Star ratings


        let goldStars = starRatings.slice(0, targetIndexforsplice + 1)
        let greyStars = starRatings.slice(targetIndexforsplice + 1)
        // Finds stars after clicked star and moves them into new array, the clicked and previous ones are
        // also stored in different new array without changing old one,
        // by using +1 it cuts off at the targeted index at gold as in slice for the final term it cuts off one before
        // and for the first argument it starts at it- not before or after so the grey is applied to the first argument, 
        // therefore we need to put plus one to make sure the gold stars are within a bracket and grey are after it as gold cuts off and grey starts
        
        // Need more understanding of slice and shi //

        goldStars.forEach(IndividualStars => {
            IndividualStars.src = 'src/star-gold.png'
            // repeats function for each element in array before for each, changing png
        });

        greyStars.forEach(IndividualStars => {
            IndividualStars.src = 'src/star-grey.png'
        });

        let ratingFeedback = document.querySelector('.card__textreply')
        // Takes the div that holds the text, then uses a switch case to change it based on the index of the 
        // star that is clicked, each case is equal to the star/indexed number of the star.
        switch (targetIndexforsplice) {

            case 0:
                ratingFeedback.innerText = 'We’re sorry to hear that you had a bad experience. We would like to learn more about what happened and how we can make things right.'
                break;

            case 1:
                ratingFeedback.innerText = 'We apologize for the inconvenience you experienced. We appreciate your feedback and would like to work with you to address any issues.'
                break;


            case 2:
                ratingFeedback.innerText = "Thank you for your feedback. We're sorry to hear that your experience wasn't perfect. We would love to hear more about your concerns to see how we can improve."
                break;

            case 3:
                ratingFeedback.innerText = "Thank you for your positive feedback! We're glad to know that you had a great experience and we appreciate your support."
                break;

            case 4:
                ratingFeedback.innerText = "Excellent! We're thrilled to hear you had such a positive experience. Thank you for choosing our platform"
                break;


        }
        // used a switch statement as it deals with multiple switches based on clicked item quickly




    })

});

