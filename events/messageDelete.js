const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'messageDelete',
    async execute (message) {
        if (message.author.bot) return;
        let channel = await message.guild.channels.fetch('1134748822514434160');
        let embed = new EmbedBuilder()
        .setAuthor({ name: message.author.username, iconURL: message.author.avatarURL() })
        .setTitle('Message Deleted')
        .addFields(
            { name: 'Content', value: message.content || 'No Content Provided', inline: true },
            { name: 'Files', value: !message.attachments.first() ? 'No File Provided' : message.attachments.map(attachment => `[${attachment.name}](${attachment.url})`).join('\n'), inline: true },
            { name: 'Message Link', value: message.url, inline: false }
        )
        .setColor('Random');
        channel.send({ embeds: [embed] });
    }
}