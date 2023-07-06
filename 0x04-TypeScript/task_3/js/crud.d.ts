// ambient file containing type declarartions of functions
import { RowID, RowElement } from "./interface";

// export declare is used to tell typescript that the variable has been created elsewhere.
export declare function insertRow(row: RowElement): RowID;

export declare function deleteRow(rowId: RowID): void;

export declare function updateRow(rowId: RowID, row: RowElement): RowID;
