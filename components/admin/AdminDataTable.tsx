import { Search } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { TextInput } from "@/components/ui/FormField";
import type { AdminSection } from "@/types/admin";

export function AdminDataTable({ section }: { section: AdminSection }) {
  return (
    <Card>
      <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <Badge tone={section.status === "restricted" ? "coral" : "moss"}>{section.status}</Badge>
          <h2 className="mt-4 font-serif text-step-3 font-semibold text-ink">{section.label}</h2>
          <p className="mt-2 text-step--1 text-ink/70">{section.description}</p>
        </div>
        <div className="grid gap-2">
          <label className="text-sm font-bold text-ink" htmlFor={`${section.key}-search`}>
            Search
          </label>
          <div className="relative">
            <Search aria-hidden="true" className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-ink/45" />
            <TextInput className="pl-9" id={`${section.key}-search`} placeholder="Search-ready UI" type="search" />
          </div>
        </div>
      </div>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[42rem] text-left text-sm">
          <caption className="sr-only">{section.label} records</caption>
          <thead className="border-b border-ink/10 text-ink/60">
            <tr>
              {section.columns.map((column) => (
                <th className="px-3 py-3 font-bold capitalize" key={column} scope="col">
                  {column.replace("-", " ")}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-ink/10">
            {section.rows.map((row) => (
              <tr key={`${section.key}-${row.name}`}>
                {section.columns.map((column) => (
                  <td className="px-3 py-4 text-ink/75" key={column}>
                    {row[column] ?? "Pending"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-5 flex items-center justify-between border-t border-ink/10 pt-4 text-sm text-ink/60">
        <span>Pagination-ready pattern</span>
        <span>Page 1 of 1</span>
      </div>
    </Card>
  );
}
