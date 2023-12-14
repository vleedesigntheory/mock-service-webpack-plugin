<template>
  <a-result status="404" title="404" sub-title="对不起, 您访问的页面不存在。">
    <!-- <template #extra>
      <a-button type="primary"> Back Home </a-button>
    </template> -->
  </a-result>
</template>
<script>
import { Result } from "ant-design-vue";
export default {
  name:'NotFound',
  components: {
    [Result.name]: Result,
  },
  data() {
    return {};
  },
};
</script>