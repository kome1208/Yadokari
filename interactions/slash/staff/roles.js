const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('roles')
		.setDescription('Setup reaction roles for the server')
		.addChannelOption(option => option.setName('channel').setDescription('The channel to send the message in'))
		.setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
	async execute(interaction) {
		let channel = interaction.options.getChannel('channel') ?? interaction.channel;
		const [prompts, iphones, ipads, ioses] = [
			['Select your iPhone', 'Select your iPad', 'Select your iOS version'],
			[
				{ label: 'iPhone 5s', value: '1075173438685192214' },
				{ label: 'iPhone 6', value: '1075173421396262972' },
				{ label: 'iPhone 6s', value: '1075173362738929674' },
				{ label: 'iPhone 7', value: '1075173340077096960' },
				{ label: 'iPhone 8', value: '1075173252567158874' },
				{ label: 'iPhone SE (Gen 1)', value: '1075173235768963152' },
				{ label: 'iPhone SE (Gen 2)', value: '1075173215976030339' },
				{ label: 'iPhone SE (Gen 3)', value: '1075173164906192916' },
				{ label: 'iPhone X', value: '1075173142701555723' },
				{ label: 'iPhone XR', value: '1075173122770210816' },
				{ label: 'iPhone XS', value: '1075173052133945484' },
				{ label: 'iPhone 11', value: '1075173004620873779' },
				{ label: 'iPhone 12', value: '1075172921636569088' },
				{ label: 'iPhone 13', value: '1075172893694099487' },
				{ label: 'iPhone 14', value: '1075172398585876581' },
				{ label: 'Mini', value: '1075174549093625967' },
				{ label: 'Plus', value: '1075174575027011624' },
				{ label: 'Pro', value: '1075174594014617661' },
				{ label: 'Max', value: '1075174608141045780' }
			],
			[
				{ label: 'iPad', value: '1075174885439057940' },
				{ label: 'Air', value: '1014998911489933402' },
				{ label: 'Pro', value: '1005213597770731581' },
				{ label: 'Mini', value: '1005213597842018396' },
				{ label: '1st Gen', value: '1075174914094547037' },
				{ label: '2nd Gen', value: '1075175132630355969' },
				{ label: '3rd Gen', value: '1075175160992235631' },
				{ label: '4th Gen', value: '1075175194429243452' },
				{ label: '5th Gen', value: '1075175232882606212' },
				{ label: '6th Gen', value: '1075175252038004867' },
				{ label: '7th Gen', value: '1075175276193005730' },
				{ label: '8th Gen', value: '1075175296166285442' },
				{ label: '9th Gen', value: '1075175314122084533' },
				{ label: '10th Gen', value: '1075175328491778111' }
			],
			[
				{ label: '15.0', value: '1075175670604382238' },
				{ label: '15.0.1', value: '1075175711167488040' },
				{ label: '15.0.2', value: '1075175741752348702' },
				{ label: '15.1', value: '1075175763038441542' },
				{ label: '15.1.1', value: '1075176005058187395' },
				{ label: '15.2', value: '1075176031310315690' },
				{ label: '15.2.1', value: '1075176050016915518' },
				{ label: '15.3', value: '1075176242334154782' },
				{ label: '15.3.1', value: '1075176282867900418' },
				{ label: '15.4', value: '1075176304518909988' },
				{ label: '15.4.1', value: '1075176462614798426' },
				{ label: '15.5', value: '1075176484655870013' },
				{ label: '15.6', value: '1075176518092861531' },
				{ label: '15.6.1', value: '1075176533074907236' },
				{ label: '15.7', value: '1075176571360514123' },
				{ label: '15.7.1', value: '1075176587156262932' },
				{ label: '16.0', value: '1075188757113880636' },
				{ label: '16.0.1', value: '1075188953377931325' },
				{ label: '16.0.2', value: '1075188983866347650' },
				{ label: '16.0.3', value: '1075189007270551653' },
				{ label: '16.1', value: '1075189185213898874' },
				{ label: '16.1.1', value: '1075189200686698597' },
				{ label: '16.1.2', value: '1075189222706794607' }
			]
		];

		channel.send({
			content: prompts[0],
			components: [
				new ActionRowBuilder().addComponents(
					new StringSelectMenuBuilder()
						.setCustomId('iphone')
						.setMinValues(0)
						.setMaxValues(iphones.length)
						.addOptions(
							iphones.map(iphone => {
								return {
									label: iphone.label,
									value: iphone.value
								};
							})
						)
				)
			]
		});

		channel.send({
			content: prompts[1],
			components: [
				new ActionRowBuilder().addComponents(
					new StringSelectMenuBuilder()
						.setCustomId('ipad')
						.setMinValues(0)
						.setMaxValues(ipads.length)
						.addOptions(
							ipads.map(ipad => {
								return {
									label: ipad.label,
									value: ipad.value
								};
							})
						)
				)
			]
		});

		channel.send({
			content: prompts[2],
			components: [
				new ActionRowBuilder().addComponents(
					new StringSelectMenuBuilder()
						.setCustomId('ios')
						.setMinValues(0)
						.setMaxValues(ioses.length)
						.addOptions(
							ioses.map(ios => {
								return {
									label: ios.label,
									value: ios.value
								};
							})
						)
				)
			]
		});

		await interaction.reply({
			content: 'Done setting up reaction roles!',
			ephemeral: true
		});
	}
};
