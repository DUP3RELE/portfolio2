const { getDefaultConfig } = require("metro-config");

module.exports = (async () => {
	const {
		resolver: { sourceExts, assetExts },
	} = await getDefaultConfig();
	return {
		transformer: {
			babelTransformerPath: require.resolve("react-native-sass-transformer"),
		},
		resolver: {
			assetExts: assetExts.filter((ext: any) => ext !== "scss"),
			sourceExts: [...sourceExts, "scss"],
		},
	};
})();
