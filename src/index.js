import chalk from 'chalk';

/**
 * Logs a message using a colored prefix.
 * @param {String} prefix What should be appended to the start of the message.
 * @param {String} color The color of the prefix.
 * @param {String} message The message to be logged after the prefix;
 */
export function log(prefix, color, message) {
  console.log(`${chalk[color](prefix)} ${message}`);
}

/**
 * Logs a message with a blue [SERVER] prefix.
 * @param {String} message The message to be logged.
 */
export function server(message) {
  log('[SERVER]', 'blue', message);
}
/**
 * Logs a message with a green [GAME] prefix.
 * @param {String} message The message to be logged.
 */
export function game(message) {
  log('[GAME]', 'green', message);
}
/**
 * Logs a message with a red [ERROR] prefix.
 * @param {String} message The message to be logged.
 */
export function error(message) {
  log('[ERROR]', 'red', message);
}
/**
 * Logs a message with a yellow [WARN] prefix.
 * @param {String} message The message to be logged.
 */
export function warn(message) {
  log('[WARNING]', 'yellow', message);
}
/**
 * Logs a message with a magenta [DEBUG] prefix.
 * @param {String} message The message to be logged.
 */
export function debug(message) {
  log('[DEBUG]', 'magenta', message);
}
