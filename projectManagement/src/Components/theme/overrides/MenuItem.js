import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function MenuItem(theme) {
    return {
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    borderRadius: "6px",
                    paddingLeft: "8px",
                    paddingRight: "8px",
                    margin: "5px"
                },
            },
        },
    };
}
