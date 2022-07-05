import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Switch from '@mui/material/Switch';
import { visuallyHidden } from '@mui/utils';

function createData(batchDate, appReference, clientReference, account, failureReason, typeCall) {
    return { batchDate, appReference, clientReference, account, failureReason, typeCall };
}

const rows = [
    createData('01/06/2022 12:30 am', '#12548793', 100, '4017 **** **** ****', 'Bad Internet Connection', 'income'),
    createData('01/17/2022 11:12 am', '#12548794', 200, '4017 **** **** ****', 'Inappropriate Opertion', 'outcome'),
    createData('01/27/2022 08:33 am', '#12548795', 300, '4017 **** **** ****', 'Server Crush', 'outcome'),
    createData('06/06/2022 05:47 pm', '#12548796', 400, '4017 **** **** ****', 'Other', 'income'),
    createData('07/02/2022 10:06 am', '#12548796', 500, '4017 **** **** ****', 'Inappropriate Opertion', 'outcome'),
    createData('01/06/2022 12:30 am', '#12548793', 100, '4017 **** **** ****', 'Bad Internet Connection', 'income'),
    createData('01/17/2022 11:12 am', '#12548794', 200, '4017 **** **** ****', 'Inappropriate Opertion', 'outcome'),
    createData('01/27/2022 08:33 am', '#12548795', 300, '4017 **** **** ****', 'Server Crush', 'outcome'),
    createData('06/06/2022 05:47 pm', '#12548796', 400, '4017 **** **** ****', 'Other', 'income'),
    createData('07/02/2022 10:06 am', '#12548796', 500, '4017 **** **** ****', 'Inappropriate Opertion', 'outcome'),
    createData('01/06/2022 12:30 am', '#12548793', 100, '4017 **** **** ****', 'Bad Internet Connection', 'income'),
    createData('01/17/2022 11:12 am', '#12548794', 200, '4017 **** **** ****', 'Inappropriate Opertion', 'outcome'),
    createData('01/27/2022 08:33 am', '#12548795', 300, '4017 **** **** ****', 'Server Crush', 'outcome'),
    createData('06/06/2022 05:47 pm', '#12548796', 400, '4017 **** **** ****', 'Other', 'income'),
    createData('07/02/2022 10:06 am', '#12548796', 500, '4017 **** **** ****', 'Inappropriate Opertion', 'outcome'),
    createData('01/06/2022 12:30 am', '#12548793', 100, '4017 **** **** ****', 'Bad Internet Connection', 'income'),
    createData('01/17/2022 11:12 am', '#12548794', 200, '4017 **** **** ****', 'Inappropriate Opertion', 'outcome'),
    createData('01/27/2022 08:33 am', '#12548795', 300, '4017 **** **** ****', 'Server Crush', 'outcome'),
    createData('06/06/2022 05:47 pm', '#12548796', 400, '4017 **** **** ****', 'Other', 'income'),
    createData('07/02/2022 10:06 am', '#12548796', 500, '4017 **** **** ****', 'Inappropriate Opertion', 'outcome'),
    createData('01/06/2022 12:30 am', '#12548793', 100, '4017 **** **** ****', 'Bad Internet Connection', 'income'),
    createData('01/17/2022 11:12 am', '#12548794', 200, '4017 **** **** ****', 'Inappropriate Opertion', 'outcome'),
    createData('01/27/2022 08:33 am', '#12548795', 300, '4017 **** **** ****', 'Server Crush', 'outcome'),
    createData('06/06/2022 05:47 pm', '#12548796', 400, '4017 **** **** ****', 'Other', 'income'),
    createData('07/02/2022 10:06 am', '#12548796', 500, '4017 **** **** ****', 'Inappropriate Opertion', 'outcome'),
    createData('01/06/2022 12:30 am', '#12548793', 100, '4017 **** **** ****', 'Bad Internet Connection', 'income'),
    createData('01/17/2022 11:12 am', '#12548794', 200, '4017 **** **** ****', 'Inappropriate Opertion', 'outcome'),
    createData('01/27/2022 08:33 am', '#12548795', 300, '4017 **** **** ****', 'Server Crush', 'outcome'),
    createData('06/06/2022 05:47 pm', '#12548796', 400, '4017 **** **** ****', 'Other', 'income'),
    createData('07/02/2022 10:06 am', '#12548796', 500, '4017 **** **** ****', 'Inappropriate Opertion', 'outcome'),
    createData('01/06/2022 12:30 am', '#12548793', 100, '4017 **** **** ****', 'Bad Internet Connection', 'income'),
    createData('01/17/2022 11:12 am', '#12548794', 200, '4017 **** **** ****', 'Inappropriate Opertion', 'outcome'),
    createData('01/27/2022 08:33 am', '#12548795', 300, '4017 **** **** ****', 'Server Crush', 'outcome'),
    createData('06/06/2022 05:47 pm', '#12548796', 400, '4017 **** **** ****', 'Other', 'income'),
    createData('07/02/2022 10:06 am', '#12548796', 500, '4017 **** **** ****', 'Inappropriate Opertion', 'outcome'),
    createData('01/06/2022 12:30 am', '#12548793', 100, '4017 **** **** ****', 'Bad Internet Connection', 'income'),
    createData('01/17/2022 11:12 am', '#12548794', 200, '4017 **** **** ****', 'Inappropriate Opertion', 'outcome'),
    createData('01/27/2022 08:33 am', '#12548795', 300, '4017 **** **** ****', 'Server Crush', 'outcome'),
    createData('06/06/2022 05:47 pm', '#12548796', 400, '4017 **** **** ****', 'Other', 'income'),
    createData('07/02/2022 10:06 am', '#12548796', 500, '4017 **** **** ****', 'Inappropriate Opertion', 'outcome'),
    createData('01/06/2022 12:30 am', '#12548793', 100, '4017 **** **** ****', 'Bad Internet Connection', 'income'),
    createData('01/17/2022 11:12 am', '#12548794', 200, '4017 **** **** ****', 'Inappropriate Opertion', 'outcome'),
    createData('01/27/2022 08:33 am', '#12548795', 300, '4017 **** **** ****', 'Server Crush', 'outcome'),
    createData('06/06/2022 05:47 pm', '#12548796', 400, '4017 **** **** ****', 'Other', 'income'),
    createData('07/02/2022 10:06 am', '#12548796', 500, '4017 **** **** ****', 'Inappropriate Opertion', 'outcome'),
    createData('01/06/2022 12:30 am', '#12548793', 100, '4017 **** **** ****', 'Bad Internet Connection', 'income'),
    createData('01/17/2022 11:12 am', '#12548794', 200, '4017 **** **** ****', 'Inappropriate Opertion', 'outcome'),
    createData('01/27/2022 08:33 am', '#12548795', 300, '4017 **** **** ****', 'Server Crush', 'outcome'),
    createData('06/06/2022 05:47 pm', '#12548796', 400, '4017 **** **** ****', 'Other', 'income'),
    createData('07/02/2022 10:06 am', '#12548796', 500, '4017 **** **** ****', 'Inappropriate Opertion', 'outcome'),
    createData('01/06/2022 12:30 am', '#12548793', 100, '4017 **** **** ****', 'Bad Internet Connection', 'income'),
    createData('01/17/2022 11:12 am', '#12548794', 200, '4017 **** **** ****', 'Inappropriate Opertion', 'outcome'),
    createData('01/27/2022 08:33 am', '#12548795', 300, '4017 **** **** ****', 'Server Crush', 'outcome'),
    createData('06/06/2022 05:47 pm', '#12548796', 400, '4017 **** **** ****', 'Other', 'income'),
    createData('07/02/2022 10:06 am', '#12548796', 500, '4017 **** **** ****', 'Inappropriate Opertion', 'outcome'),
    createData('01/06/2022 12:30 am', '#12548793', 100, '4017 **** **** ****', 'Bad Internet Connection', 'income'),
    createData('01/17/2022 11:12 am', '#12548794', 200, '4017 **** **** ****', 'Inappropriate Opertion', 'outcome'),
    createData('01/27/2022 08:33 am', '#12548795', 300, '4017 **** **** ****', 'Server Crush', 'outcome'),
    createData('06/06/2022 05:47 pm', '#12548796', 400, '4017 **** **** ****', 'Other', 'income'),
    createData('07/02/2022 10:06 am', '#12548796', 500, '4017 **** **** ****', 'Inappropriate Opertion', 'outcome'),
    createData('01/06/2022 12:30 am', '#12548793', 100, '4017 **** **** ****', 'Bad Internet Connection', 'income'),
    createData('01/17/2022 11:12 am', '#12548794', 200, '4017 **** **** ****', 'Inappropriate Opertion', 'outcome'),
    createData('01/27/2022 08:33 am', '#12548795', 300, '4017 **** **** ****', 'Server Crush', 'outcome'),
    createData('06/06/2022 05:47 pm', '#12548796', 400, '4017 **** **** ****', 'Other', 'income'),
    createData('07/02/2022 10:06 am', '#12548796', 500, '4017 **** **** ****', 'Inappropriate Opertion', 'outcome'),
    createData('01/06/2022 12:30 am', '#12548793', 100, '4017 **** **** ****', 'Bad Internet Connection', 'income'),
    createData('01/17/2022 11:12 am', '#12548794', 200, '4017 **** **** ****', 'Inappropriate Opertion', 'outcome'),
    createData('01/27/2022 08:33 am', '#12548795', 300, '4017 **** **** ****', 'Server Crush', 'outcome'),
    createData('06/06/2022 05:47 pm', '#12548796', 400, '4017 **** **** ****', 'Other', 'income'),
    createData('07/02/2022 10:06 am', '#12548796', 500, '4017 **** **** ****', 'Inappropriate Opertion', 'outcome'),
    createData('01/06/2022 12:30 am', '#12548793', 100, '4017 **** **** ****', 'Bad Internet Connection', 'income'),
    createData('01/17/2022 11:12 am', '#12548794', 200, '4017 **** **** ****', 'Inappropriate Opertion', 'outcome'),
    createData('01/27/2022 08:33 am', '#12548795', 300, '4017 **** **** ****', 'Server Crush', 'outcome'),
    createData('06/06/2022 05:47 pm', '#12548796', 400, '4017 **** **** ****', 'Other', 'income'),
    createData('07/02/2022 10:06 am', '#12548796', 500, '4017 **** **** ****', 'Inappropriate Opertion', 'outcome'),
    createData('01/06/2022 12:30 am', '#12548793', 100, '4017 **** **** ****', 'Bad Internet Connection', 'income'),
    createData('01/17/2022 11:12 am', '#12548794', 200, '4017 **** **** ****', 'Inappropriate Opertion', 'outcome'),
    createData('01/27/2022 08:33 am', '#12548795', 300, '4017 **** **** ****', 'Server Crush', 'outcome'),
    createData('06/06/2022 05:47 pm', '#12548796', 400, '4017 **** **** ****', 'Other', 'income'),
    createData('07/02/2022 10:06 am', '#12548796', 500, '4017 **** **** ****', 'Inappropriate Opertion', 'outcome')
];

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

