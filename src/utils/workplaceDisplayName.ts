/** 城市与职场名称：城市-名称 */
export function workplaceDisplayName(city: string | undefined, name: string): string {
  const c = city?.trim();
  if (!c) return name;
  return `${c}-${name}`;
}
