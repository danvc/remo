import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { withStyles } from "@material-ui/core/styles";

/**
 * Renders a styled checkbox for RemoAI
 */
const GreenCheckbox = withStyles({
    root: {
        color: 'white',
        '&$checked': {
            color: '#3ed77d',
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default GreenCheckbox;