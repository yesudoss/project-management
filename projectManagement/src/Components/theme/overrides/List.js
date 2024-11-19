import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function List(theme) {
    return {
        MuiList: {
            styleOverrides: {
                root: {
                    padding: "0px 10px 0px 10px ",
                    '&& .Mui-selected, && .Mui-selected:hover': {
                        '&, & .MuiListItemIcon-root': {
                            color: theme?.palette?.primary?.main,
                        },
                    },
                },
            },
        },
    };
}
