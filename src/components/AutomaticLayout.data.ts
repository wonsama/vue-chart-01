import { Nodes, Edges, Layouts } from "v-network-graph";
import { reactive } from "vue";

const nodes: Nodes = {
  "0": { name: "Start" },
  "1": { name: "01-00_PR 생성" },
  "4": { name: "06-00_PR Buyer Feedback" },
  "5": { name: "07-00_PO 생성" },
  "6": { name: "08-00_PO 확정" },
  "7": { name: "09-00_PO접수_업체" },
  "8": { name: "10-00_IV발행일" },
  "9": { name: "11-00_B/L발행일" },
  "12": { name: "14-01_수입신고일" },
  "13": { name: "14-02_반입일" },
  "14": { name: "15-00_통관완료일" },
  "15": { name: "17-01_입고 (103)" },
  "16": { name: "18-01_입고 (105)" },
  "17": { name: "99-00_PO 변경" },
  "18": { name: "99-00_PR 변경" },
  "20": { name: "MRP Type(PB)" },
  "21": { name: "MRP Type(PD)" },
  "22": { name: "MRP 수행" },
  "23": { name: "수기 작성" },
  "9999": { name: "End" },
};

const edges: Edges = {
  edge_0_15: { source: "0", target: "15" },
  edge_0_20: { source: "0", target: "20" },
  edge_0_21: { source: "0", target: "21" },
  edge_1_6: { source: "1", target: "6" },
  edge_1_18: { source: "1", target: "18" },
  edge_4_15: { source: "4", target: "15" },
  edge_5_7: { source: "5", target: "7" },
  edge_5_18: { source: "5", target: "18" },
  edge_6_5: { source: "6", target: "5" },
  edge_7_4: { source: "7", target: "4" },
  edge_7_8: { source: "7", target: "8" },
  edge_8_9: { source: "8", target: "9" },
  edge_9_17: { source: "9", target: "17" },
  edge_12_13: { source: "12", target: "13" },
  edge_13_14: { source: "13", target: "14" },
  edge_14_15: { source: "14", target: "15" },
  edge_15_12: { source: "15", target: "12" },
  edge_15_16: { source: "15", target: "16" },
  edge_16_17: { source: "16", target: "17" },
  edge_16_9999: { source: "16", target: "9999" },
  edge_17_9999: { source: "17", target: "9999" },
  edge_18_7: { source: "18", target: "7" },
  edge_20_23: { source: "20", target: "23" },
  edge_21_22: { source: "21", target: "22" },
  edge_22_1: { source: "22", target: "1" },
  edge_23_1: { source: "23", target: "1" },
};

const layouts: Layouts = reactive({
  nodes: {},
});

export default {
  nodes,
  edges,
  layouts,
};
