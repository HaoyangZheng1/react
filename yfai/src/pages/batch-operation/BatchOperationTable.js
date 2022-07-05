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

function createData(accountNumber, batchDate, batchState, linkedState, yodleeToken, batchSpendTime, referenceNumber) {
    return { accountNumber, batchDate, batchState, linkedState, yodleeToken, batchSpendTime, referenceNumber };
}

const rows = [
    createData('123-111 5555', '01/17/2022 11:12 am', 'Successful', 'Successful', 'Yjyf7^*WJ$(6', 11, '#12548793'),
    createData('111-222 6666', '02/27/2022 08:12 am', 'Successful', 'Successful', 'Yjyf7^*WJ$(6', 14, '#12548794'),
    createData('222-333 7777', '02/28/2022 11:47 pm', 'Successful', 'Successful', 'Yjyf7^*WJ$(6', 70, '#12548795'),
    createData('444-555 8888', '05/14/2022 04:12 pm', 'Successful', 'Successful', 'Yjyf7^*WJ$(6', 1, '#12548796'),
    createData('777-777 9999', '05/20/2022 06:14 pm', 'Successful', 'Successful', 'Yjyf7^*WJ$(6', 5, '#12548797'),
    createData('123-111 5555', '01/17/2022 11:12 am', 'Successful', 'Successful', 'Yjyf7^*WJ$(6', 111, '#12548793'),
    createData('111-222 6666', '02/27/2022 08:12 am', 'Successful', 'Successful', 'Yjyf7^*WJ$(6', 14, '#12548794'),
    createData('222-333 7777', '02/28/2022 11:47 pm', 'Successful', 'Successful', 'Yjyf7^*WJ$(6', 7, '#12548795'),
    createData('444-555 8888', '05/14/2022 04:12 pm', 'Successful', 'Successful', 'Yjyf7^*WJ$(6', 1, '#12548796'),
    createData('777-777 9999', '05/20/2022 06:14 pm', 'Successful', 'Successful', 'Yjyf7^*WJ$(6', 50, '#12548797'),
    createData('123-111 5555', '01/17/2022 11:12 am', 'Successful', 'Successful', 'Yjyf7^*WJ$(6', 115, '#12548793'),
    createData('111-222 6666', '02/27/2022 08:12 am', 'Successful', 'Successful', 'Yjyf7^*WJ$(6', 14, '#12548794'),
    createData('222-333 7777', '02/28/2022 11:47 pm', 'Successful', 'Successful', 'Yjyf7^*WJ$(6', 7, '#12548795'),
    createData('444-555 8888', '05/14/2022 04:12 pm', 'Successful', 'Successful', 'Yjyf7^*WJ$(6', 1, '#12548796'),
    createData('777-777 9999', '05/20/2022 06:14 pm', 'Successful', 'Successful', 'Yjyf7^*WJ$(6', 5, '#12548797'),
    createData('123-111 5555', '01/17/2022 11:12 am', 'Successful', 'Successful', 'Yjyf7^*WJ$(6', 11, '#12548793'),
    createData('111-222 6666', '02/27/2022 08:12 am', 'Successful', 'Successful', 'Yjyf7^*WJ$(6', 14, '#12548794'),
    createData('222-333 7777', '02/28/2022 11:47 pm', 'Successful', 'Successful', 'Yjyf7^*WJ$(6', 75, '#12548795'),
    createData('444-555 8888', '05/14/2022 04:12 pm', 'Successful', 'Successful', 'Yjyf7^*WJ$(6', 10, '#12548796'),
    createData('777-777 9999', '05/20/2022 06:14 pm', 'Successful', 'Successful', 'Yjyf7^*WJ$(6', 5, '#12548797'),
    createData('123-111 5555', '01/17/2022 11:12 am', 'Successful', 'Successful', 'Yjyf7^*WJ$(6', 161, '#12548793'),
    createData('111-222 6666', '02/27/2022 08:12 am', 'Successful', 'Successful', 'Yjyf7^*WJ$(6', 14, '#12548794'),
    createData('222-333 7777', '02/28/2022 11:47 pm', 'Successful', 'Successful', 'Yjyf7^*WJ$(6', 7, '#12548795'),
    createData('444-555 8888', '05/14/2022 04:12 pm', 'Successful', 'Successful', 'Yjyf7^*WJ$(6', 145, '#12548796'),
    createData('777-777 9999', '05/20/2022 06:14 pm', 'Successful', 'Successful', 'Yjyf7^*WJ$(6', 5, '#12548797')
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
        id: 'accountNumber',
        numeric: false,
        align: 'left',
        disablePadding: false,
        label: 'Account number'
    },
    {
        id: 'batchDate',
        numeric: false,
        align: 'left',
        disablePadding: false,
        label: 'Batch date'
    },
    {
        id: 'batchState',
        numeric: false,
        align: 'left',
        disablePadding: false,
        label: 'Batch state'
    },
    {
        id: 'linkedState',
        numeric: false,
        align: 'left',
        disablePadding: false,
        label: 'Linked state'
    },
    {
        id: 'yodleeToken',
        numeric: false,
        align: 'left',
        disablePadding: false,
        label: 'Yodlee token'
    },
    {
        id: 'batchSpendTime',
        numeric: false,
        align: 'left',
        disablePadding: false,
        label: 'Batch spend time'
    },
    {
        id: 'referenceNumber',
        numeric: false,
        align: 'left',
        disablePadding: false,
        label: 'reference number'
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

export default function BatchOperationTable() {
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
                                            <TableCell align="left">{row.accountNumber}</TableCell>
                                            <TableCell align="left">{row.batchDate}</TableCell>
                                            <TableCell align="left">{row.batchState}</TableCell>
                                            <TableCell align="left">{row.linkedState}</TableCell>
                                            <TableCell align="left">{row.yodleeToken}</TableCell>
                                            <TableCell align="left">{row.batchSpendTime + ' s'}</TableCell>
                                            <TableCell align="left">{row.referenceNumber}</TableCell>
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
