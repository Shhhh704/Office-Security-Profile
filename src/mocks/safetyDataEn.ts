import type { RiskAssessmentData } from '../types';

/** English copy for risk assessment tabs (mirrors keys in INITIAL_RISK_ASSESSMENT_DATA). */
export const INITIAL_RISK_ASSESSMENT_DATA_EN: Record<string, RiskAssessmentData> = {
  出入安全: {
    name: 'Access control',
    riskFeatures:
      '<p class="text-sm text-text-body leading-relaxed mb-2">Dazhongsi is an open, self-operated campus; C/D towers were converted from retail with a complex layout and nearly 200 entrances. Forty-two are open to all staff, including 23 unguarded and 14 next to commercial zones—tailgating and wrong-entry risk is high.</p><p class="text-sm text-text-body leading-relaxed">Sep–Nov: 2,191 tailgating or forced-entry alarms; 10 confirmed intrusions, nine from commercial areas.</p>',
    protectionMeasures:
      '<p class="text-sm text-text-body leading-relaxed mb-2">Controls: recurring training and drills; clearer office vs. retail signage; higher perimeter door test frequency.</p><p class="text-sm text-text-body leading-relaxed mb-2">Staffing: fixed posts at high-traffic commercial-adjacent entrances; patrol support at unguarded doors in peak hours.</p><p class="text-sm text-text-body leading-relaxed mb-2">Technology: layered access (low/high gates, swing doors, revolving doors, card columns); ~3,472 cameras for tracing.</p><p class="text-sm text-text-body leading-relaxed">Joint ops: guard + systems for alarm response and interception.</p>',
    updateTime: '2026-03-15 10:00',
  },
  消防安全: {
    name: 'Fire safety',
    riskFeatures:
      '<p class="text-sm text-text-body leading-relaxed mb-2">C/D are high-rises with atriums—vertical fire spread is fast, evacuation is long, and rescue is difficult.</p><p class="text-sm text-text-body leading-relaxed mb-2">Underground dining, dense electrical loads, gas kitchens, and EV charging in the garage stack fire risk.</p><p class="text-sm text-text-body leading-relaxed">Many concealed spaces increase stacking risk; parallel operations and construction add further exposure.</p>',
    protectionMeasures:
      '<p class="text-sm text-text-body leading-relaxed mb-2">Maintenance: on-site vendors day shift, 15 min night response, 2 h on-site repair SLA.</p><p class="text-sm text-text-body leading-relaxed mb-2">Drills: full-building evacuation exercises.</p><p class="text-sm text-text-body leading-relaxed mb-2">F&amp;B: daily/weekly fire walks; electrical and gas checks; EV fire playbooks and extinguishers; charger protection.</p><p class="text-sm text-text-body leading-relaxed mb-2">Joint inspections of concealed areas; new areas tied into the fire system before handover.</p><p class="text-sm text-text-body leading-relaxed mb-2">Control room: 24/7 dual certified operators; micro fire brigades and full system coverage.</p>',
    updateTime: '2026-03-15 10:00',
  },
  人身安全: {
    name: 'Personal safety',
    riskFeatures:
      '<p class="text-sm text-text-body leading-relaxed mb-2">Some facilities (parking, shuttles) sit on the campus edge—SOS coverage struggles to meet a &lt;4 min response for perimeter medical events.</p><p class="text-sm text-text-body leading-relaxed">Sep–Nov: three perimeter SOS medical events; average response &gt;5 min.</p>',
    protectionMeasures:
      '<p class="text-sm text-text-body leading-relaxed mb-2">Training and drills for SOS call handling and first response; AED+FAK at outer fixed posts.</p><p class="text-sm text-text-body leading-relaxed mb-2">SOS staffing: formal and reserve members per tower as rostered.</p><p class="text-sm text-text-body leading-relaxed mb-2">Guards: certified first-aid coverage per tower.</p><p class="text-sm text-text-body leading-relaxed">AED/FAK placement per tower standards.</p>',
    updateTime: '2026-03-15 10:00',
  },
  客诉: {
    name: 'User outreach',
    riskFeatures:
      '<p class="text-sm text-text-body leading-relaxed mb-2">Multiple Byte-related logos and maps labeled “HQ” drive high visitor complaint volume; Sep–Nov 425 cases, ~53% of Beijing volume. Medium+ incidents (blocking, banners) are partly routed to Yingdu, but some return to Dazhongsi; retail traffic adds reputational risk.</p><p class="text-sm text-text-body leading-relaxed">Yingdu is used for extreme cases due to lower exposure versus the busy Third Ring roadside site.</p>',
    protectionMeasures:
      '<p class="text-sm text-text-body leading-relaxed mb-2">Grow certified part-time complaint liaisons; quarterly extreme-scenario drills; police coordination on routing.</p><p class="text-sm text-text-body leading-relaxed mb-2">Staffing: resident complaint manager at Fangheng; three certified part-time roles at Dazhongsi; riot-trained teams with police joint training.</p><p class="text-sm text-text-body leading-relaxed mb-2">Equipment: riot cabinets, gear, and crowd screens.</p><p class="text-sm text-text-body leading-relaxed mb-2">On-site: cordon, de-escalation, and lawful photo handling.</p><p class="text-sm text-text-body leading-relaxed">Online: PR sync and geo-fenced monitoring.</p>',
    updateTime: '2026-03-15 10:00',
  },
  '极端天气/自然灾害': {
    name: 'Extreme weather / natural disaster',
    riskFeatures:
      '<p class="text-sm text-text-body leading-relaxed mb-2">Summer storms and lightning; winter snow and wind can disrupt operations.</p><p class="text-sm text-text-body leading-relaxed">Earthquake exposure; low-lying areas may flood.</p>',
    protectionMeasures:
      '<p class="text-sm text-text-body leading-relaxed mb-2">Early warning with meteorology partners.</p><p class="text-sm text-text-body leading-relaxed mb-2">Plans and drills for weather and disaster scenarios.</p><p class="text-sm text-text-body leading-relaxed mb-2">Stockpile flood, cold-weather, and emergency lighting supplies.</p>',
    updateTime: '2026-03-15 10:00',
  },
  '交通事故/拥堵': {
    name: 'Traffic accident / congestion',
    riskFeatures:
      '<p class="text-sm text-text-body leading-relaxed mb-2">Third Ring adjacency causes heavy peak congestion for commuters and visitors.</p><p class="text-sm text-text-body leading-relaxed">High surrounding traffic and tight parking increase scrape and incident risk.</p>',
    protectionMeasures:
      '<p class="text-sm text-text-body leading-relaxed mb-2">Rationalize routes and signage for vehicles and pedestrians.</p><p class="text-sm text-text-body leading-relaxed mb-2">Traffic plans with dedicated peak coordination.</p><p class="text-sm text-text-body leading-relaxed mb-2">Guard training to enforce the traffic plan.</p>',
    updateTime: '2026-03-15 10:00',
  },
  '办公/园区秩序': {
    name: 'Office / campus order',
    riskFeatures:
      '<p class="text-sm text-text-body leading-relaxed mb-2">Smoking in non-smoking zones creates fire and comfort issues.</p><p class="text-sm text-text-body leading-relaxed">Noise exceeds limits in some areas, hurting focus and increasing conflict risk.</p>',
    protectionMeasures:
      '<p class="text-sm text-text-body leading-relaxed mb-2">Patrols, signage, and staff reminders at hot spots.</p><p class="text-sm text-text-body leading-relaxed">Order policies, civility campaigns, and reporting channels.</p>',
    updateTime: '2026-03-15 10:00',
  },
  财产损失: {
    name: 'Property loss',
    riskFeatures:
      '<p class="text-sm text-text-body leading-relaxed mb-2">Large footprint and many exits raise loss of valuables risk.</p><p class="text-sm text-text-body leading-relaxed">Some camera gaps hinder investigations.</p>',
    protectionMeasures:
      '<p class="text-sm text-text-body leading-relaxed mb-2">~3,472 cameras with periodic health checks.</p><p class="text-sm text-text-body leading-relaxed">Asset registers, secure storage for high-value items, and routine security walks.</p>',
    updateTime: '2026-03-15 10:00',
  },
};
