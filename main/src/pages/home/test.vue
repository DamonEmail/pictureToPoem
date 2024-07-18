<template>
  <div>
    测试使用页面
    <a-upload
      v-model:file-list="fileList"
      name="file"
      action="/api/upload/upload"
      :headers="headers"
      @change="handleChange"
    >
      <a-button>
        <upload-outlined></upload-outlined>
        Click to Upload
      </a-button>
    </a-upload>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { message } from "ant-design-vue";
const handleChange = (info) => {
  if (info.file.status !== "uploading") {
    console.log(info.file, info.fileList);
  }
  if (info.file.status === "done") {
    message.success(`${info.file.name} file uploaded successfully`);
  } else if (info.file.status === "error") {
    message.error(`${info.file.name} file upload failed.`);
  }
};

const fileList = ref([]);
const headers = {
  authorization: "authorization-text",
};
</script>

<style lang="less" scoped></style>
