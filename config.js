// Set this to a secret value to encrypt session cookies
exports.SESSION_SECRET = process.env.SESSION_SECRET;

// Facebook App ID
exports.FACEBOOK_APP_ID = process.env.FACEBOOK_APP_ID;

// Facebook App Secret
exports.FACEBOOK_SECRET = process.env.FACEBOOK_SECRET;

// Put your HTTPS key/certificate file path here
exports.HTTPS_KEY = undefined;
exports.HTTPS_CRT = undefined;

// Port in which the server will listen
exports.HTTP_PORT = process.env.PORT;

// Game URL (this will be prepended to the Facebook callback URL)
exports.GAME_URL = "https://minesweeper-mmo.herokuapp.com/";

// Canvas URL (after authentication, the user will be redirected here)
// If undefined, the user will be redirected to /
exports.CANVAS_URL = undefined;

// Allowed socket.io transports
exports.TRANSPORTS = ["websocket"];

// Initial number of mines on the board
exports.NUM_MINES = 40;

// Path to the client's resources
exports.RESOURCES_PATH = "./static";

// Path to the client's views
exports.VIEWS_PATH = "./views";
