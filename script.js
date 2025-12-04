let isRotating = false;

// 初始化全景查看器
const viewer = pannellum.viewer('panorama', {
    "default": {
        "firstScene": "livingRoom", // 默认进入客厅
        "author": "AI Architect",
        "sceneFadeDuration": 1000,  // 切换场景时的淡入淡出效果(毫秒)
        "autoLoad": true            // 自动加载图片
    },

    "scenes": {
        // --- 场景 1: 客厅 ---
        "livingRoom": {
            "title": "未来客厅 (Living Room)",
            "hfov": 110, // 初始视角广度
            "pitch": -3, // 初始垂直角度
            "yaw": 117,  // 初始水平角度
            "type": "equirectangular",
            // 这里使用一张网上的 360 客厅图
            "panorama": "https://pannellum.org/images/alma.jpg",
            
            "hotSpots": [
                {
                    "pitch": -2.1,
                    "yaw": 132.9,
                    "type": "scene",      // 类型是“切换场景”
                    "text": "去卧室看看",  // 鼠标悬停文字
                    "sceneId": "bedroom"  // 目标场景ID
                },
                {
                    "pitch": 10,
                    "yaw": 100,
                    "type": "info",       // 类型是“信息提示”
                    "text": "这是 AI 设计的吊灯"
                }
            ]
        },

        // --- 场景 2: 卧室 (其实是另一个风景，暂作演示) ---
        "bedroom": {
            "title": "静谧书房 (Study Room)",
            "hfov": 110,
            "yaw": 5,
            "type": "equirectangular",
            // 另一张全景图
            "panorama": "https://pannellum.org/images/bma-0.jpg",
            
            "hotSpots": [
                {
                    "pitch": -0.6,
                    "yaw": 37.1,
                    "type": "scene",
                    "text": "返回客厅",
                    "sceneId": "livingRoom"
                }
            ]
        }
    }
});

// 自动旋转功能
function toggleAutoRotate() {
    if (isRotating) {
        viewer.stopAutoRotate();
        isRotating = false;
    } else {
        viewer.startAutoRotate(-2); // 负数向左转，正数向右转，数值代表速度
        isRotating = true;
    }
}

// 打印当前坐标 (用于开发时确定热点位置)
// 在页面上按住 Ctrl 并点击鼠标，控制台会显示 pitch 和 yaw
viewer.on('mousedown', function(event) {
    if (event.ctrlKey) {
        console.log("Pitch:", viewer.getPitch(), "Yaw:", viewer.getYaw());
    }
});