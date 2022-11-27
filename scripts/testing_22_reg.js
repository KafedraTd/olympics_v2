
const filedToPopulate=document.getElementsByClassName("subField")[0]
var form = document.getElementById('testing');
var fieldsToPost=['data[grafa1_1]','data[grafa1_2]','data[grafa1_3]','data[grafa2-1]','data[grafa2-2]',
'data[grafa2-3]','data[grafa2-4]','data[grafa2-5]','data[grafa2-6]','data[grafa2-7]','data[grafa2-8]',
'data[grafa2-9]','data[grafa2-10]','data[grafa2-11]','data[grafa2-12]','data[check2kt]','data[grafa3-1]',
'data[grafa3-2]','data[grafa4]','data[grafa5]']
var x=[
    {
        "q":"1.В ХI-ХIII вв. был написан и применялся свод законов на славянском языке о внешней торговле, о порядке сбора торговых пошлин, об ответственности за несоблюдение пошлинно-торговых правил, который назывался:",
        "a": ['«Русский закон»','«Порядок и закон»','«Русская правда»','«Закон русской Земли»']
    },
    {
        "q":"2.Первая международная организация по таможенным вопросам называлась:",
        "a": ['ЮНКТАД','Всемирная торговая организация','Международный союз публикации таможенных тарифов','Всемирная таможенная организация']
    },
    {
        "q":"3.Упаковочный материал, поставленный вместе с товаром, пригодный для повторного использования, классифицируется в ТНВЭД:",
        "a": ['совместно с упакованным товаром','отдельно в самостоятельной товарной позиции','по усмотрению декларанта','совместно с транспортной тарой']
    },
    {
        "q":"4.В обязанности таможенного представителя не входит:",
        "a": ['соблюдение условий включения в реестр таможенных представителей','представление в таможенные органы отчетности о своей деятельности','соблюдение условий использования товаров в соответствии с таможенными процедурами','информирование таможенного органа, включившего его в реестр таможенных представителей, об изменении сведений, заявленных им при включении в реестр']
    },
    {
        "q":"5.Укажите неверное утверждение. Таможенные операции, совершаемые должностными лицами таможенного органа назначения при завершении процедуры транзита, включают:",
        "a": ['регистрацию и фиксирование даты и времени прибытия','выдачу перевозчику подтверждения о принятии и регистрации документов','проведение таможенного досмотра товаров','внесение сведений о доставке товаров в электронную базу транзитных деклараций']
    },
    {
        "q":"6.Перечень товаров, которые могут быть помещены под таможенную процедуру переработки для внутреннего потребления, утверждены:",
        "a": ['Постановлением Правительства РФ','ТК ЕАЭС','Федеральным законом «О таможенном регулировании в Российской Федерации»','Решением ЕЭК']
    },
    {
        "q":"7.Для участия в Международной промышленной выставке российское предприятие в таможенной процедуре временного вывоза сроком на 3 месяца вывезло свою продукцию – 3 станка и 2 аппарата. До окончания работы выставки был заключен контракт на продажу иностранной фирме двух аппаратов. Станки (3 шт.) после завершения выставки будут возвращены на территорию РФ.  Какие таможенные процедуры должны быть применены декларантом в данной ситуации для завершения процедуры временного вывоза?",
        "a": ['экспорт и реимпорт','экспорт и выпуск для внутреннего потребления','временный вывоз и реимпорт','реэкспорт и выпуск для внутреннего потребления']
    },
    {
        "q":"8.Под таможенную процедуру таможенного склада помещены товары, имеющие ограниченный срок реализации. Для завершения таможенной процедуры таможенного склада декларант должен поместить товары под иную таможенную процедуру:",
        "a": ['в пределах срока реализации этих товаров','не позднее чем за 180 календарных дней до истечения срока годности и (или) реализации','не позднее чем за 60 календарных дней до истечения срока годности и (или) реализации','срок годности (реализации) товара не должен превышать срока хранения товаров на таможенном складе']
    },
    {
        "q":"9.При перевозке товаров по таможенной процедуре транзита произошла авария, в результате которой были нарушены целостность грузового отделения автомобиля (где находились товары) и наложенные пломбы. В такой ситуации перевозчик:",
        "a": ['обязан принять меры по обеспечению сохранности товаров и незамедлительно сообщить об этом в ближайший таможенный орган','получить протокол о ДТП и продолжить перевозку товаров в таможенный орган назначения',
    'уведомить таможенный орган отправления об аварии','уведомить таможенный орган назначения об аварии и предполагаемом нарушении срока доставки товара']
    },
    {
        "q":"10.Передача гражданином России временно ввезенных им транспортных средств личного пользования во владение и пользование своим родителям:",
        "a": ['возможна без разрешения таможенного органа, но с обязательным декларированием','возможна без разрешения таможенного органа и без таможенного декларирования','возможна с разрешения таможенного органа и без таможенного декларирования','невозможна']
    },
    {
        "q":"11.Для помещения товаров под таможенную процедуру уничтожения декларант должен:",
        "a": ['получить заключение уполномоченного государственного органа о возможности уничтожения товаров с указанием способа и места уничтожения','получить от таможенного органа лицензию на право уничтожения товаров','получить сертификат от уполномоченного органа по сертификации о том, что уничтожение товаров возможно','подать декларацию на товары с заявлением таможенной процедуры уничтожения без представления каких-либо разрешительных документов']
    },
    {
        "q":"12.Письменная форма таможенного декларирования может применяться при помещении товаров под таможенную процедуру:",
        "a": ['таможенного транзита','экспорта','таможенного склада','реимпорта']
    },
    {
        "q":"13.Совокупность технических и программных средств передачи и обработки данных, которая совместно с каналами связи позволяет организовать интегрированную передачу разнородного трафика (данных, голоса и видео) между таможенными органами РФ, представляет собой:",
        "a": ['Ведомственную интегрированную телекоммуникационную сеть ФТС РФ','Единую государственную автоматизированную информационную систему','Автоматизированную информационную систему таможенного оформления','Межведомственную интегрированную телекоммуникационную сеть']
    },
    {
        "q":"14.Электронное декларирование, реализуемое посредством схемы ЭД-2, предполагает:",
        "a": ['использование сети Интернет для обмена информацией с информационными системами таможенных органов','использование ведомственной сети для обмена информацией с информационными системами таможенных органов','создание собственного узла доступа','невозможность использования профессиональных программных средств участников ВЭД']
    },
    {
        "q":"15.Согласно общему правилу транспортные средства международной перевозки:",
        "a": ['подлежат таможенному декларированию без помещения под таможенные процедуры','подлежат таможенному декларированию с помещением под таможенные процедуры','не подлежат таможенному декларированию и помещению под таможенные процедуры','не подлежат таможенному декларированию, но подлежат помещению под таможенные процедуры']
    },
    {
        "q":"16.В месте прибытия товаров коридоры «красный» и «зеленый» должны располагаться:",
        "a": ['после места выдачи багажа физическим лицам','в помещении, где находится несопровождаемый багаж','до мест пограничного контроля','на складе временного хранения']
    },
    {
        "q":"17.Декларант имеет право изменить общий порядок применения методов определения таможенной стоимости в отношении следующих методов:",
        "a": ['второго и третьего','первого и второго','третьего и четвертого','четвертого и пятого']
    },
    {
        "q":"18.Заявление плательщика о возврате излишне уплаченных или излишне взысканных таможенных платежей может быть подано в течение:",
        "a": ['двух лет со дня излишней уплаты либо излишнего взыскания таможенных платежей','трех лет со дня излишней уплаты либо излишнего взыскания таможенных платежей','четырех лет со дня излишней уплаты либо излишнего взыскания таможенных платежей','пяти лет со дня излишней уплаты либо излишнего взыскания таможенных платежей']
    },
    {
        "q":"19.В декларации на товары информация о льготах и преференциях по таможенным платежам отражается в графе:",
        "a": ['33','36','43','45']
    },
    {
        "q":"20.Какое условие поставки согласно Инкотермс-2020 применимо для любого вида транспорта?",
        "a": ['CIF','CIP','CFR','FAS']
    }
]

