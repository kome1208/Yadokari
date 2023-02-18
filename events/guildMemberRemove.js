const { EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'guildMemberRemove',
	async execute(member) {
		let channel = await member.guild.channels.fetch('1075283803171455037');
		channel.send(new EmbedBuilder().setTitle('Member Kicked/Left').setThumbnail(member.user.avatarURL()).addFields({ name: 'User', value: member.user.tag, inline: false }).setColor('RED').setTimestamp());
	}
};
