// ----------------------------------------------------------------------

import { grey } from "@mui/material/colors";

export default function ListItemText(theme) {
    return {
        MuiListItemText: {
            styleOverrides: {
                root: {
                    '& .MuiListItemText-primary': {
                        fontWeight: 600,
                        fontSize: "0.8rem",
                        // color: grey[600]
                    },
                },
            },
        },
    };
}
