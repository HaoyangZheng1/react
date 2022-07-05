// material-ui
// import { Box, InputLabel, FormControl, MenuItem, TextField, Select, SelectChangeEvent } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import TypeFailureForm from './TypeFailtureForm';
import TypeFailureTable from './TypeFailureTable';

// ==============================|| SAMPLE PAGE ||============================== //

const TypeFailureDefault = () => (
    <MainCard title="Type failure">
        <TypeFailureForm />
        <TypeFailureTable />
    </MainCard>
);

export default TypeFailureDefault;