var myForm=document.getElementsByTagName('form')[0];

var greetingName = localStorage.getItem('loginName');
var studEvent = localStorage.getItem('evtstu');
var url = "https://sheetdb.io/api/v1/d74h4a1vd9319";



function getTransfering(){
    document.getElementsByName('data[usrName]')[0].value = greetingName;
    document.getElementsByName('data[studEvent]')[0].value = studEvent;
    formatDate();
    for (i in x){
        question=x[i].q
        options=x[i].a
        let qDiv=document.createElement('div')
        qDiv.className='question'
        qDiv.innerText=question
        let oDiv=document.createElement('div')
        oDiv.className='options'
        for (k in options){
                    
            let radioButton = document.createElement('input');
            radioButton.type = "radio";
            radioButton.name=fieldsToPost[i]
            radioButton.value = options[k];
            radioButton.id = `${i}/${k}`;

            let label=document.createElement("label");
            label.innerText=options[k]
            label.className='lbl'
            label.htmlFor=`${i}/${k}`
            
            let spn=document.createElement('span');
            spn.className="checkmark"

            label.appendChild(radioButton)
            label.appendChild(spn)

            oDiv.appendChild(label);
        }
        
        let qDivMain=document.createElement('div')
        qDivMain.className="qDivMain"
        qDivMain.appendChild(qDiv)
        qDivMain.appendChild(oDiv)
        filedToPopulate.appendChild(qDivMain)
    }
    if (((greetingName=='АДМИН') || (localStorage.getItem('checked')==1))&&
        (localStorage.getItem('blanc')!=1)){
        let scorePanel=document.createElement('div');
        scorePanel.id='scorePanel';
        let fillPanel=document.createElement('div');
        fillPanel.id='fillPanel';
        document.body.appendChild(scorePanel);
        document.body.appendChild(fillPanel);
        checkingTesting ();
        
    }else{
        let btn=document.createElement('button');
        btn.type='button';
        btn.className='btn';
        btn.id='btn';
        btn.innerText='Завершить и отправить';
            btn.addEventListener('click', ()=> {
                submitting();
            });
        document.getElementsByClassName('container')[0].appendChild(btn);
    }
}


