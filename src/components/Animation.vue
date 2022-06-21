<script setup lang="ts">
import * as vNG from "v-network-graph";
import data from "./Animation.data";
import { reactive } from "vue";

const paths: vNG.Paths = {
  path1: { edges: ["edge1", "edge3", "edge5", "edge7"] },
  path2: { edges: ["edge2", "edge4", "edge6", "edge10"] },
};

const configs = reactive(
  vNG.defineConfigs({
    view: {
      // scalingObjects: true,
      minZoomLevel: 1,
      maxZoomLevel: 16,
      autoPanAndZoomOnLoad: "fit-content",
    },
    node: {
      normal: { type: "circle", radius: 20, color: "#99ccff" },
      hover: { color: "#88bbff" },
      label: { visible: true, fontSize: 10 },
    },
    edge: {
      gap: 15,
      normal: { color: "#6699cc" },
    },
    path: {
      visible: true,
      normal: {
        width: 5,
        dasharray: "10 16",
        animate: true,
        animationSpeed: 40,
      },
    },
  })
);
</script>

<template>
  <v-network-graph
    :nodes="data.nodes"
    :edges="data.edges"
    :layouts="data.layouts"
    :paths="paths"
    :configs="configs"
  />
</template>

<style></style>
