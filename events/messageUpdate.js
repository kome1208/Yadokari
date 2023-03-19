const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'messageUpdate',
    async execute (oldMessage, newMessage) {
        if (oldMessage.author.bot) return;
        let channel = await newMessage.guild.channels.fetch('1075283803171455037');
        let embed = new EmbedBuilder()
        .setAuthor({ name: newMessage.author.username, iconURL: newMessage.author.avatarURL() })
        .setColor('Random');
        if (oldMessage.content !== newMessage.content) {
            embed.setTitle('Message Edited')
            .addFields(
                { name: 'Before', value: oldMessage.content || 'No Content Provided', inline: true },
                { name: 'After', value: newMessage.content, inline: true },
                { name: 'Jump to message', value: `[Click here](${newMessage.url})`, inline: false }
            );
            channel.send({ embeds: [embed] });
        } else if (oldMessage.attachments.size > newMessage.attachments.size) {
            try {
                let removedAttachment = oldMessage.attachments.filter(attachment => !newMessage.attachments.has(attachment.id)).first();
                embed.setTitle('File Removed')
                .addFields(
                    { name: 'File', value: `[${removedAttachment.name}](${removedAttachment.url})`, inline: true },
                    { name: 'Description', value: removedAttachment.description || 'No Description Provided', inline: true },
                    { name: 'Jump to message', value: `[Click here](${newMessage.url})`, inline: false }
                );
                channel.send({ embeds: [embed] });
            } catch (e) {
                embed.setTitle('Attachment Name caused error');
                channel.send({ embeds: [embed] });
            }
        }
    }
}
