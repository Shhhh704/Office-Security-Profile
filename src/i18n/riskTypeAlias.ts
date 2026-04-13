/**
 * 界面上的风险简称与 mapping 表全称对应关系（仅用于整段风险类型展示，勿加入全局 tr 子串表）。
 */
const RISK_CATEGORY_ZH_ALIAS: Record<string, string> = {
  出入: '出入风险',
  消防: '消防风险',
};

/** 解析为与 risk_indicator_mapping.md 一致的中文键，再交给 t()/lookupEn */
export function resolveRiskCategoryI18nKey(zh: string): string {
  return RISK_CATEGORY_ZH_ALIAS[zh] ?? zh;
}
