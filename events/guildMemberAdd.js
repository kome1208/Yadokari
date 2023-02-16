const { EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'guildMemberAdd',
	async execute(member) {
		member
			.createDM(true)
			.then(channel => {
				channel.send('Welcome to the server! Please read the rules and grab your device roles!');
			})
			.catch(console.error);
	}
};
