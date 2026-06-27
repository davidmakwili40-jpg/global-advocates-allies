export type AdminSectionKey =
  | "dashboard"
  | "programs"
  | "events"
  | "volunteers"
  | "applications"
  | "donations"
  | "pets"
  | "stories"
  | "media"
  | "website-content"
  | "users"
  | "analytics"
  | "settings";

export type AdminSection = {
  key: AdminSectionKey;
  label: string;
  href: string;
  description: string;
  status: "ready-for-api" | "planning" | "restricted";
  columns: string[];
  rows: Record<string, string>[];
};

export type AdminListQuery = {
  search?: string;
  status?: string;
  page?: number;
  pageSize?: number;
};

export type AdminRepository<TRecord> = {
  list(query?: AdminListQuery): Promise<TRecord[]>;
  getById(id: string): Promise<TRecord | null>;
  create(record: TRecord): Promise<TRecord>;
  update(id: string, record: Partial<TRecord>): Promise<TRecord>;
};
