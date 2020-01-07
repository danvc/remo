/**
 * We define few basic colors to be distributed through the app components
 */
const colors = {
    remoColor: '#3ed77d',
    primary: '#2B2C42',
    secondary: '#212130',
    icon : {
        color: 'white'
    },
    chips: {
        color: '#a2a3b3',
        borderColor: '#6f7188',
        '& .MuiChip-deleteIconSmall' : {
            color: '#6f7188'
        }
    },
    labels: {
        height: 24,
        color: "white",
        fontSize: '0.75rem',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: '400',
        letterSpacing: '0.08333em',
        textTransform: 'uppercase'
    },
    textField: {
        backgroundColor: "#3b3c5a",
        borderRadius: 4,
        "& .MuiFormControl-marginNormal": {
            marginTop: "8 important!",
        },
        "& .MuiInputBase-input": {
            color: "white",
        }
    },
    textFieldIcon: {
        color: "#c4c4c4"
    },
    listItem: {
        color: 'white',
        height: 35,
    },
    listItemIcon: {
        minWidth: 35,
        color: 'white'
    },
    listItemText: {
        '& .MuiListItemText-primary' : {
            fontWeight: 300
        }
    },
    checkBox:{
        color: 'white',
        '& .Mui-checked': {
            color: 'green'
        }
    },
    divider: {
        backgroundColor: '#3a3c5a'
    },
    badge: {
        backgroundColor: '#3ed77d',
        color: '#2a2f43',
        right: 9
    }
}

export default colors;