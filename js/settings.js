export const registerSettings = function () {
	let modulename = "enhanced-terrain-layer";

	game.settings.register(modulename, 'opacity', {
		name: "EnhancedTerrainLayer.opacity.name",
		hint: "EnhancedTerrainLayer.opacity.hint",
		scope: "world",
		config: true,
		default: 1,
		type: Number,
		range: {
			min: 0,
			max: 1,
			step: 0.1
		},
		onChange: () => {
			canvas.terrain.refresh();
		}
	});
	game.settings.register(modulename, 'showText', {
		name: "EnhancedTerrainLayer.showText.name",
		hint: "EnhancedTerrainLayer.showText.hint",
		scope: "world",
		config: true,
		default: false,
		type: Boolean,
		onChange: () => {
			canvas.terrain.refresh();
		}
	});
	game.settings.register(modulename, 'show-on-drag', {
		name: "EnhancedTerrainLayer.show-on-drag.name",
		hint: "EnhancedTerrainLayer.show-on-drag.hint",
		scope: "world",
		config: true,
		default: true,
		type: Boolean
	});
	game.settings.register(modulename, 'tokens-cause-difficult', {
		name: "EnhancedTerrainLayer.tokens-cause-difficult.name",
		hint: "EnhancedTerrainLayer.tokens-cause-difficult.hint",
		scope: "world",
		config: true,
		default: false,
		type: Boolean
	});
	game.settings.register(modulename, 'use-obstacles', {
		name: "EnhancedTerrainLayer.use-obstacles.name",
		hint: "EnhancedTerrainLayer.use-obstacles.hint",
		scope: "world",
		config: true,
		default: false,
		type: Boolean
	});

	game.settings.register(modulename, 'terrainColor', {
		name: "EnhancedTerrainLayer.terrain-color.name",
		hint: "EnhanedTerrainLayer.terrain-color.hint",
		scope: "world",
		config: true,
		default: "#ffffff",
		type: String
	});

	game.settings.register(modulename, 'showterrain', {
		scope: "world",
		config: false,
		default: false,
		type: Boolean
	});

	game.settings.register(modulename, 'conversion', {
		scope: "world",
		config: false,
		default: false,
		type: Boolean
	});
};