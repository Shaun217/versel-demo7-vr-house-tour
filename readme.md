# 🏡 AI Virtual House Tour (AI 虚拟看房)

这是一个基于 Web 的虚拟现实（VR）漫游应用。它允许用户在浏览器中进行 360 度全景看房，支持场景切换、自动旋转和热点交互。

本项目采用纯前端架构，结合了开源全景引擎 **Pannellum** 和 **AIGC 技术**，无需复杂的 3D 建模即可实现身临其境的体验。

## ✨ 核心功能

- **360° 全景漫游**：支持鼠标拖拽（PC）或触摸滑动（手机）查看任意角度。
- **场景热点 (Hotspots)**：点击房间内的标记图标，可瞬间穿越到另一个房间（如：从客厅切换到卧室）。
- **多平台适配**：完美支持手机端，利用陀螺仪传感器，手机转动时视角随之转动。
- **自动导览**：一键开启自动旋转模式，解放双手。

## 🧠 技术栈 & 原理

- **Pannellum.js**: 一个轻量级、免费开源的 WebGL 全景查看器。
- **Equirectangular Projection**: 使用“等距长方投影”图片（2:1 比例），将平面图片包裹在一个虚拟球体内部，模拟真实视界。
- **AIGC (Skybox AI)**: 使用生成式 AI 创造不存在的虚拟空间。

## 🎨 如何用 AI 生成自己的豪宅？

本项目默认使用了网上的演示图片。如果你想展示自己设计的“赛博朋克豪宅”或“火星基地”，请按以下步骤操作：

1.  **访问 AI 工具**：前往 [Blockade Labs Skybox AI](https://skybox.blockadelabs.com/) (免费好用)。
2.  **输入提示词**：
    - 例如：`Futuristic luxury penthouse living room, cyberpunk style, neon lights, night city skyline view, 8k, realistic`
3.  **生成与下载**：点击 Generate，满意后点击 Download。
4.  **替换图片**：
    - 将下载的 JPG 图片重命名（如 `my-room.jpg`）。
    - 放入项目文件夹。
    - 修改 `script.js` 中的图片路径：
      ```javascript
      "panorama": "./my-room.jpg"
      ```

## 🚀 快速部署

1.  **准备文件**：确保 `index.html`, `style.css`, `script.js` (以及你的全景图片) 都在同一文件夹。
2.  **上传 GitHub**：将文件夹内容拖拽上传至 GitHub 仓库。
3.  **连接 Vercel**：在 Vercel 中导入该仓库，点击 Deploy。
4.  **分享**：把生成的网址发给朋友，邀请他们来你的“虚拟豪宅”做客！

## 📂 文件结构

```text
├── index.html    // 引入 Pannellum 库，定义 UI 结构
├── style.css     // 全屏布局与自定义热点样式
├── script.js     // 定义场景(Scenes)、热点(Hotspots)与交互逻辑
└── README.md     // 项目说明文档