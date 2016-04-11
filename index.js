module.exports = function () {
    const FRONT_COLOR = {
        BLACK: '\x1b[30m',
        RED: '\x1b[31m',
        GREEN: '\x1b[32m',
        YELLOW: '\x1b[33m',
        BLUE: '\x1b[34m',
        MAGENTA: '\x1b[35m',
        CYAN: '\x1b[36m',
        WHITE: '\x1b[37m'
    };
    const CLEAR_COLOR = '\x1b[0m';

    if (arguments.length === 1) {
        return arguments[0];
    } else if (arguments.length === 2 && typeof arguments[1] === 'string') {
        return FRONT_COLOR[arguments[1].toUpperCase()] + arguments[0] + CLEAR_COLOR;
    }
};
