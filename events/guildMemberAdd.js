module.exports = {
	name: 'guildMemberAdd',
	async execute(member) {
		let channel = await member.guild.channels.fetch('1074630787707707442');
		channel.send({
			content: `<@${member.id}> Welcome to the server! Read the <#1074650295549820958> and select your device in the <#1074649418009157682> channel!\nipa downloads and conversations require verification!`
		});
	}
};
