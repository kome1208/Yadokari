const { EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'messageCreate',
	async execute(message) {
		if (message.author.bot) return;
		const MSGLINK_REGEX = /http(?:s)?:\/\/(?:.*)?discord\.com\/channels\/(?<guildId>\d{17,})\/(?<channelId>\d{17,})\/(?<messageId>\d{17,})/g
		let msg_result;
		while ((msg_result = MSGLINK_REGEX.exec(message.content)) !== null) {
			try {
				const { guildId, channelId, messageId } = msg_result.groups;
				if (guildId !== message.guild.id) return;
				const embed = new EmbedBuilder();
				const channel = await message.guild.channels.fetch(channelId);
				const msg = await channel.messages.fetch(messageId);
				const images = msg.attachments.filter(attachment => attachment.contentType.startsWith('image'));
				embed.setAuthor({ name: msg.author.username, iconURL: msg.author.displayAvatarURL() })
				.setDescription(msg.content ? msg.content : null)
				.setImage(images.size > 0 ? images.first().url : null)
				.addFields({ name: 'Jump to message', value: `[Click here](https://discord.com/channels/${guildId}/${channelId}/${messageId})`, inline: true })
				.setColor('Random')
				.setTimestamp();
				await message.reply({
					allowedMentions: { users: [] },
					embeds: [embed]
				});
			} catch (e) {}
		}
	}
};
