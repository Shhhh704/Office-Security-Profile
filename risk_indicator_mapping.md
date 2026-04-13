# Risk Type & Indicator Bilingual Mapping / 风险类型与指标中英文对照表

> **Purpose**: This document serves as a bilingual (Chinese ↔ English) reference table for risk types and their associated indicators, including traffic-light status definitions. It is designed for AI-driven translation workflows — mapping Chinese page content to English equivalents.

---

## 1. Risk Types / 风险类型

| # | 风险类型（中文） | Risk Type（English） |
|---|----------------|---------------------|
| 1 | 出入风险 | Access Control |
| 2 | 消防风险 | Fire Safety |
| 3 | 人身安全风险 | Personal Safety |
| 4 | 客诉风险 | User Outreach |
| 5 | 极端天气/自然灾害 | Extreme Weather / Natural Disaster |
| 6 | 交通事故/拥堵 | Traffic Accident / Congestion |
| 7 | 办公/园区秩序风险 | Office / Campus Order |
| 8 | 财产损失 | Property Loss |
| 9 | 出入安全 | Access Control |
| 10 | 消防安全 | Fire Safety |
| 11 | 人身安全 | Personal Safety |
| 12 | 客诉 | User Outreach |
| 13 | 办公/园区秩序 | Office / Campus Order |

> 第 9–13 行为界面常用简称，英文与上表 1–4、7 行一致，便于 `tr()` 在详情页、Tab、mock 数据中命中。

---

## 2. Indicator Names / 指标名称对照

Each indicator has a **long name** (used in detailed reports) and a **short name** (used in dashboards or summaries).

| 风险类型 | Risk Type | 指标名称（中文） | Indicator Long Name (EN) | 指标短名称（中文） | Indicator Short Name (EN) |
|---------|-----------|----------------|--------------------------|------------------|---------------------------|
| 出入风险 | Access Control | 闯入安全事件量级 | Intrusion Security Incident Volume | 闯入事件量级 | Intrusion Incident Volume |
| 出入风险 | Access Control | 闯入报警响应时效达标 | Intrusion Alarm Response SLA | 闯入报警响应时效 | Intrusion Response SLA |
| 消防风险 | Fire Safety | 明火事件量级 | Open Flame Incident Volume | 明火事件量级 | Open Flame Incident Volume |
| 消防风险 | Fire Safety | 疏散演习用时 | Evacuation Drill Duration | 疏散演习用时 | Evacuation Drill Duration |
| 消防风险 | Fire Safety | 真实疏散用时 | Actual Evacuation Duration | 真实疏散用时 | Actual Evacuation Duration |
| 消防风险 | Fire Safety | 工区消防手续是否完备 | Fire Safety Documentation Completeness | 消防手续完备性 | Documentation Completeness |
| 消防风险 | Fire Safety | 内部消防审计合规率 | Internal Fire Safety Audit Compliance | 内部审计合规率 | Internal Audit Compliance |
| 人身安全风险 | Personal Safety | 4min急救响应时效达标 | 4 Minute First Aid Response SLA | 4min急救响应时效 | 4min Response SLA |
| 人身安全风险 | Personal Safety | 人身安全事件后果 | Personal Safety Incident Impact | 人身安全事件后果 | Personal Safety Impact |
| 人身安全风险 | Personal Safety | 急救响应质量 | First Aid Response Quality | 急救响应质量 | First Aid Response Quality |
| 客诉风险 | User Outreach | 安全人员沟通处置行为 | Security Communication And Handling Behavior | 安全人员处置行为 | Security Handling Behavior |
| 客诉风险 | User Outreach | 造成职场内人员重度伤亡或有重大负面舆情传播 | Severe Casualty / Major Public-opinion Impact | 重度伤亡或负面舆情 | Severe Casualty / Negative Publicity |
| 极端天气/自然灾害 | Extreme Weather / Natural Disaster | 极端天气应急响应预警 | Extreme Weather Early Warning and Emergency Response | 极端天气应急预警 | Warning and Response |
| 极端天气/自然灾害 | Extreme Weather / Natural Disaster | 极端天气检查表单 | Extreme Weather Inspection Checklist | 极端天气检查表单 | Extreme Weather Checklist |
| 极端天气/自然灾害 | Extreme Weather / Natural Disaster | 极端天气/自然灾害是否造成严重后果 | Extreme Weather / Natural Disaster Impact Severity | 天气灾害严重后果 | Weather Disaster Severity |
| 交通事故/拥堵 | Traffic Accident / Congestion | 自持园区交通设施设置、动线规划是否合理 | Campus Traffic Layout Appropriateness | 交通设施与动线规划 | Traffic Layout & Flow |
| 交通事故/拥堵 | Traffic Accident / Congestion | 交通管理方案是否制定合理 | Traffic Management Plan Soundness | 交通管理方案合理性 | Traffic Plan Soundness |
| 交通事故/拥堵 | Traffic Accident / Congestion | 安保能否有效执行交通管理方案 | Traffic Plan Execution Effectiveness | 交通方案执行有效性 | Traffic Plan Execution |
| 交通事故/拥堵 | Traffic Accident / Congestion | 交通事故（发生重度人员伤亡） | Traffic Accident with Severe Casualties | 交通事故重度伤亡 | Traffic Accident Severity |
| 办公/园区秩序风险 | Office / Campus Order | 人员冲突/打架/骚扰/治安混乱是否造成严重后果 | Conflict / Disturbance Impact Severity | 冲突事件严重后果 | Conflict Incident Severity |
| 办公/园区秩序风险 | Office / Campus Order | 是否按照应急事件预案或响应流程执行 | Conflict Incident Procedure Adherence | 应急响应执行有效性 | Response Execution |
| 财产损失 | Property Loss | 因蓄意侵占或损坏资产，造成的单次经济损失金额 | Intentional Asset Loss Amount Per Incident | 蓄意侵损经济损失 | Intentional Asset Loss |
| 财产损失 | Property Loss | 公司重要资产、核心机密资产是否发生丢失 | Critical / Confidential Asset Loss | 核心资产是否丢失 | Critical Asset Loss |

