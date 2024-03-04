import { StyleSheet } from "react-native";
import { theme } from "@/theme";


export const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 24,
    },

    title: {
        fontSize: theme.fonts.size.heading.xl,
        fontFamily: theme.fonts.family.bold,
        lineHeight: 44,
        marginTop: 42,
    },

    subtitle: {
       fontFamily: theme.fonts.family.regular,
    },
})