// ==============================|| ORDER TABLE - HEADER CELL ||============================== //

const headCells = [
    {
        id: 'index',
        numeric: false,
        align: 'left',
        disablePadding: false,
        label: 'Index'
    },
    {
        id: 'batchDate',
        numeric: false,
        align: 'left',
        disablePadding: false,
        label: 'Batch date'
    },
    {
        id: 'appReference',
        numeric: false,
        align: 'left',
        disablePadding: false,
        label: 'App reference'
    },
    {
        id: 'clientReference',
        numeric: false,
        align: 'left',
        disablePadding: false,
        label: 'Client reference'
    },
    {
        id: 'account',
        numeric: false,
        align: 'left',
        disablePadding: false,
        label: 'Account'
    },
    {
        id: 'failureReason',
        numeric: false,
        align: 'left',
        disablePadding: false,
        label: 'failure reason'
    },
    {
        id: 'typeCall',
        numeric: false,
        align: 'left',
        disablePadding: false,
        label: 'Type call'
    }
];

function EnhancedTableHead(props) {
    const { order, orderBy, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired
};

export default function TypeFailureTable() {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    // const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    // const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // const handleChangeDense = (event) => {
    //     setDense(event.target.checked);
    // };

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <TableContainer>
                    {/* <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size={dense ? 'small' : 'medium'}> */}
                    <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size="small">
                        <EnhancedTableHead order={order} orderBy={orderBy} onRequestSort={handleRequestSort} rowCount={rows.length} />
                        <TableBody>
                            {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                   rows.slice().sort(getComparator(order, orderBy)) */}
                            {stableSort(rows, getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    // const isItemSelected = isSelected(row.name);
                                    const labelId = `type-failure-table-${index}`;

                                    return (
                                        // <TableRow hover onClick={(event) => handleClick(event, row.name)} tabIndex={-1} key={labelId} >
                                        <TableRow hover tabIndex={-1} key={labelId}>
                                            <TableCell align="left" component="th" id={labelId} scope="row" padding="none">
                                                {index + 1}
                                            </TableCell>
                                            <TableCell align="left">{row.batchDate}</TableCell>
                                            <TableCell align="left">{row.appReference}</TableCell>
                                            <TableCell align="left">{row.clientReference}</TableCell>
                                            <TableCell align="left">{row.account}</TableCell>
                                            <TableCell align="left">{row.failureReason}</TableCell>
                                            <TableCell align="left">{row.typeCall}</TableCell>
                                        </TableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                        // height: (dense ? 33 : 53) * emptyRows
                                        height: 33 * emptyRows
                                    }}
                                >
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 50, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
            {/* <FormControlLabel control={<Switch checked={dense} onChange={handleChangeDense} />} label="Dense padding" /> */}
        </Box>
    );
}
