class Form{

    constructor(){



    }

    display(){

        var title = createElement('h2');
        title.html("Grip Racer");
        title.position(130,0);
        var input = createInput("Name: ")
        var button = createButton("Let's Dash")
        var Greeting = createElement('h3')
        input.position(130,160);
        button.position(150,200);
        button.mousePressed(function(){

            input.hide()
            button.hide()
            var name = input.value()
            playerCount += 1
            player.update(name)
            player.updateCount(playerCount)
            Greeting.html("Hello Racer "+name);
            Greeting.position(130,160);
        })
    }
}