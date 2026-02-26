import { Student } from '../types';

export const MOCK_STUDENTS: Student[] = [
  // --- HIGH LEVEL (17-20 балл) ---
  {
    id: "2024-901",
    name: "Ербосын Альтаир Жайдарұлы",
    grade: "9A",
    attendance: 100,
    testResults: [{ name: "АК #1", score: 18, maxScore: 20 }, { name: "АК #2", score: 20, maxScore: 20 }],
    feedback: "Альтаир бағдарламалау саласында ерекше қабілет танытып жүр. Ол JS функциялары мен логикалық құрылымдарды өте терең меңгерген. Сабақ барысында күрделі алгоритмдік есептерді шешуде көшбасшылық қасиеттерін көрсетеді. Оның техникалық ойлау деңгейі мен жаңа тақырыптарды қабылдау жылдамдығы өте жоғары.",
    syllabus: [
  { 
    topic: "JavaScript Basics & Logic", 
    status: 'Completed', 
    description: "Айнымалылар, деректер типтері, шартты операторлар (if/else) және логикалық амалдар." 
  },
  { 
    topic: "Loops & Functions", 
    status: 'Completed', 
    description: "Қайталану циклдері (for/while), функцияларды жариялау және оқиғаларды (events) басқару." 
  },
  { 
    topic: "Advanced Objects", 
    status: 'Current', 
    description: "Күрделі нысандар (objects), массивтердің әдістері және JSON деректер құрылымымен жұмыс." 
  },
  { 
    topic: "AI Integration", 
    status: 'Current', 
    description: "Жасанды интеллект (OpenAI/Gemini API) мүмкіндіктерін веб-қосымшаға қосу және Prompt engineering." 
  },
  { 
    topic: "DOM Manipulation", 
    status: 'Upcoming', 
    description: "Веб-беттегі элементтерді JavaScript арқылы басқару, динамикалық контент жасау." 
  },
  { 
    topic: "Final Web App Project", 
    status: 'Upcoming', 
    description: "Толыққанды AI көмекшісін немесе сервистік веб-қосымшаны жасау және жариялау." 
  }
], 
    externalResourcesUrl: "slm55.github.io/js-course"
  },
  {
    id: "2024-902",
    name: "Оралбек Арсен Досжанұлы",
    grade: "9A",
    attendance: 98,
    testResults: [{ name: "АК #1", score: 17, maxScore: 20 }, { name: "АК #2", score: 19, maxScore: 20 }],
    feedback: "Арсен — өз жұмысына өте жауапты және мұқият оқушы. JavaScript тіліндегі нысандармен жұмыс істеу кезінде жоғары деңгейлі білім көрсетті. Ол тек тапсырманы орындап қана қоймай, кодтың оңтайлы жазылуына мән береді. Оның ізденімпаздығы болашақта кәсіби деңгейге жетуіне мүмкіндік береді.",
    syllabus: [
  { 
    topic: "JavaScript Basics & Logic", 
    status: 'Completed', 
    description: "Айнымалылар, деректер типтері, шартты операторлар (if/else) және логикалық амалдар." 
  },
  { 
    topic: "Loops & Functions", 
    status: 'Completed', 
    description: "Қайталану циклдері (for/while), функцияларды жариялау және оқиғаларды (events) басқару." 
  },
  { 
    topic: "Advanced Objects", 
    status: 'Current', 
    description: "Күрделі нысандар (objects), массивтердің әдістері және JSON деректер құрылымымен жұмыс." 
  },
  { 
    topic: "AI Integration", 
    status: 'Current', 
    description: "Жасанды интеллект (OpenAI/Gemini API) мүмкіндіктерін веб-қосымшаға қосу және Prompt engineering." 
  },
  { 
    topic: "DOM Manipulation", 
    status: 'Upcoming', 
    description: "Веб-беттегі элементтерді JavaScript арқылы басқару, динамикалық контент жасау." 
  },
  { 
    topic: "Final Web App Project", 
    status: 'Upcoming', 
    description: "Толыққанды AI көмекшісін немесе сервистік веб-қосымшаны жасау және жариялау." 
  }
],
    externalResourcesUrl: "slm55.github.io/js-course"
  },
  {
    id: "2024-903",
    name: "Бекетай Дилара Ермекқызы",
    grade: "9A",
    attendance: 97,
    testResults: [{ name: "АК #1", score: 18, maxScore: 20 }, { name: "АК #2", score: 20, maxScore: 20 }],
    feedback: "Дилара сабаққа зор ынтамен қатысады және JS негіздерін өте сапалы меңгерген. Оның логикалық пайымдауы мен идеяны жүзеге асыру қабілеті тоқсандық жобасында анық көрінді. Оның өз-өзіне деген сенімділігі мен білімі оны үздіктер қатарына қосады.",
    midtermProject: {
      title: "GlobalPath — Халықаралық білім платформасы",
      description: "Мектеп түлектеріне әлемнің үздік университеттерін таңдауға көмектесетін интеллектуалды платформа. AI көмегімен оқушының академиялық көрсеткіштеріне талдау жасап, қолайлы гранттық бағдарламалардың дербес тізімін ұсынады.",
      grade: "20/20",
      feedback: "Дилара, сенің жобаң техникалық тұрғыдан да, идеялық тұрғыдан да өте жоғары деңгейде. JS нысандары мен массивтерді деректерді өңдеу үшін өте тиімді пайдаланғансың. Платформаның интерфейсі ыңғайлы, ал AI-мен интеграция жасау талпынысың керемет.",
      status: 'Completed',
      imageUrl: "10.png",
      tools: ["HTML", "CSS", "JavaScript", "OpenAI API"]
    },
    syllabus: [
  { 
    topic: "JavaScript Basics & Logic", 
    status: 'Completed', 
    description: "Айнымалылар, деректер типтері, шартты операторлар (if/else) және логикалық амалдар." 
  },
  { 
    topic: "Loops & Functions", 
    status: 'Completed', 
    description: "Қайталану циклдері (for/while), функцияларды жариялау және оқиғаларды (events) басқару." 
  },
  { 
    topic: "Advanced Objects", 
    status: 'Current', 
    description: "Күрделі нысандар (objects), массивтердің әдістері және JSON деректер құрылымымен жұмыс." 
  },
  { 
    topic: "AI Integration", 
    status: 'Current', 
    description: "Жасанды интеллект (OpenAI/Gemini API) мүмкіндіктерін веб-қосымшаға қосу және Prompt engineering." 
  },
  { 
    topic: "DOM Manipulation", 
    status: 'Upcoming', 
    description: "Веб-беттегі элементтерді JavaScript арқылы басқару, динамикалық контент жасау." 
  },
  { 
    topic: "Final Web App Project", 
    status: 'Upcoming', 
    description: "Толыққанды AI көмекшісін немесе сервистік веб-қосымшаны жасау және жариялау." 
  }
], externalResourcesUrl: "slm55.github.io/js-course"
  },

  // --- LOW LEVEL (10-13 балл + Тәртіп + Жобалар) ---
  {
    id: "2024-904",
    name: "Азаматқызы Адема",
    grade: "9A",
    attendance: 82,
    testResults: [{ name: "АК #1", score: 10, maxScore: 20 }, { name: "АК #2", score: 12, maxScore: 20 }],
    feedback: "Адеманың шығармашылық қабілеті жоғары, бірақ техникалық тақырыптарды меңгеруде сабақ үстіндегі зейінді арттыру қажет. Кей кездері тәртіп мәселесі мен алаңғасарлық оқу процесіне кедергі келтіреді. Соған қарамастан, өз жобасын аяғына дейін жеткізіп, жақсы нәтиже көрсетті.",
    midtermProject: {
      title: "VoyageAI — Интеллектуалды саяхат жоспарлаушы",
      description: "Пайдаланушының жеке сұраныстары мен қалауларына негізделіп, мінсіз саяхат жоспарын құрып беретін жасанды интеллект көмекшісі. Баратын жерлерді таңдап, бюджетті есептеуді секундтар ішінде орындайды.",
      grade: "14/20",
      feedback: "Адема, саяхатты жоспарлау идеясы өте креативті. Сенің визуалды талғамың мен CSS-пен жұмыс істеу қабілетің қосымшаны өте әдемі етіп көрсетті. Дегенмен, JS логикасында кейбір қателер бар. Сабаққа көбірек зейін қойсаң, техникалық бөлімді де мінсіз атқара аласың.",
      status: 'Completed',
      imageUrl: "9.png",
      tools: ["HTML", "CSS", "JS", "AI"]
    },
    syllabus: [
  { 
    topic: "JavaScript Basics & Logic", 
    status: 'Completed', 
    description: "Айнымалылар, деректер типтері, шартты операторлар (if/else) және логикалық амалдар." 
  },
  { 
    topic: "Loops & Functions", 
    status: 'Completed', 
    description: "Қайталану циклдері (for/while), функцияларды жариялау және оқиғаларды (events) басқару." 
  },
  { 
    topic: "Advanced Objects", 
    status: 'Current', 
    description: "Күрделі нысандар (objects), массивтердің әдістері және JSON деректер құрылымымен жұмыс." 
  },
  { 
    topic: "AI Integration", 
    status: 'Current', 
    description: "Жасанды интеллект (OpenAI/Gemini API) мүмкіндіктерін веб-қосымшаға қосу және Prompt engineering." 
  },
  { 
    topic: "DOM Manipulation", 
    status: 'Upcoming', 
    description: "Веб-беттегі элементтерді JavaScript арқылы басқару, динамикалық контент жасау." 
  },
  { 
    topic: "Final Web App Project", 
    status: 'Upcoming', 
    description: "Толыққанды AI көмекшісін немесе сервистік веб-қосымшаны жасау және жариялау." 
  }
], externalResourcesUrl: "slm55.github.io/js-course"
  },
  {
    id: "2024-905",
    name: "Ерзат Ерден",
    grade: "9A",
    attendance: 78,
    testResults: [{ name: "АК #1", score: 9, maxScore: 20 }, { name: "АК #2", score: 11, maxScore: 20 }],
    feedback: "Ерденнің оқу үлгерімін жақсарту үшін сабаққа деген көзқарасын өзгертуі қажет. Сабақ үстінде жиі сөйлесу оның дамуын тежейді. Дегенмен, жоба жұмысы кезінде ол өзінің қабілеті бар екенін дәлелдеді. Тәртіп пен жүйелі жұмыс болса, нәтижесі бұдан да жақсы болар еді.",
    midtermProject: {
      title: "Linguo2026 — Тіл үйрену стратегиясы",
      description: "Әр пайдаланушының базалық білімі мен мақсаттарына негізделіп, тіл үйренудің дербес стратегиясын құратын интеллектуалды платформа. Диагностикалық тест арқылы үйренушінің деңгейін анықтайды.",
      grade: "13/20",
      feedback: "Ерден, тіл үйренуді автоматтандыру — өте жақсы тақырып. Жобаның құрылымы жақсы, бірақ бағдарламаның функционалдығын қамтамасыз ететін JS логикасында аяқталмаған тұстар бар. Сабақта зейінді арттырсаң, кодтағы қателерді өз бетіңше тауып, жобаңды бұдан да қуатты ете алар едің.",
      status: 'Completed',
      imageUrl: "11.png",
      tools: ["HTML", "CSS", "JS", "AI"]
    },
    syllabus: [
  { 
    topic: "JavaScript Basics & Logic", 
    status: 'Completed', 
    description: "Айнымалылар, деректер типтері, шартты операторлар (if/else) және логикалық амалдар." 
  },
  { 
    topic: "Loops & Functions", 
    status: 'Completed', 
    description: "Қайталану циклдері (for/while), функцияларды жариялау және оқиғаларды (events) басқару." 
  },
  { 
    topic: "Advanced Objects", 
    status: 'Current', 
    description: "Күрделі нысандар (objects), массивтердің әдістері және JSON деректер құрылымымен жұмыс." 
  },
  { 
    topic: "AI Integration", 
    status: 'Current', 
    description: "Жасанды интеллект (OpenAI/Gemini API) мүмкіндіктерін веб-қосымшаға қосу және Prompt engineering." 
  },
  { 
    topic: "DOM Manipulation", 
    status: 'Upcoming', 
    description: "Веб-беттегі элементтерді JavaScript арқылы басқару, динамикалық контент жасау." 
  },
  { 
    topic: "Final Web App Project", 
    status: 'Upcoming', 
    description: "Толыққанды AI көмекшісін немесе сервистік веб-қосымшаны жасау және жариялау." 
  }
], externalResourcesUrl: "slm55.github.io/js-course"
  },
  {
    id: "2024-906",
    name: "Абылғазы Рамазан Русланұлы",
    grade: "9A",
    attendance: 80,
    testResults: [{ name: "АК #1", score: 10, maxScore: 20 }, { name: "АК #2", score: 13, maxScore: 20 }],
    feedback: "Рамазанның ілгерілеуі байқалады, бірақ оған әлі де зейін қойып жұмыс істеу қажет. Сабақ кезінде өзге нәрселерге алаңдап, тақырыптан артта қалу жағдайлары кездеседі. Оның жобасы (OKO) өте жақсы әлеуметтік бағытты таңдаған.",
    midtermProject: {
      title: "OKO — Көру қабілетін диагностикалау",
      description: "Жасанды интеллект негізінде көру қабілетін диагностикалауға және көз саулығын жақсартуға арналған кешенді цифрлық шешім. Көздің шаршауын басу бойынша дербес нұсқаулықтар береді.",
      grade: "15/20",
      feedback: "Рамазан, бұл жобаның әлеуметтік маңызы өте жоғары, жарайсың! Сауалнама нәтижелеріне байланысты дербес кеңестер беретін логиканы құрастыруда жақсы қадамдар жасағансың. Бірақ кодтың оңтайлылығы бойынша әлі де жұмыс істеу керек. Сабақта теорияға тереңірек үңілсең, келесі тоқсанда нәтижең артады.",
      status: 'Completed',
      imageUrl: "12.png",
      tools: ["HTML", "CSS", "JS", "AI"]
    },
    syllabus: [
  { 
    topic: "JavaScript Basics & Logic", 
    status: 'Completed', 
    description: "Айнымалылар, деректер типтері, шартты операторлар (if/else) және логикалық амалдар." 
  },
  { 
    topic: "Loops & Functions", 
    status: 'Completed', 
    description: "Қайталану циклдері (for/while), функцияларды жариялау және оқиғаларды (events) басқару." 
  },
  { 
    topic: "Advanced Objects", 
    status: 'Current', 
    description: "Күрделі нысандар (objects), массивтердің әдістері және JSON деректер құрылымымен жұмыс." 
  },
  { 
    topic: "AI Integration", 
    status: 'Current', 
    description: "Жасанды интеллект (OpenAI/Gemini API) мүмкіндіктерін веб-қосымшаға қосу және Prompt engineering." 
  },
  { 
    topic: "DOM Manipulation", 
    status: 'Upcoming', 
    description: "Веб-беттегі элементтерді JavaScript арқылы басқару, динамикалық контент жасау." 
  },
  { 
    topic: "Final Web App Project", 
    status: 'Upcoming', 
    description: "Толыққанды AI көмекшісін немесе сервистік веб-қосымшаны жасау және жариялау." 
  }
], externalResourcesUrl: "slm55.github.io/js-course"
  },
  {
    id: "2024-907",
    name: "Еркін Ақниет Ертісқызы",
    grade: "9A",
    attendance: 85,
    testResults: [{ name: "АК #1", score: 11, maxScore: 20 }, { name: "АК #2", score: 12, maxScore: 20 }],
    feedback: "Ақниеттің бойында шығармашылық әлеует зор, бірақ техникалық алгоритмдерді меңгеруде жиі қиындықтарға тап болады. Сабақ үстінде өзге оқушылармен сөйлесу оның материалды толық түсінуіне кедергі келтіруде.",
    midtermProject: {
      title: "FocusFlow — Өнімділікті арттыру менторы",
      description: "Пайдаланушының өнімділігін ең жоғары деңгейге жеткізуге арналған интеллектуалды экожүйе. Зейін қою қабілетін жаттықтыратын және жиналған деректер негізінде нейро-талдау жасайды.",
      grade: "15/20",
      feedback: "Ақниет, 'FocusFlow' интерфейсі мен идеясы өте заманауи шыққан. JS нысандары мен уақытпен жұмыс істеу бөлімдерін қолдануға тырысқаның жақсы. Дегенмен, техникалық жүзеге асыруда логикалық қателер кездеседі. Өз қабілетіңді толық ашу үшін сабақта көбірек зейін қойып, тәртіпке мән берсең, нағыз маман боласың.",
      status: 'Completed',
      imageUrl: "13.png",
      tools: ["HTML", "CSS", "JS", "AI"]
    },
    syllabus: [
  { 
    topic: "JavaScript Basics & Logic", 
    status: 'Completed', 
    description: "Айнымалылар, деректер типтері, шартты операторлар (if/else) және логикалық амалдар." 
  },
  { 
    topic: "Loops & Functions", 
    status: 'Completed', 
    description: "Қайталану циклдері (for/while), функцияларды жариялау және оқиғаларды (events) басқару." 
  },
  { 
    topic: "Advanced Objects", 
    status: 'Current', 
    description: "Күрделі нысандар (objects), массивтердің әдістері және JSON деректер құрылымымен жұмыс." 
  },
  { 
    topic: "AI Integration", 
    status: 'Current', 
    description: "Жасанды интеллект (OpenAI/Gemini API) мүмкіндіктерін веб-қосымшаға қосу және Prompt engineering." 
  },
  { 
    topic: "DOM Manipulation", 
    status: 'Upcoming', 
    description: "Веб-беттегі элементтерді JavaScript арқылы басқару, динамикалық контент жасау." 
  },
  { 
    topic: "Final Web App Project", 
    status: 'Upcoming', 
    description: "Толыққанды AI көмекшісін немесе сервистік веб-қосымшаны жасау және жариялау." 
  }
], externalResourcesUrl: "slm55.github.io/js-course"
  },
  {
    id: "2024-908",
    name: "Бекберген Ажар Ұланқызы",
    grade: "9A",
    attendance: 84,
    testResults: [{ name: "АК #1", score: 10, maxScore: 20 }, { name: "АК #2", score: 12, maxScore: 20 }],
    feedback: "Ажардың оқу үлгерімінде тұрақсыздық бар. Сабақ кезіндегі тәртібі мен зейініне байланысты кейбір маңызды JS тақырыптарын толық меңгермегені байқалады. Егер Ажар сабаққа байсалды қараса, нәтижесі жақсаратынына сенеміз.",
    syllabus: [
  { 
    topic: "JavaScript Basics & Logic", 
    status: 'Completed', 
    description: "Айнымалылар, деректер типтері, шартты операторлар (if/else) және логикалық амалдар." 
  },
  { 
    topic: "Loops & Functions", 
    status: 'Completed', 
    description: "Қайталану циклдері (for/while), функцияларды жариялау және оқиғаларды (events) басқару." 
  },
  { 
    topic: "Advanced Objects", 
    status: 'Current', 
    description: "Күрделі нысандар (objects), массивтердің әдістері және JSON деректер құрылымымен жұмыс." 
  },
  { 
    topic: "AI Integration", 
    status: 'Current', 
    description: "Жасанды интеллект (OpenAI/Gemini API) мүмкіндіктерін веб-қосымшаға қосу және Prompt engineering." 
  },
  { 
    topic: "DOM Manipulation", 
    status: 'Upcoming', 
    description: "Веб-беттегі элементтерді JavaScript арқылы басқару, динамикалық контент жасау." 
  },
  { 
    topic: "Final Web App Project", 
    status: 'Upcoming', 
    description: "Толыққанды AI көмекшісін немесе сервистік веб-қосымшаны жасау және жариялау." 
  }
], externalResourcesUrl: "slm55.github.io/js-course"
  },
  {
    id: "2024-909",
    name: "Ерсінбай Нұрсерік Ерікұлы",
    grade: "9A",
    attendance: 76,
    testResults: [{ name: "АК #1", score: 8, maxScore: 20 }, { name: "АК #2", score: 11, maxScore: 20 }],
    feedback: "Нұрсеріктің сабаққа қатысуы мен тәртібі көңіл бөлуді қажет етеді. Сабақ үстінде жиі алаңдап, практикалық жұмыстардан қалып қояды. Нұрсерікке өзінің оқуға деген көзқарасын өзгертуді ұсынамыз.",
    syllabus: [
  { 
    topic: "JavaScript Basics & Logic", 
    status: 'Completed', 
    description: "Айнымалылар, деректер типтері, шартты операторлар (if/else) және логикалық амалдар." 
  },
  { 
    topic: "Loops & Functions", 
    status: 'Completed', 
    description: "Қайталану циклдері (for/while), функцияларды жариялау және оқиғаларды (events) басқару." 
  },
  { 
    topic: "Advanced Objects", 
    status: 'Current', 
    description: "Күрделі нысандар (objects), массивтердің әдістері және JSON деректер құрылымымен жұмыс." 
  },
  { 
    topic: "AI Integration", 
    status: 'Current', 
    description: "Жасанды интеллект (OpenAI/Gemini API) мүмкіндіктерін веб-қосымшаға қосу және Prompt engineering." 
  },
  { 
    topic: "DOM Manipulation", 
    status: 'Upcoming', 
    description: "Веб-беттегі элементтерді JavaScript арқылы басқару, динамикалық контент жасау." 
  },
  { 
    topic: "Final Web App Project", 
    status: 'Upcoming', 
    description: "Толыққанды AI көмекшісін немесе сервистік веб-қосымшаны жасау және жариялау." 
  }
], externalResourcesUrl: "slm55.github.io/js-course"
  },

  // --- MEDIUM LEVEL (12-16 балл) ---
  {
    id: "2024-910",
    name: "Нұрқадыр Бақберген Айтжанұлы",
    grade: "9A",
    attendance: 92,
    testResults: [{ name: "АК #1", score: 13, maxScore: 20 }, { name: "АК #2", score: 15, maxScore: 20 }],
    feedback: "Бақбергеннің оқу үлгерімі тұрақты және жақсы даму үстінде. JS циклдері мен шартты операторларын жақсы меңгерген. Сабақтарға белсенді қатысады және сұрақ қоюдан тартынбайды. Өз бетінше жұмыс істеу дағдыларын дамытса, нәтижелері бұдан да жоғары болады.",
    syllabus: [
  { 
    topic: "JavaScript Basics & Logic", 
    status: 'Completed', 
    description: "Айнымалылар, деректер типтері, шартты операторлар (if/else) және логикалық амалдар." 
  },
  { 
    topic: "Loops & Functions", 
    status: 'Completed', 
    description: "Қайталану циклдері (for/while), функцияларды жариялау және оқиғаларды (events) басқару." 
  },
  { 
    topic: "Advanced Objects", 
    status: 'Current', 
    description: "Күрделі нысандар (objects), массивтердің әдістері және JSON деректер құрылымымен жұмыс." 
  },
  { 
    topic: "AI Integration", 
    status: 'Current', 
    description: "Жасанды интеллект (OpenAI/Gemini API) мүмкіндіктерін веб-қосымшаға қосу және Prompt engineering." 
  },
  { 
    topic: "DOM Manipulation", 
    status: 'Upcoming', 
    description: "Веб-беттегі элементтерді JavaScript арқылы басқару, динамикалық контент жасау." 
  },
  { 
    topic: "Final Web App Project", 
    status: 'Upcoming', 
    description: "Толыққанды AI көмекшісін немесе сервистік веб-қосымшаны жасау және жариялау." 
  }
], externalResourcesUrl: "slm55.github.io/js-course"
  },
  {
    id: "2024-911",
    name: "Жанызақ Дидар Полатұлы",
    grade: "9A",
    attendance: 90,
    testResults: [{ name: "АК #1", score: 12, maxScore: 20 }, { name: "АК #2", score: 14, maxScore: 20 }],
    feedback: "Дидар сабақ кезінде жаңа материалды жақсы түсінуге тырысады. Оның бағдарламалауға деген қызығушылығы байқалады, әсіресе фронтенд негіздерінде жақсы нәтиже көрсетті. Кейде күрделі логикалық есептерде мұғалімнің көмегін қажет етеді.",
    syllabus: [
  { 
    topic: "JavaScript Basics & Logic", 
    status: 'Completed', 
    description: "Айнымалылар, деректер типтері, шартты операторлар (if/else) және логикалық амалдар." 
  },
  { 
    topic: "Loops & Functions", 
    status: 'Completed', 
    description: "Қайталану циклдері (for/while), функцияларды жариялау және оқиғаларды (events) басқару." 
  },
  { 
    topic: "Advanced Objects", 
    status: 'Current', 
    description: "Күрделі нысандар (objects), массивтердің әдістері және JSON деректер құрылымымен жұмыс." 
  },
  { 
    topic: "AI Integration", 
    status: 'Current', 
    description: "Жасанды интеллект (OpenAI/Gemini API) мүмкіндіктерін веб-қосымшаға қосу және Prompt engineering." 
  },
  { 
    topic: "DOM Manipulation", 
    status: 'Upcoming', 
    description: "Веб-беттегі элементтерді JavaScript арқылы басқару, динамикалық контент жасау." 
  },
  { 
    topic: "Final Web App Project", 
    status: 'Upcoming', 
    description: "Толыққанды AI көмекшісін немесе сервистік веб-қосымшаны жасау және жариялау." 
  }
], externalResourcesUrl: "slm55.github.io/js-course"
  },
  {
    id: "2024-912",
    name: "Мұқаш Жанай Есейұлы",
    grade: "9A",
    attendance: 94,
    testResults: [{ name: "АК #1", score: 14, maxScore: 20 }, { name: "АК #2", score: 16, maxScore: 20 }],
    feedback: "Жанай — сабаққа үлкен жауапкершілікпен қарайтын оқушы. Ол JS функцияларын қолдануда жақсы дағдылар танытып жүр. Оның жұмыс істеу қарқыны тұрақты, тапсырмаларды уақытылы орындайды.",
    syllabus: [
  { 
    topic: "JavaScript Basics & Logic", 
    status: 'Completed', 
    description: "Айнымалылар, деректер типтері, шартты операторлар (if/else) және логикалық амалдар." 
  },
  { 
    topic: "Loops & Functions", 
    status: 'Completed', 
    description: "Қайталану циклдері (for/while), функцияларды жариялау және оқиғаларды (events) басқару." 
  },
  { 
    topic: "Advanced Objects", 
    status: 'Current', 
    description: "Күрделі нысандар (objects), массивтердің әдістері және JSON деректер құрылымымен жұмыс." 
  },
  { 
    topic: "AI Integration", 
    status: 'Current', 
    description: "Жасанды интеллект (OpenAI/Gemini API) мүмкіндіктерін веб-қосымшаға қосу және Prompt engineering." 
  },
  { 
    topic: "DOM Manipulation", 
    status: 'Upcoming', 
    description: "Веб-беттегі элементтерді JavaScript арқылы басқару, динамикалық контент жасау." 
  },
  { 
    topic: "Final Web App Project", 
    status: 'Upcoming', 
    description: "Толыққанды AI көмекшісін немесе сервистік веб-қосымшаны жасау және жариялау." 
  }
], externalResourcesUrl: "slm55.github.io/js-course"
  },
  {
    id: "2024-913",
    name: "Қазақстан Таңнұр Қозыбекқызы",
    grade: "9A",
    attendance: 95,
    testResults: [{ name: "АК #1", score: 15, maxScore: 20 }, { name: "АК #2", score: 17, maxScore: 20 }],
    feedback: "Таңнұр — өте тиянақты оқушы. JS негіздерін жақсы меңгерген және нысандармен жұмыс кезінде жақсы белсенділік танытты. Оның жұмыс істеу стилі жүйелі, бұл оған күрделі тапсырмаларды қатесіз орындауға көмектеседі.",
    syllabus: [
  { 
    topic: "JavaScript Basics & Logic", 
    status: 'Completed', 
    description: "Айнымалылар, деректер типтері, шартты операторлар (if/else) және логикалық амалдар." 
  },
  { 
    topic: "Loops & Functions", 
    status: 'Completed', 
    description: "Қайталану циклдері (for/while), функцияларды жариялау және оқиғаларды (events) басқару." 
  },
  { 
    topic: "Advanced Objects", 
    status: 'Current', 
    description: "Күрделі нысандар (objects), массивтердің әдістері және JSON деректер құрылымымен жұмыс." 
  },
  { 
    topic: "AI Integration", 
    status: 'Current', 
    description: "Жасанды интеллект (OpenAI/Gemini API) мүмкіндіктерін веб-қосымшаға қосу және Prompt engineering." 
  },
  { 
    topic: "DOM Manipulation", 
    status: 'Upcoming', 
    description: "Веб-беттегі элементтерді JavaScript арқылы басқару, динамикалық контент жасау." 
  },
  { 
    topic: "Final Web App Project", 
    status: 'Upcoming', 
    description: "Толыққанды AI көмекшісін немесе сервистік веб-қосымшаны жасау және жариялау." 
  }
], externalResourcesUrl: "slm55.github.io/js-course"
  },
  {
    id: "2024-914",
    name: "Нұрмұхаметұлы Нұртас",
    grade: "9A",
    attendance: 91,
    testResults: [{ name: "АК #1", score: 14, maxScore: 20 }, { name: "АК #2", score: 16, maxScore: 20 }],
    feedback: "Нұртас сабақтарға тұрақты қатысып, бағдарламалау дағдыларын біртіндеп дамытып келеді. Ол алгоритмдерді түсінуде жақсы қабілет танытуда. Практикалық жұмыстар кезінде ол өз бетінше шешім табуға тырысады.",
    syllabus: [
  { 
    topic: "JavaScript Basics & Logic", 
    status: 'Completed', 
    description: "Айнымалылар, деректер типтері, шартты операторлар (if/else) және логикалық амалдар." 
  },
  { 
    topic: "Loops & Functions", 
    status: 'Completed', 
    description: "Қайталану циклдері (for/while), функцияларды жариялау және оқиғаларды (events) басқару." 
  },
  { 
    topic: "Advanced Objects", 
    status: 'Current', 
    description: "Күрделі нысандар (objects), массивтердің әдістері және JSON деректер құрылымымен жұмыс." 
  },
  { 
    topic: "AI Integration", 
    status: 'Current', 
    description: "Жасанды интеллект (OpenAI/Gemini API) мүмкіндіктерін веб-қосымшаға қосу және Prompt engineering." 
  },
  { 
    topic: "DOM Manipulation", 
    status: 'Upcoming', 
    description: "Веб-беттегі элементтерді JavaScript арқылы басқару, динамикалық контент жасау." 
  },
  { 
    topic: "Final Web App Project", 
    status: 'Upcoming', 
    description: "Толыққанды AI көмекшісін немесе сервистік веб-қосымшаны жасау және жариялау." 
  }
], externalResourcesUrl: "slm55.github.io/js-course"
  },
  {
    id: "2024-915",
    name: "Досжанқызы Аяжан",
    grade: "9A",
    attendance: 93,
    testResults: [{ name: "АК #1", score: 15, maxScore: 20 }, { name: "АК #2", score: 16, maxScore: 20 }],
    feedback: "Аяжан өзін сабырлы және зерек оқушы ретінде көрсетуде. Ол JavaScript тіліндегі логикалық амалдарды жақсы түсінеді. Сабақ үстіндегі жұмысы тұрақты, тапсырмаларды орындауда ұқыптылық танытады.",
    syllabus: [
  { 
    topic: "JavaScript Basics & Logic", 
    status: 'Completed', 
    description: "Айнымалылар, деректер типтері, шартты операторлар (if/else) және логикалық амалдар." 
  },
  { 
    topic: "Loops & Functions", 
    status: 'Completed', 
    description: "Қайталану циклдері (for/while), функцияларды жариялау және оқиғаларды (events) басқару." 
  },
  { 
    topic: "Advanced Objects", 
    status: 'Current', 
    description: "Күрделі нысандар (objects), массивтердің әдістері және JSON деректер құрылымымен жұмыс." 
  },
  { 
    topic: "AI Integration", 
    status: 'Current', 
    description: "Жасанды интеллект (OpenAI/Gemini API) мүмкіндіктерін веб-қосымшаға қосу және Prompt engineering." 
  },
  { 
    topic: "DOM Manipulation", 
    status: 'Upcoming', 
    description: "Веб-беттегі элементтерді JavaScript арқылы басқару, динамикалық контент жасау." 
  },
  { 
    topic: "Final Web App Project", 
    status: 'Upcoming', 
    description: "Толыққанды AI көмекшісін немесе сервистік веб-қосымшаны жасау және жариялау." 
  }
], externalResourcesUrl: "slm55.github.io/js-course"
  }
];
