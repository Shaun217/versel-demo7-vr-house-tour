let isRotating = false;

// 资源映射关系：
// lobby.jpg  -> 实际上是 Cabin (休息室)
// suite.jpg  -> 实际上是 Hotel Room (客房)
// lounge.jpg -> 实际上是 Balcony (阳台)

const scenesData = {
    // --- 场景 1: 休闲休息室 (Lounge) ---
    // 对应文件名：lobby.jpg
    "lobby": {
        "title": "🛋️ 休闲休息室 (Timber Lounge)",
        "panorama": "./lythwood_lounge.jpg",
        "hotSpots": [
            {
                "pitch": -5,
                "yaw": 90,
                "type": "scene",
                "text": "进入客房休息",
                "sceneId": "suite"
            },
            {
                "pitch": 0,
                "yaw": -90,
                "type": "scene",
                "text": "去阳台透透气",
                "sceneId": "lounge"
            }
        ]
    },

    // --- 场景 2: 豪华客房 (Hotel Room) ---
    // 对应文件名：suite.jpg
    "suite": {
        "title": "🛏️ 豪华客房 (Hotel Room)",
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
                "text": "返回休息室",
                "sceneId": "lobby"
            }
        ]
    },

    // --- 场景 3: 观景阳台 (Balcony) ---
    // 对应文件名：lounge.jpg
    "lounge": {
        "title": "☀️ 顶层全景阳台 (Rooftop Balcony)",
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
                "text": "返回休息室",
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
    
    // 更新按钮高亮
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