var tipuesearch = {"pages": [{'title': 'week', 'text': 'week1-5 \n week6-9 \n week10-14 \n week15-18 \n', 'tags': '', 'url': 'week.html'}, {'title': 'week1-5', 'text': 'week1 \n 新建倉儲 \n \n \n week2 \n 開會影片 \n \n week3 \n CoppeliaSim User Manual \n translation Simulation ~ PDF \n \n \n \n translation\xa0 Simulation dialog ~ PDF \n \n downloads: \xa0\xa0 https://github.com/s40723241/cd2020/tree/master/downloads \n \n week4 \n week5 \n 說明任務一所負責之內容 \n \n', 'tags': '', 'url': 'week1-5.html'}, {'title': 'week6-9', 'text': 'week6 \n 進度報告 \n \n \n 下載這個軟體，它可用來錄製個人的螢幕內容且能同時錄製自己的頭像 \n OBS下載網址: https://obsproject.com/download \n 第二次直播會議 \n \n week7 \n 四輪車的基本外型設置 \n ※作業一 (4 輪 車) \xa0 \n *根據主題 0 和主題 1 的素材，您能否具體描述機械設計團隊，為了完成作業四輪機器人需要做些 什麼? \xa0 \n \xa0 四輪車馬達設定及鍵盤控制加速及轉彎 \xa0 \n \xa0 利用Vrep 實施模擬 \xa0 \n \n \xa0 步驟: \xa0 \n 1.先add<primitive shape< 導入車體形狀 \xa0 \n 且 導入後左方工作列因該會呈現下方的樣態 \xa0 \n \xa0 \n 2.調整位置 \xa0 \n 若需精準調整位置時可以，不須拖拉，可以直接輸入 \xa0 \n \xa0 \n 3.調整車體大小 \xa0 \n 可以依照下方圖示更改車體大小 \xa0 \n \xa0 \n 4.馬達調整功率 \xa0 \n 藉由勾選motor properties以啟動馬達，並可以藉由調整轉動速度和力矩達到所想要馬達轉動之效果，底下的lock motor when target velocity is zero 則可以使馬達速度為零時鎖定住馬達 \xa0 \n \xa0 \n 5.檢查碰撞 \xa0 \n 物件的動力學設定也必須要設定好，如下方所示物體的碰撞和物體的動態都必須打開，才能使剛剛設定好的馬達進行對輪胎的帶動 \xa0 \n \xa0 \n \n 貼上撰寫好的鍵盤控制轉彎程式 \n \n \n', 'tags': '', 'url': 'week6-9.html'}, {'title': 'week10-14', 'text': '', 'tags': '', 'url': 'week10-14.html'}, {'title': 'wee15-18', 'text': '\n \n \n', 'tags': '', 'url': 'wee15-18.html'}, {'title': 'About', 'text': '歐耶! \n 此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n 歐耶!', 'tags': '', 'url': 'Develop.html'}]};