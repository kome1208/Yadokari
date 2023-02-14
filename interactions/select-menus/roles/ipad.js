const { EmbedBuilder } = require('discord.js');

module.exports = {
	id: 'ipad',
	async execute(interaction) {
		await interaction.deferReply({ ephemeral: true }).catch(() => {});

		let [add, remove, description] = [[], [], ``];
		let embed = new EmbedBuilder().setTitle('Roles Updated');
		let roles = interaction.values.filter(c => interaction.guild.roles.cache.find(r => r.id === c)).map(c => interaction.guild.roles.cache.find(r => r.id === c));

		if (!roles.length) return interaction.editReply(`Unselecting the role doesn't remove it. Please select the role again to remove!`).catch(() => {});
		for (const r of roles) {
			if (interaction.member.roles.cache.has(r.id)) remove.push(r);
			else add.push(r);
		}

		let r = await interaction.member
			.edit({
				roles: [...interaction.member.roles.cache.keys(), ...add.map(c => c.id)].filter(c => !remove.find(r => r.id === c))
			})
			.catch(e => e);

		if (r instanceof Error) {
			console.log(r);
			return interaction.editReply(`There was an error while trying to update your roles.`).catch(() => {});
		}
		if (add.length) description += `Added ${add.map(c => c.name).join(', ')}`;
		if (remove.length) description += `Removed ${remove.map(c => c.name).join(', ')}`;

		return interaction.editReply({ embeds: [embed.setDescription(description)] }).catch(() => {});
	}
};
