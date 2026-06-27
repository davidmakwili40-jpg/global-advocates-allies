import type { AdminListQuery, AdminRepository } from "@/types/admin";

export class UnconfiguredAdminRepository<TRecord extends { id?: string }>
  implements AdminRepository<TRecord>
{
  async list(query?: AdminListQuery): Promise<TRecord[]> {
    void query;
    return [];
  }

  async getById(id: string): Promise<TRecord | null> {
    void id;
    return null;
  }

  async create(record: TRecord): Promise<TRecord> {
    return record;
  }

  async update(id: string, record: Partial<TRecord>): Promise<TRecord> {
    void id;
    return record as TRecord;
  }
}
