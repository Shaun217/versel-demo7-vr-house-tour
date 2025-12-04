let isRotating = false;

// 1. 定义全景图资源 (这里使用 Poly Haven 的高质量 4K 图)
// 注意：这些链接是直接指向 JPG 文件的，加载速度快
const scenesData = {
    "lobby": {
        "title": "🏛️ 皇家大堂 (Grand Lobby)",
        // 来源: Poly Haven "Hotel Room" (作为大堂接待处演示)
        "panorama": "https://dl.polyhaven.org/file/ph-assets/HDRIs/extra/Tonemapped%20JPG/hotel_room.jpg",
        "hotSpots": [
            {
                "pitch": -10,
                "yaw": 180,
                "type": "scene",
                "text": "前往总统套房 ➔",
                "sceneId": "suite"
            },
            {
                "pitch": 0,
                "yaw": -30,
                "type": "info",
                "text": "前台接待处 (24h Service)"
            }
        ]
    },
    "suite": {
        "title": "🛏️ 总统套房 (Presidential Suite)",
        // 来源: Poly Haven "Brown Photostudio" (非常有现代居家套房感)
        "panorama": "https://dl.polyhaven.org/file/ph-assets/HDRIs/extra/Tonemapped%20JPG/brown_photostudio_02.jpg",
        "hotSpots": [
            {
                "pitch": -5,
                "yaw": -50,
                "type": "scene",
                "text": "去休息室喝一杯 ➔",
                "sceneId": "lounge"
            },
            {
                "pitch": 0,
                "yaw": 120,
                "type": "scene",
                "text": "返回大堂",
                "sceneId": "lobby"
            }
        ]
    },
    "lounge": {
        "title": "🍸 贵宾休息室 (VIP Lounge)",
        // 来源: Poly Haven "Wooden Lounge" (温馨的休息区)
        "panorama": "https://dl.polyhaven.org/file/ph-assets/HDRIs/extra/Tonemapped%20JPG/wooden_lounge.jpg",
        "hotSpots": [
            {
                "pitch": -2,
                "yaw": 150,
                "type": "scene",
                "text": "返回套房",
                "sceneId": "suite"
            }
        ]
    }
};

// 2. 初始化查看器
const viewer = pannellum.viewer('panorama', {
    "default": {
        "firstScene": "lobby",
        "sceneFadeDuration": 1500,
        "autoLoad": true,
        "compass": true 
    },
    "scenes": scenesData
});

// 3. 外部按钮切换场景功能
function switchScene(sceneId) {
    viewer.loadScene(sceneId);
    
    // 更新按钮高亮状态
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    // 找到点击的按钮并高亮 (这里简单粗暴匹配 onclick 文本，实际可用 dataset)
    const btns = document.querySelectorAll('.nav-btn');
    if(sceneId === 'lobby') btns[0].classList.add('active');
    if(sceneId === 'suite') btns[1].classList.add('active');
    if(sceneId === 'lounge') btns[2].classList.add('active');
}

// 4. 自动旋转控制
function toggleAutoRotate() {
    if (isRotating) {
        viewer.stopAutoRotate();
        isRotating = false;
    } else {
        viewer.startAutoRotate(-3); // 顺时针慢速旋转
        isRotating = true;
    }
}