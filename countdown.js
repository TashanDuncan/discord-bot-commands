module.exports = {
  name: 'countdown',
  description: 'this is a countdown command!',
  execute(message, args) {
    message.channel.send('1!');
  },
};
