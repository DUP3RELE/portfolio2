import styled from "styled-components/native";
import LinearGradient from "react-native-linear-gradient";

export const GradientBackground = styled(LinearGradient).attrs({
	colors: ["#3498db", "#2ecc71"],
})`
	flex: 1;
	justify-content: center;
	align-items: center;
`;

export const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	background: linear-gradient(45deg, #3498db, #2ecc71);
`;

export const Text = styled.Text`
	font-size: 20px;
	color: white;
`;
