const coin = {
    state: 0,
    flip: function() {
        return (this.state = Math.round(Math.random()));
    },
    toString: function() {
        let flipsDisplay = document.createElement('div')
        if (this.state === 0){
            flipsDisplay.innerHTML = "heads"
            return document.body.appendChild(flipsDisplay)
        } else {
            flipsDisplay.innerHTML = "tails"
            return document.body.appendChild(flipsDisplay) 
        }
    },
    toHTML: function() {
        const image = document.createElement('img');
        if (this.state === 0) {
            image.src = "/img/Front.png"
        } else {
            image.src = "/img/Back.png"
        }
        document.body.appendChild(image);
        return image;
    }
};
console.log(coin.toString());

function display20Flips() {
    const results = [];
    for (let i = 0; i <= 20; i++) {
        coin.flip()
        results.push(this.state)
        coin.toString()
    }
    return results
}
display20Flips()

function display20Images() {
    const results = [];
    for (let i = 0; i <= 20; i++) {
        coin.flip()
        results.push(this.state)
        coin.toHTML()
    }
    return results
}
display20Images()