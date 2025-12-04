let isRotating = false;

// 定义全景图资源 (使用官方永久 4K 链接，确保 100% 可访问)
const scenesData = {
    // --- 场景 1: 酒店大堂 (Grand Lobby) ---
    "lobby": {
        "title": "🏛️ 皇家大堂 (Grand Lobby)",
        // 图片：Theatre Hall (红毯、金色装饰，非常宏伟)
        "panorama": "https://dl.polyhaven.org/file/ph-assets/HDRIs/tonemapped_jpg/4k/theatre_hall_01_4k.jpg",
        "hotSpots": [
            {
                "pitch": -5,
                "yaw": 90,
                "type": "scene",
                "text": "乘电梯去总统套房",
                "sceneId": "suite"
            },
            {
                "pitch": 0,
                "yaw": -90,
                "type": "scene",
                "text": "前往贵宾休息室",
                "sceneId": "lounge"
            },
            {
                "pitch": 10,
                "yaw": 180,
                "type": "info",
                "text": "前台接待处 (Reception)"
            }
        ]
    },

    // --- 场景 2: 总统套房 (Presidential Suite) ---
    "suite": {
        "title": "🛏️ 总统套房 (Presidential Suite)",
        // 图片：Brown Photostudio (宽敞的复古风大套房，带休闲区)
        "panorama": "https://dl.polyhaven.org/file/ph-assets/HDRIs/tonemapped_jpg/4k/brown_photostudio_02_4k.jpg",
        "hotSpots": [
            {
                "pitch": -5,
                "yaw": 160,
                "type": "scene",
                "text": "去休息室喝一杯",
                "sceneId": "lounge"
            },
            {
                "pitch": 0,
                "yaw": -30,
                "type": "scene",
                "text": "返回大堂",
                "sceneId": "lobby"
            },
            {
                "pitch": -10,
                "yaw": 100,
                "type": "info",
                "text": "私人会客区"
            }
        ]
    },

    // --- 场景 3: 贵宾休息室 (VIP Lounge) ---
    "lounge": {
        "title": "🍸 贵宾休息室 (VIP Lounge)",
        // 图片：Wooden Lounge (有很多沙发的木质大厅)
        "panorama": "