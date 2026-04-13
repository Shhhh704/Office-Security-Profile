/** 从 risk_indicator_mapping.md 解析 中文 → 英文 映射（表格行） */

function rowCells(line: string): string[] {
  const t = line.trim();
  if (!t.startsWith('|')) return [];
  const inner = t.slice(1, t.endsWith('|') ? -1 : undefined);
  return inner.split('|').map((c) => c.trim());
}

export function parseRiskIndicatorMapping(md: string): Record<string, string> {
  const map: Record<string, string> = {};
  const add = (zh: string, en: string) => {
    const z = zh.trim();
    const e = en.trim();
    if (!z || !e) return;
    if (z === '—' || e === '—') return;
    if (!(z in map)) map[z] = e;
  };

  let mode: 'none' | 's1' | 's2' | 's3' = 'none';
  let s2SeenHeader = false;
  let s3SeenHeader = false;

  const lines = md.split(/\r?\n/);
  for (const raw of lines) {
    const line = raw.trim();
    if (line.startsWith('## 1.')) {
      mode = 's1';
      s2SeenHeader = false;
      s3SeenHeader = false;
      continue;
    }
    if (line.startsWith('## 2.')) {
      mode = 's2';
      s2SeenHeader = false;
      continue;
    }
    if (line.startsWith('## 3')) {
      mode = 's3';
      s3SeenHeader = false;
      continue;
    }
    if (mode === 's3' && line.startsWith('###')) {
      s3SeenHeader = false;
      continue;
    }

    if (!line.startsWith('|') || /^\|?\s*-{3,}/.test(line)) continue;

    const c = rowCells(line);
    if (c.length < 2) continue;

    if (mode === 's1') {
      if (/^\d+$/.test(c[0]) && c.length >= 3) add(c[1], c[2]);
      continue;
    }

    if (mode === 's2') {
      if (c.some((x) => x.includes('指标名称（中文）')) && c.some((x) => x.includes('Indicator Long Name'))) {
        s2SeenHeader = true;
        continue;
      }
      if (!s2SeenHeader) continue;
      if (c.length >= 6) {
        add(c[0], c[1]);
        add(c[2], c[3]);
        add(c[4], c[5]);
      }
      continue;
    }

    if (mode === 's3') {
      if (c[0].includes('Indicator (EN)') && c[1].includes('Red (CN)')) {
        s3SeenHeader = true;
        continue;
      }
      if (!s3SeenHeader || c.length < 7) continue;
      const pairs: [number, number][] = [
        [1, 2],
        [3, 4],
        [5, 6],
      ];
      for (const [i, j] of pairs) add(c[i], c[j]);
    }
  }

  return map;
}

export function sortZhKeysByLengthDesc(map: Record<string, string>): string[] {
  return Object.keys(map).sort((a, b) => b.length - a.length);
}
