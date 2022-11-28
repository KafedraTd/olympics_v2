function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    var logins=[
    ['АМЕТОВ','5676','АМЕТОВ ЗАЛИМХАН АЙНЕДИНОВИЧ'],
    ['БЕКИРОВА','6725','БЕКИРОВА АНЖЕЛИКА ВАЛЕРЬЕВНА'],
    ['ГРИГОРЬЕВ','0390','ГРИГОРЬЕВ ДАНИЛ СЕРГЕЕВИЧ'],
    ['ИГНАТОВА','1521','ИГНАТОВА АЛЁНА ЕВГЕНЬЕВНА'],
    ['КОСТЮК','9687','КОСТЮК ПОЛИНА АНДРЕЕВНА'],
    ['ВАСИЛЬЕВ','9413','ВАСИЛЬЕВ НИКИТА СТЕФАНОВИЧ'],
    ['ИЗМАЙЛОВА','1455','ИЗМАЙЛОВА ЛИЛИЯ ВЛАДИМИРОВНА'],
    ['КУЛИКОВА','9460','КУЛИКОВА ЯНА ВЯЧЕСЛАВОВНА'],
    ['ЛЕВЧЕНКО','6612','ЛЕВЧЕНКО ВАЛЕНТИНА АЛЕКСАНДРОВНА'],
    ['ЛОБЗЕВА','3283','ЛОБЗЕВА ЕЛИЗАВЕТА АЛЕКСЕЕВНА'],
    ['ЛУГАНСКАЯ','3659','ЛУГАНСКАЯ ОЛЬГА АНДРЕЕВНА'],
    ['ПИЛИПОСЯН','9475','ПИЛИПОСЯН АЛИНА ЭДИКОВНА'],
    ['ПОДОЗЕРОВ','2066','ПОДОЗЕРОВ АЛЕКСАНДР ВИКТОРОВИЧ'],
    ['ДЖАВАХОВА','3086','ДЖАВАХОВА ЗОЯ АНАСТАСОВНА'],
    ['КАТЕНЕВ','3286','КАТЕНЕВ ВЛАДИСЛАВ РОМАНОВИЧ'],
    ['КУТЬКО','8546','КУТЬКО ЕКАТЕРИНА АНДРЕЕВНА'],
    ['НОВОСЕЛЬЦЕВА','4371','НОВОСЕЛЬЦЕВА МИЛЕНА МАКСИМОВНА'],
    ['ПАПАХЧАН','3723','ПАПАХЧАН АНТОН АШОТОВИЧ'],
    ['СААКОВА','7550','СААКОВА ИРИНА АРГЕНОВНА'],
    ['ЧУВИЛО','4291','ЧУВИЛО НИКОЛАЙ ОЛЕГОВИЧ'],
    ['АДМИН','0000','АДМИН']]
    
    
    const formCreate = document.getElementById('createAccount');
    const formLogin = document.getElementById('login');
    formLogin.addEventListener("submit", e => {
        e.preventDefault();
        
        var loginUsername = document.getElementById('loginUsername').value;
        var loginPassword = document.getElementById('loginPassword').value;

        if (!loginUsername || !loginPassword) {
            setFormMessage(loginForm, "error", "Введите данные");
        } else {
            for(i=0;i<logins.length;i++){
                if(loginUsername==logins[i][0]&&loginPassword==logins[i][1]){
                    transfering(logins[i][2]);
                    window.open('menu.html', '_self');
                    return
                }else {
                    setFormMessage(loginForm, "error", "Неверные данные");
                }
            }
    }
    });
    
    //код для авторизации в гугл-таблицах

    // var url = 'https://sheetdb.io/api/v1/35s7lj587xbgs';
    // formLogin.addEventListener("submit", e => {
    //     e.preventDefault();
        
    //     var loginUsername = document.getElementById('loginUsername').value;
    //     var loginPassword = document.getElementById('loginPassword').value;

    //     if (!loginUsername || !loginPassword) {
    //         setFormMessage(loginForm, "error", "Введите данные");
    //     } else {
    //     var recCount = 0;
    //     async function getData() {

            
    //         const response = await fetch(url);
    //         const data = await response.json();
    //         const loginData = data;
    //         var loginArray = Array.from(loginData);
    //         for (var i = 0; i<loginArray.length; i++) {
    //             var loginRecord = Object.entries(loginArray[i]);
    //             var usrName = loginRecord[0][1];
    //             let usrLogEm = loginRecord[1][1]
    //             if ((loginUsername == usrName) || (loginUsername == usrLogEm)) {
    //                 var usrPsw = loginRecord[2][1];
    //                 if (loginPassword == usrPsw) {
                        
    //                     transfering(usrName);
    //                     window.open('menu.html', '_self');
                        
    //                     return
    //                 } else {
    //                     setFormMessage(loginForm, "error", "Неверные данные");
    //                 }
    //             } else {
    //                 recCount++;
    //             }   
    //         }
    //         if (recCount == loginArray.length) {
    //             setFormMessage(loginForm, "error", "Такой аккаунт еще не создан");
    //         }    
    //     }
    //     getData();
    // } 
    // });

    // formCreate.addEventListener("submit", e => {
    //     e.preventDefault();

    //     let signupUsername = document.getElementById('signupUsername').value;
    //     let signupEmail = document.getElementById('signupEmail').value;
    //     let signupPassword = document.getElementById('signupPassword').value;
    //     let signupPasswordConfirm = document.getElementById('signupPasswordConfirm').value;

    //     if (!signupUsername || !signupEmail || !signupPassword || !signupPasswordConfirm) {
    //         setFormMessage(createAccountForm, "error", "Введите данные");
    //     } else if (signupPassword !== signupPasswordConfirm) {
    //         setFormMessage(createAccountForm, "error", "Пароль не подтвержден");
    //     } else if (emailTest (signupEmail)) {
    //         async function getDataCreate() {
    //         const res = await fetch(url);
    //         const dataCreate = await res.json();
    //         const createData = dataCreate;
    //         var createArray = Array.from(createData);
    //         let recCountCreate = 0;

    //         for (var i = 0; i<createArray.length; i++) {
    //             var createRecord = Object.entries(createArray[i]);
    //             var createName = createRecord[0][1];
    //             var usrEmail = createRecord[1][1];
                
    //             if ((signupUsername == createName)||(signupEmail == usrEmail)) {
    //                 setFormMessage(createAccountForm, "error", "Логин или почта уже использованы");
                    
    //             } else {
    //                 recCountCreate++;                    
    //             }

    //             if (recCountCreate == createArray.length) {
    //                 fetch(formCreate.action, {
    //                     method : "POST",
    //                     body: new FormData(document.getElementById("createAccount")),
    //                 }).then(
    //                     response => response.json()  
    //                 ).then((html) => {
    //                     window.open('menu.html', '_self');
    //                     transfering(signupUsername);
    //                 });
    //             }
    //         }
    //         }
    //         getDataCreate();
    //      } else {
    //         setFormMessage(createAccountForm, "error", "Неверный Email");
    //     }
    // });
    
    // function emailTest (signupEmail) {
    //     var re = /\S+@\S+\.\S+/;
    //     return re.test(signupEmail);
        
    // }
    

    // document.querySelectorAll(".form__input").forEach(inputElement => {
    //     inputElement.addEventListener("blur", e => {
    //         if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
    //             setInputError(inputElement, "Укажите полные ФИО!");
    //         }
    //     });

    //     inputElement.addEventListener("input", e => {
    //         clearInputError(inputElement);
    //     });
    // });
});


