var tipuesearch = {"pages": [{'title': 'week', 'text': 'week1-5 \n week6-9 \n week10-14 \n week15-18 \n', 'tags': '', 'url': 'week.html'}, {'title': 'week1-5', 'text': 'week1 \n 新建倉儲 \n \n \n week2 \n 開會影片 \n \n week3 \n CoppeliaSim User Manual \n translation Simulation ~ PDF \n \n \n \n translation\xa0 Simulation dialog ~ PDF \n \n downloads: \xa0\xa0 https://github.com/s40723241/cd2020/tree/master/downloads \n \n week4 \n week5 \n 說明任務一所負責之內容 \n \n', 'tags': '', 'url': 'week1-5.html'}, {'title': 'week6-9', 'text': 'week6 \n 進度報告 \n \n \n 下載這個軟體，它可用來錄製個人的螢幕內容且能同時錄製自己的頭像 \n OBS下載網址: https://obsproject.com/download \n 第二次直播會議 \n \n week7 \n 四輪車的基本外型設置 \n ※作業一 (4 輪 車) \xa0 \n *根據主題 0 和主題 1 的素材，您能否具體描述機械設計團隊，為了完成作業四輪機器人需要做些 什麼? \xa0 \n \xa0 四輪車馬達設定及鍵盤控制加速及轉彎 \xa0 \n \xa0 利用Vrep 實施模擬 \xa0 \n \n \xa0 步驟: \xa0 \n 1.先add<primitive shape< 導入車體形狀 \xa0 \n 且 導入後左方工作列因該會呈現下方的樣態 \xa0 \n \xa0 \n 2.調整位置 \xa0 \n 若需精準調整位置時可以，不須拖拉，可以直接輸入 \xa0 \n \xa0 \n 3.調整車體大小 \xa0 \n 可以依照下方圖示更改車體大小 \xa0 \n \xa0 \n 4.馬達調整功率 \xa0 \n 藉由勾選motor properties以啟動馬達，並可以藉由調整轉動速度和力矩達到所想要馬達轉動之效果，底下的lock motor when target velocity is zero 則可以使馬達速度為零時鎖定住馬達 \xa0 \n \xa0 \n 5.檢查碰撞 \xa0 \n 物件的動力學設定也必須要設定好，如下方所示物體的碰撞和物體的動態都必須打開，才能使剛剛設定好的馬達進行對輪胎的帶動 \xa0 \n \xa0 \n \n 貼上撰寫好的鍵盤控制轉彎程式 \n \n \n week8 \n 安裝三個模組 \n \n \n \n \n 利用Meet來錄製開會內容 \n \n \n week9 \n 期中考周 \n \n \n \n', 'tags': '', 'url': 'week6-9.html'}, {'title': 'week10-14', 'text': 'week10 \n . \n 建立Google API+專案 \n git clone\xa0 https://github.com/mdecourse/cd2020pj1 \xa0到自己的隨身系統 \n 登入gm帳號並開啟 https://console.developers.google.com \n 選擇區域點選後建立專案 \n 啟用API服務，選擇GOOGLE+ Domains API \n 點選憑證，點選設定同意畫面(設定為內部) \n 建立憑證(OAuth用戶端同意ID)，點選網路應用程式 \n 複製ID和密碼貼至SciTE並儲存 \n 進入網路用戶端1設定URL與重新導向的URL \n URL:https：// localhost：8443 \n 重新導向的URL:https://localhost:8443/login/google/ \n 利用leo開啟cd2020pj1.leo \n 點至@edit config.py更改名稱(和前面存檔的ID&密碼同名) \n 存檔， 按下ROC \n week11 \n \n \n \n \n \n \n \n \n \n \n week12 \n Vrep虛擬主機板 \n 下載Ubuntu和VirtualBox \n 開啟 VirtualBox，喜好設定新增網路 \n 匯入Ubuntu \n 設定網路-僅限主機介面卡 \n 密碼kmol2020 \n 輸入xterm&，輸入ls以顯示資料 \n 輸入cd coppeliasim4_rev4 \n 輸入cd CoppeliaSim_Edu_V4_4_0_0_Ubuntu18_04 \n 輸入ls，再輸入ls-l \n 輸入./cd\xa0coppeliaSim.sh開啟Vrep \n 開啟sdc.ttt檔 \n 開啟car_model.py並執行 \n 點選模擬 \n \n week13 \n IPV6伺服器連線設定 \n 1. 設定好網路連線下的host ip \n ( https://github.com/mdecourse/cd2020/blob/master/downloads/w13_ipv6_assignment.txt ) \n \n 2.設定網路的 ipv6 位置設定 \n 3.進入虛擬主機，指令輸入 cd tmp>cd cd2020pj1>git pull >cd docs> cd cmsimde \n 4.輸入 vi wsgi.py \xa0 \xa0 更改 host \n 5.設定好 putty \n 6.按 save\xa0\xa0 open 後，在 putty 頁面分別輸入兩次密碼 kmol2020 \n 7.開啟 Xming， 接著輸入 xterm& \n 8.在開啟的視窗中輸入 cd tmp>cd 2020pj1>cd docs>cd cmsimde>python3 wsgi.py \n 用 google 輸入網址 https://[2001:288:6004:17:2020:7241]:17443\xa0 ( 必須要用自己的 ip) \n 影片忘記錄了......拍謝 \n week14 \n 小組會議(第5次) \n 1.講解ipv6連線設定及ttt檔更改的新路徑 \n 2.虛擬主機及ubnutu bug解決方式 \n week15 \n 上周對於遠端連線之網路問題 \n debug的解決方式及圖片 \n 遠端連線ipv6及ipv4的設定流程 \n week16 \n 在學校做到晚上8點才做完......所以沒有影片 \n 使用IPV6來讓個人網站對外連線設定: \n 1.開啟ubuntu \n 2.git clone 自己倉儲後，下git submodule init .和git submodule update抓回cmsimde模組 \n 3.ifconfig複製ip並且開啟vi wsgi.py 將ip貼上 \n 4.將proxy關閉、設定網路中的IPV6位置，並且設定好ubnutu中的IPV6設定 \n 5.進入cmsimde後開啟python3 wsgi.py \n 6.輸入網址https://[2001:288:6004:17:2020:2:0:7241]:19443 (自己的 ip) \n', 'tags': '', 'url': 'week10-14.html'}, {'title': 'week15-18', 'text': '\n \n', 'tags': '', 'url': 'week15-18.html'}, {'title': 'assignments', 'text': '', 'tags': '', 'url': 'assignments.html'}, {'title': 'assignments1', 'text': '', 'tags': '', 'url': 'assignments1.html'}, {'title': 'portable system', 'text': '將可攜系統下的python 3.7.3系統更新至python 3.8.2 \n 1.先去GOOGLE SEARCH\xa0 PYTHON \xa0 (點這下載) \n 2.下載 Windows x86-64 executable installer \xa0 (點這下載) \n 3.載完點並 不要勾選pip選項，接著按下next選取放置資料夾 \n 4.在隨身系統下新增放置資料夾cd2020，並在cd2020下新建資料夾data，data<py382< wscite432<portablegit \n 5.下載SciTE系統 \xa0 full 64-bit download ，下載完後解壓縮至data下的wscite432 \n 6.在cd2020下建立新的start.bat及stop.bat \n \n 7.至 SciTE系統更改 start.bat及stop.bat \n \n \n 8. 載入MSYS2\xa0 msys2-x86_64-20190524.exe \xa0至data 9. 載入PortableGit\xa0 64-bit Git for Windows Portable \xa0至 portablegit 10 .裝入 pip ，另存新檔到data 11.測試 將python3.8.2版本，將少的模組下載回來 \n \n', 'tags': '', 'url': 'portable system.html'}, {'title': 'random grouping', 'text': '要 進行隨機分組及隨機點名，必須先了解程式裡導入的模組及在模組中所用的 \xa0 語法、迴 圈: request、ast.literal_eval、random、for迴圈 \xa0 \xa0 (1) \xa0 request模組:此模組是為了可以使用 \xa0 Python \xa0 來下載網頁上的資料，是以 \xa0 request模組建立適當的 \xa0 HTTP \xa0 請求，透過 \xa0 HTTP \xa0 請求從網頁伺服器下載 \xa0 指定的資料，分為兩種模式Post、Get。 \xa0 \n \xa0 上述我們將使用 Get 下載回來的資料存入到 a 變數，底下對於 a 變數我們能進行以下操作： \xa0 \n \n url \xa0 : 取得 請求網址 \xa0 \n status_code \xa0 : 伺服器 回應的狀態碼 \xa0 \n text \xa0 : 取得 網頁 HTML 原始碼 \xa0 \n \n 如遇上需要帶上 querystring 參數可以這樣使用： \xa0 參考 文獻: \xa0 https://ithelp.ithome.com.tw/articles/10206215 \xa0 \ufddfHYPERLINK "https://ithelp.ithome.com.tw/articles/10206215" (2) \xa0 ast模組 : \xa0 此 模組是python原始碼到位元組碼的一種中間產物，藉助ast \xa0 模組可以從語法樹的角度分析原始碼結構，其中的語法ast.literal_eval \xa0 是為了能夠安全地評估表達式節點或包含Python文字或容器顯示的字符 \xa0 串。提供的字符串或節點只能由以下Python文字結構組成：字符串、字 \xa0 節、數字、元組、列表、字典、集合、布林值、None。 \xa0 \n Compile函式 \xa0 \n 先簡單瞭解一下compile函式。 \xa0 \n compile( source, filename, mode[, flags[, \xa0 dont_inherit ]])\xa0 \xa0 \n \n source -- \xa0 字串或者AST（Abstract \xa0 Syntax \xa0 Trees）物件。一般可將整個py檔案內容file.read () 傳入 。 \xa0 \n filename -- \xa0 程式碼檔名稱，如果不是從檔案讀取程式碼則傳遞一些可辨認的值 。 \xa0 \n mode -- \xa0 指定編譯程式碼的種類。可以指定為 \xa0 exec, eval, single。 \xa0 \n flags -- \xa0 變數作用域，區域性名稱空間，如果被提供，可以是任何對映物件 。 \xa0 \n \n \n flags和dont_inherit是用來控制編譯原始碼時的標誌 。 \xa0 \n \n \xa0 參考 文獻: https://www.itread01.com/content/1544847254.html \xa0 \xa0 \ufddfHYPERLINK "https://www.itread01.com/content/1544847254.html" (3) \xa0 random模組:此模組用於生成偽隨機數，且有許多種用法，例如:隨機選取 \xa0 choice、隨機選取 \xa0 sample ( 一次選多筆 資料 ) 、 隨機調換順序 \xa0 shuffle (就 \xa0 地調換 順序) 、隨機取得亂數 random (0~1之間的隨機亂數)、隨機取得亂 \xa0 數 uniform \xa0 (可以 指定範圍)。 \xa0 \xa0 參考 文獻: \xa0 https://ithelp.ithome.com.tw/articles/10207483 \xa0 \n (4) \xa0 for迴圈 : \xa0 在處理資料的時候，時常會需要重複執行某些相同的步驟；而迴 \xa0 圈 \xa0 (loop ) 的作用是讓指定的某段敘述在條件符合的情況下一直重覆執行， \xa0 是程式設計中很重要的一種控制結構，且分為兩 類: for、while \xa0 \n \xa0 ○ \xa0 for迴圈基本 語法: for \xa0 變數 \xa0 in \xa0 list、字串、range \xa0 ○ \xa0 while迴圈基本 語法: while \xa0 布林值 \xa0 \xa0 \xa0 \xa0 for迴圈及while迴圈 比較: \xa0 for迴圈比較適用在已知迴圈數的問題，而 \xa0 while迴圈則適用在「無法預知迴圈數」的問題上 。 \xa0 \n 語法 - for \xa0 \n \n A \xa0 、 D \xa0 都省略時， for迴圈 \xa0 跟 \xa0 while迴圈 \xa0 執行起來完全一樣。 \xa0 \n \n for ( [ A.] 一開始先做什麼事 \xa0 ; [B.] 條件式 \xa0 ; [D.] 等C每作完一次，就做什麼事 \xa0 ){\xa0\xa0\xa0 [C.] 當B條件成立時，就重覆做的事 ...} \xa0 \n 通常A、B、D所用到的變數會是一致的。 \xa0 \n \xa0 執行起來流程如下 \xa0 \n 先做 A \xa0 ==> \xa0 檢查 B 條件，成立就做 C ，接著做 D \xa0 \n ==> \xa0 檢查 B 條件，成立就做 C ，接著做 D \xa0 \n ==> \xa0 檢查 B 條件，成立就做 C ，接著做 D \xa0 \n ... \xa0 \n ... \xa0 \n ==> \xa0 檢查 B 條件，成立就做 C ，接著做 D \xa0 \n ==> \xa0 檢查 B 條件，不成立離開 \xa0 \n \xa0 \n 範例1 - 班級名條 \xa0 \n code \xa0 \n \n # include <iostream> using \xa0 namespace \xa0 std ; int \xa0 main( ){\xa0\xa0\xa0 \xa0 int \xa0 n;\xa0\xa0\xa0 \xa0 int \xa0 i ;\xa0\xa0\xa0 \xa0 cin \xa0 >> n;\xa0\xa0\xa0 \xa0 for ( \xa0 i = 1 \xa0 ; \xa0 i <=n ; \xa0 i =i+ 1 \xa0 )\xa0\xa0\xa0 { \xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0 cout \xa0 << \xa0 "No." \xa0 << \xa0 i \xa0 << \xa0 endl ;\xa0\xa0\xa0 }\xa0\xa0\xa0 \xa0 return \xa0 0 ;} \xa0 \n for \xa0 vs \xa0 while \xa0 \n \n input \xa0 \n 10 \xa0 \n output \xa0 \n No.1No.2No.3No.4No.5No.6No.7No.8No.9No.10 \xa0 \n \xa0 範例2 - 發射倒數 \xa0 \n \n \n 也可以是做完一次就減少 i \xa0 \n \n # include <iostream> using \xa0 namespace \xa0 std ; int \xa0 main( ){ \xa0\xa0\xa0 \xa0 int \xa0 i ;\xa0\xa0\xa0 \xa0 for ( \xa0 i = 5 \xa0 ; \xa0 i >= 1 \xa0 ; \xa0 i =i- 1 \xa0 )\xa0\xa0\xa0 { \xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0 cout \xa0 << \xa0 i \xa0 << \xa0 "... " \xa0 << \xa0 endl ;\xa0\xa0\xa0 } \xa0\xa0\xa0 \xa0 cout \xa0 << \xa0 "Go!" \xa0 << \xa0 endl ;\xa0\xa0\xa0 \xa0 return \xa0 0 ;} \xa0 \xa0 參考 文獻: \xa0 https://www.csie.ntu.edu.tw/~b98902112/cpp_and_algo/cpp02/for_loop.html \xa0 \n', 'tags': '', 'url': 'random grouping.html'}, {'title': 'Four wheel car', 'text': 'BubbleRob tutorial :\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \n 在此教程中會讓我們設計簡單的BubbleRob機器人並進行一些基礎的模擬操作，而大二上我們其實就有實際的以v-rep操作過這個教程，在這個教程中的說明包括了如何建造模型機器人主體、車輪及後方支撐滑塊，還有如何建造及設置障礙物，以及設定好的距離傳感器後使其去感測並避開我們所設置的障礙物，而最重要的要點是如何去設計指令讓傳動器依照我們所想要的方式去做動，且當距離感測器偵測到障礙物時才能使機器人迅速閃避障礙物，另外還有視覺辨識器，使機器人在移動時，讓我們能夠觀測到機器人行徑方向之路況。 \n \n translation Simulation ~ PDF \n \n \n \n translation\xa0 Simulation dialog ~ PDF \n \n \xa0 \n 在本教程中，我們旨在擴展BubbleRob的功能，以使他/她遵循地面上的規則。確保您已經閱讀並理解了第一個BubbleRob教程。本教程由Eric Rohmer提供。 \n 在CoppeliaSim的安裝文件夾中的tutorials / BubbleRob中加載第一個BubbleRob教程的場景。與本教程相關的場景文件位於tutorials / LineFollowingBubbleRob中。 下圖說明了我們將設計的仿真場景： \n \n 我們首先創建3個視覺傳感器中的第一個，並將其附加到bubbleRob對象。選擇[菜單欄->添加->視覺傳感器->正交類型]。通過雙擊場景層次中新創建的視覺傳感器圖標來編輯其屬性，並更改參數以反映以下對話框： \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0\xa0 \n 視覺傳感器必需面向地面，因此選擇它，然後在“方向”對話框中的“方向”選項上，將“ Alpha-Beta-Gamma”項設置為[180; 0; 0]。 \n 我們有幾種可能性可以讀取視覺傳感器。由於我們的視覺傳感器只有一個像素，並且操作簡單，因此我們只需查詢視覺傳感器讀取的圖像的平均強度值即可。對於更複雜的情況，我們可以設置視覺回調函數。現在，複製並貼上視覺傳感器兩次，並將其名稱調整為leftSensor，middleSensor和rightSensor。將bubbleRob設置為其關係（即，將其附加到bubbleRob對象）。現在，您的傳感器在場景層次中應如下所示： \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \n 讓我們正確放置傳感器。為此使用位置對話框，在位置選項卡上，並設置以下絕對坐標： 左傳感器：[0.2; 0.042; 0.018] 中間傳感器：[0.2; 0; 0.018] 右傳感器：[0.2; -0.042; 0.018] 現在讓我們修改環境。我們可以移去BubbleRob前面的幾個圓柱體。接下來，我們將構建機器人將嘗試遵循的路徑。從現在開始切換到頂視圖：通過頁面選擇器工具欄按鈕選擇頁面4。然後點擊[菜單欄->添加->路徑->圓圈類型]。使用鼠標啟用對象移動。您可以通過兩種方式調整路徑的形狀： 選擇路徑（並且只有路徑）後，按住Ctrl並點擊其控制點之一。然後可以將它們拖動到正確的位置。 選擇路徑後，進入路徑編輯模式。在那裡，您可以靈活地調整各個路徑控制點。 \n 一旦對路徑的幾何形狀滿意（您隨時可以在以後的階段對其進行修改），請選擇它，然後在路徑屬性中取消選中“顯示點的方向”，“顯示路徑線”和“顯示路徑上的當前位置”。然後點擊顯示路徑整形對話框。這將打開路徑整形對話框。點擊啟用路徑變更，將類型設置為水平線段，並將縮放因子設置為4.0。最後將顏色調整為黑色。我們必須對路徑進行最後一個重要的調整：當前，路徑的z位置與地板的z位置重合。結果是有時我們會看到路徑，有時會看到地板（這種效果在openGl行話中被稱為“ z-fighting”）。這不僅影響我們所看到的，而且還會影響視覺傳感器所看到的。為了避免與z戰鬥有關的問題，只需將路徑對象的位置向上移動0.5毫米即可。 \n 最後一步是調整BubbleRob的控制器，使其也將遵循黑色路徑。打開附加到bubbleRob的子腳本，並將其替換為以下代碼： \n \n \n \n \n function speedChange_callback(ui,id,newVal)\n    speed=minMaxSpeed[1]+(minMaxSpeed[2]-minMaxSpeed[1])*newVal/100\nend\n\nfunction sysCall_init()\n    -- This is executed exactly once, the first time this script is executed\n    bubbleRobBase=sim.getObjectAssociatedWithScript(sim.handle_self)\n    leftMotor=sim.getObjectHandle("leftMotor")\n    rightMotor=sim.getObjectHandle("rightMotor")\n    noseSensor=sim.getObjectHandle("sensingNose")\n    minMaxSpeed={50*math.pi/180,300*math.pi/180}\n    backUntilTime=-1 -- Tells whether bubbleRob is in forward or backward mode\n    floorSensorHandles={-1,-1,-1}\n    floorSensorHandles[1]=sim.getObjectHandle("leftSensor")\n    floorSensorHandles[2]=sim.getObjectHandle("middleSensor")\n    floorSensorHandles[3]=sim.getObjectHandle("rightSensor")\n    -- Create the custom UI:\n        xml = \'<ui title="\'..sim.getObjectName(bubbleRobBase)..\' speed" closeable="false" resizeable="false" activate="false">\'..[[\n        <hslider minimum="0" maximum="100" onchange="speedChange_callback" id="1"/>\n        <label text="" style="* {margin-left: 300px;}"/>\n        </ui>\n        ]]\n    ui=simUI.reate(xml)\n    speed=(minMaxSpeed[1]+minMaxSpeed[2])*0.5\n    simUI.setSliderValue(ui,1,100*(speed-minMaxSpeed[1])/(minMaxSpeed[2]-minMaxSpeed[1]))\nend\n\nfunction sysCall_actuation()\n    result=sim.readProximitySensor(noseSensor)\n    if (result>0) then backUntilTime=sim.getSimulationTime()+4 end\n\n    -- read the line detection sensors:\n    sensorReading={false,false,false}\n    for i=1,3,1 do\n        result,data=sim.readVisionSensor(floorSensorHandles[i])\n        if (result>=0) then\n            sensorReading[i]=(data[11]<0.3) -- data[11] is the average of intensity of the image\n        end\n        print(sensorReading[i])\n    end\n\n    -- compute left and right velocities to follow the detected line:\n    rightV=speed\n    leftV=speed\n    if sensorReading[1] then\n        leftV=0.03*speed\n    end\n    if sensorReading[3] then\n        rightV=0.03*speed\n    end\n    if sensorReading[1] and sensorReading[3] then\n        backUntilTime=sim.getSimulationTime()+2\n    end\n\n    if (backUntilTime<sim.getSimulationTime()) then\n        -- When in forward mode, we simply move forward at the desired speed\n        sim.setJointTargetVelocity(leftMotor,leftV)\n        sim.setJointTargetVelocity(rightMotor,rightV)\n    else\n        -- When in backward mode, we simply backup in a curve at reduced speed\n        sim.setJointTargetVelocity(leftMotor,-speed/2)\n        sim.setJointTargetVelocity(rightMotor,-speed/8)\n    end\nend\n\nfunction sysCall_cleanup()\n\tsimUI.destroy(ui) end \n \n \n \n \n 您可以輕鬆地調試以下視覺傳感器的生產線：選擇一個，然後在場景視圖中選擇[右鍵->添加->浮動視圖]，然後在新添加的浮動視圖中選擇[右鍵->視圖- ->將視圖與選定的視覺傳感器關聯]。 \n CoppeliaSim \n 外部控制器教程 在CoppeliaSim中，有幾種方法可以控制機器人或仿真： 最方便的方法是編寫一個子腳本來處理給定機器人或模型的行為。這是最方便的方法，因為子腳本直接附加到場景對象，它們將與相關的場景對像一起復制，它們不需要使用外部工具進行任何編譯，它們可以在線程或非線程模式下運行，它們可以通過自定義Lua函數或Lua擴展庫進行擴展。使用子腳本的另一個主要優點是：與本節中提到的後3種方法（即使用常規API）一樣，沒有通信延遲，並且子腳本是應用程序主線程的一部分（固有的同步操作）。 \n \xa0\xa0\xa0 \xa0 可以控制機器人或模擬的另一種方法是編寫插件。插件機制允許使用回調機制，自定義 Lua 函數註冊，當然還可以訪問外部函數庫。插件通常與子腳本結合使用。使用插件的主要優勢還在於，與本節中提到的後 3 種方法（即使用常規 API ）一樣，沒有通信延遲，並且插件是應用程序主線程的一部分（固有的同步操作）。插件的缺點是：它們的編程更加複雜，並且也需要使用外部編譯。 \n \xa0\xa0 \xa0 控制機器人或模擬的第三種方法是編寫依賴於遠程 API 的外部客戶端應用程序。如果您需要從外部應用程序，機器人或另一台計算機運行控制代碼，這是一種非常便捷的方法。遠程 API 有兩個版本：基於 B0 的遠程 API 和舊版遠程 API 。 \n \xa0\xa0\xa0 \xa0 控制機器人或仿真的第五種方法是通過 ROS 節點。 \xa0 ROS 與遠程 API 相似，是使多個分佈式進程相互通信的便捷方法。儘管遠程 API 非常輕巧且快速，但它僅允許與 CoppeliaSim 通信。另一方面， ROS 允許幾乎將任意數量的進程相互連接，並且提供了大量兼容的庫。 \n \xa0\xa0\xa0\xa0 \xa0 控制機器人或模擬的第六種方法是通過 BlueZero （ BØ ）節點。與 ROS 類似， BlueZero 是使多個分佈式進程相互通信的一種便捷方法。 \n \xa0\xa0\xa0\xa0 \xa0 控制機器人或模擬的第七種方法是編寫一個外部應用程序，該應用程序通過各種方式（例如管道，套接字，串行端口等）與 CoppeliaSim 插件或 CoppeliaSim 腳本進行通信。 \n', 'tags': '', 'url': 'Four wheel car.html'}, {'title': 'assignments2', 'text': '', 'tags': '', 'url': 'assignments2.html'}, {'title': 'IndustrialAndEngineeringProductDesignCollaboration', 'text': "協同產品設計過程 \xa0 \n 本研究旨在闡明工業設計師和工程設計師如何協作 \xa0 \n 這種聯盟如何反映設計過程。我們與來自六個消費產品製造商的34名工業和工程設計師進行了有關實際產品設計項目的深入採訪。 \xa0 \n 首先 從訪問數據中識別出各個設計過程。 其次 ，我們然後使用鑲嵌方法將設計過程進行比較並合併為協作過程。 最後 ，我們簡化了協作流程，以創建具有代表性的流程模型。 \xa0 \n 結果 ，我們發現了 四種類型 的典型協同產品設計流程及其特徵： \xa0 \xa0 \n E類型1 ：由ID主導的概念驅動過程， 類型2 ：由ID主導的內外聯合過程， 類型3 ：由ED主導的內在先流程， 類型4 ： ID＆ED協同流程 。 \xa0 \n \xa0 工業和工程設計師之間 \xa0 \n 它經常被認為工程設計人員使用一個'向外接近 \xa0 電子商務 \xa0 發展從功能外觀“，而工業設計師遵循'向內方法 \xa0 E \xa0 從外觀上的功能。 \xa0 \n 基於這些概念，提出了以下 兩種設計策略 ：一種是“ 由內而外 ”的策略，定義為首先設計內部工作部件，從而限制了外部形狀，另一種是“ 由外而內 ”的策略。 \xa0 \n 這些設計策略涉及公司應在特定條件下為特定目的採取的組合設計過程。但是，從經驗證據中很少了解到這兩種策略如何在工業項目中應用。很少有嘗試從工程設計和工業設計的綜合角度來看待設計過程。 \xa0 \n \xa0 本文有兩個目標 \xa0 \n 闡明在實踐中應用的原始協作產品設計過程的形式；其次，確定在不同條件下用於不同目的的不同類型的過程。為此，我們對六家消費產品製造商的工業設計師和工程設計師進行了深入採訪。我們使用“確定了每個公司的產品設計過程鑲嵌法”，其中結合了從訪談數據中提取的各個設計過程以完成一個協作過程。結果，我們確定了 四種 典型的協作產品設計流程及其特徵。\xa0 \xa0 \n 本文包括三個部分：第一部分詳細介紹了研究方法。第二部分介紹了典型的協作產品設計過程及其特徵。最後，它總結了結果，並討論了對設計文獻的影響和貢獻。 \xa0 \n \xa0 Berends，Reymen，Stultiens和Peutz（2011） \xa0 對五家公司的設計過程進行了調查。 \xa0 Kleinsmann和Valkenburg（2003） \xa0 收集了有關工業中協同設計過程的故事，並確定了協同設計項目的關鍵主題和情節。 \xa0 \xa0 \n 追溯性賬目的不可靠或不准確 （ Ackroyd＆Hughes，1981年 ） \xa0 \n 我們採用了三個標準來選擇研究目標：（1）多家公司類似的產品領域； （2）工程和工業設計部門的多個參與者； （3）在整個產品開發週期中已經完成的項目。 \xa0 \n 大多數產品開發活動需要一組輸入 \xa0 \n 基於階段的模型由旨在執行任務的動作和旨在評估執行任務的結果的決策組成；其中完成構成進展到下一個階段 \xa0 \n 初步輸出 ，狀態報告等進行生產（ Browning等人，2006年 ）。這一觀點得到了有關設計過程和組織的大量文獻的支持（例如， \xa0 Burns＆Stalker，1961； Clark，1991； Hubka＆Eder，2012 ）。 \xa0 Ulrich和Eppinger（2012） \xa0 將其描述為最終結果所必需的信息，該信息被注入以將當前設計問題轉換為下一個問題以降低不確定性，從而產生輸出，直到形成最終結果為止。這被建模為將功能規範（輸入）轉換為偽影規範（輸出）的過程。指出，從信息處理的角度進行過程建模無法捕獲完整的信息流，因為人們對交互的了解。他們認為，確定組織單位之間的相互作用的重要性，因為它們會引起建立可交付的流程模式的活動之間的依賴。決定性，過程建模的在此透視基本元件被概括為）'的信息流與IPO（輸入端 E 方法 e 輸出）REP-resentation和'相互作用組織單位的'（人，團隊，公司等“。\xa0 \xa0 \n 從狀態轉換的角度來看， \xa0 Reymen（2001） \xa0 將設計過程描述為通過在每個階段執行任務並評估設計活動將狀態從一種狀態轉移到另一種狀態的過程。這是台門車型，在設計活動發生在舞台的每一個階段，設計輸出的設計審查，從而作出決定之間是否進入下一個階段，重複當前階段或拒絕該項目的進行評估一致 ，大多數基於階段的模型都提出了這種觀點（ Wynn＆Clarkson，2005 ）。基於階段的模型由旨在執行任務的動作和旨在評估執行任務的結果的決策組成；其中完成構成進展到下一個階段 \xa0 （j̈ansch＆Birkhofer， 2006; Roozenburg ＆交叉 ，1991）。 除此之外，當從一個階段跳到另一個階段或在子過程之間鏈接時，伴隨輸入和輸出的信息流就會發生 \xa0 \n \xa0 “任務” \xa0 來表示項目的初始起點，不同於在每個階段執行的“任務”。但是，這兩個術語的用法類似，用以表示執行設計工作，因此，人們對相互連接和處理任務的設計過程達成了普遍共識（ Dorst，2008年 ）。\xa0 \xa0 \n 從狀態轉換的角度來看，有兩個活動：執行任務和評估結果。通常，評估會在相對較短的時間內進行，以決定“前進，重複或下降”。因此，我們將這些類型的活動（評估，設計審查，檢查，決策）稱為“事件”。目前，我們有兩個編碼類別： “任務”和“事件”。總之，我們可以用四個編碼類別對設計過程進行建模。 \xa0 “任務”，“事件”，“信息流”和“交互” ，並且可以用階段的連接來表示。此時，的設計過程的一個階段可以用來表示'輸入端 E 任務（設計活性 ）E 事件（deci-錫永製作） 在線 輸出“。以下描述瞭如何使用以上四種編碼類別對過程元素進行編碼。\xa0 \xa0 \n \xa0 任務 ：清除設計人員執行的任務，例如“想法草圖”，“ 3D建模”等。 “是的，我做的草圖用圓珠筆來表達我的想法。對其進行少量著色或對其進行掃描以在Photoshop上進行修飾。'我們將其編碼為帶有“想法草圖”標籤的任務類別。 事件：完成特定任務後，將進行一個事件（決策），從而導致下一個動作。一位受訪者說； '我們去樣機公司製造原型，並帶走所有兩個或三個原型。與他們舉行了一次模擬評估會議。工程師們聽老闆的批評。老闆說就是這樣，那就是，如果工程師有不同的想法，他們會提供意見。最後一個被選中。 我們在事件類別中使用標籤“模擬評估會議”對此進行了編碼。\xa0 \xa0 \n 信息流 ：當任務或事件發生時會生成信息流。它總是伴隨著輸入和輸出。一位受訪者說；實際上，我們根據工程設計人員提供的規范進行工作。直到有事情出現，我們才開始工作。這說明工業設計師從工程設計師那裡接收到了“規格數據”作為輸入，他們開始使用他們的工作。我們將此“規範數據從ED編碼為ID”。另一個摘錄是：選擇一個後，我們會將模型的3D數據傳遞到工程部門。我們發送“ STEP”文件，然後使用“ UG”開始設計。這說明他們將3D CAD數據作為設計活動的輸出發送給了工程設計人員，這些輸入成為了後續工程設計活動的輸入。我們對“從ID到ED的3D CAD數據”進行了編碼。 \xa0 交互 ：發生任務或事件時，兩組經常交互。例如，當工業設計師檢查是否可以修改內部空間時，工程設計師通過提供相關信息為他們提供建議。在這種情況下，會發生激烈的互動，工程設計師將充當“顧問”。情況就是這樣； “他們解釋說”這應該放在這裡和應擺在那裡“。然後，我們修改尺寸和位置，然後再次詢問它們是否可以減小2毫米的間隙。如果他們說“是”，我們會將一個部分壓平。我們將其編碼為“ ED到ID的顧問角色”。 \xa0 \n 我們從每個轉錄的訪談數據中識別出流程要素。我們盡可能用參與者自己的單詞標記它們。我們將現場說明用作補充數據源。在此過程中，我們按時間順序排列並連接了編碼元素，以構建部分設計過程。 該方法被廣泛採用以可視化工業過程模型。 \xa0 \n \xa0 輸出研究結果 \xa0 \n \n \xa0 流程塊中的流程從初始輸入開始，並在內部的各個小階段中運行。迭代或反饋可能在塊內的各個小階段之間發生。最後，他們對最終結果做出最終決定。這是一個里程碑，指示該階段將跳到下一階段。例如，在圖3的藍色方框中，此塊的主要工作是開發執行六個小階段的設計概念。當他們處於渲染階段時，如果在渲染評估事件中不滿意渲染結果，則可以返回到構思草圖階段。 \xa0 \n \xa0 \n 在最後階段，設計模型作為結果由高層管理人員確認，然後跳至“產品計劃會議”。在前一個結果進入下一個塊的輸入之後，兩個過程塊之間的過程流幾乎沒有機會被逆轉。跨團隊通常進行最終設計，並由高層經理在每個工作組中批准。回到上一個區塊意味著它無法滿足市場時間表。因此，應該由最高管理層對此事做出決定。 \xa0 \n \xa0 \n 成果輸入 \xa0 \n \xa0 \n 工業設計師的設計活動稱為“ Concept Design-I”，而工程設計師的設計活動稱為“ Concept Design-E”。 \xa0 \n 圖5是圖3的簡化版本。圖3中的彩色框使用了圖5中的相同彩色框進行了簡化。圖3中的藍色框變為“ Concept Design-I”。圖3中的“產品計劃會議”定義為“產品計劃”，並以細長的六邊形可視化。由於它是一個單獨且獨特的設計活動，因此被確定為單個階段。在紅色塊內部，有兩個並行的處理塊；右側的“ Concept Design-E”（紅色的小方框）是“主流程塊”，左側的“形狀修改”（黃色）是“對應的塊”。這兩個塊不視為單獨的階段，因為它們與紅色大塊內的起點到終點相連。這樣，兩個設計師團隊之間的互動就很強。為了區分兩個平行的塊，我們用粗實線表示主塊，並用淺實線表示相應的塊。在綠色塊中，由於所有12個流程之間的設計活動都沒有什麼區別，因此我們將詳細設計，測試和生產的兩個順序流程塊合併為一個。因此，在本研究中我們將它們視為一個階段。當綠色方框中的設計過程繼續進行時，工業設計師會根據工程設計師的要求或他們自己的設計檢查目的不時做出反應。他們通常將這些活動稱為“跟進”，與主要任務有所不同。這些活動顯然存在，但不屬於流程塊。它們是如圖3所示的離散過程元素，因此用虛線表示。為了幫助視覺理解，實心箭頭，雙向寬箭頭和單個方向寬箭頭分別表示過程流，相互交互和單向交互。 \xa0 \n", 'tags': '', 'url': 'IndustrialAndEngineeringProductDesignCollaboration.html'}, {'title': 'DesignCollaborationBetterProducts', 'text': '通過協同設計創造更好的產品-心態，工具，過程 \n 今日的數位產品比以往都更加複雜。創建它們需要多個團隊， 成員，每個成員都有自己的一套技能和專業知識。以我們的客戶Savvy為例， 與以下人員有緊密合作：產品經理，UX設計人員，視覺設計師，開發人員，產品 顧問和行銷人員。 \n 我們使用協同設計來處理這種複雜的工作。並且正確完成，協同設計可幫助 每個專家都有共同的心態，流程和工具，更快共同建立更好的產品， \n 我們編寫了此資源以幫助其他應用程式創建者採用協同設計文化和流程。 學習為什麼協同設計對於創造引人注目的產品以及經驗很重要。 我們還將深入探討協同設計的心態和文化、工具的要素， 進行有效的協同設計，以及實際工作中的協同設計的例子。 \n 什麼是協同"設計" \n 在進入正題之前，我們需要同時了解什麼是協同設計以及什麼不是。 簡單來說，協同設計就是在設計優先的環境中進行協作。 但由於設計的本質，特別是我們在Savvy所做的設計，設計協作趨向於 超越人們通常認為的協作。 \n 通常將協作定義為兩個或兩個以上的人共同完成一項任務 為了實現共同的目標，協同設計甚至包含更多。 \n 協同設計包括更多不同技術，艱鉅挑戰和更大規模的人員，這些都對目標 具有深遠的影響。 \n 您可能將協作視為兩個人用心在一個藝術品上。它只需要溝通、團隊合作同心協力。 協同設計是指一組策展人精心設計訪問者的體驗。 他們選擇藝術品，選擇在何處以及如何懸掛藝術品， 它所居住的房間（以及房間的照明，家具），甚至前面的房間和建築物同整為一個藝術品 \n 為什麼協同設計很重要 \n 你可以在沒有協作的情況下設計產品，但是需要一個協同設計過程才能完成 好的產品。這就是協同設計如此重要的原因。 \n 我們不僅為客戶構建應用程序。Savvy構建了複雜的多平台體驗和內部系統， 甚至在某些情況下還包括整個品牌和業務。為此，我們為了利用專業知識 跨足多個核心項目：策畫、設計、開發和行銷。每個項目都涉及了各成員各自的技能和專長。 \n 協同設計將這些思想融合在一起，將他們各自的專業知識結合在一起創建解決方案， 以解決共同目標的所有方面。而不是以一個人遇到問題角度來看， 協同設計將這個問題擺在所有專家面前，迫使他們考慮新觀點和可能性。 \n 例如，我們在設計過程的早期就讓我們的開發人員參與進來，以確保我們能盡快解決技術問題的機會和局限性。 這使我們可以利用並提升我們的技術能力，同時進一步消除在處理程序成本高昂的障礙。 它還限制了一個人可以單獨處理工作的可能，從而使工作保持公開狀態並強調用戶需求和產品目標。 \n 培養協同設計心態 \n 在設計過程中建立有效的協同時，正確的思維方式有好的幫助。 它訂定了誰進行協作並如何進行以及達到何種目的的準則。 \n 與每個人合作 \n 設計師有時會認為不是設計師的人沒有資格提供良好的產品反饋。 但是出色的設計不只是視覺效果。它涵蓋了有關產品的所有內容，從它的品牌、工程技術及其成長 \n 協同設計包含許多人，每個人都有自己的觀點和優勢。它給大家一個發聲的平台。 這些新鮮的觀點為設計師提供了更多信息。觀點使設計師能夠對其他設計有永久影響去選擇做出正確的開發和營銷選擇。 \n 與客戶的協作與與其他設計師和團隊成員的協同一樣重要。 在Savvy，我們讓客戶參與其產品的整個創作過程。我們花些時間來解釋選項，並與客戶進行討論以確保我們 了解他們的想法。 \n 這使我們能夠及早獲得客戶的認可，並從明確的起點和終點開始工作。 更大的曝光量並不是什麼大驚喜，第一次沒有人知道他們正在做什麼。 \n 客戶合作意味著無需花費高昂成本、後退和不必要的會議就能更快地獲得更完整的產品。 \n 設計很容易陷入角色而忽略全局。通過更早地參與更多的人與隊友建立更緊密的聯繫並共同承擔責任， 以及對產品成功的期待。這些能夠創建一個更加開放和透明的流程以及更緊密聯繫和投入的團隊。 \n 合作是持續性的 \n 客戶向我們提出了複雜的挑戰和目標。當然不用說，我們也繼續努力與我們的客戶進行長達數月甚至數年的交流， 並積累了過去的大量知識決策，研究和其他有價值的環境。 \n 通過採用上下文優先的方法，你可以確保每個人都處於最高知識水平。 這樣，他們就可以在產品上做出最明智的決定。 為了做到這一點，在Savvy 我們通過引入所有團隊成員儘早記錄和保存會議內容， 建立一些重疊的地方讓下一個團隊成員在過程就像客戶一樣。 \n 在個案協作的基礎上，上下文也同樣重要。請遵循以下準則以保持協作中的上下文優先： \n 在顯示你的工作之前提供脈絡。如果您正在工作，你的工作是否出現在螢幕上提供信息， 你可能因為這樣失去了聽眾的注意力。 \n 你必須描述您要解決的問題或要達到的目標。 \n 介紹與當前問題相關的工作。解釋你的想法以及為什麼要這麼做的某些決定。 \n 具體說明你要反饋的內容。 \n 合作是開放、誠實和無畏的 \n 將你的工作（自己）放在協同設計並不容易。情緒會阻礙提供開放和誠實的反饋， 尤其是當你擔心會傷害他人的感受時。 \n 在Savvy這並不意味著在協同中沒有情感的位置。感覺如何在設計中很重要。 我們為有情緒在決策中有情緒的人創建一個環境。因為離開談話可能會抹消潛在的想法或解決方案。 充其量，僅提供完整圍繞事實和數據進行務實的討論是沒有的。 在最壞的情況下，它可能是誤導或提供虛假的敘述。 \n 我們的團隊還相信，不要害怕提供反饋。這意味著了解需要解決的問題以及客戶的品牌和目標。 這也意味著要問很多提問以發現相關思想或幫助指導決策。 \n 嘗試以探索性和指導性的方式提出反饋意見，以建立並改善工作而不是拆散。 \n 您的反饋意見應具有建設性。與其說你不喜歡什麼，不如說反饋以指出您要幫助解決的問題。 在以下方面提供可行的步驟改善工作，或者至少改善你的思維背後的理由。 而且不要忘記表達你喜歡什麼以及為什麼。 \n 合作不僅僅是新的想法 \n 開放並接受協作反饋是一回事，解析這些想法是另一回事並將它們用作激發自己的催化劑。 這是一項一直不斷發展起來的能力。一種實踐方法是成為更好的聽眾。 \n 通常，在與他人交談時，我們會更多地考慮接下來要說的內容比起別人在說什麼，這會影響反饋過程 尤其是在設計中，因為我們在聽到其他意見或解決方案時通常都知道自己要說什麼。 \n 當您選擇先聆聽然後再做出反應時，它可以讓您完全理解反饋 有人在解說並讓你更深入他們使用的觀點是什麼和他們來自哪裡？ 很有可能這是你在創建過程。通過聽取接受並理解反饋的上下文和推理， 正在向更多的視角，思維方式和體驗方式開放你的設計。 然後，您可以針對挑戰目標和用例測試這些新觀點。你可以設計用於它們是否更適合用戶。 \n 當所有協作者都在積極聆聽時，更容易接受反饋。 最終，提供良好反饋的技能來自學習如何獲得反饋。當我們做一個 努力成為更好的聽眾，我們也發現自己變得更加謙虛，並成為更好設計師。 \n 尋找和使用正確的設計協同工具 \n 正確的工具在增強團隊的設計協同思維方面大有幫助。 在這部分，你會了解如何找尋協同工具。我們也會根據你的經驗適合的協同工具。 \n 選擇合適的工具 \n 有效的協同工具為協同者消除了所有障礙，使他們在工作上能夠快速輕鬆地連接與互動。 這將重點放在提供反饋上。它們還允許其他人在不破壞原始設計的情況下進行協同。 \n 過去，我們使用依賴於提供基本版本控制的工具，而不是真正的協同功能。 例如，設計人員將保存一個Sketch文件並將其上傳到Dropbox。 然後，另一個團隊成員將下載它，進行處理，然後重新上傳。文件在他人的手上時沒有簡單的方法進行更改。 我們嘗試了與Github類似的方法，實踐證明，該工具非常適合管理代碼庫，但在迭代設計工作中卻不那麼重要。 不用說，這些版本控制流程使我們的協同更加耗時、令人困惑，而且不合作性。 \n 但是現在我們根據協同類型從多種更高級的工具中進行選擇並想要實現。 \n FIGMA \n 這是一個協同優先的共享工作區工具。 Figma非常適合在其中有多個人設計文件的相同區域。 你可以同時觀看成員設計或在同一設計上一起工作。 \n 優點: \n Figma減少了個人在獨自一人工作的能力 \n 無需添加不必要的修飾或創建靜態的可傳送結果實現協同。所以你無需更改工作流程即可展示設計 。 \n 它可以輕鬆地在本機環境中查看並與之互動，並隨意進行調整。 \n 何時使用：文檔編輯，高保真原設計檔，即時協同和隨時改變的客戶想法， 通過一系列螢幕的內容來解釋並獲得有關設計方向的反饋。 \n MARVEL \n 雖然Figma傾向於感覺更自由和靈活，但Marvel允許更標準化的形式合作。 這也使我們的客戶可以輕鬆地與我們合作。 \n 優點: \n Marvel是一個更簡潔，更型式和專注的空間，非常適合與非設計合作團隊成員。 \n 它剔除了客戶需帳戶的支付或為了進行工作必需深入了解工具的所有需求。 \n 客戶可以下載視窗並通過Marvel在設備環境中查看它們的運行情況。 \n 使用時間：與客戶和開發人員一起呈現更多最終設計工作。 （學習比較Marvel與其他原型工具。） \n 其他協同工具 \n Zeplin是一個有用的傳遞工具，可讓開發人員深入了解設計工作的細節。。 （我們在這裡更深入地討論Zeplin。） \n Quip是集思廣益和產品/程式文件的絕佳平台。我們用它來記錄並組織團隊成員在一個專案 工作時需要了解的所有背景和知識。對於集思廣益而不是視覺關注的新想法也很有用。 \n 請注意，還有許多其他工具可以為協作增加類似的好處， 上面列出的，該列表代表了在我們日常工作中對我們有效的協同工具，並不表示所有選項都可能對您的團隊有效。 \n Savvy的程式設計在實踐中協同 \n 現在，讓我們採用上面概述的最佳實踐和工具，並展示它們在現實生活中如何組合在一起。 我們將使用Press Play中的實時繪圖體驗來演示設計協同的重要性。這項經驗涉及到 跨學科的團隊成員數量，包括視覺設計師、UX設計人員、開發人員、產品經理，當然還有客戶。 \n 脈絡與挑戰 \n Press Play是一個抽獎活動應用程序，可保存每日，每周和每月的圖紙。用戶獲得門票觀看廣告， 然後選擇五個表情符號輸入繪圖。然後根據他們的選擇如何與圖形的隨機選擇表情符號匹配。 這個特殊的任務有我們為正在等待現場繪畫結果的用戶創造了一個有趣而激動人心的現場體驗。 \n 對於我們來說，為這種體驗創建類似遊戲的動畫非常重要。我們特別想要 在用戶去看他們的屏幕時在螢幕上喚起一種嬉戲和期待感所選表情符號與抽獎活動附圖中的表情符號匹配。 \n 就是說，我們需要注意動畫所需的複雜程度及其影響在整個產品的時間表和成本上。 我們目標是將保真度提高到合理的時間，而不會顯著影響項目的預算。 \n 協同程式 \n 階段一:設計原型與集思廣益 \n 首先，一個Savvy 的UX設計師創建了Press Play的整體用戶體驗和設計原型， 確定了需要視窗畫面和每個視窗的時間安排。她還提出了一個粗略的概念，用於實時繪圖動畫， 根據客戶的需求和項目的已建立UX。 \n 她向產品經理和視覺設計師展示了是設計原型和粗糙的動畫。 然後，這三個人都與客戶會面，因此每個人都可以直接聽到反饋。 \n 第二階段：研究與脈絡 \n Savvy的視覺設計師負責創建實際的繪圖動畫帶來吸睛的感覺， 讓Press Play產品沒有太多先入為主的知識。為了快速裝訂，他與UX設計人員和產品經理進行了深入的交談。 他還致力於其他研究有時間了解整體產品目標，挑戰並熟悉工作。 至今。如前所述，他是設計原型演示的一部分並為客戶的反饋。 \n 在這種情況下，他進行了一些與手頭任務直接相關的其他研究。 通過這樣做，他確保自己了解現場繪畫體驗的要求，目標和挑戰。 他查看了具有類似經驗和保真度的其他應用，並參考了動畫， 以了解最終動畫到底需要顯示什麼（在這種情況下，表情符號和用戶的表情符號選擇）。 在過於束縛解決方案之前，他遇到了一個精明的人iOS開發人員了解技術限制和注意事項 \n 然後，我們的視覺設計師和UX設計師集思廣益，對視覺效果至關重要。他們 同意需要為用戶建立緩慢的提示以建立懸念/期望。 \n 階段3：反覆和反饋 \n 當我們的視覺設計師沿多個不同方向工作時，他選擇了UX設計師聊聊他在Figma中的進度和設計。 通過討論工作，他們激發了更多想法和迭代， 同時確保它們符合客戶期望。還有更多他手下有很多可靠的選擇， 他再次與iOS開發人員會面，以確保一切都在從技術角度出發。 \n 階段4：客戶的反饋和發展 \n 當我們找到更多，更最終的體驗版本時，視覺設計師走了通過他們與客戶一起使用Figma。 Press Play產品經理和UX設計師還提供了反饋和指導。 \n 一旦他們都了解了引起顧客興趣的東西，視覺設計師便開始最大限度地發揮作用。 視覺效果並使它們為開發做好準備。他繼續與iOS開發人員合作，在技術層面上充分利用該概念。 \n 最終結果 \n Press Play的實時繪圖動畫是工作中設計協作的一個示例。一隊跨學科專家一起解決更大的設計和開發挑戰含義。 沒有設計協作，我們將找不到理想的交集用戶體驗，視覺和技術。 \n 當客戶在他的應用程式中看到生動的動畫時，他稱其為“開創性”。 \n 而且，這種Press Play體驗的研究，合作和創造對我們有幫助 發現產品用戶旅程中的空白。最初，現場繪畫的目的是為了娛樂 向用戶顯示結果的方式。在設計過程中，我們意識到， 如果用戶不觀看實時繪圖，他們就會迷失方向，無法體驗終結繪製的用戶旅程。 \n 基於這一發現，我們決定在其他兩個地方也改進該應用程序。我們添加了一個獲勝者圈子的結果/實時繪圖元素， 以及用戶的輸贏歷史記錄部分應用程序的細節部分。 最後，設計協作使我們得以實現這一未實現的目標需要用戶體驗。 \n 結論說明 \n 設計協同的產品和經驗需要解決建築中伴隨的複雜、關鍵問題。 通過利用多個團隊成員的專業知識跨學科的設計協作可確保團隊從各個角度應對挑戰並尋求更好的解決方案。 借助正確的思維方式、工具和流程，進行設計協同使團隊能夠通過創造性思維和迭代來更深入。 \n 我們希望本指南為您提供良好的基礎，以便您可以構建自己的有效設計協同過程。 您可以在Savvy博客上了解有關設計和產品策略的更多信息，並隨時在Savvy Apps網站上與我們聯繫以尋求幫助。 \n', 'tags': '', 'url': 'DesignCollaborationBetterProducts.html'}, {'title': 'MechanicalDesignProcess thirth segment', 'text': '在前面的章節中，我們定義了成功的設計是什麼，然後繼續確定將要在設計中放置的對象的位置。現在，我們將討論設計的結構性考慮。我覺得我們必須建立在 “ 堅實的基礎 ” 上，以便設計的其餘部分可以以此為基礎。電子外殼（本身）的結構必須堅固到足以在客戶（用戶）使用產品的各種環境中工作。因此，讓我們從討論提供產品的主要考慮因素入手。這個 “ 堅實的基礎 ” 。本章將著重於： \n \n 利用材料概念的優勢提出結構解決方案 \n 定義用於考慮電子外殼結構設計的通用過程 \n 查看一些具體說明一般概念的示例我們將在本章中最後一節標題為 “ 獎金部分 ” 。最後一部分旨在給我們在材料強度方面的問題增加一些複雜性，並展示除強度以外的其他考慮因素對於我們的設計選擇如何重要。 \n \n 3.1 簡介：材料的強度 \xa0 \n \xa0\xa0\xa0 結構注意事項對於設計的整體成功至關重要。 \xa0 讀者無需獲得機械工程學位或成為材料強度方面的專家即可從本章中受益，設計師對材料的基本強度了解得越多，外殼設計就越好。 \xa0 僅解決問題是不夠的，需要盡可能的以最具成本效益的方式解決問題 \xa0 設計適用於電子外殼的結構的分為 四個 基本方法可基本方法： \xa0 \n 1. 查看已經存在的類似產品，並使用已設計的解決方案作為手頭設計的快速起點。這種方法的優點是速度快，但是缺點是您的設計可能會因為缺乏創造力而無法解決特定產品應解決的獨特問題。 \n 2. 快速的 “ 信封背面 ” 設計。這種方法在簡化的結構元素上使用了一些基本的設計方程式。我們將在本章稍後探討這些設計方法的一些示例，以及一些示例問題。 \n 3. 更複雜的分析。在 Sect 中對此進行了更多探討。 \n 4.– 當然，過度設計 並不是所有設計的正確答案。在 競爭激烈的 產品市場中，客戶主要根據價格做出購買決定，過度設計可能會導致產品成本增加（或者肯定會增加重量和尺寸）。結構上的過度設計基本上是從一個非常有可能成功通過結構測試的設計開始的，也就是說，要在客戶使用環境中免受衝擊和振動的影響就可以通過。 \xa0 \n 過度設計原因有以下幾個： \n \n 設計能夠承受所一些力的未知的高精度。這將在 Sect 中進一步探討。 \n 設計中只有一個 “ 安全係數 ” 大於 1.0 。安全係數等於 1.0 意味著您的設計僅符合設計標準。在 Sect 中討論了增加安全係數的設計。 \n \n 3.2 結構的設計過程 \xa0 \n 我想給讀者一個通用的過程，以設計滿足設計要求的電子外殼（或外殼中的 單個零件 ）。通過完成這六個步驟，設計人員應該準備好提出可以使用的材料和橫截面。我將分別細分這六個步驟。\xa0 \n \xa0 \xa0 3.2.1 相似設計 \xa0 \n 業內其他設計如何處理相似情況？其他設計可能來自您自己公司內部的示例（過去的產品），也可能來自您自己公司外部的競爭產品。 \xa0 \n \xa0 \xa0 3.2.2 分力 \n 確定物體上的力（靜態和動態）–振幅和方向這些力量。通常不考慮零件的自重電子外殼可承受靜態力，但可以考慮使用動態力。在本文中，我指的是“對象”，“零件”和“成員”，但它們都應被視為完全是同一個人。 \n \xa0 \xa0 3.2.3 現有的最終條件 \xa0 \n 確定對象的 “ 最終條件 ” ，即其移動自由度以及如何支撐構件。常見的最終條件是 “ 固定 ” （不允許移動）或 “ 自由 ” （允許旋轉）。最終條件會影響確定負載將產生的應力大小。 \xa0 \n \xa0 \xa0 3.2.4 建議材料和橫截面 \xa0 \n 確定支撐這些材料所需的材料和橫截面組合力，請牢記“力量”屬於材料，力會在這些材料中產生應力。所有材料都有最大應力極限，我們要么開始變形或完全破壞點。 \n 基本上，只有兩種最初選擇來設計更高的承重構件 \xa0 \n \n 更換材料，從而可以更改應力極限。因此，選擇具有較高應力極限的材料可以在該構件上施加更多的載荷。 \n 更改材料的橫截面特性，基本上是構件的第二面積矩以及可以從構件的 “ 中性軸 ” 集中的面積。或質心。增大面積將實質上增加成員承載更多載荷的能力。遠離會員的 “ 中性軸 ” 增加該面積也將有助於會員承擔更多的負載（這就是 “ 工字梁 ” 的原因， “ 工字梁 ” 的許多橫截面都遠離 “ 中性軸 ” ，是出色的承載構件）。 \n \n \xa0 \xa0 \xa0 \xa0 \xa0 3.2.4.2鋁解決方案 \xa0 \n 設計就是要提出一些合理的選擇，所以讓我們看一下鋁樑。 \n 我們可以選擇， b = 4 英寸， h = 2.5 英寸。我們可以看到最大應力為 23,100 psi 。這高於鋁的最大屈服應力，因此不會造成結構變形。在我們的設計中令人非常滿意。但是要記住光束的高度是我們對慣性矩的計算 b = 2.5 英寸和 h = 4 英寸？這將是與鋁樑的先前示例。現在，最大壓力將是 14,400 psi ，完全在該鋁的最大 22,000 psi 之內。因此，“旋轉 - 相同的橫截面，其中較厚的方向是在載荷方向上力，使這種材料選擇和橫截面在結構上成功。讓我們看一下鋁樑的重量。 \xa0 169 磅 / 英尺 3 ，光束會是 47 磅。相比之下，松木為 40 磅。 \n 總之，我們研究了兩種不同的材料（松木和鋁最小）可用於解決結構問題。我們可以跨領域開發解決結構問題的每種材料的截面積。 \n 在設計中，變形通常與強度同等重要。負載構件可能具有足夠的強度以承受特定的載荷，但是它可能偏轉超出工程材料彈性的不可接受的量。撓度（以及材料的彈性模量 E ）也存在問題正在考慮中的內容將在本章中的一些示例中顯示。上述選擇的經濟性（更換物料或更換物料交叉部分）給 EPE 設計師帶來了一個有趣的問題。的許多組合材料和橫截面積可以使用，但必鬚根據實際情況進行選擇項目的總體目標。除了運作外，它還必須滿足項目的成本目標，可製造性，風險，重量，上市時間等。這些選擇將是進一步的在 ” 第 4 章 - 可能有替代解決方案需要進行審查 ” 開始進行調查，測試和製作原型。最大的資產之一設計師可以帶入設計中，以便快速找到要選擇的邏輯在可行的材料 / 橫截面選擇候選材料中做出解決眼前的問題。 \n \xa0 \xa0 3.2.5 合併功能 \n 可以將正在設計的零件與裝配中的另一個零件組合嗎在這部分附近嗎？基本上，兩個單獨的部分可以合併成一個部分？查看被合併部分的“另類思維”方面是實際上希望從一個（設想的）單個零件創建兩個單獨的零件。這可能從而降低了總體成本，降低了組合設計的解決方案。主要選擇之一將是確定如何在生產中製造該解決方案。例如，一些這裡涉及的選擇是： \n \n 該項目的工具預算是多少？該項目可以“負擔”開支嗎？鑄造，注模，擠壓或其他製造所需的資金可能正在考慮的充氣技術？是否有現有工具可以利用？必須確定找到“投資回收期”解決方案。例如，了解： \n \n 1. 加工費用 \n 2. 需要多少個零件（在產品“使用壽命”內） \n 3. 未加工零件將花費多少 \n 4. 工具零件將花費多少 \n \xa0 \xa0 3.2.6 確定所需的安全 \xa0 \n 係數此時必須複查 “ 安全係數 ” 的確定。也就是說，必須知道以下問題的答案： \xa0 \n \n 如果零件失效，是否有人受傷？生命，金錢和時間上無法預測的失敗的代價是什麼？ \n 該特定部分在產品整體功能中的重要性如何？如果這部分失敗，那麼整個產品是否會失敗？ \n 對力的了解程度如何？我們是否知道 “ 誤差線 ” ，即力會偏離假定的名義值多少？ \n 確定所選設計（材料或幾何形狀）的 “ 關鍵方面 ” ，以及如何在生產中指定，認證和檢查它們？做筆記以確保將執行這些步驟（認證 / 檢查）。確定設計各個階段所需的測試，以確保最終設計足以將其交付給生產中的客戶。 \n 將有一個優化的解決方案，通常可以通過分析設計的主要組成部分並確定設計中 “ 弱鏈接 ” 的位置來找到。這可以通過利用某些測試方法來發現，這些方法會通過超出環境限制的測試（例如高度加速的壽命測試， HALT ）而導致失敗。通過首先確定可能發生故障的位置，然後通過測試設計原型，可以生成數據來確定某些段是否接近其設計極限。 \n \n \xa0\xa0\xa0 \xa0 如果設計過程中的上述六個步驟中的任何一個都沒有一定程度的已知答案，則設計人員將面臨： \xa0 \n \n 進行進一步查詢以獲取更好的信息。 \n 進行設計。設計人員在設計過程的一開始就幾乎不了解零件的所有作用力和相互關係。當然，設計人員可以列出所做的假設以及必不可少的其他信息。當然，可以設計零件，對零件進行原型設計並在需要使用的條件下進行測試。解決 “ 在不知道所有信息的情況下進行設計 ” 這一難題的幾種方法可以被採取讓我們研究一個示例，其中： \n \n 設計 1 的重量為目標重量的 110 ％，但在結構上成功的可能性為 95 ％。設計 2 是目標重量的 100 ％，但 75 ％ \xa0 在結構上成功的機會。因此，設計 1 超出了目標重量的 10 ％，但是無法達到通過設計工作的設計目標的風險要低得多結構的觀點。因此，“折衷”是優化設計所需的時間。當然，產品必須從結構的角度進行工作。很難確定在程序開始時就在設計中“預留空間”。繼續前進在不知道所有信息的情況下進行設計的價值在於“基本設計”可以測試。希望可以迅速修改“基本設計”框架，使程序可以在獲得其餘信息時繼續運行。我們可以通過“過度設計”零件來快速前進，或者投入更多時間來“勉強”滿足所有要求。仔細研究了這兩個路徑以下更多解答： \n A. “過度設計”零件–這種方法可能保證零件會在測試中的結構功能。這裡的想法是迭代回到測試顯示出節省材料和減輕重量的地方，從而減少了保守的設計適當。這種方法至少使設計會議的機會最大化在項目測試階段的早期就對結構功能進行了要求等等。但是，設計的重量發生了變化，使這些零件更接近“ \xa0 mar- 最終成功”將需要時間（和金錢）來重新測試設計以驗證更改。大多數項目在迭代方法上的時間有限獲得“完全”設計的零件。 \n B. 設計零件時使用“僅少量”會議會花費更多時間兼顧重量和強度要求。因此，這種策略與過度設計（以上），因為零件的設計有可能（只是勉強）工作。例如，如果空間和重量減少量最大產品要求列表，該設計在“基本”上可以接受結構強度因子，但具有更大的材料和重量節省，可能是需要什麼。這種方法試圖平衡“風險和回報”與應該徵得設計團隊的同意才能前進。有了這個設計可以達到材料和重量的目標。但是，這種設計的風險不大從結構上講，工作率從 5 ％上升到 25 ％。因此“ \xa0 B ”設計路徑顯示不滿足產品結構強度要求的較高風險，但將滿足產品的重量要求。 \n C. 上述兩種方法的混合可能是合適的。也就是說，設計會比較保守，而設計的其他部分會更多有風險。這也許使“整體風險承受能力”成為整體風險的一部分。設計。經驗豐富的設計團隊將了解設計中的最佳位置“推翻接受度”。 \n 3.3 所需的分析 \xa0 \n 當然，有許多設計可以保證在電子包裝設計中進行最嚴格的分析。在任何競爭激烈的產品設計領域，將是使用給定技術進行最高生產力的公司，即將大程度地提高其成功機會。如果產品具有： \n \n 高產量。如果要生產成千上萬個特定單元，則每單位節省一美元可以帶來可觀的總節省。節省大量成本的分析會由於大量生產而帶來大量總體利潤。但是，如果只生產幾個單元，則節省的潛力就大大降低了，一旦設計被認為是可行的，在降低成本上的大量投資就不會帶來可觀的節省。 \n 由於要放置產品的環境，因此要求高度安全。例如運輸，公用事業，醫療或教育行業的產品。所有客戶都需要擁有安全操作的產品。 \n 對客戶至關重要的 “ 任務 ” 。這通常包括軍事，航天局或政府所需的產品。 \n \n 請注意，過分設計以致降低公司的盈利能力是沒有任何藉口的。設計師和工程師應該時刻警惕降低成本的可能性。零件的減少，可製造性的設計以及整體設計的優雅，導致了產品的領導地位。只有在設計的第一階段才能 最大 程度地降低成本。隨著設計甚至進入原型階段，為降低成本而重新設計的成本開始呈指數級增長。這方面的更多內容將在第一章中介紹。 \xa0 \n 另外，關於安全的注意事項也是適當的。在安全性很重要的任何領域，都不能為產品設計不足的藉口。當然，美國保險商實驗室（ UL ）和其他安全機構也會對電子設備進行安全考量認證。也就是說，安全機構將獲取產品（規格和工作單元），並對其進行審查和測試。大多數電子產品，當然是在全球範圍內銷售的產品，都必須通過嚴格的代理商批准認證。這方面的更多內容將在第一章中介紹。首要的設計考慮因素仍然是，並且將永遠是功能。即，零件必須 發揮作用 按預期。如果零件在負載下會失效，那麼它的外觀或生產的優雅程度都無關緊要。這是設計人員必須了解載荷的主要原因。 \xa0 \n \xa0\xa0\xa0 \xa0 使用有限元分析（ FEA ）的現代分析軟件解決方案非常實用無處不在。在 Google 上進行的搜索顯示了一些入門資料，例如： \n A. 有限元分析，麻省理工學院的 David Roylance 。描述三個主體步驟為： \n \n 預處理，將要分析的零件模型（其中的幾何形狀劃分為多個離散的子區域或“元素”）進行連接在離散點稱為“節點” \n 分析，將預處理器準備的數據集用作輸入線性或非線性代數方程組，用於計算應力和位移 \n 後處理，以圖形方式顯示結果，以幫助可視化。分析結果 \n \n B. 線性分析，來自 MIT 開放式課件中的 K. J. Bathe 教授，麻省理工學院。該視頻系列是全面的學習課程，介紹了有效的實體和結構線性分析的有限元程序。 \n C. 有限元分析， H 。 J. Qi 博士。將 FEA 流程描述為： \n \n 制定物理模型，即描述（也許簡化）將實際工程問題轉化為 FEA 可以解決的問題 \n 通過離散化實體，定義材料屬性來使用 FEA 模型，並應用邊界條件 \n 選擇適當的近似函數，制定線性方程，並解決這些方程 \n 以數字和視覺格式獲得結果 \n \n 3.4 結構問題：靜載荷 \xa0 \n \n 問題是可以將其視為 “ 個體 ” ，即將載荷和力施加到 單個構件 要設計的上，也可以認為是 “ 整體結構 ” ，也就是說，它可以是對整個（組裝）結構的分析。 \n 許多單個零件（或子裝配體）的供應商會在自己的文獻中提供設計指南，這些指南肯定可供單個設計師使用。以圖形或表格格式顯示的某些信息植根於基本原理，但這可能並不明顯。這種可用的 “ 供應商數據 ” 類型的一些示例是塑料，密封件， EMI 組件和軸承（僅舉幾例）的設計。 \n \n \xa0 \n 電子外殼中靜載荷是由於的構件上的 1. 構件自身的重量 2. 其他構件施加的載荷 3. 由於熱效應，殘餘應力等 \xa0 引起的載荷。由於施加力而導致以下操作失敗： \xa0 \n 1. 超出材料的屈服強度。 \n 2. 構件過度偏轉，導致構件超出設計意圖。 \n 由於所有載荷都會產生一定的撓度，因此必須在設計中的某個時刻知道允許構件產生多少撓度。 \xa0 \n 靜態載荷下的斷裂破壞在韌性材料中不如在脆性材料中常見。在延性構件中，失效通常是由於過度的非彈性作用而導致的，該過度的彈性作用導致在斷裂之前很長的整體變形。 \xa0 \n 動態負載通常是隨時間變化的負載，而靜態負載在相對較短的時間內不會發生顯著變化。電子外殼設計中常見的一些動態載荷是反复載荷，衝擊載荷和能量載荷。能量負荷是指在撞擊期間傳輸的能量（比作用力）更容易表達的負荷。 \xa0 \n 重複載荷造成的斷裂通常稱為 “ 疲勞 ” 故障。振動可能會導致疲勞失效。 \xa0 以下三個問題通常涵蓋以下主題： \xa0 \n 1. 什麼是光束（相對於平板）？ \n 2. 應力公式和最大應力。 \n 3. 撓度公式和最大撓度。 \n 4. 截面模量。 \n 5. 彈性模量。 \n 6. 結束條件。 \n 7. 負載條件。 \n 8. 最壞的情況下加載。 \n 9. 組合加載。 \xa0 \n \n \xa0 \xa0 3.4.1 懸臂梁分析 \xa0 \n 本節重要性在於強調了橫向剪應力對最大應力的影響。在確定樑的最大應力時，除非用盡所有可能產生最大主應力的彎曲應力和剪切應力組合，否則不要對結果感到滿意。通常，剪切圖和彎矩圖的構造以及彎曲應力和橫向剪切應力的數量級比較將大大簡化問題。 \xa0 \n 使用梁應力公式，我們將繼續解決電子外殼設計人員可能面臨的問題的 “ 主推力 ” 。那就是確定 “ 蓋板 ” 到外殼底盤的（最大）緊固件距離。這種類型的問題涉及沿外殼提供的環境密封 \xa0 \n \n 防止灰塵，濕氣和蒸汽 \n 足夠的 EMI 屏蔽 \n \n 我們將在第 4 章中解決問題的屏蔽部分。現在，我們將解決設計基本密封設計幾何形狀方面的 “ 結構性問題 ” ，以保持足夠的強度以提供防潮密封。環境密封問題的結構考慮： \xa0 \n A. 密封材料： “ 產品環境（密封） ” \n B. 蓋板和底盤材料：此處涵蓋的彈性模量 \n C. 此處覆蓋的截面積（需要慣性矩） \n D. 此處覆蓋的螺栓間距 \n E. 此處覆蓋的壓縮擋塊 \xa0\xa0 \n \xa0 \n 關於方程式（和答案）的其他一些觀察結果是： \xa0 \n 1. 我們發現，鋼製外殼的螺栓間距大於鋁製外殼的螺栓間距 – 這意味著較硬的材料將允許較少的撓曲。 \n 2. 我們看到螺栓間距隨著厚度的三次方而變化 – 我們期望方程式（用於螺栓間距）可能基於 “ 梁 ” 的慣性矩，從而得出厚度的 “ 立方體函數 ” 。 \n 3. 我們希望螺栓間距是 “ 1 ⁄ 4 功率 ” 的函數，這是梁在其長度上具有均勻載荷的撓曲的通用方程，該樑的撓度是其長度到四次冪的函數。對於載荷均勻的梁，相同的一般方程式也將根據其材料彈性模量（ E ）向 1 ⁄ 4 屈光力（ 3 1 ⁄ 4 = 1.3 ，即 78.5 / 60 ）偏轉。 \xa0 \n 因此，作為設計者，我們首先要估算對於鋁製外殼設計。顯然，我們可以在設計中對此間距進行原型設計，並在盡可能真實的條件下進行測試。值得注意的是，我們還假設了墊圈密封區域的橫截面面積以及墊圈在以下方面的厚度變化： \xa0 \n A. 未壓縮狀態（在擰緊緊固件之前）。 \n B. 壓縮狀態（在擰緊緊固件以在設計中設置 “ 止動件 ” 之後，即，緊固件附近的設計特徵專門限制了墊圈的使用範圍） \xa0 \n 被過度壓縮。所有墊圈都要求這些 “ 止動 ” 以使緊固件具有指定的壓縮極限。我們還可以查看類似的設計，其中防護等級（空氣或水）與我們設計的水平相匹配。如果我們發現本身設計的尺寸適用於這些設計，則可以我們一些信心，我們當然有成功的機會，還應當指出的是 的因素之一， 整體 設計將有的 最低 緊固件量。因此，緊固件之間的 5.0 英寸的距離會比 4.0 更好英寸的距離（從而節省了緊固件並節省了擰緊這些緊固件的工作量）。但是， 4.0 英寸的間距將增加墊圈設計在不屬於一部分的附加載荷下密封的可能性。計算（例如衝擊或熱），從而為設計提供一定的安全裕度。 \xa0 \n \xa0 \xa0 3.4.2 撓度公式和最大撓度 \xa0 \n \xa0 \xa0 我們知道在 “ 無肋 ” 結構上增加肋骨將增加該結構處理更多載荷的能力。通常，可以通過在 “ 常規 ” 壁厚上增加厚度來增加強度，例如： \xa0 \n σ = Mc / I \xa0 ，其中： \xa0 \n σ= 所考慮構件的應力 \n M = 該構件的最大力矩（通常是力乘以 “\xa0 距離 “ ，即是 ” 的距離 “ 從力到所述構件的部分） \n I / C = Z ，這是所考慮的部分的性質，也稱為從中性軸截面模量 \n C = 距離成員到 “ 外部纖維 ” 的 \n I = 成員的慣性矩（大約質心）成員因此，要增加的承載能力，您可以：增加 I 和 / 或減少 c （增加 Z ）。在 I 為矩形（長方形是用於製造的構件的共同選擇）其中 \xa0 b = 的長度矩形的底邊， h 是矩形的 厚度 。請注意，，增加厚度（ h 由於 “ 平方函數 ” ）具有很大的影響。因此，將厚度加倍實際上使光束強度提高四倍。上述說來，加倍厚度將增加構件的重量。對於重量敏感型設計而言，這可能是 “ 災難 ” 。但是，通過添加肋骨，肋骨是厚度的 “ 間斷性 ” 添加，強度顯著提高（而重量僅少量增加）。為什麼是這樣？ \n 儘管肋骨會增加板的總慣性矩，但對於短肋骨，從中性軸到橫截面（ c ）的極端纖維的距離會更快地增加。對於間距較大的肋骨，此效果最為明顯。 \n \xa0 \xa0 3.4.3 另一個撓曲問題，這次是卡扣鉤 \n \xa0\xa0\xa0 \xa0 這裡的想法是，鉤在連接操作過程中短暫偏轉，並卡入底切以完成配合操作。 \xa0 \n 選擇了以下介紹性問題： \xa0 \n A. 顯示了一種通用的緊固方法（用於塑料）。 \n B. 顯示了使用材料共同強度的公式，該公式利用了材料的彈性特性，在設計中將撓度用作優點，並優化了橫截面積和均勻應變。 \n C. 介紹了使用塑料材料進行設計的某些方面。 \n D. 利用供應商提供的文獻資料（在本例中為 Mobay Plastics ）。代替使用第一性原理解決一些更複雜（至今）的問題，使用列表選項和列線圖可以大大減少所需的設計時間。 \xa0 \n 3.5 動態載荷 \xa0 \n 電子機櫃中構件的動態載荷是由於載荷以非穩態方式承受在構件上的。它們包括但不限於： \xa0 \n A. 具有振幅和頻率的振動載荷（包括風力或與地震地面運動相關的慣性力） \n B. 離散衝擊載荷在這些振動和衝擊載荷情況下，將探討一些問題。 \n 章節摘要 在本章中，介紹了有關外殼結構方面的一些基本考慮。我們可以通過為這些外部船體提供材料來開始這種設計。同樣，我們的設計處置將是選擇船體的橫截面。這些橫截面和材料的最佳選擇是利用易於獲得的材料方程式的強度來進行的。但是，在各種解決方案中都需要做出選擇，並且要確定最佳設計，不僅要單獨考慮結構，還需要更多考慮。 \xa0 \n 此外，我們還介紹了一種用於設計電子外殼結構的通用過程。首先要看先前的設計，確定結構上的力，然後繼續確定設計中的安全因素。 \xa0 \n 參考文獻 \xa0: \n \n Roark RJ, Young WC (1975) Formulas for stress and strain. McGraw-Hill Book Co., New York \n Byars EF, Snyder RD (1969) Engineering mechanics of deformable bodies. International \n \n Textbook Co., Scranton \n \n Design guide to the selection and application of EMI shielding materials. TECKNIT, EMI \n \n Shielding Products (1991) \n \n Injection Molding magazine, May 1998 issue, R. Cramer of Dow Materials Engineering Center \n \n', 'tags': '', 'url': 'MechanicalDesignProcess thirth segment.html'}, {'title': 'MechanicalDesignProcess first segment', 'text': '第1章成功的設計 \n 1.1\xa0 設計指南 \n \n 設計指南 \n \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0 助於擴大設計師過去的全部經驗以及他們現在的組織的建立流程。 \n \n 電子產品外殼（ EPE = 電子產品外殼） \n \n \xa0\xa0\xa0\xa0\xa0\xa0 \xa0 由內部和外部結構組成產品的要素。 \n \n EPE 設計師 \x9e \n \n \xa0理解並符合產品規格的能力。\x9e 能夠添加並幫助創建產品規格。\x9e 為產品提出的問題創建創造性的解決方案。 \n 1.2\xa0 定義整體團隊 \n 團隊可以是：\x9e \n ．小型或大型。\x9e \n ． 位於一個位置或分佈在全球。\x9e \n ． 資源有限或可以訪問幾乎無限的資源。\x9e \n ． 是否擁有最新工具。\x9e \n ． 出於各種原因而實現目標的動機。\x9e \n ． 經驗豐富。 \n \xa0 \xa0 \u3000整個工程包含著多個學科之間的設計融合。例如：軟件和硬體工程、機械工程（包括結構和熱學）、系統工程 … 。 \n \u3000\u3000因此，知道機械工程只是電子產品整體工程設計的一部分，並且許多決策是與其他學科合作而成的。這些都是為了強調機械設計不是“憑空”完成，而是作為團隊共同努力的結果。 \n 1.3\xa0 產品要求 \n \n 產品將為客戶帶來什麼成就。 \n 說明產品如何與客戶互動。 \n 產品各組件的描述。 \n 展示產品的最終外觀。 \n 產品將在運行中和放置的環境，包括：溫度、衝擊、跌落、振動、濕度…。 \n 產品需要通過測試達到所有標準。包括安全和法規標準，例如：安全性保險商實驗室（ UL ）、電動勢電磁干擾（ EMI ）…。 \n \n 1.3.1規範功能 \n \n 最少的輸入。 \n 完整規格。 \n 工作規範。 \n \n 1.3.2準時按計劃進行 \n 1.3.3交貨的預計成本 \n \n 修改完成項目所需的人力資源。 \n 完成的項目所需資源被修改。 \n 修訂產品的預期銷售成本。 \n \n 1.4 草繪與細節 \n \u3000\u3000 EPE 設計人員必須知道何時在以下兩種模式之間切換： \n \n 草繪或集思廣益： 快速思考產品如何設計，同時獲得他人的反饋更改選擇。規模並不是很重要，速度才是這裡的重點。 \n 詳圖： 在“詳細模式”下，可以準確計算出設計中的一些關鍵部分 \n \n 1.5 設計評論 \n \u3000\u3000正式的設計評審通常是按照項目時間表上的計劃進行。 \n \u3000\u3000非正式的設計評審是偶爾或自發進行的。就像設計師去辦公室並要求同事“看看”、在設計師認為足夠接近設計問題或已有經驗的少數人中召開簡短會議。 \n 1.6 溝通 \n \u3000\u3000 溝通是設計成功的必要條件。這句話本身是正確的，但值得進行更充分的討論。 \n 1.6.1溝通目的 \n \u3000\u3000交流的目的是傳達有關設計的信息。 \n 1.6.2溝通的價值 \n \u3000\u3000良好的溝通將使項目更加成功。 \n 1.6.3通信鏈中的連接 \n \u3000\u3000交流的目標之一是將信息提供給需要的人，團隊包括很多學科。 EPE 設計師應在團隊中涉及所有人員做出決定，這些人對於做出決定非常重要。 \n 1.7 工程經濟 \n \u3000\u3000不論工程經濟學的基本原理，就不可能完成設計。幾乎所有的工作中，“付出什麼代價”都是最重要的考慮因素。在許多產品設計中，它將成為此產品成功或失敗的主要原因之一。 \n 章節總結 \n \u3000\u3000介紹如何將設計視為“成功”，以及設計如何滿足產品要求。 \n \xa0 參考文件 \n \n Thuesen HG, Fabrycky WJ, Thuesen GJ. Engineering Economy, 1971, Prentice-Hall \n \n', 'tags': '', 'url': 'MechanicalDesignProcess first segment.html'}, {'title': 'assignments3', 'text': '\n', 'tags': '', 'url': 'assignments3.html'}]};