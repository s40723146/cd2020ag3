var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'Group', 'text': 'Repository:\xa0 40723103 \xa0 | Site: \xa0 40723103 Repository: \xa0 40723110 \xa0 | Site: \xa0 40723110 \xa0 (group leader) Repository: \xa0 40723112 \xa0 | Site: \xa0 40723112 Repository: \xa0 40723120 \xa0 | Site: \xa0 40723120 Repository: \xa0 40723125 \xa0 | Site: \xa0 40723125 Repository: \xa0 40723126 \xa0 | Site: \xa0 40723126 Repository: \xa0 40723128 \xa0 | Site: \xa0 40723128 Repository: \xa0 40723130 \xa0 | Site: \xa0 40723130 Repository: \xa0 40723139 \xa0 | Site: \xa0 40723139 Repository: \xa0 40723142 \xa0 | Site: \xa0 40723142 Repository: \xa0 40723145 \xa0 | Site: \xa0 40723145 Repository: \xa0 40723146 \xa0 | Site: \xa0 40723146 \n', 'tags': '', 'url': 'Group.html'}, {'title': 'WEEK', 'text': '每周都要交進度 \n', 'tags': '', 'url': 'WEEK.html'}, {'title': 'week 3', 'text': '\n taskleader :40723145 40723126 40723146 \xa0 \xa0 \xa0 1. Describe how to do an efficient random grouping for this course or do the roll calling randomly? \n taskleader :40723110 40723112 40723130 \xa0 \xa0 \xa0 2. Describe how to prepare a portable Python programming system for Windows 10 64bit system to allow one the maintain CMSiMDE website, Pelican blog and Reveal.js presentation on Github? \n taskleader :40723125 40723103 40723120 40723142 \xa0 \xa0 \xa0 \xa03. What do you need to know from http://www.coppeliarobotics.com/helpFiles/index.html to implement a four-wheeled robot? \n w3開會紀錄 \n', 'tags': '', 'url': 'week 3.html'}, {'title': 'Assignment 1-1', 'text': 'CD2020ag3-Assignment 1-pdf', 'tags': '', 'url': 'Assignment 1-1.html'}, {'title': 'Assignment1', 'text': '', 'tags': '', 'url': 'Assignment1.html'}, {'title': 'Assignment -1 report', 'text': 'https://github.com/s40723110/cd2020ag3/tree/master/PDF', 'tags': '', 'url': 'Assignment -1 report.html'}, {'title': 'Python3.8.2', 'text': 'basic Win10 portable programming \n 在你的可攜下創建一個data子目錄\xa0 :\xa0\xa0 \n \n --everything-is-local\xa0 \xa0 \n https://git-scm.com/download/win \xa0 \xa0 \xa0 \xa0 \xa0 \n 要用git指令要有portablegit 。data下子目錄存取為portablegit(需與啟動檔配合)。 \n start.bat (參考) : \n \n \n \n https://www.python.org/downloads/ \n 選取需要的版本(EX : 3.8.2)\xa0 \n 點取執行檔 Windows x86-64 executable installer \n data下子目錄 存取的名稱要跟執行檔相配合(EX : py38) \n \n \n \n \n \n \n Download Scintilla and SciTE \n \n \n \n 編輯器(用來創建start.bat , stop.bat) https://www.scintilla.org/SciTEDownload.html \n 解開檔案為wscite \n 通過打開SciTE.exe\xa0 \\ Option \\ Open Global Options File \n 找到code.page的部分 , 把code.page=0給註記掉 , 並把code.page=65001取消註記 \n \n \n start.bat\xa0 : \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n 32 \n 33 \n 34 \n 35 \n 36 \n 37 \n 38 \n 39 \n 40 \n 41 \n 42 \n 43 \n \n \n \n @echo off \n set Disk=y \n subst %Disk%: "data" \n \xa0 \n %Disk%: \n \xa0 \n set HomePath=%Disk%:\\home_mdecourse \n set HomeDrive=%Disk%:\\home_mdecourse \n set Home=%Disk%:\\home_mdecourse \n set USERPROFILE=%Disk%:\\home_mdecourse \n \xa0 \n REM for putty \n set GIT_HOME=%Disk%:\\portablegit\\bin\\ \n set GIT_SSH=%Disk%:\\putty\\plink.exe \n \xa0 \n REM 將系統 Python 程式的 io 設為 utf-8 \n set PYTHONIOENCODING="utf-8" \n \xa0 \n set PYTHONPATH=%Disk%:\\py38\\DLLs;%Disk%:\\py38\\Lib;%Disk%:\\py38\\Lib\\site-packages; \n set PYTHONHOME=%Disk%:\\py38 \n \xa0 \n set path_python=%Disk%:\\py38;%Disk%:\\py38\\Scripts; \n set path_msys2=%Disk%:\\msys64\\mingw64\\bin; \n REM coreutils is for compiling fossil scm \n set path_coreutils=%Disk%:\\coreutils-5.3.0\\bin;%Disk%:\\depends22_x64; \n set path_tcc=%Disk%:\\tcc; \n set path_cmake=%Disk%:\\cmake-3.10.1-win64-x64\\bin; \n set path_nodejs=Disk%:\\nodejs;%Disk%:\\nodejs\\appdata\\roaming\\npm; \n set path_git=%Disk%:\\portablegit\\bin; \n set path_xming=%Disk%:\\Xming; \n set path_latex=%%Disk%:\\Pandoc;%Disk%:\\TinyTeX\\bin\\win32; \n \xa0 \n path=%Disk%:;%path_python%;%path_msys2%;%path_tcc%;%path_git%;%path_cmake%;%path_coreutils%; \n \xa0 \n start /MIN cmd.exe \n start /MIN cmd.exe \n start /MIN cmd.exe \n start /MIN cmd.exe \n \xa0 \n start /MIN %Disk%:\\wscite\\SciTE.exe \n start /MIN %Disk%:\\wscite\\SciTE.exe \n \xa0 \n Exit \n \n \n \n \n \n \n \n \n stop.bat \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n \n \n \n @echo off \n set Disk=y \n path=%PATH%; \n \xa0 \n taskkill /IM python.exe /F \n taskkill /IM pythonw.exe /F \n taskkill /IM node.exe /F \n taskkill /IM Range.exe /F \n taskkill /IM SciTE.exe /F \n REM 終止虛擬硬碟與目錄的對應 \n subst %Disk%: /D \n REM 關閉 cmd 指令視窗 \n taskkill /IM cmd.exe /F \n EXIT \n \n \n \n \n \n \n \n - \n 假使要快速比較修改前後 :，可使用一個工具 :\xa0 \n \xa0 KDiff3 - Home \n http://kdiff3.sourceforge.net/ \n \n \n 可即時看到檔案間的差別 \n 也可以用來比較 Tiny C Compiler\xa0\xa0 \n https://directory.fsf.org/wiki/Tiny_C_Compiler \xa0\xa0 檔案編輯前後的差異 \n \n \n https://bellard.org/tcc/ \n \n pip \n get-pip.py 頁面存取成data下的get-pip.py \n 再繼續用 : \n \n \n \n \n \n \n 1 \n \n \n \n python -m pip install flask lxml bs4 flask-cors Markdown pelican leo \n \n \n \n \n \n \n \n 下載網際系統相關套件 \n \n HxD - Freeware Hex Editor and Disk Editor \n \n \n \n \n https://mh-nexus.de/en/hxd/ \xa0 \xa0 \xa0 \n 選取該version區目前適合的版本 \n 利用 HxD 修改 pip.exe 中python.exe 的所在位置(pip.exe是存取在p38的Scripts裡) , HxD 開啟之後搜尋c:\\py38\\python.exe , 然後將滑鼠停在 c 然後輸入y:\\p37\\python.exe, 以便讓可攜系統啟動後, 可以將指令搜尋路徑設到 y:\\p38\\Scripts , 這樣就可以直接以\xa0 "pip install " 指令安裝套件. \n \n \n \n \n \n \n 1 \n \n \n \n pip install Flask Markdown lxml bs4 flask_cors pelican leo \n \n \n \n \n \n \n \n MSYS2 installer \n \n MSYS2 :\xa0 https://www.msys2.org/ \n \n 接著設定start.bat \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n \n \n \n REM 設定 msys2 64 位元的執行路徑 \n set path_msys2=%Disk%:\\msys64\\mingw64\\bin; \n \xa0 \n path=%Disk%:;%path_python%;%path_git%;%path_msys2%; \n \n \n \n \n \n \n \n \n ShareX \n ShareX :\xa0 https://getsharex.com/ \n \n \n Tmp (Y\\tmp : git clone .....) \n \n \n https://github.com/flutter/flutter \n \n Fossil \n \n https://www.fossil-scm.org/index.html/doc/trunk/www/build.wiki \n \n \n \n putty\xa0 putty \n', 'tags': '', 'url': 'Python3.8.2.html'}, {'title': 'CoppeliaSim', 'text': 'Assignment 1-3分工 \n https://www.coppeliarobotics.com/helpFiles/index.html \n \n \n CoppeliaSim 高度可定制的模擬器，可以自定義模擬的每個方面。此外對於機器人學習者可以大大降低學習成本。 \n 機器人設計工具可以透過v-rep裡的模擬平台，加入相關引擎、物理碰撞等旋轉功能。 \n v-rep是一款靈活、可拓展的通用機器人模擬器，支持六種不同的編程或編碼方法，每種方法都具有相對於其他方法的特殊優點（顯然還有缺點），但所有六種方法都是相互兼容的（即可以同時使用，甚至可以協同使用）。 \n 這可以通過精心設計的應用程序編程接口（API）來實現。 \n', 'tags': '', 'url': 'CoppeliaSim.html'}, {'title': 'coppeliaSim心得', 'text': '40723125(task leader) \n 40723103 \n 心得: \n 首先簡略瀏覽關於coppeliaSim用戶手冊中所負責的部分區域檢視，大略看過標題及裡面分支出來的內容後，針對使用介面之解說有做進一步了解，甚至有做出特定使用者介面使少數特定族群受惠，對於視圖與位置操作方向也詳細說明並加入快捷鍵使用方式以及命令行的詳細解說。 \n 僅看第一個標題的內容就發現到以上幾個需要特別注意的重點，剩餘兩個標題所表達之內容便偏向於外部環境設定與模組方面的專業知識，藉由圖例所輔助說明能較為知道手冊所想表達的意涵，也能修正對於單單只看文字而想像出操作步驟與有附真實圖例比較之下的差異性，並導正之間所產生的誤會，也可以從而對內容加深印象。 \n 雖然負責的部分只有三個標題的內容，不過卻蘊含這麼多需要注意的細節，也覺得不管是哪個部分都很重要，未來也會和隊友相互交流知道的資訊，以能平衡之間未能負責的區域內容。 \n 以下為所負責之項目內容 \n 1 -使用者介面(包含快捷鍵、視圖與頁面、命令列、操作方向與位置) \n 2 -場景與模組 \n 3 -環境設定、操作 \n 40723120 \n 40723142 \n', 'tags': '', 'url': 'coppeliaSim心得.html'}, {'title': 'User interface', 'text': '1- Pages and views \n 2- Custom UIs \n 3- Position/orientation manip ulation \n 4- Euler angles \n 5- User settings \n 6- Shortcuts \n 7- Command line \n', 'tags': '', 'url': 'User interface.html'}, {'title': 'Scenes and models', 'text': '1- Scenes \n 2- Models \n 3- Model dialog \n', 'tags': '', 'url': 'Scenes and models.html'}, {'title': 'Environment', 'text': '1- Environment dialog \n 2- Texture dialog', 'tags': '', 'url': 'Environment.html'}, {'title': '環境', 'text': 'scenes \n \n 場景和模型是CoppeliaSim的主要模擬元素。 模型是場景的子元素，明確標記為模型。 \n models \n \n 模型是場景的子元素。 除了文件（“ * .ttm”-文件類型）外，模型本身不能存在，也不能通過自身進行模擬。 模型必須包含在場景中才能運行。 \n 通過在同一層次樹上構建的場景對象的選擇來定義模型，其中樹的基礎必須是標記為對像是模型基礎的對象。 \n \n environment \n \n CoppeliaSim中的環境定義了屬於場景但不屬於場景對象的屬性和參數。 保存模型時不保存環境屬性和參數，而僅保存場景時不保存。 \n entities \n \n 實體是指場景對像或集合的術語。\xa0', 'tags': '', 'url': '環境.html'}, {'title': 'Entities', 'text': 'Entities 實體 An entity is a term that refers to a scene object or a collection. 實體是指 場景物件 或 集合體 的專業術語', 'tags': '', 'url': 'Entities.html'}, {'title': 'Calculation modules', 'text': 'Scene objects  場景物件 The main elements in CoppeliaSim that are used for building a simulation scene are scene objects (objects in short). CoppeliaSim中用於構建模擬場景的主要元素是場景物件（簡而言之） Objects are visible in the scene hierarchy and in the scene view.  物件在場景層次結構和場景視圖中可見。 In the scene view, objects have a three dimensional representation as illustrated in following figure: 在物件視圖中，物件具有三維表示，如下圖所示： Following list gives a brief functional description of each object type: 以下列表簡要介紹了每種物件類型的功能： \n ● Shapes : a shape is a rigid mesh that is composed of triangular faces. 形狀：形狀是由三角形面組成的剛性網格。 ● Joints : a joint object is a joint or actuator. Four types are supported: revolute joints, prismatic joints, screws and spherical joints. 關節：關節物件是關節或執行器。四種類型支持架：旋轉接頭，棱柱接頭，螺釘和球形接頭。 ● Graphs : a graph is used to record and visualize simulation data. 圖形：圖形用於記錄和可視化模擬數據。 ● Dummies : a dummy is a point with orientation. Dummies are multipurpose objects that can have many different applications. 假人：假人是具有定向的點。假人是可以具有許多不同應用程序的多用途對象。 ● Proximity sensor s : a proximity sensor detects objects in a geometrically exact fashion within its detection volume. CoppeliaSim supports pyramid-, cylinder-, disk-, cone- and ray-type proximity sensors. 接近傳感器：接近傳感器以幾何精確的方式在其檢測範圍內檢測物體。 CoppeliaSim支持金字塔型，圓柱型，圓盤型，圓錐型和射線型接近傳感器。 ● Vision sensors : a vision sensor is a camera-type sensor, reacting to light, colors and images. 視覺傳感器：視覺傳感器是一種相機型傳感器，對光線，顏色和圖像有反應。 ● Force sensors : a force sensor is an object able to measure forces and torques that are applied to it. It also has the ability to break if a given threashold is overshot. 力傳感器：力傳感器是能夠測量施加到其上的力和扭矩的對象。 如果給定的閾值被超出，它也具有打破的能力。 ● Cameras : a camera is an object that allows seeing the simulation scene from various view points. 攝影機：攝影機是一個可以從各個角度查看模擬場景的對象。 ● Lights : a light is an object that allows illuminating the simulation scene. 燈光：燈光是一個可以照亮模擬場景的對象。 ● Paths : a path is an object that defines a path or trajectory in space. It can be used for various purposes, also as a customized joint or actuator. 路徑：路徑是在空間中定義路徑或軌蹟的對象。 它可以用於各種目的，也可以用作定制的接頭或執行器。 ● OC trees : an OC tree is a spacial partitioning data structure made up by voxels. OC樹：OC樹是由體素組成的空間分區數據結構。 ● Point clouds : a point cloud is an OC tree structure that contains points. 點雲：點雲是包含點的OC樹結構。 Some of above objects can have special properties allowing other objects or calculation modules to interact with them. Objects can be: 以上某些物件可以具有特殊的屬性，從而允許其他物件或計算模塊與它們進行交互。物件可以是： ● Collidable \xa0 \xa0 \xa0 \xa0可碰撞 ● Measurable \xa0 \xa0 可衡量的 ● Detectable \xa0 \xa0 \xa0可檢測的 ● Renderable \xa0 \xa0 可呈現 ● Viewable \xa0 \xa0 \xa0 \xa0 可見的 Collections  集合 A collection is a user-defined collection of scene objects. 集合是場景物件的用戶定義集合。  A collection has to contain at least one object and is considered to be an entity (objects are also entities) 集合必須包含至少一個物件，並且被認為是一個實體（物件也是實體）。 Collections are useful when referring to several objects like a robot for instance 當引用多個物件（例如機器人）時，集合很有用 CoppeliaSim supports calculations based not only on objects, but also on collections CoppeliaSim支持不僅基於物件而且還基於集合的計算 For instance the collision detection module allows registering following collision pair(collection A; object B 例如，碰撞檢測模塊允許註冊以下碰撞(集合A；物件B) The collision checking algorithm will then check whether the collection A (any object composing it) collides with object B. 然後，碰撞檢查算法將檢查集合A（組成它的任何對象）是否與物件B碰撞。 Collections are collidable, measurable, detectable and renderable entities. 集合是可碰撞，可測量，可檢測和可渲染的實體。', 'tags': '', 'url': 'Calculation modules.html'}, {'title': 'Writing code', 'text': 'CoppeliaSim is a highly customizable simulator: every aspect of a simulation can be customized CoppeliaSim是高度可定制的模擬器：可以自定義模擬的每個方面。 Moreover, the simulator itself can be customized and tailored so as to behave exactly as desired. 此外，模擬器本身可以進行定制和定制，以使其性能完全符合要求。 This is allowed through an elaborate Application Programming Interface (API). 這可以通過精心設計的應用程序編程接口（API）來實現。 Six different programming or coding approaches are supported, 支持六種不同的編程或編碼方法， each having particular advantages (and obviously also disadvantages) over the others 每個都比其他的具有特殊的優勢（顯然也有劣勢） but all six are mutually compatible (i.e. can be used at the same time, or even hand-in-hand) 但所有六種方法都是相互兼容的（即可以同時使用，甚至可以穿插使用）。 The control entity of a model, scene, or the simulator itself can be located inside: 模型，場景或模擬器本身的控制實體可以位於以下位置： \n ● embedded scrip t \xa0 \xa0 \xa0嵌入式腳本 ● an add-on\xa0  \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0\xa0 附加組件 ● a plugin  \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0\xa0 插件 ● remote API client  \xa0\xa0 遠程API客戶端   ● ROS node ● BlueZero node', 'tags': '', 'url': 'Writing code.html'}, {'title': 'Simulation', 'text': 'https://www.coppeliarobotics.com/helpFiles/en/simulation.htm \n', 'tags': '', 'url': 'Simulation.html'}, {'title': 'Tutorials', 'text': 'https://www.coppeliarobotics.com/helpFiles/en/tutorials.htm \n', 'tags': '', 'url': 'Tutorials.html'}, {'title': 'Random grouping', 'text': '亂數分組程式流程: \n 1.抓出學員資料 \n 利用Python的requests模組來擷取網頁上的內容 \n 2.將抓出的資料轉為文字檔 \n 設定一變數將剛剛擷取出來的內容轉為文字檔方便之後做處理 \n 3.將文字檔內容轉為數列 \n 利用split語法將剛剛的文字內容以空格作為分割依據來建立一數列 \n 4.使用random模組將學員資料打亂 \n 將上述的數列內容由原本依照學號排序之順序改為亂數排序 \n 5.利用迴圈及判斷式列印文字 \n 利用第一層迴圈來顯示1~4組，接著利用判斷式來分辨目前分到第幾組了並再次利用迴圈來做組員分配 \n import requests\nimport random\nurl = "https://mde.tw/cd2020/downloads/2020spring_cd_2a_list.txt"\nMsource = requests.get(url)\n#print(Msource.text)\nmember = Msource.text\nmlist = member.split("\\n")\nmlist.pop()\n#print(member)\nmlen = len(mlist)\n#print(mlist[0:13])\nrandom.shuffle(mlist)\n\ng1 = 13\ng2 = 2*g1\ng3 = 3*g1\ng4 = int(mlen)\n\nprint("全班共",mlen,"人")\nfor i in range(1,5):\n    print("Group",i,":")\n    if (i == 1):\n        for j in range(0,g1):\n            print(mlist[j])\n            j += 1\n        print("-"*20)\n    elif (i == 2):\n        for m in range(g1,g2):\n            print(mlist[g1])\n            g1 += 1\n        print("-"*20)\n    elif (i == 3):\n        for k in range(g2,g3):\n            print(mlist[g2])\n            g2 += 1\n        print("-"*20)\n    elif (i == 4):\n        for l in range(g3,g4):\n            print(mlist[g3])\n            g3 += 1\n        print("-"*20)\nprint(mlist)\n \n \n \n', 'tags': '', 'url': 'Random grouping.html'}]};