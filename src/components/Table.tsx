import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

interface Monster {
  id: string;
  monsterid: string;
  monstername: string;
  victories: string;
  defeats: string;
}

interface DataTableProps {
  data: Monster[]; // Reemplaza YourDataType con el tipo real de tus datos
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Monster ID</TableCell>
            <TableCell>Monster Name</TableCell>
            <TableCell>Victories</TableCell>
            <TableCell>Defeats</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.monsterid}</TableCell>
              <TableCell>{row.monstername}</TableCell>
              <TableCell>{row.victories}</TableCell>
              <TableCell>{row.defeats}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