---

## 3. Traffic-Light Definitions / 红黄绿灯状态定义

> **Convention**: 🔴 Red = critical / non-compliant, 🟡 Yellow = warning / partially compliant, 🟢 Green = normal / compliant. "—" means this light level is not applicable for the indicator.

### 3.1 Access Control / 出入风险

| Indicator (EN) | 🔴 Red (CN) | 🔴 Red (EN) | 🟡 Yellow (CN) | 🟡 Yellow (EN) | 🟢 Green (CN) | 🟢 Green (EN) |
|----------------|------------|------------|----------------|----------------|---------------|---------------|
| Intrusion Incident Volume | — | — | 无权限闯入次数 ≥ 2次 | Unauthorized intrusions ≥ 2 times | 无权限闯入次数 0～1 次 | Unauthorized intrusions 0～1 times |
| Intrusion Response SLA | 未找到无权限闯入人员 | Unauthorized intruder not found | 找到无权限闯入人员用时超过4分钟或6分钟（1万㎡以下职场4min，1万㎡以上职场6min） | Unauthorized intruder found in over 4/6 min (4 min for sites <10,000 sqm; 6 min for ≥10,000 sqm) | 找到无权限闯入人员用时不超过4分钟或6分钟 | Unauthorized intruder found within 4/6 min |

### 3.2 Fire Safety / 消防风险

| Indicator (EN) | 🔴 Red (CN) | 🔴 Red (EN) | 🟡 Yellow (CN) | 🟡 Yellow (EN) | 🟢 Green (CN) | 🟢 Green (EN) |
|----------------|------------|------------|----------------|----------------|---------------|---------------|
| Open Flame Incident Volume | 发生明火事件，由消防队参与协助灭火 | Open fire incident; fire department assisted | 专属管理区域发生明火事件；或发现/接到火警后4min内没有到场确认；或自行扑灭但用时超过6min | Open fire in managed area; or failed to arrive within 4 min; or self-extinguished but took over 6 min | 专属管理区域未发生明火事件；非专属区域发生时，4min内到场确认且6min内扑灭 | No open fire in managed area; for non-managed areas, arrived within 4 min and extinguished within 6 min |
| Evacuation Drill Duration | — | — | 疏散演习时，楼层疏散用时超过4分钟 | Floor evacuation took over 4 min during drill | 每个楼层疏散用时不超过4分钟 | Each floor evacuated within 4 min |
| Actual Evacuation Duration | 符合疏散条件时，未能立即启动疏散或未完成全员安全疏散 | Failed to initiate or complete full evacuation when conditions were met | 符合疏散条件时，立即启动疏散并完成全员安全疏散 | Evacuation initiated immediately and all personnel evacuated safely | — | — |
| Documentation Completeness | — | — | 不完备 | Incomplete | 完备 | Complete |
| Internal Audit Compliance | 合规率 < 60% | Compliance rate < 60% | 合规率 60%(含)～90% | Compliance rate 60% (incl.) ~ 90% | 合规率 ≥ 90% | Compliance rate ≥ 90% |

### 3.3 Personal Safety / 人身安全风险

