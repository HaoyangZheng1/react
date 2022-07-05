import * as React from 'react';

// material-ui
import { Box, MenuItem, TextField, Button } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

const handleSearchOnClicked = () => {
    alert('saerch clicked');
};

// const handleResetOnClicked = () => {
//     alert('reset clicked');
// };

const appReferences = [
    {
        value: '#12548793',
        label: '#12548793'
    },
    {
        value: '#12548794',
        label: '#12548794'
    },
    {
        value: '#12548795',
        label: '#12548795'
    },
    {
        value: '#12548796',
        label: '#12548796'
    }
];

const failureReasons = [
    {
        value: 'Bad Internet Connection',
        label: 'Bad Internet Connection'
    },
    {
        value: 'Inappropriate Opertion',
        label: 'Inappropriate Opertion'
    },
    {
        value: 'Server Crush',
        label: 'Server Crush'
    },
    {
        value: 'Other',
        label: 'Other'
    }
];

const typeCalls = [
    {
        value: 'income',
        label: 'income'
    },
    {
        value: 'outcome',
        label: 'outcome'
    }
];

export default function TypeFailureForm() {
    const [appReference, setAppReference] = React.useState('');
    const [failureReason, setFailureReason] = React.useState('');
    const [typeCall, setTypeCalls] = React.useState('');
    const [dateTimeTo, setDateTimeTo] = React.useState(new Date());
    const [dateTimeFrom, setDateTimeFrom] = React.useState(new Date());

    const handleAppReferenceChange = (event) => {
        setAppReference(event.target.value);
    };
    const handleFailureReasonChange = (event) => {
        setFailureReason(event.target.value);
    };
    const handleTypeCallChange = (event) => {
        setTypeCalls(event.target.value);
    };
    const handledateTimeToChange = (newValue) => {
        setDateTimeTo(newValue);
    };
    const handledateTimeFromChange = (newValue) => {
        setDateTimeFrom(newValue);
    };

    return (
        <Box
            component="form"
            sx={{
                '& #tf-search': { m: 1, width: '15ch' },
                '& #tf-reset': { m: 1, width: '15ch' },
                '& .MuiTextField-root': { m: 1, width: '25ch' }
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    id="tf-app-reference"
                    select
                    label="App reference"
                    value={appReference}
                    onChange={handleAppReferenceChange}
                    helperText="Please select your app reference"
                >
                    {appReferences.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                        label="From"
                        value={dateTimeFrom}
                        onChange={handledateTimeFromChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                    <DateTimePicker
                        label="To"
                        value={dateTimeTo}
                        onChange={handledateTimeToChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </div>
            <div>
                <TextField id="tf-client-reference" label="Client reference" variant="outlined" />
                <TextField id="tf-family-group-reference" label="Family group reference" variant="outlined" />
                <TextField
                    id="tf-failure-reason"
                    select
                    label="Failure reasone"
                    value={failureReason}
                    onChange={handleFailureReasonChange}
                    helperText="Please select your failure reasone"
                >
                    {failureReasons.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="tf-type-call"
                    select
                    label="Type call"
                    value={typeCall}
                    onChange={handleTypeCallChange}
                    helperText="Please select your type call"
                >
                    {typeCalls.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <Button id="tf-search" variant="contained" size="large" onClick={handleSearchOnClicked}>
                    Search
                </Button>
                {/* <Button id="tf-reset" variant="contained" size="large" onClick={handleResetOnClicked}>
                    Reset
                </Button> */}
            </div>
        </Box>
    );
}
