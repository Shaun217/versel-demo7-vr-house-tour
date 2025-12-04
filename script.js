let isRotating = false;

// 定义全景图资源 (使用你刚才下载并重命名的本地图片)
const scenesData = {
    // --- 场景 1: Cabin (原 Cabin 图片) ---
    "lobby": {
        "title": "🌲 Cabin (Timber Lobby)",
        // 对应重命名后的 Cabin 图片
        "panorama": "./lythwood_lounge.jpg",
        "hotSpots": [
            {
                "pitch": -5,
                "yaw": 90,
                "type": "scene",
                "text": "进入Hotel Room",
                "sceneId": "suite"
            },
            {
                "pitch": 0,
                "yaw": -90,
                "type": "scene",
                "text": "去Hotel Rooftop Balcony",
                "sceneId": "lounge"
            },
            {
                "pitch": 10,
                "yaw": 180,
                "type": "info",
                "text": "前台服务 (Check-in)"
            }
        ]
    },

    // --- 场景 2: Hotel Room (原 Hotel Room 图片) ---
    "suite": {
        "title": "🛏️ Hotel Room (Luxury Suite)",
        // 对应重命名后的 Hotel Room 图片
        "panorama": "./hotel_room.jpg",
        "hotSpots": [
            {
                "pitch": -5,
                "yaw": 120,
                "type": "scene",
                "text": "去阳台看风景",
                "sceneId": "lounge"
            },
            {
                "pitch": 0,
                "yaw": -30,
                "type": "scene",
                "text": "返回Cabin",
                "sceneId": "lobby"
            },
            {
                "pitch": -10,
                "yaw": 0,
                "type": "info",
                "text": "舒适大床"
            }
        ]
    },

    // --- 场景 3: Hotel Rooftop Balcony (原 Hotel Rooftop Balcony 图片) ---
    "lounge": {
        "title": "☀️ Hotel Rooftop Balcony (Sky Terrace)",
        // 对应重命名后的 Hotel Rooftop Balcony 图片
        "panorama": "./rooftop_night.jpg",
        "hotSpots": [
            {
                "pitch": -5,
                "yaw": 180,
                "type": "scene",
                "text": "回房间休息",
                "sceneId": "suite"
            },
            {
                "pitch": 0,
                "yaw": -60,
                "type": "scene",
                "text": "返回Cabin",
                "sceneId": "lobby"
            },
            {
                "pitch": 15,
                "yaw": 0,
                "type": "info",
                "text": "绝美城市天际线"
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
    // 注意：这里按顺序对应 HTML 里的按钮
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