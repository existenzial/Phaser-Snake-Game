var Menu = {

    preload : function() {
        // Load all the needed resources for the menu.
        game.load.image('Menu', '../assets/images/snakebackgroundblm.png');
    },

    create: function () {

        // Add menu screen.
        // It will act as a button to start the game.
        this.add.button(0, 0, 'Menu', this.startGame, this);

    },

    startGame: function () {

        // Change the state to the actual game.
        this.state.start('Game');

    }

};