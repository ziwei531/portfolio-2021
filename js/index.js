function chgQuote() {
    let randomQuotes = ['My career goal is to one day become a data analyst!','Data, data, data! I can\'t build bricks without data!', 'I am currently a Computer Science student in Taylor\'s university.']
    let random = Math.floor(Math.random() * randomQuotes.length)
    document.querySelector('.description').innerHTML = randomQuotes[random]
    
}


setInterval(() => {
    chgQuote();
}, 5000);



