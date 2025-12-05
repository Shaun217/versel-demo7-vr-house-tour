body, html {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    overflow: hidden;
    background-color: #000;
}

#panorama {
    width: 100%;
    height: 100%;
    transition: opacity 0.5s ease;
}

/* --- UI 层通用设置 --- */
.hotel-ui {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px;
    box-sizing: border-box;
    z-index: 2; /* 确保 UI 在最上层 */
}

/* --- Logo 区域 --- */
.logo-area {
    pointer-events: auto;
    text-shadow: 0 2px 10px rgba(0,0,0,0.8);
}

h1 {
    color: #d4af37;
    margin: 0;
    letter-spacing: 2px;
    font-size: 2rem;
}

.logo-area p {
    color: #fff;
    margin-top: 5px;
    font-size: 0.9rem;
    opacity: 0.8;
}

/* --- 房间选择器 (默认桌面端样式) --- */
.room-selector {
    pointer-events: auto;
    position: absolute;
    right: 30px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column; /* 垂直排列 */
    gap: 15px;
    background: rgba(0, 0, 0, 0.5);
    padding: 20px;
    border-radius: 12px;
    backdrop-filter: blur(10px);
    border-left: 2px solid #d4af37;
    transition: all 0.3s ease;
}

.nav-btn {
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: white;
    padding: 12px 20px;
    border-radius: 6px;
    cursor: pointer;
    text-align: left;
    transition: all 0.3s;
    font-size: 1rem;
    white-space: nowrap; /* 防止文字换行 */
}

.nav-btn:hover, .nav-btn.active {
    background: #d4af37;
    color: #000;
    border-color: #d4af37;
    font-weight: bold;
    box-shadow: 0 0 15px rgba(212, 175, 55, 0.4);
}

/* --- 底部控制提示 (仅桌面端显示) --- */
.controls-hint {
    pointer-events: auto;
    display: flex;
    align-items: center;
    gap: 20px;
    background: linear-gradient(to right, rgba(0,0,0,0.8), transparent);
    padding: 15px;
    border-radius: 8px;
    color: #ccc;
    font-size: 0.9rem;
    max-width: fit-content;
}

.rotate-btn {
    background: rgba(255,255,255,0.1);
    border: 1px solid #aaa;
    color: #fff;
    padding: 5px 15px;
    border-radius: 20px;
    cursor: pointer;
}

/* 自定义热点图标交互 */
.pnlm-hotspot-base {
    transition: transform 0.2s;
}
.pnlm-hotspot-base:hover {
    transform: scale(1.2);
    z-index: 999;
}

/* =========================================
   📱 移动端适配 (Media Query)
   当屏幕宽度小于 768px (手机/竖屏平板) 时生效
   ========================================= */
@media (max-width: 768px) {
    
    .hotel-ui {
        padding: 15px; /* 减小边缘留白 */
    }

    /* 1. Logo 变小一点，避免遮挡太多 */
    h1 { font-size: 1.5rem; }
    .logo-area p { font-size: 0.8rem; }

    /* 2. 房间选择器移到底部 */
    .room-selector {
        top: auto;          /* 取消顶部定位 */
        bottom: 20px;       /* 靠下放置 */
        right: 50%;         /* 水平居中 */
        transform: translateX(50%); /* 修正居中偏移 */
        
        width: 90%;         /* 宽度占满屏幕 */
        flex-direction: row; /* 改为水平排列 */
        justify-content: space-between; /* 按钮均匀分布 */
        
        border-left: none;  /* 去掉左边框 */
        border-top: 2px solid #d4af37; /* 改为上边框 */
        padding: 15px 10px;
        gap: 8px;
        
        overflow-x: auto;   /* 如果按钮太多，允许左右滑动 */
    }

    /* 3. 按钮样式调整 */
    .nav-btn {
        padding: 10px;
        font-size: 0.85rem; /* 字体改小 */
        text-align: center;
        flex: 1; /* 让所有按钮等宽 */
    }

    /* 4. 隐藏底部操作提示 (手机直接滑就行，不需要提示) */
    .controls-hint {
        display: none; 
    }
}