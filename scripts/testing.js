
const filedToPopulate=document.getElementsByClassName("subField")[0]
var form = document.getElementById('testing');
var fieldsToPost=['data[grafa1_1]','data[grafa1_2]','data[grafa1_3]','data[grafa2-1]','data[grafa2-2]',
'data[grafa2-3]','data[grafa2-4]','data[grafa2-5]','data[grafa2-6]','data[grafa2-7]','data[grafa2-8]',
'data[grafa2-9]','data[grafa2-10]','data[grafa2-11]','data[grafa2-12]','data[check2kt]','data[grafa3-1]',
'data[grafa3-2]','data[grafa4]','data[grafa5]']
var x=[
    {
        "q":"1.Руководитель Департамента внешней торговли Министерства финансов России с 1824 г. по 1835 г., сторонник умеренного протекционизма, в честь которого в 2012 году была учреждена именная медаль ФТС России:",
        "a": ['Бибиков Д.Г.','Булавин В.И.','Канкрин Е.Ф.','Менделеев Д.И.']
    },
    {
        "q":"2.Договор о Евразийском экономическом союзе был заключен:",
        "a": ['29 мая 2014 г.','1 января 2015 г.','11 апреля 2017 г.','1 января 2018 г.']
    },
    {
        "q":"3.В каком году Совет таможенного сотрудничества был переименован во Всемирную таможенную организацию?",
        "a": ['1983 г.','1989 г.','1994 г.','2000 г.']
    },
    {
        "q":"4.В какой графе декларации на товары указывается характер сделки?",
        "a": ['20','23','24','28']
    },
    {
        "q":"5.В 44 графе ДТ после кода вида документа через символ «/» указывается:",
        "a": ['номер документа','дата документа','символ N','код признака представления документа']
    },
    {
        "q":"6.Если в графе 19 ДТ стоит «1», то количество и номера контейнеров указываются в:",
        "a": ['графе 31','графе 40','графе 21','графе 44']
    },
    {
        "q":"7.Основное правило интерпретации 3б позволяет классифицировать особо не поименованные в ТН ВЭД товары:",
        "a": ['в соответствии с текстами товарных позиций','по основному материалу, из которого изготовлен товар','по сходству или тождественности с другими товарами','в соответствии с примечаниями и пояснениями к ТН ВЭД']
    },
    {
        "q":"8.Основное правило интерпретации, согласно которому необходимо руководствоваться текстами субпозиций и соответствующими примечаниями, - это:",
        "a": ['ОПИ 1','ОПИ 6','ОПИ 4','ОПИ 5б']
    },
    {
        "q":"9.Метод определения таможенной стоимости, предусматривающий калькуляцию расходов на производство и доставку товара до границы ЕАЭС, - это:",
        "a": ['второй метод','четвертый метод','пятый метод','шестой метод']
    },
    {
        "q":"10.Определите возможность предоставления преференции на соус соевый (код товара 2103100000), ввезенный в Россию из Китая:",
        "a": ['преференции не предоставляются','преференции предоставляются в виде снижения ставки ввозной таможенной пошлины на 25%','преференции предоставляются в виде снижения ставки ввозной таможенной пошлины на 75%','преференции предоставляются в виде полного освобождения от уплаты ввозной таможенной пошлины']
    },
    {
        "q":"11.Если сертификат происхождения выдан уполномоченным органом Румынии, то это сертификат формы:",
        "a": ['СТ-1','СТ-2','EAV','A']
    },
    {
        "q":"12.Пассажирский самолёт, выполняющий регулярный рейс Москва - Дубай, для таможенных целей рассматривается как:",
        "a": ['товар, подлежащий помещению под таможенную процедуру','припасы, неподлежащие помещению под таможенную процедуру','транспортное средство международной перевозки, не подлежащее помещению под таможенную процедуру','транспортное средство международной перевозки, подлежащее помещению под таможенную процедуру']
    },
    {
        "q":"13.Запрещена пересылка в международных почтовых отправлениях:",
        "a": ['игрушек','рекламной продукции','природных алмазов','звукозаписывающей аппаратуры']
    },
    {
        "q":"14.В отношении участников ВЭД, отнесенных к категории низкого уровня риска, субъектно-ориентированная модель системы управления рисками предусматривает преимущественной применение:",
        "a": ['документального и фактического контроля до выпуска товара','документального контроля до выпуска товара','контроля после выпуска товаров','фактического контроля до выпуска товара']
    },
    {
        "q":"15.Какое количество алкогольных напитков и сигарет разрешено ввозить на таможенную территорию ЕАЭС физическим лицам без уплаты таможенных платежей?",
        "a": ['2 литра и 300 штук соответственно','2 литра и 200 штук соответственно','3 литра и 200 штук соответственно','3 литра и 300 штук соответственно']
    },
    {
        "q":"16.Антидемпинговые пошлины:",
        "a": ['относятся к таможенным платежам налогового характера','относятся к таможенным платежам неналогового характера','не относятся к таможенным платежам','не относится к платежам, администрируемым таможенными органами']
    },
    {
        "q":"17.В случае ввоза товаров, при производстве которых прямо или косвенно использовались субсидии могут применяться:",
        "a": ['сезонные пошлины','антидемпинговые пошлины','компенсационные пошлины','комбинированные пошлины']
    },
    {
        "q":"18.Ставка НДС 10% может применяться при ввозе в Российскую Федерацию:",
        "a": ['автомобилей','моторных масел','печатных изданий','удобрений']
    },
    {
        "q":"19.Если в отношении декларируемых товаров предоставлена (предоставляется) отсрочка части платежа, в колонке «СП» графы 47 декларации на товары указывается код:",
        "a": ['ОП','ОЧ','УН','УР']
    },
    {
        "q":"20.При ставке таможенной пошлины 5%, но не менее 0,2€/кг, количестве товара 1000 кг и таможенной стоимости товара 278000 руб. размер таможенной пошлины составит (курс EUR/RUR=62,1250):",
        "a": ['12425 рублей','13900 рублей','26325 рублей','139000 рублей']
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