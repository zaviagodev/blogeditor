

import { Cross2Icon } from "@radix-ui/react-icons"
import { Table } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DataTableViewOptions } from "./data-table-view-options"

import { statuses } from "../taskData/data"
import { DataTableFacetedFilter } from "./data-table-faceted-filter"




interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0
  let value = "title"
  if(!table.getColumn('title')){
    value = "name"
  }


  return (
    <div className="flex items-center justify-between" >
      <div className="flex flex-1 items-center space-x-2">
        <Input
          id="filter"
          placeholder="Search..."
          value={(table.getColumn(value)?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn(value)?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {table.getColumn("status") && (
          <DataTableFacetedFilter
            column={table.getColumn("status")}
            title="Status"
            options={statuses}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  )
}