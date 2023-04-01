const { EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'guildBanAdd',
	async execute(ban) {
		let channel = await ban.guild.channels.fetch('1075283803171455037');
		channel.send({ embeds: [
			new EmbedBuilder()
			.setTitle('Member Banned')
			.setThumbnail(ban.user.avatarURL())
			.addFields({ name: 'User', value: ban.user.tag, inline: false }, { name: 'Reason', value: ban.reason ?? 'No Reason Provided', inline: false })
			.setColor('Red')
			.setTimestamp()
			] 
		});
	}
};