function submitting(){
    document.querySelector('.loader').classList.remove('loader--hidden');
    formatDate();
    fetch(form.action, {
      method : "POST",
      body: new FormData(form),
  }).then(
      response => response.json()  
  ).then((html) => {
    document.querySelector('.loader').classList.add('loader--hidden');
    document.body.removeChild(document.querySelector('.loader'));
    setTimeout (()=> {
      alert ('Ответы отправлены. Можно закрывать страницу.')
    }, 900);
  });
  document.getElementById('btn').style.setProperty('display','none');
}



function formatDate () {
    var now = new Date();
    var day = now.getDate();
    var month = now.getMonth() + 1;
    var year = now.getFullYear();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();  
  
    day = day<10? '0'+day: day;
    month = month<10? '0'+month: month;
    hour = hour<10? '0'+hour: hour;
    minute = minute<10? '0'+minute: minute;
    second = second<10? '0'+second: second;
  
    document.getElementsByName('data[date]')[0].value = day + "/" + month + "/" + year + ' ' + hour + ':' + minute + ':' + second ;
};

function checkingTesting () {
    document.getElementsByName('data[usrName]')[0].value=localStorage.getItem('student')
    document.getElementsByName('data[studEvent]')[0].value = localStorage.getItem('evtstu');
    document.getElementsByName('data[date]')[0].value=localStorage.getItem('dtfill')
    
    async function getData() {
        const response = await fetch(url);
        const data = await response.json();
        let dataArray = Array.from(data);
        var dataArrayUsr, dataArrayAdm;
        
        for (i = 0; i < dataArray.length; i++) {
        
        if (dataArray[i].usrName == localStorage.getItem('student') && 
        dataArray[i].date == localStorage.getItem('dtfill') && 
        dataArray[i].studEvent == localStorage.getItem('evtstu')) {
            dataArrayUsr = Object.entries(dataArray[i]);
        };
        if (dataArray[i].usrName == 'АДМИН' && 
        dataArray[i].studEvent == localStorage.getItem('evtstu')) {
            dataArrayAdm = Object.entries(dataArray[i]); 
        };
        };
        var c=0;
        var radioId;
        var wrongRadioId;
        var score=0;
        var empty=0;
        for (y = 5; y < 25; y++) {
            for (r in x[c].a){
                if (x[c].a[r]==dataArrayAdm[y][1])
                radioId=`${c}/${r}`
            }
            document.getElementById(radioId).checked=true;
            if (dataArrayUsr[y][1]!=dataArrayAdm[y][1]){
                for (r in x[c].a){
                    if (x[c].a[r]==dataArrayUsr[y][1])
                    score++;
                    wrongRadioId=`${c}/${r}`;
                }
                document.getElementById(wrongRadioId).parentElement.classList.add('wrong');
            };
            if (dataArrayUsr[y][1]==''){
                empty++;
            }
            c++;
        };
        document.getElementById('scorePanel').textContent=`Правильно: ${20-score}/20 = ${roundingSecond((20-score)/20,2)*100}%`;
        document.getElementById('fillPanel').textContent=`Отвечено: ${20-empty}/20 = ${roundingSecond((20-empty)/20,2)*100}%`;
        };
    getData();
};

function roundingSecond (numX, digit) {
    if (numX != "") {
      var numY = ((numX*100)/100).toFixed(digit);
      return numY;
    };
  };
