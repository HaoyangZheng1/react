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
import { visuallyHidden } from '@mui/utils';

function createData(transactionNumber, callingTime, apiType, userNumber) {
    return { transactionNumber, callingTime, apiType, userNumber };
}

const rows = [
    createData('#0000000001', '14:38', 'View balance', '1234'),
    createData('#0000000002', '08:12', 'View balance', '4567'),
    createData('#0000000003', '11:47', 'Transaction sent', '7890'),
    createData('#0000000004', '19:30', 'Transaction received', '1234'),
    createData('#0000000005', '14:28', 'View balance', '1234'),
    createData('#0000000006', '08:12', 'View balance', '4567'),
    createData('#0000000007', '13:47', 'Transaction sent', '7890'),
    createData('#0000000008', '11:00', 'Transaction received', '1234'),
    createData('#0000000009', '09:48', 'View balance', '1234'),
    createData('#0000000010', '08:12', 'View balance', '4567'),
    createData('#0000000011', '15:47', 'Transaction sent', '7890'),
    createData('#0000000012', '21:00', 'Transaction received', '1234'),
    createData('#0000000013', '16:39', 'View balance', '1234'),
    createData('#0000000014', '08:32', 'View balance', '4567'),
    createData('#0000000015', '11:54', 'Transaction sent', '7890'),
    createData('#0000000016', '19:20', 'Transaction received', '1234'),
    createData('#0000000017', '11:38', 'View balance', '1234'),
    createData('#0000000018', '23:12', 'View balance', '4567'),
    createData('#0000000019', '21:27', 'Transaction sent', '7890'),
    createData('#0000000020', '19:30', 'Transaction received', '1234')
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
        id: 'transactiontNumber',
        numeric: false,
        align: 'left',
        disablePadding: false,
        label: 'Transaction number'
    },
    {
        id: 'callingTime',
        numeric: false,
        align: 'left',
        disablePadding: false,
        label: 'Calling time'
    },
    {
        id: 'apiType',
        numeric: false,
        align: 'left',
        disablePadding: false,
        label: 'API type'
    },
    {
        id: 'userNumber',
        numeric: false,
        align: 'left',
        disablePadding: false,
        label: 'User number'
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

export default function UserLogTable() {
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

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <TableContainer>
                    <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size="small">
                        <EnhancedTableHead order={order} orderBy={orderBy} onRequestSort={handleRequestSort} rowCount={rows.length} />
                        <TableBody>
                            {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                   rows.slice().sort(getComparator(order, orderBy)) */}
                            {stableSort(rows, getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    const labelId = `type-failure-table-${index}`;

                                    return (
                                        <TableRow hover tabIndex={-1} key={labelId}>
                                            <TableCell align="left" component="th" id={labelId} scope="row" padding="none">
                                                {index + 1}
                                            </TableCell>
                                            <TableCell align="left">{row.transactionNumber}</TableCell>
                                            <TableCell align="left">{row.callingTime}</TableCell>
                                            <TableCell align="left">{row.apiType}</TableCell>
                                            <TableCell align="left">{row.userNumber}</TableCell>
                                        </TableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
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
        </Box>
    );
}
