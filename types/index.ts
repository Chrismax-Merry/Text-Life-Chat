export type DocsType = {
  title: string; // 标题
  created_at: Date; // 创建日期
  description?: string; // 描述
  is_hots?: boolean; // 是否热点
  labels: string[]; // 标签
};
