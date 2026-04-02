# 前端课程门户

这里是 `learning-course` 的静态网页入口。

打开方式：

1. 直接双击 [index.html](/d:/Code/learn-claude/claude-code-rev/learning-course/portal/index.html)
2. 或者在浏览器里打开这个文件

和之前不同的是：

- 现在网页不是简单目录页
- 它会直接渲染课程内容
- 可以按路线筛选
- 可以标记本地学习进度
- 可以把 Markdown 内容作为网页正文阅读

如果你更新了课程文档，可以重新运行：

```powershell
powershell -ExecutionPolicy Bypass -File .\build-portal-data.ps1
```

来重新生成 `course-data.js`。
