let coin = {
    state: 0,
    flip: function () {
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
        this.state = Math.trunc(Math.random() * 2)
    },
    toString: function () {
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
        if (this.state === 1) {
            return "Heads"
        }
        else {
            return "Tails"
        }
    },
    toHTML: function () {
        let image = document.createElement('img');
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        if (this.state === 1) {
            // set image to heads
            image.src = "./images/heads.jpg"
        } else {
            // set image to tails
            image.src = "./images/tails.jpg"
        }

        image.height = 100
        image.width = 100

        return image;
    }
};

const display20Flips = (coin) => {
    let i = 0
    for(i = 0; i < 20; i++) {
        coin.flip()
        document.body.append(`${coin.toString()} `)
    }
}

display20Flips(coin)

const display20Images = (coin) => {
    let i = 0
    for(i = 0; i < 20; i++) {
        coin.flip()
        let image = coin.toHTML()
        document.body.append(image)
    }
}

display20Images(coin)
