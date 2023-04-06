const { EmbedBuilder } = require('discord.js');

module.exports = {
	id: 'verify',
	async execute(interaction) {
        await interaction.deferReply({ ephemeral: true }).catch(() => {});
        let member = await interaction.member.fetch({ force: true });
        if (member.roles.cache.has('1079892872742043785')) return interaction.editReply('You are already verified!');
        try {
            await member.roles.add('1079892872742043785');
            await interaction.editReply({ embeds: [
                    new EmbedBuilder()
                        .setTitle('Verified!')
                        .setDescription('Your verification has completed successfully.')
                        .setColor('Green')
                ]
            });
        } catch (e) {
            console.log(e);
            await interaction.editReply('There was an error while trying to update your roles.')
        }
	}
};
