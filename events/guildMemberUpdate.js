const { EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'guildMemberUpdate',
	async execute(oldState, newState) {
        let auditLog = await newState.guild.fetchAuditLogs({limit:1});
		let entry = auditLog.entries.first();
		if (entry.changes[0].key === "communication_disabled_until") {
			let channel = await newState.guild.channels.fetch('1075283803171455037');
			if (entry.changes[0].new) {
				channel.send({ embeds: [
					new EmbedBuilder()
					.setTitle('Member Muted')
					.setThumbnail(entry.target.avatarURL())
					.addFields(
						{ name: 'User', value: entry.target.tag, inline: false },
						{ name: 'Reason', value: entry.reason ?? 'No Reason Provided', inline: false },
						{ name: 'Duration', value: `<t:${Math.floor(new Date(entry.changes[0].new) / 1000)}:F>`, inline: false}
					)
					.setColor('Red')
					.setTimestamp()
					]
				});
			} else if (entry.changes[0].old && !entry.changes[0].new) {
				channel.send({ embeds: [
					new EmbedBuilder()
					.setTitle('Member Unmuted')
					.setThumbnail(entry.target.avatarURL())
					.addFields(
						{ name: 'User', value: entry.target.tag, inline: false },
						{ name: 'Reason', value: entry.reason ?? 'No Reason Provided', inline: false }
					)
					.setColor('Green')
					.setTimestamp()
					]
				});
			}
		}
	}
};