document.querySelectorAll('.blockTitle').forEach((el) => {
    el.addEventListener('click', () => {
        
        let content = el.nextElementSibling;
        if (content.style.maxHeight) {
            document.querySelectorAll('.blockText').forEach((el) => el.style.maxHeight = null);
        } else {
            document.querySelectorAll('.blockText').forEach((el) => el.style.maxHeight = null);
            content.style.maxHeight = content.scrollHeight + 'px';                   
        }
    })
});

var inputElements = document.querySelectorAll('input');

document.getElementById('loginUsername').addEventListener('focusout', ()=> {
    document.getElementById('loginUsername').value = document.getElementById('loginUsername').value.toUpperCase();
});
document.getElementById('signupUsername').addEventListener('focusout', ()=> {
    document.getElementById('signupUsername').value = document.getElementById('signupUsername').value.toUpperCase();
});
document.getElementById('signupEmail').addEventListener('focusout', ()=> {
    document.getElementById('signupEmail').value = document.getElementById('signupEmail').value.trim();
    document.getElementById('signupEmail').value = document.getElementById('signupEmail').value.toUpperCase();
});



function transfering (x) {
localStorage.clear();
localStorage.setItem('loginName', x);
}


function getTransfering () {
    var greetingName = localStorage.getItem('loginName');
    document.getElementById('greeting').innerText = "Добрый день, " + greetingName + "!";
}

//--------------------------------------------------------------------------------------------------------------------------

    