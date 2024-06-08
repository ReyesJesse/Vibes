let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");

const url = "https://api.quotable.io/random";

let showLoading = () => {
    quote.innerText = "Loading...";
    author.innerText = "";
};

let getQuote = () => {
    showLoading();

    fetch(url)
        .then((data) => data.json())
        .then((item) => {
            quote.innerText = item.content;
            author.innerText = item.author;
        })
        .catch((error) => {
            console.error("Error fetching quote:", error);
            quote.innerText = "Error fetching quote. Please try again.";
        });
};

window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);







jQuery(document).ready(function() {
    // loading message
    function showLoading() {
        jQuery('#quoteTwo').text('Loading...');
    }

    // fact from the API
    function getNewFact() {
        // Show loading message before 
        showLoading();

        jQuery.ajax({
            method: 'GET',
            url: 'https://api.api-ninjas.com/v1/facts?limit=1',
            headers: { 'X-Api-Key': 'hCKl5HXAGuvG9sYm0MS6/A==NgAxl1pWRlpYfEre'},
            contentType: 'application/json',
            success: function(result) {
                // Extract the fact property and update the content of the quoteTwo
                jQuery('#quoteTwo').text(result[0].fact);
            },
            error: function ajaxError(jqXHR) {
                console.error('Error: ', jqXHR.responseText);
                // Display an error message
                jQuery('#quoteTwo').text('Error occurred. Please try again.');
            }
        });
    }

    jQuery('#btnTwo').click(function() {
        getNewFact();
    });

    getNewFact();
});





jQuery(document).ready(function() {
    // loading message
    function showLoading() {
        jQuery('#quoteThree').text('Loading...');
    }

    // joke from the API
    function getNewJoke(limit) {
        showLoading();

        jQuery.ajax({
            method: 'GET',
            url: 'https://api.api-ninjas.com/v1/jokes?limit=' + limit,
            headers: { 'X-Api-Key': 'hCKl5HXAGuvG9sYm0MS6/A==NgAxl1pWRlpYfEre' },
            success: function(result) {
                // Extract the joke property and update the content of the quoteThree
                jQuery('#quoteThree').text(result[0].joke);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.error('Error: ', textStatus, errorThrown);
                // Display an error message
                jQuery('#quoteThree').text('Error occurred. Please try again.');
            }
        });
    }

    jQuery('#btnThree').click(function() {
        getNewJoke(1); 
    });

    getNewJoke(1); 
});

jQuery(document).ready(function() {
    function showLoading() {
        jQuery('#quoteFour').text('Loading...');
    }

    function getNewBucketList(limit) {
        showLoading();

        $.ajax({
            method: 'GET',
            url: 'https://api.api-ninjas.com/v1/bucketlist',
            headers: { 'X-Api-Key': 'hCKl5HXAGuvG9sYm0MS6/A==NgAxl1pWRlpYfEre' },
            contentType: 'application/json',
            success: function(result) {
                console.log(result);

                if (typeof result === 'object' && result.item !== undefined) {
                    jQuery('#quoteFour').text('Bucket List: ' + result.item);
                } else {
                    console.error('Error: Unexpected response format from the API.');
                    jQuery('#quoteFour').text('Failed to retrieve bucket list. Please try again later.');
                }
            },
            error: function ajaxError(jqXHR) {
                console.error('Error: ', jqXHR.responseText);
                jQuery('#quoteFour').text('Error occurred while fetching the bucket list. Please try again later.');
            }
        });
    }

    jQuery('#btnFour').click(function() {
        getNewBucketList(1); 
    });

    getNewBucketList(1); 
});