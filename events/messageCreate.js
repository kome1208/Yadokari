const { EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'messageCreate',
	async execute(message) {
		if (message.author.bot) return;
		if (message.content.includes('discord.com/channels')) {
			try {
				let embed = new EmbedBuilder();
				let messageID = message.content.split('/').pop();
				let msg = await message.channel.messages.fetch(messageID);

				embed.setAuthor({ name: msg.author.username, iconURL: msg.author.avatarURL() });
				msg.content ? embed.setDescription(msg.content) : null;
				msg.attachments.size > 0 ? embed.setImage(msg.attachments.first().url) : null;
				embed.addFields({ name: 'Jump to message', value: `[Click here](https://discord.com/channels/${msg.guild.id}/${msg.channel.id}/${msg.id})`, inline: true });
				embed.setColor('Random');
				embed.setTimestamp();

				message.channel.send({
					allowedMentions: { users: [] },
					embeds: [embed]
				});

				message.delete();
			} catch (error) {}
		}
	}
};
