let isRotating = false;

// 定义全景图资源 (已更新为更精准的高清图)
const scenesData = {
    // --- 场景 1: 酒店大堂 ---
    "lobby": {
        "title": "🏛️ 皇家大堂 (Grand Lobby)",
        // 新图片：Entrance Hall (宏伟的入口大厅，符合大堂感觉)
        "panorama": "https://dl.polyhaven.org/file/ph-assets/HDRIs/extra/Tonemapped%20JPG/entrance_hall_01.jpg",
        "hotSpots": [
            {
                "pitch": -5,
                "yaw": 90,
                "type": "scene",
                "text": "前往总统套房 (电梯)",
                "sceneId": "suite"
            },
            {
                "pitch": 0,
                "yaw": -30,
                "type": "scene",
                "text": "前往贵宾休息室",
                "sceneId": "lounge"
            },
            {
                "pitch": 10,
                "yaw": 180,
                "type": "info",
                "text": "前台接待处"
            }
        ]
    },

    // --- 场景 2: 总统套房 ---
    "suite": {
        "title": "🛏️ 总统套房 (Presidential Suite)",
        // 新图片：Bedroom Paris (豪华巴黎风格卧室，带吊灯)
        "panorama": "https://dl.polyhaven.org/file/ph-assets/HDRIs/extra/Tonemapped%20JPG/bedroom_paris.jpg",
        "hotSpots": [
            {
                "pitch": -5,
                "yaw": 150,
                "type": "scene",
                "text": "去休息室喝一杯",
                "sceneId": "lounge"
            },
            {
                "pitch": 0,
                "yaw": -20,
                "type": "scene",
                "text": "返回酒店大堂",
                "sceneId": "lobby"
            },
            {
                "pitch": -15,
                "yaw": 180,
                "type": "info",
                "text": "King Size 豪华大床"
            }
        ]
    },

    // --- 场景 3: 贵宾休息室 ---
    "lounge": {
        "title": "🍸 贵宾休息室 (VIP Lounge)",
        // 图片：Wooden Lounge (有很多沙发，符合描述)
        "panorama": "https://dl.polyhaven.org/file/ph-assets/HDRIs/extra/Tonemapped%20JPG/wooden_lounge.jpg",
        "hotSpots": [
            {
                "pitch": -2,
                "yaw": 50,
                "type": "scene",
                "text": "返回总统套房",
                "sceneId": "suite"
            },
            {
                "pitch": 0,
                "yaw": -120,
                "type": "scene",
                "text": "返回大堂",
                "sceneId": "lobby"
            }
        ]
    }
};

// 初始化查看器
const viewer = pannellum.viewer('panorama', {
    "default": {
        "firstScene": "lobby",
        "sceneFadeDuration": 1500,
        "autoLoad": true,
        "compass": true 
    },
    "scenes": scenesData
});

// 切换场景逻辑
function switchScene(sceneId) {
    viewer.loadScene(sceneId);
    
    // 更新侧边栏按钮高亮
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    const btns = document.querySelectorAll('.nav-btn');
    if(sceneId === 'lobby') btns[0].classList.add('active');
    if(sceneId === 'suite') btns[1].classList.add('active');
    if(sceneId === 'lounge') btns[2].classList.add('active');
}

// 自动旋转逻辑
function toggleAutoRotate() {
    if (isRotating) {
        viewer.stopAutoRotate();
        isRotating = false;
    } else {
        viewer.startAutoRotate(-3);
        isRotating = true;
    }
}