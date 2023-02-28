const { SlashCommandBuilder, PermissionFlagsBits, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('verify')
        .setDescription('Setup member verification')
        .addChannelOption(option => option.setName('channel').setDescription('The channel to send the message in'))
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    async execute(interaction) {
        let channel = interaction.options.getChannel('channel') ?? interaction.channel;
        
        channel.send({
            content: 'After reading the rules, please click the Verify button below.',
            components: [
                new ActionRowBuilder().addComponents(
                    new ButtonBuilder()
                        .setCustomId('verify')
                        .setLabel('Verify')
                        .setStyle(ButtonStyle.Primary)
                )
            ]
        });

        await interaction.reply({
			content: 'Done setting up member verification!',
			ephemeral: true
		});
    }
}