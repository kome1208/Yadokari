const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('roles')
		.setDescription('Setup reaction roles for the server')
		.addChannelOption(option => option.setName('channel').setDescription('The channel to send the message in'))
		.setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
	async execute(interaction) {
		let channel = interaction.options.getChannel('channel') ?? interaction.channel;
		const [prompts, iphones, ipads, ioses, languages] = [
			['Select your iPhone', 'Select your iPad', 'Select your iOS version', 'Select your language'],
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
				{ label: '15.0-15.4.1 (mdc)', value: '1149315171085455390' },
				{ label: '15.5-15.7.1 (mdc)', value: '1149315396336373851' },
				{ label: '16.0-16.1.2 (mdc)', value: '1149315474316861460' },
				{ label: '16.2-16.5 16.6b1 (kfd)', value: '1149315525021814864' },
			],
			[
				{ label: 'English', value: '1074651331450638377' },
				{ label: '中文', value: '1074653366275297280' },
				{ label: '日本語', value: '1074653421329719347' }
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

		channel.send({
			content: prompts[3],
			components: [
				new ActionRowBuilder().addComponents(
					new StringSelectMenuBuilder()
						.setCustomId('language')
						.setMinValues(0)
						.setMaxValues(languages.length)
						.addOptions(
							languages.map(language => {
								return {
									label: language.label,
									value: language.value
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
