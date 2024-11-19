// ----------------------------------------------------------------------

export default function ListItemButton(theme) {
    return {
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    borderRadius: "8px",
                    fontWeight: 600,
                    minHeight: 10,
                    margin: "2.5px",
                    '&.Mui-selected': {
                        // color: "#ffff",
                        fontWeight: 600,
                    },
                }
            },
        },
    };
}