| Indicator (EN) | 🔴 Red (CN) | 🔴 Red (EN) | 🟡 Yellow (CN) | 🟡 Yellow (EN) | 🟢 Green (CN) | 🟢 Green (EN) |
|----------------|------------|------------|----------------|----------------|---------------|---------------|
| 4min Response SLA | 未达标（不含被急救对象未及时提供位置或位置有误的情形） | Non-compliant (excluding inaccurate location from the person in need) | — | — | 达标 | Compliant |
| Personal Safety Impact | 造成重度后果（非人员自身原因造成） | Severe consequences (not caused by the individual) | 造成中度后果（非人员自身原因造成） | Moderate consequences (not caused by the individual) | 未造成、或仅造成轻度后果 | No consequences or only minor consequences |
| First Aid Response Quality | — | — | 未达标 | Non-compliant | 达标 | Compliant |

### 3.4 User Outreach / 客诉风险

| Indicator (EN) | 🔴 Red (CN) | 🔴 Red (EN) | 🟡 Yellow (CN) | 🟡 Yellow (EN) | 🟢 Green (CN) | 🟢 Green (EN) |
|----------------|------------|------------|----------------|----------------|---------------|---------------|
| Security Handling Behavior | 安全人员沟通处置触及红线行为 | Handling violated red-line behavior | 安全人员存在处置不当、但未触及红线行为 | Improper handling, but no red-line violation | 安全人员处置得当 | Handled properly |
| Severe Casualty / Negative Publicity | 造成重度后果 | Severe consequences | 造成中度后果 | Moderate consequences | 未造成、或仅造成轻度后果 | No consequences or only minor consequences |

### 3.5 Extreme Weather / Natural Disaster / 极端天气/自然灾害

| Indicator (EN) | 🔴 Red (CN) | 🔴 Red (EN) | 🟡 Yellow (CN) | 🟡 Yellow (EN) | 🟢 Green (CN) | 🟢 Green (EN) |
|----------------|------------|------------|----------------|----------------|---------------|---------------|
| Warning and Response | 未识别极端天气一级应急响应预警 | Failed to identify Level 1 alert | 未识别极端天气二级或三级应急响应预警 | Failed to identify Level 2 or 3 alert | 其他情况 | Other conditions |
| Extreme Weather Checklist | — | — | 时效不达标 | Timeliness non-compliant | 时效达标 | Timeliness compliant |
| Weather Disaster Severity | 重度后果 | Severe consequences | 中度后果 | Moderate consequences | 未造成、或仅造成轻度后果 | No consequences or only minor consequences |

### 3.6 Traffic Accident / Congestion / 交通事故/拥堵

| Indicator (EN) | 🔴 Red (CN) | 🔴 Red (EN) | 🟡 Yellow (CN) | 🟡 Yellow (EN) | 🟢 Green (CN) | 🟢 Green (EN) |
|----------------|------------|------------|----------------|----------------|---------------|---------------|
| Traffic Layout & Flow | 不合理 | Unreasonable | — | — | 合理 | Reasonable |
| Traffic Plan Soundness | 未制定合理的交通管理方案 | No reasonable plan developed | — | — | 交通管理方案合理 | Plan is reasonable |
| Traffic Plan Execution | — | — | 交通管理方案执行不合格 | Execution non-compliant | 交通管理方案执行合格 | Execution compliant |
| Traffic Accident Severity | 造成重度后果 | Severe consequences | 造成中度后果 | Moderate consequences | 未造成、或仅造成轻度后果 | No consequences or only minor consequences |

### 3.7 Office / Campus Order / 办公/园区秩序风险

| Indicator (EN) | 🔴 Red (CN) | 🔴 Red (EN) | 🟡 Yellow (CN) | 🟡 Yellow (EN) | 🟢 Green (CN) | 🟢 Green (EN) |
|----------------|------------|------------|----------------|----------------|---------------|---------------|
| Conflict Incident Severity | 造成重度后果 | Severe consequences | 造成中度后果 | Moderate consequences | 未造成、或仅造成轻度后果 | No consequences or only minor consequences |
| Response Execution | — | — | 响应过程不完全符合应急响应流程及时效要求 | Response did not fully comply with procedures and timeliness requirements | 其他情况（符合要求） | Other conditions (compliant) |

### 3.8 Property Loss / 财产损失

| Indicator (EN) | 🔴 Red (CN) | 🔴 Red (EN) | 🟡 Yellow (CN) | 🟡 Yellow (EN) | 🟢 Green (CN) | 🟢 Green (EN) |
|----------------|------------|------------|----------------|----------------|---------------|---------------|
| Intentional Asset Loss | 超过100万 | Over 1,000,000 CNY | 10万～100万 | 100,000 ~ 1,000,000 CNY | 不超过10万 | Not exceeding 100,000 CNY |
| Critical Asset Loss | 丢失 | Lost | — | — | 未丢失 | Not lost |
